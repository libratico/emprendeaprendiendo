/**
 * Base de Datos MOCK (Simulada)
 * Aquí está el array de productos de afiliados.
 * 
 * ESCALABILIDAD: Para agregar un nuevo producto, simplemente copia 
 * un bloque completo {} dentro del array y modifica los valores.
 */
const productosAfiliados = [
    {
        nombre: "El Rentable Negosio De Bisutería Creativa",
        descripcion: "Lanza tu Marca de Bisutería y empieza a generar ingresos desde casa",
        imagen: "imagen/bisuteria.jpg",
        link: "bisuteria.html"
    },
    {
        nombre: "DISEÑA Y CREA CON RESINA",
        descripcion: "¡Imagínate poder aprender a elaborar todo tipo de accesorios con resina y generar un ingreso extra desde tu casa!",
        imagen: "imagen/recina.jpg",
        link: "resina.html"
    },
    {
        nombre: "Crea tu moldes en silicon",
        descripcion: "¡Imagínate poder aprender a hacer todo tipo de moldes para velas, jabones, resina,porcelanicrón, yeso y venderlos por las redes sociales a miles de personas!",
        imagen: "imagen/silicona.jpg",
        link: "moldes-silicon.html"
    },
    {
        nombre: "Rebeldes Digitales - Gana Dinero como Afiliado",
        descripcion: "Este curso está diseñado para personas que quieren emprender en internet, generar ingresos pasivos, y tener libertad financiera utilizando plataformas como Hotmart, redes sociales y herramientas gratuitas.",
        imagen: "imagen/rebeldes digitales.jpg",
        link: "rebeldes-digitales.html"
    }
    
];

/**
 * Función principal para renderizar las tarjetas en la página
 */
function cargarProductos() {
    // Obtenemos el contenedor donde irán los productos
    const productGrid = document.getElementById('product-grid');
    
    // Verificamos que el contenedor exista en el HTML
    if (!productGrid) return;
    
    // Limpiamos el contenido por si hay algo previo
    productGrid.innerHTML = '';
    
    // Recorremos nuestro array de productos
    productosAfiliados.forEach(producto => {
        // Validamos si hay imagen o usamos un texto alternativo
        const imagenDiv = producto.imagen 
            ? `<img src="${producto.imagen}" alt="${producto.nombre}" class="card-img" />`
            : `<div style="display:flex; justify-content:center; align-items:center; height:100%; color:#666;">Sin imagen</div>`;

        // Creamos la estructura HTML de la tarjeta (Card)
        const tarjetaHTML = `
            <div class="card">
                <div class="card-img-wrapper">
                    ${imagenDiv}
                </div>
                <div class="card-body">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-desc">${producto.descripcion}</p>
                    <a href="${producto.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        Mas Informacion
                    </a>
                </div>
            </div>
        `;
        
        // Insertamos la tarjeta en el contenedor
        productGrid.insertAdjacentHTML('beforeend', tarjetaHTML);
    });
}

/**
 * Inicialización al cargar el documento
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar las tarjetas dinámicamente
    cargarProductos();
    
    // 2. Colocar el año actual automáticamente en el footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 3. Pequeña animación: Suavizado de enlaces ancla (smooth scroll) 
    // manejado vía CSS `scroll-behavior: smooth`, pero podemos agregar logs 
    // u otras interacciones aquí.
});
