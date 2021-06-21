import express from 'express';
import ProdsRouter from '../../actualizarprods/ruteo/prodsRouter.js'

function createServer() {
    const app = express();
    app.use(express.json());
    app.use('/actualizar', ProdsRouter);


    let server = null;

    return {
        conectar: (port) => {
            return new Promise((resolve, reject) => {
                if (server) {
                    reject(new Error("Servidor ya conectado"));
                } else {
                    server = app.listen(port, () => {
                        console.log(`Servidor conectado en puerto ${server.address().port}`);
                    });
                    resolve();
                }
                server.on('error', (err) => {
                    reject(err);
                });
            })
        },
        desconectar: () => {
            return new Promise((resolve, reject) => {
                server.close((err) => {
                    if (err) {
                        reject(err);
                    } else {
                        server = null;
                        console.log("Servidor desconectado");
                        resolve();
                    }
                })
            })
        }
    }
}

export {createServer}