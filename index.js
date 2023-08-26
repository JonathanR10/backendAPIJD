const express = require('express');
// applicacion de expreess
const app = express();

const mainRouting = require('./Routes');
//puerto
const PORT = 3000;
// middleWare, cada middleware se ejecuta en orden
app.use(express.json());
app.listen(PORT, () =>
{
    console.log('Listen  on PORT = ', PORT);
});

// manejador de ruta
app.get('/',
    (req, res) => {
        res.status(200).json({
                                messsage: 'Server is running correctly'
                            });
                  });



    //https://www.toptal.com/developers/gitignore/ 
    // usar git ignre para ignorar modulos no necesarios