import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);
const pageInitController = (socket) => {
  console.log(socket.id);
}

export default pageInitController;