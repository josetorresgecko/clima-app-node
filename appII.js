const argv = require('./config/yargsII').argv;
const clima = require('./clima/clima');
clima.getClimaCity(argv.direccion)
    .then(climaactual => {
        console.log(`Ciudad: ${climaactual.data.name} `);
        console.log(`Pais: ${climaactual.data.sys.country} `);
        console.log(`Temperatura: ${climaactual.data.main.temp} grados c`);
        console.log(`Sensación térmica: ${climaactual.data.main.feels_like} grados c`);
        console.log(`Temp. Min: ${climaactual.data.main.temp_min} grados c`);
        console.log(`Temp. Max: ${climaactual.data.main.temp_max} grados c`);
        console.log(`Humedad: ${climaactual.data.main.humidity} %c`);
    })
    .catch(error => {
        console.log(`error: ${error}`);
    });