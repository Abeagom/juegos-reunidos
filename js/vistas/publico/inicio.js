export const VistaInicio = {
    plantilla: () => {
        return `
            <h2 class="display-5 fw-bold mb-4 text-dark">Bienvenid@ a Juegos Reunidos</h2>

            <p class="lead mb-3" style="max-width: 700px;">
                ¡Nos alegra tenerte aquí! En Juegos Reunidos encontrarás una colección de juegos divertidos para pasar el
                tiempo, aprender y desafiar tu mente.
            </p>

            <p class="mb-5 text-muted" style="max-width: 700px;">
                Explora la tienda para descubrir nuevos juegos, prueba los juegos disponibles y, ¡diviértete!
            </p>

            <div class="botones-principal d-flex justify-content-center gap-3">
                <a href="#/registro" class="btn btn-dark btn-lg px-5 py-3 fw-bold shadow-sm">Regístrate</a>
                <a href="#/login" class="btn btn-secondary btn-lg px-5 py-3 fw-bold shadow-sm">Inicio de Sesión</a>
            </div>
        `;
    },
    logica: () => {
        console.log("Inicio cargado correctamente");
    }
};
