class Producto{
    constructor(id, nombre, rating, precio, descripcion, especificacion, foto){
        this.id = id;
        this.nombre = nombre;
        this.rating = rating;
        this.precio = precio;
        this.descripcion = descripcion;
        this.especificacion = especificacion;
        this.foto = foto;
    }
}


class ProductoCarrito{
    constructor(id, nombre, descripcion, precioUn, importe, cantidad, foto){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precioUn = precioUn;
        this.importe = importe;
        this.cantidad = cantidad;
        this.foto = foto;
    }
}

/* const fotos = [];
fotos.push(new Foto(1,"assets/img/amino.jpg"));
fotos.push(new Foto(2,"assets/img/bike.jpg"));
fotos.push(new Foto(3,"assets/img/bikefija.jpg"));
fotos.push(new Foto(4,"assets/img/bolsa.jpg"));
fotos.push(new Foto(5,"assets/img/rolos.jpg"));
fotos.push(new Foto(6,"assets/img/proteina.jpg"));
fotos.push(new Foto(7,"assets/img/cuerda.jpg"));
fotos.push(new Foto(8,"assets/img/zapa1.jpg"));
fotos.push(new Foto(8,"assets/img/zapa2.jpg"));
 */


const productos = [];

productos.push(new Producto(1,"Bicicleta MTB",4, 56000, "Bicicleta MTB", "27 velocidades","../assets/img/bike.jpeg"));
productos.push(new Producto(2,"Bicicleta Fija",4, 23000, "Bicicleta Fija", "Fija","../assets/img/bikefija.jpeg"));
productos.push(new Producto(3,"Zapatilla Roja",4, 15000, "Zapatilla Roja", "Running","../assets/img/zapa1.jpeg"));

