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
// CLASE USUARIO
// ----------------------
export class Usuario {
    nombre: string;
    tipo: string;
    contrasena: string;
    email: string;
    fechaNacimiento: Date;
    telefono: string;
    sexo: Sexo;
    dispositivos: Dispositivo[];
    aficiones: Aficion[];
    cantidadJuegos: number;


    constructor(nombre: string, tipo: string, contrasena: string, email: string, fechaNacimiento: Date, telefono: string, sexo: Sexo, dispositivos: Dispositivo[], aficiones: Aficion[], cantidadJuegos: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.contrasena = contrasena;
        this.email = email;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.sexo = sexo;
        this.dispositivos = dispositivos;
        this.aficiones = aficiones;
        this.cantidadJuegos = cantidadJuegos;
    }

    /**
     * Realiza la petición al backend para iniciar sesión.
     * Es estático porque aún no tenemos una instancia del usuario cuando intentamos loguearnos.
     */

    static login(nombreUsuario: string, contrasena: string): boolean {

        //Ruta del archivo
        const ruta = "./php/login.php";

        // Crear objeto Ajax
        var xhr = new XMLHttpRequest();

        let resultado = false;

        xhr.open("POST", ruta, false);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(JSON.stringify({ nombre: nombreUsuario, contrasena: contrasena }));

        if (xhr.readyState == 4 && xhr.status == 200) {
            //Recibir respuesta del servidor en JSON
            var datos = JSON.parse(xhr.responseText);
            console.log(datos);

            if (datos.exito && datos.usuario) {
                // Guardamos en localStorage (sin la contraseña) para mantener la sesión
                localStorage.setItem("usuario", JSON.stringify(datos.usuario));
                resultado = true;
            }
        };
        return resultado;
    }


    /**
     * Cierra sesión quitando el usuario del localStorage.
     */
    static logout(): void {
        localStorage.removeItem("usuario");

        //Redirigimos al usuario a la vista de inicio
        window.location.hash = "#/";

    }

    // Obtiene el usuario logeado desde el localStorage, o null si no hay ninguno
    static obtenerUsuarioLogeado(): Usuario | null {
        const usuarioJSON = localStorage.getItem("usuario");
        if (!usuarioJSON) return null;

        try {
            const usuario = JSON.parse(usuarioJSON);
            // Aseguramos que se instancie correctamente con todos los campos
            return new Usuario(
                usuario.nombre,
                usuario.tipo,
                "", // No guardamos la contraseña en localStorage por seguridad
                usuario.email,
                new Date(usuario.fechaNacimiento),
                usuario.telefono,
                usuario.sexo,
                usuario.dispositivos,
                usuario.aficiones,
                usuario.cantidadJuegos,
            );
        } catch (e) {
            console.error("Error al leer usuario del storage", e);
            localStorage.removeItem("usuario");
            return null;
        }
    }
}

enum Sexo {
    MASCULINO,
    FEMENINO,
    OTRO
}

enum Dispositivo {
    MOVIL,
    PC,
    TABLET
}

enum Aficion {
    MUSICA,
    LECTURA,
    DEPORTES,
    CINE,
    VIAJES,
    GAMING
}

// ----------------------
// ENRUTADOR
// ----------------------
const enrutador = () => {
    const contenedor = document.getElementById("app");
    const ruta = window.location.hash;

    if (!contenedor) return;

    // Actualizamos la lógica del header (mostrar/ocultar botones) en cada cambio de ruta
    ComponenteHeader.logica();

    if (ruta === "#/" || ruta === "") {
        contenedor.innerHTML = VistaInicio.plantilla();
        VistaInicio.logica();
    } else if (ruta === "#/tienda") { // <--- AÑADE ESTO
        contenedor.innerHTML = VistaTienda.plantilla();
        VistaTienda.logica();
    } else if (ruta === "#/registro") {
        contenedor.innerHTML = VistaRegistro.plantilla();
        VistaRegistro.logica();
    } else if (ruta === "#/login") {
        contenedor.innerHTML = VistaLogin.plantilla();
        VistaLogin.logica();
    } else if (ruta === "#/contacto") {
        contenedor.innerHTML = VistaContacto.plantilla();
        VistaContacto.logica();
    } else if (ruta === "#/inicio-usuario") {
        const usuario = Usuario.obtenerUsuarioLogeado();
        if (!usuario) {
            window.location.hash = "#/";
            return;
        }
        contenedor.innerHTML = VistaInicioUsuario.plantilla();
        VistaInicioUsuario.logica();
    } else if (ruta === "#/editar-perfil") {
        const usuario = Usuario.obtenerUsuarioLogeado();
        if (!usuario) {
            window.location.hash = "#/";
            return;
        }
        contenedor.innerHTML = VistaEditarPerfil.plantilla();
        VistaEditarPerfil.logica();
    }
};

// ----------------------
// EJECUCIÓN INICIAL
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