import { Usuario } from '../../nucleo/general.js';

export const ComponenteHeader = {
    plantilla: () => {
        return `
        <div class="bg-dark py-3">
            <h1 class="text-white text-center">Juegos Reunidos</h1>
            <nav id="menu" class="navbar navbar-expand-lg navbar-dark container">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item"><a href="#/" class="nav-link invitado">Inicio</a></li>
                        <li class="nav-item"><a href="#/inicio-usuario" class="nav-link logeado">Inicio</a></li>
                        <li class="nav-item"><a href="#/inicio-admin" class="nav-link admin">Inicio</a></li>
                        <li class="nav-item"><a href="#/tienda" class="nav-link invitado logeado">Tienda</a></li>

                        <li class="nav-item dropdown logeado admin">
                            <a href="#" class="nav-link dropdown-toggle logeado admin" data-bs-toggle="dropdown">
                                Juegos
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#/juegos/test">Test</a></li>
                                <li><a class="dropdown-item" href="#/juegos/sopa">Sopa de letras</a></li>
                                <li><a class="dropdown-item" href="#/juegos/calculadora">Calculadora</a></li>
                                <li><a class="dropdown-item" href="#/juegos/serpiente">Serpiente</a></li>
                            </ul>
                        </li>

                        <li class="nav-item"><a href="#/contacto" class="nav-link invitado logeado admin">Contacto</a></li>
                        <li class="nav-item"><a href="#/editar-perfil" class="nav-link logeado">Editar perfil</a></li>
                        
                        <li class="nav-item"><a href="#/admin/usuarios" class="nav-link admin">Gestión de usuarios</a></li>
                        <li class="nav-item"><a href="#/admin/tienda" class="nav-link admin">Gestión de tienda</a></li>
                    </ul>

                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a href="#/login" class="nav-link invitado">Iniciar sesión</a></li>
                        <li class="nav-item"><a href="#/registro" class="nav-link invitado">Registrarse</a></li>
                        <li class="nav-item"><span id="usuarioNombre" class="nav-link text-info logeado admin"></span></li>
                        <li class="nav-item"><a href="#" id="logout" class="nav-link text-danger logeado admin">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </div>`;
    },

    logica: () => {
        const usuario = Usuario.obtenerUsuarioLogeado();
        const tipo = usuario?.tipo || "invitado";
        
        // Control de visibilidad por clases (invitado, logeado, admin)
        const links = document.querySelectorAll("header .nav-link, header .dropdown-item, header .logeado, header .admin, header .invitado");
        
        links.forEach((link) => {
            const el = link as HTMLElement;
            // Si el link tiene la clase del tipo de usuario actual, se muestra
            if (el.classList.contains(tipo)) {
                el.style.setProperty("display", "inline-block", "important");
            } else {
                // Si tiene alguna de las otras etiquetas de rol pero no la nuestra, se oculta
                const roles = ["invitado", "logeado", "admin"];
                if (roles.some(rol => el.classList.contains(rol))) {
                    el.style.setProperty("display", "none", "important");
                }
            }
        });

        const spanNombre = document.getElementById("usuarioNombre");
        if (spanNombre && usuario) {
            spanNombre.textContent = usuario.nombre;
        }

        document.getElementById("logout")?.addEventListener("click", (e) => {
            e.preventDefault();
            Usuario.logout();
            window.location.reload(); // Recargamos para limpiar el estado
        });
    }
};