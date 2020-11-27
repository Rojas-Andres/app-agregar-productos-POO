//Creamos la clase producto
class Producto{
    constructor(nombre,precio,ano){
        this.nombre = nombre;
        this.precio = precio;
        this.ano = ano;

    }
}


class UI{
    

    add_product(producto){

        const listaProduct=document.getElementById('lista-productos')
        const element =document.createElement('div')
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre Producto</strong>: ${producto.nombre}
                    <strong>Precio Producto</strong>: ${producto.precio}
                    <strong>Año Producto</strong>: ${producto.ano}
                    <a href="#" class="btn btn-danger" name="borrar">Borrar</a>
                </div>
            </div>
        `;
        //Agreguele el elemento nuevo a la lista de productos
        listaProduct.appendChild(element);
    }

    borrarproducto(element){

        if(element.name ==="borrar"){
            //parentElement es el padre de borrar que seria la card-body y el padre de card-body es card y el padre es div y este
            //Es el que tenemos que eliminar porque estamos eliminando una tarjeta 
            console.log("imbecil")
            console.log(element.parentElement.parentElement.parentElement.remove())
        }

    }

    mostrarMensaje(mensaje,CssClass){
        const div=document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));
        //Mostrando en el DOM
    }
}



//Eventos del DOM 

// Cuando en el formulario se le aplique el submit que es enviar se va a ejecutar una funcion anonima,
// una funcii
document.getElementById('formulario-prod').addEventListener('submit',function (e){
    
    const nombre = document.getElementById('nombre-prod')//.value;
    const precio = document.getElementById('precio')//.value;

    const ano = document.getElementById('creacion-prod')//.value;

    console.log(nombre,precio,ano);
    const producto = new Producto(nombre.value,precio.value,ano.value)
    console.log(producto);

    nombre.value = "";
    //console.log("nombre",nombre)
    precio.value = "";

    //Creamos un objeto de la clase
    const ui=new UI()
    //Añadimos el producto a la lista de productos
    ui.add_product(producto)
    e.preventDefault();
});

document.getElementById('lista-productos').addEventListener('click',function(e){
    const ui = new UI();
    console.log(e.target)
    ui.borrarproducto(e.target);
})



