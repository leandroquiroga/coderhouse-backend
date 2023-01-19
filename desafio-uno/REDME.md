# Desafio 1 - Clases 
* 1- Declarar una clase Usuariao

* 2- Hacer que Usuario cuente con los siguientes atributos
    - nombre: String
    - apellido: String
    - libros: Object[]
    - mascotas: String[]
  
  Aclaracion: Los valores de los atributos se deberan cargar a traves del constructor, al momento de crear las instancias 

* 3- Hacer que Usuario cuente con los siguientes metodos: 
    - getFullName(): String -> Retorna el completo del usuario. Utilizar template strings. 
    
    - addMascota(String): void -> Recibe el nombre de mascota y lo agrega al array de mascota
    
    - countMascota(): numbrer -> Retorna la cantidad de mas cotas que tiene el usuario. 
    
    - addBook(String, String): void -> Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto:     {
                    nombre: String, 
                    autor: String 
                }
    al array de libros. 
    
    - getBookNames(): String[]. Retorna un arraty con solo los nombres del array de libros del usuario. 

* 4- Crea un objeto llamado  unsuario con valores arbitrarios e invocar todos sus metodos.                     