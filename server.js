const express = require('express');
const funcRoutes = require('./routes/funcionario_routes')

const app = express();
const port = 3000;
app.use(express.json());
app.use('/api',funcRoutes)

app.listen(port, ()=>{
    console.log("servidor rodando na porta " + port + "!!!!")
})