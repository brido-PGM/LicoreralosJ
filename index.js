const exp = require('express');
require('dotenv').config();
const enrutador = require('/routes/router');

const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({extended:false}));
app.use('/Licoreraj',enrutador);


app.listen(process.env.PORT, () => {
    console.log("estamos en elpuerto" + process.env.PORT);
})

