const API_URL = 'http://localhost:3000/productos'; // Cambia el puerto si es necesario

// Obtener elementos del DOM
const productoForm = document.getElementById('productoForm');
const productosTable = document.getElementById('productosTable');
const productoId = document.getElementById('productoId');
const nombreProducto = document.getElementById('nombre_producto');
const tipoProducto = document.getElementById('tipo_producto');
const medidas = document.getElementById('medidas');
const precio = document.getElementById('precio');
const descripcion = document.getElementById('descripcion');
const cantidad = document.getElementById('cantidad');

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', cargarProductos);

// Manejar el envío del formulario
productoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const producto = {
        nombre_producto: nombreProducto.value,
        tipo_producto: tipoProducto.value,
        medidas: medidas.value,
        precio: parseFloat(precio.value),
        descripcion: descripcion.value,
        cantidad: parseInt(cantidad.value),
    };

    if (productoId.value) {
        // Actualizar producto
        await fetch(`${API_URL}/${productoId.value}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto),
        });
    } else {
        // Crear producto
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto),
        });
    }

    productoForm.reset();
    cargarProductos();
});

// Cargar productos desde la API
async function cargarProductos() {
    const res = await fetch(API_URL);
    const productos = await res.json();

    productosTable.innerHTML = '';
    productos.forEach((producto) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.nombre_producto}</td>
            <td>${producto.tipo_producto}</td>
            <td>${producto.medidas}</td>
            <td>${producto.precio}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.cantidad}</td>
            <td>
                <button onclick="editarProducto('${producto._id}')">Editar</button>
                <button onclick="eliminarProducto('${producto._id}')">Eliminar</button>
            </td>
        `;
        productosTable.appendChild(row);
    });
}

// Editar producto
async function editarProducto(id) {
    const res = await fetch(`${API_URL}/${id}`);
    const producto = await res.json();

    productoId.value = producto._id;
    nombreProducto.value = producto.nombre_producto;
    tipoProducto.value = producto.tipo_producto;
    medidas.value = producto.medidas;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
    cantidad.value = producto.cantidad;
}

// Eliminar producto
async function eliminarProducto(id) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        cargarProductos();
    }
}