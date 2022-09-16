class Genero{
    constructor(id, descripcion){
        this.id = id;
        this.descripcion = descripcion;
    }
}

class TipoProducto{
    constructor(id, descripcion){
        this.id = id;
        this.descripcion = descripcion;
    }    
}

class Estilo{
    constructor(id, descripcion){
        this.id = id;
        this.descripcion = descripcion;
    }    
}

class Talle{
    constructor(id, descripcion){
        this.id = id;
        this.descripcion = descripcion;
    }    
}

class Color{
    constructor(id, nombre, valorHexa){
        this.id = id;
        this.nombre = nombre;
        this.valorHexa = valorHexa;
    }    
}

class Foto{
    constructor(id, url, tipo){
        this.id = id;
        this.url = url;
        this.tipo = tipo;
    }
}

class DetalleProducto{
    constructor(id,idProducto, idTalle, idColor, cantidad, idFoto){
        this.id = id;
        this.idProducto = idProducto;
        this.idTalle = idTalle;
        this.idColor = idColor;
        this.cantidad;
        this.idFoto = idFoto;
    }
}

class Producto{
    constructor(id, idGenero, idTipoProducto, idEstilo, nombre, rating, precio, descripcion, especificacion){
        this.id = id;
        this.idGenero = idGenero;
        this.idTipoProducto = idTipoProducto;
        this.idEstilo = idEstilo;
        this.nombre = nombre;
        this.rating = rating;
        this.precio = precio;
        this.descripcion = descripcion;
        this.especificacion = especificacion;
    }
}

const generos = [];
generos.push(new Genero(1,"Masculino"))
generos.push(new Genero(2,"Femenino"))

const estilos = [];
estilos.push(new Estilo(1,"Urbano"));
estilos.push(new Estilo(2,"Formal"));
estilos.push(new Estilo(3,"Deportivo"));

const tiposProducto = [];
tiposProducto.push(new TipoProducto(1,"Lentes"));
tiposProducto.push(new TipoProducto(2,"Sweters"));
tiposProducto.push(new TipoProducto(3,"Conjuntos"));

const talles = [];
talles.push(new Talle(1,"XS"));
talles.push(new Talle(2,"S"));
talles.push(new Talle(3,"M"));
talles.push(new Talle(4,"L"));
talles.push(new Talle(5,"XL"));
talles.push(new Talle(6,"XXL"));

const colores = [];
colores.push(new Color(1,"Rojo","#000000"));
colores.push(new Color(2,"Amarillo","#000000"));
colores.push(new Color(3,"Verde","#000000"));
colores.push(new Color(4,"Azul","#000000"));

const fotos = [];
fotos.push(new Foto(1,"assets/img/amino.jpg"));
fotos.push(new Foto(2,"assets/img/bike.jpg"));
fotos.push(new Foto(3,"assets/img/bikefija.jpg"));
fotos.push(new Foto(4,"assets/img/bolsa.jpg"));
fotos.push(new Foto(5,"assets/img/rolos.jpg"));
fotos.push(new Foto(6,"assets/img/proteina.jpg"));
fotos.push(new Foto(7,"assets/img/cuerda.jpg"));
fotos.push(new Foto(8,"assets/img/zapa1.jpg"));
fotos.push(new Foto(8,"assets/img/zapa2.jpg"));



const productos = [];

productos.push(new Producto(1,1,1,1,"Bicicleta MTB",4, 56000, "Bicicleta MTB", "27 velocidades"));
productos.push(new Producto(1,1,1,1,"Bicicleta Fija",4, 23000, "Bicicleta Fija", "Fija"));
productos.push(new Producto(1,1,1,1,"Zapatilla Roja",4, 56000, "Zapatilla Roja", "Running"));


let prod1 = new Producto();
prod1.id= 1;
prod1.idGenero= 1;
prod1.idTipoProducto= 1;
prod1.idEstilo= 1;
prod1.nombre= "Nombre1";
prod1.rating= 5;
prod1.precio= 4000;
prod1.descripcion= "descripcion1";
prod1.especificacion= "Especificacion1";

const dp = new DetalleProducto();
dp.id = 1;
dp.idProducto = 1;
dp.idTalle = "L";
dp.idColor = 1;
dp.idFoto = 1;

const dp1 = new DetalleProducto();
dp1.id = 1;
dp1.idProducto = 1;
dp1.idTalle = "XL";
dp1.idColor = 2;
dp1.idFoto = 3;

/* console.log(generos);
console.log(tiposProducto);
console.log(estilos);
console.log(colores);
console.log(fotos);
console.log(talles);


console.log(prod1);
console.log(dp);
console.log(dp1);
 */


