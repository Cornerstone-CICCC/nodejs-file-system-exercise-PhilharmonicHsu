"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = "images";
const filePath = path_1.default.join(__dirname, "./", directory);
const server = http_1.default.createServer((request, response) => {
    const { method } = request;
    const fileName = 'veryhappydog.jpg';
    if (request.url === '/view-image' && method === 'GET') {
        fs_1.default.readFile(`${filePath}/${fileName}`, (err, data) => {
            if (err) {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Error reading file!");
                return;
            }
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end(data); // Send text content
        });
        return;
    }
    response.writeHead(404, { 'Context-Type': 'text/plain' });
    response.end('Page not found');
    return;
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
