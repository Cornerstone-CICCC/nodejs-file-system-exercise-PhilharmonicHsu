import http from 'http'
import fs from 'fs'
import path from 'path'

const directory = "images"
const filePath = path.join(__dirname, "./", directory)

const server = http.createServer((request, response) => {
    const {method} = request;
    const fileName = 'veryhappydog.jpg'

    if (request.url === '/view-image' && method === 'GET') {
        fs.readFile(`${filePath}/${fileName}`, (err, data) => {
            if (err) {
                response.writeHead(500, { "Content-Type": "text/plain" })
                response.end("Error reading file!")

                return
            }
      
            response.writeHead(200, { "Content-Type": "text/plain" })
            response.end(data) // Send text content
        })

        return;
    }

    response.writeHead(404, {'Context-Type': 'text/plain'});
    response.end('Page not found');

    return;
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
});