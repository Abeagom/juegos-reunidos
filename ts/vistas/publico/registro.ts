import { Usuario } from '../../nucleo/general.js';

export const VistaRegistro = {
    plantilla: () => {
        return `
    <main id="registro" class="container my-5 shadow bg-white p-4 p-md-5 rounded" style="max-width: 850px;">
        <h2 class="text-center mb-4 fw-bold">Registro de usuario</h2>

        <form id="registroForm" novalidate class="row g-3">
            
            <div class="col-md-6">
                <label for="nombreRegistro" class="form-label fw-bold">Nombre de usuario:</label>
                <input type="text" id="nombreRegistro" class="form-control" placeholder="Nombre de usuario">
                
                <div id="nombreValidaciones" class="d-none p-2 bg-light border rounded mt-2">
                    <small id="nombreEspacios" class="text-muted d-flex align-items-center gap-2">
                        <span class="material-icons fs-6">close</span> Sin espacios
                    </small>
                    <small id="nombreLongitud" class="text-muted d-flex align-items-center gap-2">
                        <span class="material-icons fs-6">close</span> Mínimo 3 caracteres
                    </small>
                    <small id="nombreFormato" class="text-muted d-flex align-items-center gap-2">
                        <span class="material-icons fs-6">close</span> Solo letras
                    </small>
                    <small id="nombreDisponible" class="text-muted d-flex align-items-center gap-2">
                        <span class="material-icons fs-6">close</span> Disponible
                    </small>
                </div>
                <small id="nombreVacio" class="text-danger fw-bold d-none mt-1">El nombre no puede estar vacío</small>
                <small id="nombreRequisitos" class="text-danger fw-bold d-none mt-1">El nombre no cumple los requisitos</small>
            </div>

            <div class="col-md-6">
                <label for="emailRegistro" class="form-label fw-bold">Email:</label>
                <input type="email" id="emailRegistro" class="form-control" placeholder="Email">
                <small id="emailVacio" class="text-danger fw-bold d-none mt-1">El email no puede estar vacío</small>
                <small id="emailNoValido" class="text-danger fw-bold d-none mt-1">El email introducido no es válido (usuario@dominio.com)</small>
            </div>

            <div class="col-md-6">
                <label for="contrasenaRegistro" class="form-label fw-bold">Contraseña:</label>
                <input type="password" id="contrasenaRegistro" class="form-control" placeholder="Contraseña">
                <div id="contrasenaValidaciones" class="d-none p-2 bg-light border rounded mt-2">
                    <small id="contrasenaLongitud" class="text-muted d-flex align-items-center gap-2">
                        <span class="material-icons fs-6">close</span> Mínimo 6 caracteres
                    </small>
                    <small id="contrasenaMayuscula" class="text-muted d-flex align-items-center gap-2">
                        <span class="material-icons fs-6">close</span> Una mayúscula
                    </small>
                    <small id="contrasenaNumero" class="text-muted d-flex align-items-center gap-2">
                        <span class="material-icons fs-6">close</span> Un número
                    </small>
                    <small id="contrasenaEspecial" class="text-muted d-flex align-items-center gap-2">
                        <span class="material-icons fs-6">close</span> Carácter especial (!@#$_%^&*...)
                    </small>
                </div>
                <small id="contrasenaVacia" class="text-danger fw-bold d-none mt-1">La contraseña no puede estar vacía</small>
                <small id="contrasenaRequisitos" class="text-danger fw-bold d-none mt-1">La contraseña no cumple los requisitos</small>
            </div>

            <div class="col-md-6">
                <label for="repetirContrasenaRegistro" class="form-label fw-bold">Repite tu contraseña:</label>
                <input type="password" id="repetirContrasenaRegistro" class="form-control" placeholder="Repite tu contraseña">
                <div id="repetirContrasenaValidaciones" class="d-none p-2 bg-light border rounded mt-2">
                    <small id="contrasenasIguales" class="text-muted d-flex align-items-center gap-2">
                        <span class="material-icons fs-6">close</span> Las contraseñas no coinciden
                    </small>
                </div>
                <small id="repetirContrasenaVacia" class="text-danger fw-bold d-none mt-1">Este campo no puede estar vacío</small>
                <small id="repetirContrasenaRequisitos" class="text-danger fw-bold d-none mt-1">Las contraseñas no coinciden</small>
            </div>

            <div class="col-md-4">
                <label for="fechaNacimientoRegistro" class="form-label fw-bold">Fecha de nacimiento:</label>
                <input type="date" id="fechaNacimientoRegistro" class="form-control">
                <small id="fechaNacimientoAnterior" class="text-danger fw-bold d-none mt-1">No puede ser anterior al 01/01/1900</small>
                <small id="fechaNacimientoPosterior" class="text-danger fw-bold d-none mt-1">No puede ser posterior a hoy</small>
                <small id="fechaNacimientoVacia" class="text-danger fw-bold d-none mt-1">La fecha no puede estar vacía</small>
            </div>

            <div class="col-md-4">
                <label for="telefonoRegistro" class="form-label fw-bold">Teléfono:</label>
                <input type="tel" id="telefonoRegistro" class="form-control" placeholder="Ej: 123456789">
                <small id="telefonoRequisitos" class="text-danger fw-bold d-none mt-1">Teléfono no válido</small>
                <small id="telefonoVacio" class="text-danger fw-bold d-none mt-1">El campo teléfono no puede estar vacío</small>
            </div>

            <div class="col-md-4">
                <label class="form-label fw-bold d-block">Sexo:</label>
                <div class="d-flex gap-3 pt-1">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexoRegistro" id="sexoH" value="masculino">
                        <label class="form-check-label" for="sexoH">Masculino</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexoRegistro" id="sexoM" value="femenino">
                        <label class="form-check-label" for="sexoM">Femenino</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexoRegistro" id="sexoO" value="otro">
                        <label class="form-check-label" for="sexoO">Otro</label>
                    </div>
                </div>
                <small id="sexoVacio" class="text-danger fw-bold d-none">Debe seleccionar una opción</small>
            </div>

            <div class="col-md-6">
                <label for="dispositivoRegistro" class="form-label fw-bold">Dispositivo principal:</label>
                <select id="dispositivoRegistro" class="form-select">
                    <option value="" disabled selected>Selecciona un dispositivo</option>
                    <option value="movil">Smartphone</option>
                    <option value="pc">Ordenador</option>
                    <option value="tablet">Tablet</option>
                </select>
                <small id="dispositivoVacio" class="text-danger fw-bold d-none mt-1">Debe seleccionar una opción</small>
            </div>

            <div class="col-md-6">
                <label for="cantidadJuegos" class="form-label fw-bold">¿Cuántos videojuegos tienes?</label>
                <input type="number" id="cantidadJuegos" class="form-control" placeholder="Ej: 15">
                <small id="juegosVacio" class="text-danger fw-bold d-none mt-1">Introduce una cantidad</small>
                <small id="juegosNoValido" class="text-danger fw-bold d-none mt-1">Debe ser entre 0 y 1000</small>
            </div>

            <div class="col-12">
                <label class="form-label fw-bold">Mis Aficiones (selecciona al menos 2):</label>
                <div class="row g-2 p-3 border rounded bg-light mx-0 shadow-sm">
                    <div class="col-6 col-sm-4">
                        <div class="form-check"><input class="form-check-input" type="checkbox" name="aficiones" value="musica" id="musica"><label class="form-check-label" for="musica">Música</label></div>
                    </div>
                    <div class="col-6 col-sm-4">
                        <div class="form-check"><input class="form-check-input" type="checkbox" name="aficiones" value="lectura" id="lectura"><label class="form-check-label" for="lectura">Lectura</label></div>
                    </div>
                    <div class="col-6 col-sm-4">
                        <div class="form-check"><input class="form-check-input" type="checkbox" name="aficiones" value="deportes" id="deportes"><label class="form-check-label" for="deportes">Deportes</label></div>
                    </div>
                    <div class="col-6 col-sm-4">
                        <div class="form-check"><input class="form-check-input" type="checkbox" name="aficiones" value="cine" id="cine"><label class="form-check-label" for="cine">Cine</label></div>
                    </div>
                    <div class="col-6 col-sm-4">
                        <div class="form-check"><input class="form-check-input" type="checkbox" name="aficiones" value="viajes" id="viajes"><label class="form-check-label" for="viajes">Viajes</label></div>
                    </div>
                    <div class="col-6 col-sm-4">
                        <div class="form-check"><input class="form-check-input" type="checkbox" name="aficiones" value="gaming" id="gaming"><label class="form-check-label" for="gaming">Gaming</label></div>
                    </div>
                </div>
                <small id="cantidadAficiones" class="text-danger fw-bold d-none mt-1">Selecciona al menos 2 aficiones</small>
            </div>

            <div class="col-12 mt-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="terminosRegistro">
                    <label class="form-check-label" for="terminosRegistro">
                        Acepto los términos y condiciones <a href="#" id="enlaceLeer" class="text-primary text-decoration-none">Leer</a>
                    </label>
                </div>
                <small id="terminosVacio" class="text-danger fw-bold d-none mt-1">Debe marcar esta casilla para continuar</small>
            </div>

            <div class="col-12 d-grid mt-4">
                <button type="submit" class="btn btn-dark btn-lg fw-bold py-3 shadow-sm">Registrarse</button>
            </div>

            <div class="col-12">
                <div id="formMensaje" class="mt-3"></div>
            </div>
        </form>
    </main>

    <div class="modal fade" id="modalTerminos" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h2 class="modal-title h5 fw-bold">Términos y Condiciones</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-secondary">
                    <p>Al registrarte en nuestra plataforma, aceptas que tratemos tus datos con cariño y respeto. No compartiremos tu información con terceros y te comprometes a hacer un uso lícito de la web.</p>
                    <p>Prometemos no enviarte spam y tú prometes no intentar hackearnos. ¡Todos ganamos!</p>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" id="btnAceptarModal" class="btn btn-dark px-4" data-bs-dismiss="modal">Acepto</button>
                </div>
            </div>
        </div>
    </div>
        `;
    },

    logica: () => {

        /* ============================================================================
         *  SELECCIÓN DE ELEMENTOS DEL DOM
         * ----------------------------------------------------------------------------
         *  En esta sección se obtienen y tipan todas las referencias a los elementos
         *  del DOM necesarios para el funcionamiento del formulario de registro.
         * ============================================================================
         */

        // Formulario
        const registroForm = document.querySelector<HTMLFormElement>("#registroForm");

        // Inputs
        const nombreInput = document.querySelector<HTMLInputElement>("#nombreRegistro");
        const nombreValidaciones = document.querySelector<HTMLDivElement>("#nombreValidaciones");
        const contrasenaInput = document.querySelector<HTMLInputElement>("#contrasenaRegistro");
        const contrasenaValidaciones = document.querySelector<HTMLDivElement>("#contrasenaValidaciones");
        const repetirContrasenaInput = document.querySelector<HTMLInputElement>("#repetirContrasenaRegistro");
        const repetirContrasenaValidaciones = document.querySelector<HTMLDivElement>("#repetirContrasenaValidaciones");
        const emailInput = document.querySelector<HTMLInputElement>("#emailRegistro");
        const fechaNacimientoInput = document.querySelector<HTMLInputElement>("#fechaNacimientoRegistro");
        const telefonoInput = document.querySelector<HTMLInputElement>("#telefonoRegistro");
        const radiosSexo = document.querySelectorAll<HTMLInputElement>('input[name="sexoRegistro"]');
        const dispositivoSelect = document.querySelector<HTMLSelectElement>("#dispositivoRegistro");
        const checkboxAficiones = document.querySelectorAll<HTMLInputElement>('input[name="aficiones"]');
        const juegosInput = document.querySelector<HTMLInputElement>("#cantidadJuegos");
        const modal = document.querySelector<HTMLElement>("#modalTerminos");
        const enlaceLeer = document.querySelector<HTMLElement>("#enlaceLeer"); // El link "Leer"
        const btnAceptarModal = document.querySelector<HTMLButtonElement>("#btnAceptarModal");
        const terminosCheckbox = document.querySelector<HTMLInputElement>("#terminosRegistro");
        const formMensaje = document.querySelector<HTMLDivElement>("#formMensaje");

        /* ============================================================================
         *  LISTENERS DE VALIDACIÓN EN TIEMPO REAL
         * ----------------------------------------------------------------------------
         *  Este bloque agrupa todos los event listeners asociados al formulario de
         *  registro, encargados de realizar validaciones dinámicas mientras el usuario 
         *  interactúa con los distintos campos del formulario
         * ============================================================================
         */

        // VALIDACIÓN EN TIEMPO REAL DEL CAMPO NOMBRE
        nombreInput?.addEventListener("focus", function () {
            nombreValidaciones?.classList.remove('d-none'); // Quita el oculto de Bootstrap
        });

        nombreInput?.addEventListener("blur", function () {
            nombreValidaciones?.classList.add('d-none');
        });

        nombreInput?.addEventListener("input", function () {
            const valor = nombreInput.value;
            mostrarError("nombreVacio", false);
            mostrarError("nombreRequisitos", false);

            // Condición 1: Longitud
            const longitudOk = tieneLongitudMinima(valor, 3);
            actualizarEstadoValidacion("nombreLongitud", longitudOk);

            // Condición 2: Espacios 
            const espaciosOk = noTieneEspacios(valor) && valor.length > 0;
            actualizarEstadoValidacion("nombreEspacios", espaciosOk);

            // Condición 3: Letras
            const formatoOk = sonSoloLetras(valor) && valor.length > 0;
            actualizarEstadoValidacion("nombreFormato", formatoOk);

            // Condición 4: Validación de disponibilidad
            const disponibleOk = comprobarDisponibilidadNombre(valor) && valor.length > 0;
            actualizarEstadoValidacion("nombreDisponible", disponibleOk);
        });

        // VALIDACIÓN EN TIEMPO REAL DEL CAMPO CONTRASEÑA (también actualiza repetir contraseña)
        contrasenaInput?.addEventListener("focus", function () {
            contrasenaValidaciones.classList.remove('d-none');
        });

        contrasenaInput?.addEventListener("blur", function () {
            contrasenaValidaciones.classList.add('d-none');
        });

        contrasenaInput?.addEventListener("input", function () {
            const valor = contrasenaInput.value;
            mostrarError("contrasenaVacia", false);
            mostrarError("contrasenaRequisitos", false);

            // Condición 1: Longitud
            const longitudOk = tieneLongitudMinima(valor, 6);
            actualizarEstadoValidacion("contrasenaLongitud", longitudOk);

            // Condición 2: Una mayúscula 
            const mayusculaOK = tieneMayuscula(valor);
            actualizarEstadoValidacion("contrasenaMayuscula", mayusculaOK);

            // Condición 3: Algún número
            const numeroOk = tieneNumero(valor);
            actualizarEstadoValidacion("contrasenaNumero", numeroOk);

            // Condición 4: Algún caracter especial
            const especialOk = tieneCaracterEspecial(valor);
            actualizarEstadoValidacion("contrasenaEspecial", especialOk);

            // Actualizar repetir contraseña:
            const valor2 = repetirContrasenaInput?.value || "";
            actualizarEstadoValidacion("contrasenasIguales", coinciden(valor, valor2) && valor2 !== "");
        });

        // VALIDACIÓN EN TIEMPO REAL DEL CAMPO REPETIR CONTRASEÑA
        repetirContrasenaInput?.addEventListener("focus", function () {
            repetirContrasenaValidaciones.classList.remove('d-none');
        });

        repetirContrasenaInput?.addEventListener("blur", function () {
            repetirContrasenaValidaciones.classList.add('d-none');
        });

        repetirContrasenaInput?.addEventListener("input", function () {
            const valor1 = contrasenaInput?.value || "";
            const valor2 = repetirContrasenaInput.value;
            mostrarError("repetirContrasenaVacia", false);
            mostrarError("repetirContrasenaRequisitos", false);

            // Condición 1: Son iguales
            const iguales = coinciden(valor1, valor2);
            actualizarEstadoValidacion("contrasenasIguales", iguales && valor1 !== "");
        });

        // LIMPIEZA DE ERRORES DEL SUBMIT EN EL CAMPO EMAIL
        emailInput?.addEventListener("input", function () {
            // Mientras escribe, ocultamos los errores de "vacio" o "no válido"
            mostrarError("emailVacio", false);
            mostrarError("emailNoValido", false);
        });

        // LIMPIEZA DE ERRORES DEL SUBMIT EN EL FECHANACIMIENTO
        fechaNacimientoInput?.addEventListener("input", function () {
            // En cuanto el usuario toca el calendario, ocultamos los errores
            mostrarError("fechaNacimientoVacia", false);
            mostrarError("fechaNacimientoAnterior", false);
            mostrarError("fechaNacimientoPosterior", false);
        });

        // VALIDACIÓN Y LIMPIEZA DE ERRORES DEL SUBMIT EN TELÉFONO
        telefonoInput?.addEventListener("input", function () {
            // 1. Filtro: Solo permite números (borra cualquier letra al instante)
            this.value = this.value.replace(/\D/g, "");

            // 2. Limpieza de errores
            mostrarError("telefonoVacio", false);
            mostrarError("telefonoRequisitos", false);
        });

        // LIMPIEZA DE ERRORES DEL SUBMIT EN SEXO
        radiosSexo.forEach(radio => {
            radio.addEventListener("change", function () {
                // Si el usuario selecciona cualquiera, quitamos el error
                mostrarError("sexoVacio", false);
            });
        });

        // LIMPIEZA DE ERRORES DEL SUBMIT EN EL SELECT DE DISPOSITIVOS
        dispositivoSelect?.addEventListener("change", function () {
            // En cuanto el valor cambie, ocultamos el error
            mostrarError("dispositivoVacio", false);
        });

        // LIMPIEZA DE ERRORES DEL SUBMIT EN EL CHECKBOX DE AFICIONES
        checkboxAficiones.forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                // Si al hacer click ya llegamos a 2, borramos el mensaje
                if (contarAficiones() >= 2) {
                    mostrarError("cantidadAficiones", false);
                }
            });
        });

        // LIMPIEZA DE ERRORES DEL SUBMIT EN NÚMERO DE JUEGOS
        juegosInput?.addEventListener("input", function () {
            mostrarError("juegosVacio", false);
            mostrarError("juegosNoValido", false);
        });

        // LIMPIEZA DE ERRORES DEL SUBMIT EN EL CHECKBOX DE TÉRMINOS Y CONDICIONES
        terminosCheckbox?.addEventListener("change", function () {
            if (this.checked) {
                mostrarError("terminosVacio", false);
            }
        });

        // ABRIR MODAL
        enlaceLeer?.addEventListener("click", (e) => {
            e.preventDefault();
            // En Bootstrap 5 no se usa .style.display, se añade la clase 'show' y se maneja el backdrop
            // Pero la forma más fácil es usar el activador de Bootstrap:
            const modalElement = document.getElementById('modalTerminos');
            if (modalElement) {
                modalElement.classList.add('show');
                modalElement.style.display = 'block';
                document.body.classList.add('modal-open');
            }
        });

        // CERRAR MODAL
        btnAceptarModal?.addEventListener("click", () => {
            const modalElement = document.getElementById('modalTerminos');
            if (modalElement) {
                modalElement.classList.remove('show');
                modalElement.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
            if (terminosCheckbox) {
                terminosCheckbox.checked = true;
                mostrarError("terminosVacio", false);
            }
        });


        /* ============================================================================
         *  LISTENER DE SUBMIT: VALIDACIÓN FINAL Y PROCESAMIENTO DEL FORMULARIO
         * ----------------------------------------------------------------------------
         *  Este bloque se ejecuta cuando el usuario intenta enviar el formulario de
         *  registro y se encarga de:
         *
         *  1. Prevenir el envío por defecto para poder validar todos los campos
         *  2. Validar todos los campos del formulario (nombre, contraseña, email, 
         *     fecha de nacimiento, teléfono, sexo, dispositivo, aficiones y términos)
         *  3. Mostrar los errores correspondientes si algún campo no es válido
         *  4. Crear un nuevo objeto usuario y actualizar el LocalStorage si todo es correcto
         *  5. Mostrar mensajes de éxito o error y redirigir al login tras registro
         * ============================================================================
         */

        registroForm?.addEventListener("submit", function (evento) {
            // Evitamos que la página se recargue
            evento.preventDefault();

            let formularioValido = true;

            // VALIDACIÓN DEL NOMBRE
            const nombreValor = nombreInput?.value || "";

            if (esVacio(nombreValor)) {
                mostrarError("nombreVacio", true);
                mostrarError("nombreRequisitos", false);
                formularioValido = false;
            } else if (!esNombreValido()) {
                mostrarError("nombreVacio", false);
                mostrarError("nombreRequisitos", true);
                formularioValido = false;
            } else {
                mostrarError("nombreVacio", false);
                mostrarError("nombreRequisitos", false);
            }

            // VALIDACIÓN DE LA CONTRASEÑA
            const contrasenaValor = contrasenaInput?.value || "";

            if (esVacio(contrasenaValor)) {
                mostrarError("contrasenaVacia", true);
                mostrarError("contrasenaRequisitos", false);
                formularioValido = false;
            } else if (!esContrasenaValida()) {
                mostrarError("contrasenaVacia", false);
                mostrarError("contrasenaRequisitos", true);
                formularioValido = false;
            } else {
                mostrarError("contrasenaVacia", false);
                mostrarError("contrasenaRequisitos", false);
            }

            // VALIDACIÓN DE REPETIR CONTRASEÑA
            const repetirValor = repetirContrasenaInput?.value || "";

            if (esVacio(repetirValor)) {
                // Caso: El campo está vacío
                mostrarError("repetirContrasenaVacia", true);
                mostrarError("repetirContrasenaRequisitos", false);
                formularioValido = false;
            } else if (!coinciden(contrasenaValor, repetirValor)) {
                // Caso: Tiene texto pero no es igual a la primera
                mostrarError("repetirContrasenaVacia", false);
                mostrarError("repetirContrasenaRequisitos", true);
                formularioValido = false;
            } else {
                // Caso: Todo correcto
                mostrarError("repetirContrasenaVacia", false);
                mostrarError("repetirContrasenaRequisitos", false);
            }

            // VALIDACIÓN DEL EMAIL
            const emailValor = emailInput?.value || "";

            if (esVacio(emailValor)) {
                mostrarError("emailVacio", true);
                mostrarError("emailNoValido", false);
                formularioValido = false;
            } else if (!esEmailValido(emailValor)) {
                mostrarError("emailVacio", false);
                mostrarError("emailNoValido", true);
                formularioValido = false;
            } else {
                mostrarError("emailVacio", false);
                mostrarError("emailNoValido", false);
            }

            // VALIDACIÓN DE FECHA DE NACIMIENTO
            const fechaValor = fechaNacimientoInput?.value || "";
            const formatoOK = tieneFormatoFechaCorrecto(fechaValor);

            if (esVacio(fechaValor) || !formatoOK) {
                mostrarError("fechaNacimientoVacia", true);
                mostrarError("fechaNacimientoAnterior", false);
                mostrarError("fechaNacimientoPosterior", false);
                formularioValido = false;
            } else if (esFechaAnteriorA1900(fechaValor)) {
                mostrarError("fechaNacimientoVacia", false);
                mostrarError("fechaNacimientoAnterior", true);
                mostrarError("fechaNacimientoPosterior", false);
                formularioValido = false;
            } else if (esFechaFutura(fechaValor)) {
                mostrarError("fechaNacimientoVacia", false);
                mostrarError("fechaNacimientoAnterior", false);
                mostrarError("fechaNacimientoPosterior", true);
                formularioValido = false;
            } else {
                // Todo correcto
                mostrarError("fechaNacimientoVacia", false);
                mostrarError("fechaNacimientoAnterior", false);
                mostrarError("fechaNacimientoPosterior", false);
            }

            // VALIDACIÓN DE TELÉFONO
            const telefonoValor = telefonoInput?.value || "";

            if (esVacio(telefonoValor)) {
                mostrarError("telefonoVacio", true);
                mostrarError("telefonoRequisitos", false);
                formularioValido = false;
            } else if (!esTelefonoValido(telefonoValor)) {
                mostrarError("telefonoVacio", false);
                mostrarError("telefonoRequisitos", true);
                formularioValido = false;
            } else {
                mostrarError("telefonoVacio", false);
                mostrarError("telefonoRequisitos", false);
            }

            // VALIDACIÓN DE SEXO
            const sexoValor = obtenerSexoSeleccionado();
            const sexosPermitidos = ["masculino", "femenino", "otro"];

            if (!sexoValor || !sexosPermitidos.includes(sexoValor)) {
                mostrarError("sexoVacio", true);
                formularioValido = false;
            } else {
                // Si hay algo seleccionado
                mostrarError("sexoVacio", false);
            }

            // VALIDACIÓN DE DISPOSITIVO
            const dispositivosPermitidos = ["movil", "pc", "tablet"];
            const dispositivoValor = dispositivoSelect?.value || "";

            if (esVacio(dispositivoValor) || !dispositivosPermitidos.includes(dispositivoValor)) {
                mostrarError("dispositivoVacio", true);
                formularioValido = false;
            } else {
                mostrarError("dispositivoVacio", false);
            }

            // VALIDACIÓN DE AFICIONES
            const aficionesPermitidas = ["musica", "lectura", "deportes", "cine", "viajes", "gaming"];

            // Obtenemos qué ha marcado el usuario realmente
            const checkboxesMarcados = document.querySelectorAll<HTMLInputElement>('input[name="aficiones"]:checked');

            // Convertimos esos elementos en una lista de sus valores (strings)
            const valoresSeleccionados = Array.from(checkboxesMarcados).map(cb => cb.value);

            // ¿Todos los valores marcados están en nuestra lista permitida?
            const todosValidos = valoresSeleccionados.every(valor =>
                aficionesPermitidas.some(permitida => permitida === valor)
            ); if (contarAficiones() < 2 || !todosValidos) {
                mostrarError("cantidadAficiones", true);
                formularioValido = false;
            } else {
                mostrarError("cantidadAficiones", false);
            }

            // VALIDACIÓN DE CANTIDAD DE JUEGOS
            const juegosValor: string = juegosInput?.value || "";

            if (esVacio(juegosValor)) {
                mostrarError("juegosVacio", true);
                mostrarError("juegosNoValido", false);
                formularioValido = false;
            }
            // Aquí aplicamos nuestra función de lógica pura en TS
            else if (!esCantidadJuegosValida(juegosValor)) {
                mostrarError("juegosVacio", false);
                mostrarError("juegosNoValido", true); // "Debe ser un número entero entre 0 y 1000"
                formularioValido = false;
            }
            else {
                mostrarError("juegosVacio", false);
                mostrarError("juegosNoValido", false);
            }

            // VALIDACIÓN DE TÉRMINOS
            if (!terminosCheckbox?.checked) {
                mostrarError("terminosVacio", true);
                formularioValido = false;
            } else {
                mostrarError("terminosVacio", false);
            }

            // SI TODO ESTÁ CORRECTO
            if (formularioValido) {

                // Para el campo SET de MySQL necesitamos strings separados por comas
                const aficionesMarcadas = Array.from(checkboxesMarcados)
                    .map(cb => cb.value.toUpperCase())
                    .join(',');

                // Preparamos el objeto para enviar al PHP
                // Usamos los nombres exactos de las columnas en la BD
                const datosRegistro = {
                    nombre: nombreInput!.value,
                    email: emailInput!.value,
                    contrasena: contrasenaInput!.value,
                    tipo: 'LOGEADO',
                    fecha_nacimiento: fechaNacimientoInput!.value,
                    telefono: telefonoInput!.value,
                    sexo: obtenerSexoSeleccionado()?.toUpperCase(),
                    dispositivo: dispositivoSelect!.value.toUpperCase(),
                    aficiones: aficionesMarcadas,
                    cantidad_juegos: parseInt(juegosInput!.value) || 0
                };

                Usuario.registrar(datosRegistro)
                    .done(function (respuesta) {
                        // "respuesta" es el JSON que envía el PHP
                        if (respuesta.exito) {
                            $("#formMensaje").attr("class", "alert alert-success mt-3 d-block")
                                .text("¡Registro guardado! Redirigiendo...");

                            setTimeout(function () {
                                window.location.hash = "#/login";
                            }, 2000);
                        } else {
                            $("#formMensaje").attr("class", "alert alert-danger mt-3 d-block")
                                .text("Error: " + respuesta.mensaje);
                        }
                    })
                    .fail(function () {
                        // Por si el servidor explota o el archivo PHP no existe
                        $("#formMensaje").attr("class", "alert alert-danger mt-3 d-block")
                            .text("No se pudo conectar con el servidor.");
                    });

                // SI ALGO NO ESTÁ CORRECTO
            } else {
                if (formMensaje) {
                    formMensaje.textContent = "El registro no ha podido realizarse. Revisa los errores.";
                    // Bootstrap: alert (caja), alert-danger (rojo), mt-3 (margen top), d-block (mostrar)
                    formMensaje.className = "alert alert-danger mt-3 d-block";
                }
            }
        });


        /* ============================================================================
         *  FUNCIONES VALIDADORAS
         * ----------------------------------------------------------------------------
         *  Este bloque contiene todas las funciones auxiliares utilizadas para:
         *
         *  1. Validar campos individuales del formulario (nombre, contraseña, email, 
         *     fecha de nacimiento, teléfono, sexo, dispositivo, aficiones y términos)
         *  2. Comprobar reglas específicas con expresiones regulares (longitud mínima, 
         *     caracteres, coincidencia de contraseñas, disponibilidad de nombre)
         *  3. Gestionar la visualización de errores y actualizar el estado visual 
         *     de los requisitos de validación en tiempo real
         * ============================================================================
         */

        function esVacio(texto: string): boolean {
            const textoLimpio = texto.trim();

            if (textoLimpio.length === 0) {
                return true;
            } else {
                return false;
            }
        }

        // Comprueba si llega a una longitud mínima
        function tieneLongitudMinima(texto: string, minimo: number): boolean {
            return texto.length >= minimo;
        }

        function noTieneEspacios(texto: string): boolean {
            // Si el texto tiene aunque sea un espacio, esto devuelve true
            const tieneEspacio = /\s/.test(texto);
            return !tieneEspacio;
        }

        // Comprueba si el texto contiene solo letras (incluyendo ñ y tildes)
        function sonSoloLetras(texto: string): boolean {
            const patron = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
            return patron.test(texto);
        }

        function mostrarError(idError: string, mostrar: boolean) {
            const elementoError = document.getElementById(idError);
            if (elementoError) {
                if (mostrar) {
                    elementoError.classList.remove("d-none");
                    elementoError.classList.add("d-block"); // Asegura que sea bloque
                } else {
                    elementoError.classList.remove("d-block");
                    elementoError.classList.add("d-none");
                }
            }
        }

        function comprobarDisponibilidadNombre(nombreABuscar: string): boolean {
            // Obtenemos los usuarios del localStorage
            const datosUsuarios = localStorage.getItem("usuarios");

            // Si no hay datos, significa que el nombre está disponible (porque no hay nadie)
            if (!datosUsuarios) {
                return true;
            }

            // Convertimos el texto del localStorage en un array de objetos
            const usuariosExistentes = JSON.parse(datosUsuarios);

            // Buscamos si algún usuario tiene ese nombre (ignorando mayúsculas/minúsculas)
            const existe = usuariosExistentes.some((u: any) => u.nombre.toLowerCase() === nombreABuscar.toLowerCase());

            // Si existe, devolvemos false (no está disponible)
            return !existe;
        }

        // Comprobar si tiene al menos un número
        function tieneNumero(texto: string): boolean {
            const patron = /\d/; // El símbolo \d busca cualquier dígito del 0 al 9
            return patron.test(texto);
        }

        // Comprobar si tiene al menos una letra Mayúscula
        function tieneMayuscula(texto: string): boolean {
            const patron = /[A-Z]/;
            return patron.test(texto);
        }

        // Comprobar si tiene un carácter especial
        function tieneCaracterEspecial(texto: string): boolean {
            // Definimos los símbolos que queremos permitir/buscar
            const patron = /[!@#$_%^&*(),.?":{}|<>]/;
            return patron.test(texto);
        }

        function coinciden(valor1: string, valor2: string): boolean {
            return valor1 === valor2;
        }

        function esNombreValido(): boolean {
            const valor = nombreInput?.value || "";

            // True si cumple todas las validaciones del nombre
            return !esVacio(valor) &&
                tieneLongitudMinima(valor, 3) &&
                noTieneEspacios(valor) &&
                sonSoloLetras(valor) &&
                comprobarDisponibilidadNombre(valor);
        }

        function esContrasenaValida(): boolean {
            const valor = contrasenaInput?.value || "";

            return !esVacio(valor) &&
                tieneLongitudMinima(valor, 6) &&
                tieneMayuscula(valor) &&
                tieneNumero(valor) &&
                tieneCaracterEspecial(valor);
        }

        function esEmailValido(email: string): boolean {
            // Este patrón busca: algo + @ + algo + . + algo
            const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return patron.test(email);
        }

        function tieneFormatoFechaCorrecto(fecha: string): boolean {
            // Comprueba exactamente el formato YYYY-MM-DD
            const patron = /^\d{4}-\d{2}-\d{2}$/;
            return patron.test(fecha);
        }

        function esFechaAnteriorA1900(fechaTexto: string): boolean {
            const fechaSeleccionada = new Date(fechaTexto);
            const fechaLimite = new Date("1900-01-01");
            return fechaSeleccionada < fechaLimite;
        }

        function esFechaFutura(fechaTexto: string): boolean {
            const fechaSeleccionada = new Date(fechaTexto);
            const fechaActual = new Date();
            return fechaSeleccionada > fechaActual;
        }

        function esTelefonoValido(telefono: string): boolean {
            // El patrón ^\d{9}$ significa: empezar, 9 dígitos exactamente, y terminar.
            const patron = /^\d{9}$/;
            return patron.test(telefono);
        }

        function obtenerSexoSeleccionado(): string | null {
            // Buscamos el input del grupo 'sexoRegistro' que esté marcado
            const seleccionado = document.querySelector<HTMLInputElement>('input[name="sexoRegistro"]:checked');

            // Si existe, devolvemos su valor (hombre, mujer, otro), si no, null
            return seleccionado ? seleccionado.value : null;
        }

        function contarAficiones(): number {
            // Buscamos los que están marcados en este momento
            const marcados = document.querySelectorAll('input[name="aficiones"]:checked');
            return marcados.length;
        }

        function esCantidadJuegosValida(valor: string): boolean {
            // Convertimos a número
            const cantidad: number = Number(valor);

            // Comprobaciones de seguridad (Lógica de negocio)
            const esNumero: boolean = !isNaN(cantidad);
            const esEntero: boolean = Number.isInteger(cantidad);
            const rangoValido: boolean = cantidad >= 0 && cantidad <= 1000;

            // Solo es válido si cumple TODAS las condiciones
            return esNumero && esEntero && rangoValido;
        }

        // Actualiza los estados de las validaciones en tiempo real
        function actualizarEstadoValidacion(idElemento: string, esValido: boolean) {
            const elemento = document.getElementById(idElemento);
            if (!elemento) return;

            const icono = elemento.querySelector(".material-icons");

            if (esValido) {
                // Estado: CUMPLIDO (Verde)
                elemento.classList.remove("text-muted", "text-danger"); // Quitamos gris y rojo por si acaso
                elemento.classList.add("text-success", "fw-bold");

                if (icono) {
                    icono.textContent = "check";
                    // Aseguramos que el icono también sea verde
                    icono.classList.remove("text-danger");
                    icono.classList.add("text-success");
                }
            } else {
                // Estado: ERROR / PENDIENTE (Rojo)
                elemento.classList.remove("text-success", "text-muted", "fw-bold");
                elemento.classList.add("text-danger"); // <--- Aquí la magia del rojo

                if (icono) {
                    icono.textContent = "close";
                    // Aseguramos que el icono también sea rojo
                    icono.classList.remove("text-success");
                    icono.classList.add("text-danger");
                }
            }
        }
    }
};