const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Descripción de la ciudad',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}