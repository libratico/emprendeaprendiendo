/**
 * Base de Datos de Artículos del Blog (Simulada)
 * Igual que los productos, puedes agregar un bloque nuevo {} para publicar un artículo.
 */
const articulosBlog = [
    {
        titulo: "Por que aprender a elaborar todo tipo de accesorios con resina",
        resumen: "Generarás altos ingresos emprendiendo tu propio negocio desarrollando tu propia marca de accesorios con resina.",
        imagen: "imagen/recina.jpg",
        fecha: "12 Marzo, 2026",
        link: "https://go.hotmart.com/G104092548I" // Aquí podrías poner un enlace a una página de artículo completo si quisieras luego
    },
    {
        titulo: "Por qué la Bisutería Creativa es un Negocio Altamente Rentable en 2026",
        resumen: "Analizamos los márgenes de ganancia y la demanda del mercado para entender por qué crear accesorios en casa es una gran idea.",
        imagen: "imagen/bisuteria.jpg",
        fecha: "12 Marzo, 2026",
        link: "https://go.hotmart.com/Y104075980Y"
    },
    {
        titulo: "Materiales Básicos para Hacer Moldes de Silicona",
        resumen: "Una guía completa con todos los materiales que necesitas comprar si estás empezando desde cero en el mundo de los moldes.",
        imagen: "imagen/silicona.jpg",
        fecha: "12 Marzo, 2026",
        link: "https://go.hotmart.com/H104733690V"
    },
    {
        titulo: "Por que comprar este curso",
        resumen: "Aprendes cómo ganar dinero como afiliado en Hotmart con estrategias claras, actualizadas y efectivas. En Rebeldes Digitales aprenderás paso a paso cómo iniciar en el mundo del marketing de afiliados sin necesidad de experiencia previa, y construir una fuente de ingresos online desde casa.",
        imagen: "imagen/rebeldes digitales.jpg",
        fecha: "15 Marzo, 2026",
        link: "https://go.hotmart.com/R104912472K"
    }
];

/**
 * Función principal para renderizar los artículos en la página del blog
 */
function cargarArticulos() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;

    blogGrid.innerHTML = '';

    articulosBlog.forEach(articulo => {
        const imagenDiv = articulo.imagen
            ? `<img src="${articulo.imagen}" alt="${articulo.titulo}" class="blog-img" />`
            : `<div style="display:flex; justify-content:center; align-items:center; height:100%; background:#e2e8f0; color:#666;">Sin imagen</div>`;

        const tarjetaHTML = `
            <article class="blog-card">
                <div class="blog-img-wrapper">
                    <a href="${articulo.link}">${imagenDiv}</a>
                </div>
                <div class="blog-body">
                    <span class="blog-date">${articulo.fecha}</span>
                    <h3 class="blog-title"><a href="${articulo.link}">${articulo.titulo}</a></h3>
                    <p class="blog-desc">${articulo.resumen}</p>
                    <a href="${articulo.link}" class="btn-read-more">Leer artículo completo &rarr;</a>
                </div>
            </article>
        `;

        blogGrid.insertAdjacentHTML('beforeend', tarjetaHTML);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarArticulos();

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
