const carrito = [];
let cantidadEnCarrito = 0;
pintarCarrito();


function pintarCarrito() {
    const divProductos = document.getElementById("divProductos");
    

    productos.forEach((p)=>{
    
        dibujaTarjeta(p);

    })

}


function dibujaTarjeta(p){
    const divTarjeta = document.createElement("div");
    divTarjeta.innerHTML = `
        <div class="col">
            <div class="card m-2" >
                <img src="${p.foto}" class="card-img-top" alt="Amino">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p>$${p.precio}</p>
                    <h5 class="card-title text-center">
                        <button type="button" class="boton_md" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Agregar
                        </button>
                    </h5>
                </div>
            </div>
        </div>                                        
    `;

    divProductos.appendChild(divTarjeta);

    divTarjeta.querySelector("button").addEventListener('click', ()=>{
        agregarAlCarrito(p);
    });

}

function agregarAlCarrito(p) {
    let enCarrito = carrito.find(pCarrito => pCarrito.id == p.id)
    if (enCarrito){
        enCarrito.cantidad++;

        console.log(enCarrito.importe, enCarrito.precioUn, enCarrito.cantidad);

        enCarrito.importe = enCarrito.precioUn * enCarrito.cantidad;
        cantidadEnCarrito++;
    }
    else
    {
        // controla la cantidad en stock antes de agregar al carrito
        cantidadEnCarrito++
        carrito.push(new ProductoCarrito(p.id , p.nombre, p.descripcion, p.precio, p.precio, 1, p.foto));        
    }

    
    renderizarCarrito();
      

}


function renderizarCarrito(){
   
    //aqui renderiza el carrito

    const divCarritoCompra = document.getElementById("carritoCompra");
    divCarritoCompra.innerHTML = '';
    carrito.forEach((c) => {
        const canvasCarrito = document.createElement("div");
        canvasCarrito.classList.add("col-12", "d-flex", "justify-content-around", "fs-6");
        canvasCarrito.innerHTML=`
    
        <div class="col-2 border-bottom">${c.cantidad}</div>
        <div class="col-6 border-bottom">${c.nombre}</div>
        <div class="col-2 border-bottom">$${c.importe}</div>
        <div class="col-2 border-bottom text-center "><button type="button" class="btn"><i class="bi bi-trash text-danger"></i></button></div>
    
        `;

        console.log("antes append");
        divCarritoCompra.appendChild(canvasCarrito);    
    })


    //Renderiza la cantidad mostrada en el boton ver carrito
    const cantidadEnCarritoHTML = document.getElementById("cantidadEnCarrito");
    cantidadEnCarritoHTML.textContent = cantidadEnCarrito; 

    //Renderiza la cantidad mostrada en el boton ver carrito
    const totalCarritoHTML = document.getElementById("totalCarrito");
    totalCarritoHTML.textContent = carrito.reduce( (acc, item) => acc + item.importe, 0 );
}

/* 





                <div class="col">
                    <div class="card m-2" >
                        <img src="../assets/img/amino.jpeg" class="card-img-top" alt="Amino">
                        <div class="card-body">
                            <h5 class="card-title">Amino Energy</h5>
                            <p>$ 1.200</p>
                            <h5 class="card-title text-center">
                                <button type="button" class="boton_md" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Agregar
                                </button>
                            </h5>
                        </div>
                    </div>
                </div>                                         */