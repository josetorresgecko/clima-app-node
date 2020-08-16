const axios = require('axios');
const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://ipapi.co/${encodeUrl}/json`,
        headers: { 'X-Custom-Header': 'foobar' }
    });

    const resp = await instance.get();
    if (resp.status == 200) {
        if (resp.data == undefined) {
            throw new Error(`no existen resultados para ${direccion}`);
        }
        const data = resp.data;
        const direccion = data.city;
        const lat = data.latitude;
        const lng = data.longitude;

        return {
            direccion,
            lat,
            lng
        }
    } else {
        console.log('ocurrio un error');
    }
};

module.exports = {
    getLugarLatLng
};