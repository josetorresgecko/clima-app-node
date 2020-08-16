const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Ip de ubicación',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}