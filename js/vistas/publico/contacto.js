export const VistaContacto = {
    plantilla: () => {
        return `
    <main id="contacto" class="container my-5 shadow bg-white p-4 p-md-5 rounded" style="max-width: 550px;">
        <h2 class="text-center mb-4 fw-bold text-dark">Formulario de contacto</h2>

        <form id="contactoForm" class="row g-3" novalidate>
            
            <div class="col-12">
                <label for="nombre" class="form-label fw-bold">Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Ej: Juan Pérez" required
                    pattern="^[a-zA-ZÁéíóúÁÉÍÓÚñÑ\s]{3,30}$">
                <div class="invalid-feedback">El nombre debe tener entre 3 y 30 caracteres (sin números).</div>
            </div>

            <div class="col-12">
                <label for="email" class="form-label fw-bold">Correo electrónico:</label>
                <input type="email" id="email" name="email" class="form-control" placeholder="usuario@correo.com" required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">
                <div class="invalid-feedback">Formato de email no válido.</div>
            </div>

            <div class="col-12">
                <label for="telefono" class="form-label fw-bold">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" class="form-control" placeholder="600123456" required 
                    pattern="^[6789]\d{8}$">
                <div class="invalid-feedback">Debe tener 9 dígitos y empezar por 6, 7, 8 o 9.</div>
            </div>

            <div class="col-12">
                <label for="asunto" class="form-label fw-bold">Asunto:</label>
                <input type="text" id="asunto" name="asunto" class="form-control" placeholder="Motivo de tu mensaje" required
                    pattern=".{5,50}">
                <div class="invalid-feedback">El asunto debe tener entre 5 y 50 caracteres.</div>
            </div>

            <div class="col-12">
                <label for="mensaje" class="form-label fw-bold">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" class="form-control" placeholder="Escribe aquí tu consulta..." required 
                    minlength="10" maxlength="500" style="height: 120px;"></textarea>
                <div class="invalid-feedback">Mínimo 10 caracteres.</div>
            </div>

            <div class="col-12 d-grid mt-4">
                <button type="submit" id="btnEnviar" class="btn btn-dark btn-lg fw-bold">Enviar mensaje</button>
            </div>

            <div id="formMensaje" class="d-none w-100 text-center"></div>
        </form>
    </main>
        `;
    },
    logica: () => {
        // Selección de elementos
        const formulario = document.querySelector("#contactoForm");
        const formMensaje = document.querySelector("#formMensaje");
        formulario?.addEventListener("submit", (e) => {
            e.preventDefault();
            // Al usar "formulario!" le decimos a TS: "Tranquilo, sé que existe"
            formulario.classList.add('was-validated');
            if (formulario.checkValidity()) {
                if (formMensaje) {
                    formMensaje.textContent = "¡Mensaje enviado con éxito!";
                    formMensaje.className = "alert alert-success mt-3 d-block";
                }
                formulario.reset();
                formulario.classList.remove('was-validated');
                setTimeout(() => {
                    formMensaje?.classList.replace("d-block", "d-none");
                }, 5000);
            }
            else {
                if (formMensaje) {
                    formMensaje.textContent = "Error: Por favor, revisa los campos marcados.";
                    formMensaje.className = "alert alert-danger mt-3 d-block";
                }
            }
        });
    }
};
