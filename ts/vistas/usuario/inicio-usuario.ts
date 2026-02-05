import { Usuario } from "../../nucleo/general.js";


export const VistaInicioUsuario = {
  plantilla: () => {
    const usuario = Usuario.obtenerUsuarioLogeado();
    const nombre = usuario?.nombre ?? "Nombre de Usuario";
    return `
<main class="container py-4">
  <div class="row g-4">
    <div class="col-lg-4">
      <div class="card shadow-sm">
        <div class="card-body text-center">
          <img
            src="../../imagenes/avatar.png"
            class="rounded-circle mb-3 img-fluid"
            style="max-width: 120px; height: auto; object-fit: cover;"
            alt="Avatar" />          <h5 class="card-title mb-1">${nombre}</h5>
          <p class="text-muted mb-3">@usuario · Nivel 12</p>
          <div class="d-grid gap-2">
            <button class="btn btn-dark">Editar perfil</button>
            <button class="btn btn-outline-dark">Ver logros</button>
          </div>
        </div>
      </div>

      <div class="card shadow-sm mt-3">
        <div class="card-header fw-semibold">Resumen</div>
        <div class="card-body">
          <div class="d-flex justify-content-between mb-2">
            <span>Partidas jugadas</span><span class="fw-bold">128</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Victorias</span><span class="fw-bold text-success">64</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Racha</span><span class="fw-bold">3</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Amigos</span><span class="fw-bold">27</span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div class="card shadow-sm mb-3">
        <div class="card-body d-flex align-items-center justify-content-between">
          <div>
            <h5 class="card-title mb-1">¡Bienvenido de nuevo!</h5>
            <p class="text-muted mb-0">Retoma tu última partida o únete a un torneo.</p>
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-dark">Continuar partida</button>
            <button class="btn btn-outline-dark">Buscar torneos</button>
          </div>
        </div>
      </div>

      <div class="card shadow-sm">
        <div class="card-header fw-semibold d-flex justify-content-between align-items-center">
          <span>Actividad reciente</span>
          <a href="#" class="small">Ver todo</a>
        </div>
        <div class="list-group list-group-flush">
          <div class="list-group-item d-flex align-items-start gap-3">
            <div class="flex-grow-1 text-start">
              <div class="fw-semibold mb-1">Gané en "Ajedrez Clásico"</div>
              <small class="text-muted">Hace 2 h</small>
            </div>
            <span class="badge bg-dark text-center px-3 flex-shrink-0 ms-auto" style="min-width: 96px;">+15 pts</span>
          </div>
          <div class="list-group-item d-flex align-items-start gap-3">
            <div class="flex-grow-1 text-start">
              <div class="fw-semibold mb-1">Nuevo logro: Estratega</div>
              <small class="text-muted">Hace 5 h</small>
            </div>
            <span class="badge bg-dark text-center px-3 flex-shrink-0 ms-auto" style="min-width: 96px;">Logro</span>
          </div>
          <div class="list-group-item d-flex align-items-start gap-3">
            <div class="flex-grow-1 text-start">
              <div class="fw-semibold mb-1">Invitaste a Ana</div>
              <small class="text-muted">Ayer</small>
            </div>
            <span class="badge bg-dark text-center px-3 flex-shrink-0 ms-auto" style="min-width: 96px;">Social</span>
          </div>
        </div>
      </div>

      <div class="card shadow-sm mt-3">
        <div class="card-header fw-semibold">Acciones rápidas</div>
        <div class="card-body d-flex flex-wrap gap-2">
          <button class="btn btn-outline-secondary">Crear sala</button>
          <button class="btn btn-outline-secondary">Invitar amigos</button>
          <button class="btn btn-outline-secondary">Ver ranking</button>
          <button class="btn btn-outline-secondary">Centro de ayuda</button>
        </div>
      </div>
    </div>
  </div>
</main>
`;
  },
  logica: () => {
    // Lógica específica para la vista de inicio de usuario (si es necesario)
  },
};