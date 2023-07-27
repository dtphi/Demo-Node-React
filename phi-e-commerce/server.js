const app = require('./src/app')
const { app: { port } } = require('./src/configs/config.mongodb')
const server = app.listen(port, () => {
  console.log(`E-commerce running on port ${port}`)
})

/** Comment process to running server node at status watching : node --watch server.js */
// process.on('SIGINT',() => {
//     server.close(() => {
//         console.log('Server closed');
//         /**
//          * You can notify the server closed.
//          */
//         //notify.send('SIGINT');
//         //process.exit(0);
//     });
// })
