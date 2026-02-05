export const VistaTienda = {
    plantilla: () => {
        // 1. Definimos los datos de los juegos (esto podría venir de una Base de Datos)
        const juegos = [
            { nombre: "Parchís", precio: 20, img: "imagenes/parchis.jpg", desc: "Clásico juego de mesa familiar para divertirse en grupo." },
            { nombre: "Juego de la Oca", precio: 15, img: "imagenes/oca.jpg", desc: "Un juego de recorrido clásico para toda la familia." },
            { nombre: "Monopoly", precio: 30, img: "imagenes/monopoly.jpg", desc: "Compra, vende y hazte rico en este juego de estrategia financiera." },
            { nombre: "Trivial", precio: 25, img: "imagenes/trivial.jpg", desc: "Pon a prueba tus conocimientos en diferentes categorías." },
            { nombre: "Baraja española", precio: 5, img: "imagenes/baraja_española.jpg", desc: "Juego de cartas tradicional para múltiples juegos." },
            { nombre: "Cluedo", precio: 22, img: "imagenes/cluedo.jpg", desc: "Resuelve el misterio del asesinato en esta emocionante aventura." },
            { nombre: "Conecta 4", precio: 10, img: "imagenes/conecta_4.jpg", desc: "Juego de estrategia para alinear cuatro fichas antes que tu oponente." },
            { nombre: "Twister", precio: 18, img: "imagenes/twister.jpeg", desc: "Juego de habilidad y equilibrio para todas las edades." }
        ];

        // 2. Generamos el HTML de las cards dinámicamente
        let htmlJuegos = "";
        juegos.forEach(juego => {
            htmlJuegos += `
                <div class="col">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${juego.img}" class="card-img-top" alt="${juego.nombre}"
                            style="height: 230px; object-fit: cover;">
                        <div class="card-body text-center d-flex flex-column">
                            <h3 class="h5 card-title fw-bold">${juego.nombre}</h3>
                            <p class="card-text text-muted small flex-grow-1">${juego.desc}</p>
                            <p class="precio fw-bold text-dark my-3">Precio: ${juego.precio}€</p>
                            <button class="btn btn-dark w-100 btn-comprar" data-juego="${juego.nombre}">Comprar</button>
                        </div>
                    </div>
                </div>`;
        });

        // 3. Devolvemos el contenedor principal con los juegos dentro
        return `
        <main id="tienda" class="container-fluid bg-light py-5 flex-grow-1">
            <h2 class="text-center mb-5 text-dark fw-bold">Tienda de Juegos</h2>
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    ${htmlJuegos}
                </div>
            </div>
        </main>`;
    },

    logica: () => {
        console.log("Tienda cargada");
        
        // Ejemplo de lógica: botones de compra
        const botones = document.querySelectorAll(".btn-comprar");
        botones.forEach(boton => {
            boton.addEventListener("click", (e) => {
                const nombreJuego = (e.target as HTMLElement).getAttribute("data-juego");
                alert(`¡Has añadido ${nombreJuego} al carrito!`);
            });
        });
    }
};