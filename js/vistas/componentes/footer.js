export const ComponenteFooter = {
    plantilla: () => {
        return `
        <footer class="footer-slim bg-dark text-white py-2 border-top border-secondary">
            <div class="container-fluid px-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
                
                <div class="footer-left small py-2 py-md-0">
                    &copy; 2025 Juegos Reunidos. Todos los derechos reservados.
                </div>
                
                <div class="footer-right d-flex align-items-center gap-3">
                    <span>Alberto Beas</span>
                    <a href="https://github.com/Abeagom" target="_blank" class="text-white">
                        <i class="fab fa-github fs-2 opacity-100-hover transition-opacity"></i>
                    </a>
                </div>

            </div>
        </footer>`;
    },
    logica: () => {
        // El footer es estático, así que de momento lo dejamos vacío
        console.log("Footer renderizado");
    }
};
