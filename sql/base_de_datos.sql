-- Script de creación de base de datos para Juegos Reunidos
-- Basado en la clase Usuario de general.ts

CREATE DATABASE IF NOT EXISTS juegos_reunidos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE juegos_reunidos;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- Campos obligatorios de la identidad
    nombre VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL, -- Se recomienda aumentar tamaño para hashes (MD5, SHA256, Bcrypt)
    tipo ENUM('admin', 'logeado', 'usuario') DEFAULT 'usuario',

    -- Datos personales (Opción A: Campos directos)
    fecha_nacimiento DATE NULL,
    telefono VARCHAR(20) NULL,
    
    -- Mapeo del Enum Sexo
    sexo ENUM('MASCULINO', 'FEMENINO', 'OTRO') NULL,

    -- Mapeo de Arrays (Dispositivos y Aficiones)
    -- Usamos SET de MySQL para permitir múltiples valores separados por coma
    dispositivos SET('MOVIL', 'PC', 'TABLET') NULL,
    aficiones SET('MUSICA', 'LECTURA', 'DEPORTES', 'CINE', 'VIAJES', 'GAMING') NULL,

    -- Estadísticas
    cantidad_juegos INT DEFAULT 0

    -- -- Metadatos
    -- fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- ultima_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar usuarios iniciales (datos de ejemplo basados en general.ts)
-- Nota: Las contraseñas aquí están en texto plano por compatibilidad con el código actual.
-- En producción, usa password_hash() de PHP.

INSERT INTO usuarios (nombre, email, contrasena, tipo, cantidad_juegos) VALUES 
('admin', 'admin@juegos.com', 'admin123', 'admin', 0),
('usuario', 'usuario@juegos.com', 'usuario123', 'logeado', 0);
