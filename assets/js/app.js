
const divProductos = document.getElementById("divProductos");

productos.forEach((p)=>{

    console.log("producto: " + p.foto);
    dibujaTarjeta(p);

})


function dibujaTarjeta(p){

    divProductos.innerHTML = `
        <div class="col">
            <div class="card m-2" >
                <img src="../${p.foto}" class="card-img-top" alt="Amino">
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