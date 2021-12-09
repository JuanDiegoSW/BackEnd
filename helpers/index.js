

const dbValidators = require('./db-validators');
const generarJWT   = require('./jwt');
const subirArchivo = require('./subir-archivo');


module.exports = {
    ...dbValidators,
    ...generarJWT,
    ...subirArchivo,
}