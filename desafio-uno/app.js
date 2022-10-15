class Usuario {

  constructor(nombre, apellido){
    this.nombre   = nombre;
    this.apellido = apellido;
    this.libros   = [];
    this.mascotas = [];
  };


  getFullName(){
    return `Nombre completo del usuario: ${this.nombre} ${this.apellido}`
  };

  addMascota(mascota){
    this.mascotas.push(mascota);
  };

  countMascotas(){
    return `La cantidad de mascotas es ${this.mascotas.length}`
  };

  addBook(autor, nombre){
    this.libros.push({autor, nombre});
  };  

  getBookNames(){
    const nombreLibros = this.libros.map(libro => libro.nombre);
    
    return nombreLibros;
  };
}; 


const usuario_one   = new Usuario('Leandro', 'Quiroga');
const usuario_two   = new Usuario('Emanuel', 'Perez');
const usuario_three = new Usuario('Rodrigo', 'Ramirez');

// Obtenemos el nombre del usuario
let userName = usuario_one.getFullName();
console.log(userName);

// Agregamos una mascota 
usuario_one.addMascota('perro');
usuario_one.addMascota('gato');
usuario_one.addMascota('loro');

// Mostramos la cantidad de mascotas
let cantidadMascotas = usuario_one.countMascotas();
console.log(cantidadMascotas);

// Agregamos un libro con su nombre y author
usuario_one.addBook('Wayne W. Dyer', 'Tus zonas Erroneas');
usuario_one.addBook('James Clear', 'Habitos Atomicos');

// Obtenemos los nombres del los libros 
nombreLibros = usuario_one.getBookNames();
console.log(nombreLibros);

console.log('------------------------------------------');

// Obtenemos el nombre del usuario
userName = usuario_two.getFullName();
console.log(userName);

// Agregamos una mascota 
usuario_two.addMascota('gato');

// Mostramos la cantidad de mascotas
cantidadMascotas = usuario_two.countMascotas();
console.log(cantidadMascotas);

// Agregamos un libro con su nombre y author
usuario_two.addBook('Carl Newton', 'Enfocate');
usuario_two.addBook('Luis F. Soto', 'Mentalidad de titan');
usuario_two.addBook('Dan Sha Ri', 'Ordena tu Vida');

// Obtenemos los nombres del los libros 
nombreLibros = usuario_two.getBookNames();
console.log(nombreLibros);

console.log('------------------------------------------');

// Obtenemos el nombre del usuario
userName = usuario_three.getFullName();
console.log(userName);

// Agregamos una mascota 
usuario_three.addMascota('gato');
usuario_three.addMascota('loro');
usuario_three.addMascota('perro');
usuario_three.addMascota('hamster');

// Mostramos la cantidad de mascotas
cantidadMascotas = usuario_three.countMascotas();
console.log(cantidadMascotas);

// Agregamos un libro con su nombre y author
usuario_three.addBook('Julian Torres Gomez', 'Habitos Poderosos');

// Obtenemos los nombres del los libros 
nombreLibros = usuario_three.getBookNames();
console.log(nombreLibros);