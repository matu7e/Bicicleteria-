function cargarProductos() {
    var categoriaSeleccionada = document.getElementById("category").value;
    var productosContainer = document.getElementById("productos-container");

    // Simulando la carga de productos desde una fuente de datos
    var productos = obtenerProductosPorCategoria(categoriaSeleccionada);

    // Limpiando el contenedor antes de agregar nuevos productos
    productosContainer.innerHTML = "";

    // Mostrando los productos en el contenedor
    productos.forEach(function(producto) {
        var cardProd = document.createElement("div");
        cardProd.className = "card-prod";

        cardProd.innerHTML = `
            <div class="conten-img">
                <img class="product-img" src="${producto.imagen}" alt="">
            </div>
            <div class="desc-product-btn">
                <div class="desc-product">
                    <h4 class="product">${producto.nombre}</h4>
                    <h6 class="precio">$${producto.precio}</h6>
                </div>
                <div class="content-btn">
                    <a href="#" class="carrito"><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
        `;

        productosContainer.appendChild(cardProd);
    });
}

// Función de ejemplo para obtener productos según la categoría
function obtenerProductosPorCategoria(categoria) {
    // Simulando datos estáticos, debes reemplazar esto con la lógica real
    var productos = [];

    if (categoria === "herramientas") {
        productos = [
            { nombre: "Destornillador", precio: 10, imagen: "images/producto1.png" },
            { nombre: "Martillo", precio: 15, imagen: "images/producto2.png" },
            // Agrega más productos según la categoría
        ];
    } else if (categoria === "bicis") {
        productos = [
            { nombre: "Bici de montaña", precio: 500, imagen: "images/producto3.png" },
            { nombre: "Bici de carretera", precio: 700, imagen: "images/producto4.png" },
            // Agrega más productos según la categoría
        ];
    } else if (categoria === "repuestos") {
        productos = [
            { nombre: "Neumático", precio: 30, imagen: "images/producto5.png" },
            { nombre: "Freno", precio: 20, imagen: "images/producto6.png" },
            // Agrega más productos según la categoría
        ];
    } else if (categoria === "cascos") {
        productos = [
            { nombre: "Casco de ciclismo", precio: 40, imagen: "images/producto7.png" },
            { nombre: "Casco de moto", precio: 50, imagen: "images/producto8.png" },
            // Agrega más productos según la categoría
        ];
    }

    return productos;
}
