import { Usuario } from '../../nucleo/general.js';

export const VistaLogin = {
    plantilla: () => {
        return `
    <main id="login" class="container d-flex flex-column align-items-center justify-content-center min-vh-100">
        
        <div class="w-100 shadow bg-white p-4 p-md-5 rounded" style="max-width: 400px;">
            <h2 class="text-center mb-4 fw-bold text-dark">Inicio de sesión</h2>
            
            <form id="loginForm" novalidate class="d-flex flex-column gap-3">
                <div>
                    <label for="nombreLogin" class="form-label fw-semibold">Nombre de usuario</label>
                    <input type="text" id="nombreLogin" class="form-control py-2" placeholder="Tu usuario">
                </div>

                <div>
                    <label for="contrasenaLogin" class="form-label fw-semibold">Contraseña</label>
                    <input type="password" id="contrasenaLogin" class="form-control py-2" placeholder="••••••••">
                </div>

                <button type="submit" class="btn btn-dark btn-lg fw-bold mt-2 shadow-sm">
                    Iniciar sesión
                </button>

                <div id="mensajeError" class="d-none text-center small"></div>
            </form>
            
            <div class="text-center mt-4">
                <small class="text-muted">¿No tienes cuenta? <a href="registro.html" class="text-dark fw-bold text-decoration-none">Regístrate aquí</a></small>
            </div>
        </div>

    </main>
        `;
    },

    logica: () => {
        const formLogin = document.querySelector("#loginForm") as HTMLFormElement;
        const mensajeErrorDiv = document.querySelector<HTMLDivElement>("#mensajeError");
        const nombreInput = document.querySelector("#nombreLogin") as HTMLInputElement;
        const contrasenaInput = document.querySelector("#contrasenaLogin") as HTMLInputElement;

        // Escuchamos cuando el usuario escribe en los campos
        const inputs = [nombreInput, contrasenaInput];
        inputs.forEach(input => {
            input?.addEventListener("input", () => {
                ocultarError(); // Se borra el mensaje en cuanto el usuario pulsa una tecla
            });
        });

        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = nombreInput.value.trim();
            const contrasena = contrasenaInput.value.trim();

            if (!nombre || !contrasena) {
                mostrarError("Nombre y contraseña son obligatorios");
                return;
            }

            //Comprobamos el login con usuario y contraseña, si es correcto se redirige a la página de inicio correspondiente al tipo de usuario
            if (Usuario.login(nombre, contrasena)) {
                // Redirigimos según el tipo de usuario
                if (Usuario.obtenerUsuarioLogeado()?.tipo === "admin") {
                    window.location.hash = "#/inicio-admin";
                } else if (Usuario.obtenerUsuarioLogeado()?.tipo === "logeado") {
                    window.location.hash = "#/inicio-usuario";
                } else {
                    window.location.hash = "#/";
                }
            }else{
                mostrarError("El nombre de usuario o la contraseña no son correctos");
            }

                // const usuariosGuardados: Usuario[] = JSON.parse(
                //     localStorage.getItem("usuarios") || "[]"
                // );

                // let usuario: Usuario | undefined;

                // for (let u of usuariosGuardados) {
                //     if (u.nombre === nombre && u.contrasena === contrasena) {
                //         usuario = new Usuario(u.nombre, u.tipo, u.contrasena);
                //         break;
                //     }
                // }

                // if (usuario) {
                //     // 1. Guardamos la sesión en LocalStorage
                //     usuario.login();

                //     // 2. Redirigimos a la raíz de la SPA
                //     // Ya no importa si es admin o logeado, el enrutador lo decidirá
                //     window.location.hash = "#/inicio-usuario";

                //     // 3. Forzamos recarga para que general.ts detecte al nuevo usuario
                //     window.location.reload();
                // } else {
                //     mostrarError("El nombre de usuario o la contraseña no son correctos");
                // }

            });

        // Función para mostrar el error usando alertas de Bootstrap
        function mostrarError(mensaje: string) {
            if (mensajeErrorDiv) {
                mensajeErrorDiv.textContent = mensaje;
                // Quitamos 'd-none' (ocultar) y añadimos las clases de alerta de Bootstrap
                mensajeErrorDiv.classList.remove("d-none");
                mensajeErrorDiv.classList.add("alert", "alert-danger", "d-block", "mt-3");
            }
        }

        // Función para ocultar el error
        function ocultarError() {
            if (mensajeErrorDiv) {
                // Volvemos al estado oculto estándar de Bootstrap
                mensajeErrorDiv.classList.add("d-none");
                mensajeErrorDiv.classList.remove("d-block", "alert", "alert-danger");
            }
        }
    }
}