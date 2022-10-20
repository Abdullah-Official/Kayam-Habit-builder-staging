const http = require('http');
const app  = require('./app');
var httpServer = http.createServer(app);

const server  = httpServer.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port 5000`)
})