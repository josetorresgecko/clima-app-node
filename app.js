const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es ${temp.data.main.temp} grados C`;
    } catch {
        return `No se pudo determinar el clima de la ip : ${direccion}`;
    }
};
getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    });