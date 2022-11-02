import { Producto } from "./src/class/producto.js";
import { Server }  from "./src/class/server.js";

const server = new Server();
export const producto = new Producto();
server.listen();