const app = require('./src/app');
const PORT = 3055;
const server = app.listen(PORT, () => {
    console.log(`E-commerce running on port ${PORT}`);
});

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