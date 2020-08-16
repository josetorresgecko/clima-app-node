const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3f63802f12783fe78c409dc25c7ff65e&units=metric`);
    return resp;
};
const getClimaCity = async(city) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f63802f12783fe78c409dc25c7ff65e&units=metric`);
    if (resp.status == 200) {
        return resp;
    } else {
        throw new Error(`no existe datos de la ciudad: ${city}`);
    }

};
module.exports = {
    getClima,
    getClimaCity
};