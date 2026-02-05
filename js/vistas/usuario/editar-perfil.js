import { Usuario } from "../../nucleo/general.js";
export const VistaEditarPerfil = {
    plantilla: () => {
        const usuario = Usuario.obtenerUsuarioLogeado();
        const nombre = usuario?.nombre ?? "";
        return `
<main class="container py-4">
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-5">
      <div class="card shadow-sm">
        <div class="card-header fw-semibold">Editar perfil</div>
        <div class="card-body">
          <form id="form-editar-perfil" novalidate>
            <div class="mb-3">
              <label for="input-nombre" class="form-label">Nombre de usuario</label>
              <input type="text" class="form-control" id="input-nombre" name="nombre" value="${nombre}" required />
            </div>
            <div class="mb-3">
              <label for="input-contrasena" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="input-contrasena" name="contrasena" placeholder="EScribe tu nueva contraseña" required />
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-dark" id="btn-guardar">Guardar cambios</button>
            </div>
            <div id="mensaje-form" class="alert alert-danger py-2 px-3 mt-3 d-none" role="alert"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</main>
`;
    },
    logica: () => {
        const form = document.getElementById("form-editar-perfil");
        const inputNombre = document.getElementById("input-nombre");
        const inputContrasena = document.getElementById("input-contrasena");
        const mensaje = document.getElementById("mensaje-form");
        const mostrarMensaje = (texto, esError = true) => {
            if (!mensaje)
                return;
            mensaje.textContent = texto;
            mensaje.classList.toggle("alert-danger", esError);
            mensaje.classList.toggle("alert-success", !esError);
            mensaje.classList.toggle("d-none", !texto);
        };
        const usuarioActual = Usuario.obtenerUsuarioLogeado();
        if (!usuarioActual) {
            window.location.hash = "#/login";
            return;
        }
        form?.addEventListener("submit", (e) => {
            e.preventDefault();
            const nuevoNombre = inputNombre?.value.trim() ?? "";
            const nuevaContrasena = inputContrasena?.value.trim() ?? "";
            if (!nuevoNombre || !nuevaContrasena) {
                mostrarMensaje("Rellena nombre y contraseña");
                return;
            }
            const usuarios = JSON.parse(localStorage.getItem("usuarios") ?? "[]");
            const existeNombre = usuarios.some((u) => u.nombre === nuevoNombre && u.nombre !== usuarioActual.nombre);
            if (existeNombre) {
                mostrarMensaje("Ese nombre ya está en uso.");
                return;
            }
            const usuariosActualizados = usuarios.map((u) => u.nombre === usuarioActual.nombre
                ? { ...u, nombre: nuevoNombre, contrasena: nuevaContrasena }
                : u);
            localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
            localStorage.setItem("usuario", JSON.stringify({
                nombre: nuevoNombre,
                tipo: usuarioActual.tipo,
                contrasena: nuevaContrasena,
            }));
            mostrarMensaje("Datos actualizados", false);
            setTimeout(() => {
                window.location.hash = "#/inicio-usuario";
            }, 500);
        });
    },
};
