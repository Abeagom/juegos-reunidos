import { ComponenteHeader } from '../vistas/componentes/header.js';
import { ComponenteFooter } from '../vistas/componentes/footer.js';
import { VistaInicio } from '../vistas/publico/inicio.js';
import { VistaTienda } from '../vistas/publico/tienda.js';
import { VistaRegistro } from '../vistas/publico/registro.js';
import { VistaLogin } from '../vistas/publico/login.js';
import { VistaContacto } from '../vistas/publico/contacto.js';
import { VistaInicioUsuario } from '../vistas/usuario/inicio-usuario.js';
import { VistaEditarPerfil } from '../vistas/usuario/editar-perfil.js';
// ----------------------
// 1. CLASE USUARIO
// ----------------------
export class Usuario {
    nombre;
    tipo;
    contrasena;
    constructor(nombre, tipo, contrasena) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.contrasena = contrasena;
    }
    login() {
        localStorage.setItem("usuario", JSON.stringify(this));
        // Al usar SPA, el enrutador se encargará de refrescar la vista
    }
    logout() {
        localStorage.removeItem("usuario");
        window.location.hash = "#/";
        window.location.reload();
    }
    static obtenerUsuarioLogeado() {
        const usuarioJSON = localStorage.getItem("usuario");
        if (!usuarioJSON)
            return null;
        const usuario = JSON.parse(usuarioJSON);
        return new Usuario(usuario.nombre, usuario.tipo, usuario.contrasena);
    }
}
// ----------------------
// 2. INICIALIZACIÓN DE DATOS
// ----------------------
if (!localStorage.getItem("usuarios")) {
    const usuariosPredefinidos = [
        { nombre: "admin", tipo: "admin", contrasena: "admin123" },
        { nombre: "usuario", tipo: "logeado", contrasena: "usuario123" }
    ];
    localStorage.setItem("usuarios", JSON.stringify(usuariosPredefinidos));
}
// ----------------------
// 3. EL ENRUTADOR (MOTOR SPA)
// ----------------------
const enrutador = () => {
    const contenedor = document.getElementById("app");
    const ruta = window.location.hash;
    if (!contenedor)
        return;
    // Actualizamos la lógica del header (mostrar/ocultar botones) en cada cambio de ruta
    ComponenteHeader.logica();
    if (ruta === "#/" || ruta === "") {
        contenedor.innerHTML = VistaInicio.plantilla();
        VistaInicio.logica();
    }
    else if (ruta === "#/tienda") { // <--- AÑADE ESTO
        contenedor.innerHTML = VistaTienda.plantilla();
        VistaTienda.logica();
    }
    else if (ruta === "#/registro") {
        contenedor.innerHTML = VistaRegistro.plantilla();
        VistaRegistro.logica();
    }
    else if (ruta === "#/login") {
        contenedor.innerHTML = VistaLogin.plantilla();
        VistaLogin.logica();
    }
    else if (ruta === "#/contacto") {
        contenedor.innerHTML = VistaContacto.plantilla();
        VistaContacto.logica();
    }
    else if (ruta === "#/inicio-usuario") {
        const usuario = Usuario.obtenerUsuarioLogeado();
        if (!usuario) {
            window.location.hash = "#/";
            return;
        }
        contenedor.innerHTML = VistaInicioUsuario.plantilla();
        VistaInicioUsuario.logica();
    }
    else if (ruta === "#/editar-perfil") {
        const usuario = Usuario.obtenerUsuarioLogeado();
        if (!usuario) {
            window.location.hash = "#/";
            return;
        }
        contenedor.innerHTML = VistaEditarPerfil.plantilla();
        VistaEditarPerfil.logica();
    }
    // Aquí irás añadiendo: else if (ruta === "#/login") { ... }
};
// ----------------------
// 4. EJECUCIÓN INICIAL
// ----------------------
const iniciarApp = () => {
    // 1. Pintamos el Header
    const headerElem = document.querySelector("header");
    if (headerElem) {
        headerElem.innerHTML = ComponenteHeader.plantilla();
        ComponenteHeader.logica();
    }
    // 2. Pintamos el Footer
    const footerElem = document.querySelector("footer");
    if (footerElem) {
        footerElem.innerHTML = ComponenteFooter.plantilla();
        ComponenteFooter.logica();
    }
    // 3. Lanzamos el enrutador
    enrutador();
};
// Arrancamos la aplicación
iniciarApp();
// Escuchamos cambios en la URL (el hash)
window.addEventListener("hashchange", enrutador);
