<?php
// 1. Cabecera para que el navegador sepa que respondemos con JSON
header('Content-Type: application/json');

// 2. Recogemos el "paquete" que envió jQuery (está en formato JSON bruto)
$json = file_get_contents('php://input');
$datos = json_decode($json, true);

// 3. Configuración de la base de datos
$servidor = "localhost";
$usuario  = "root";
$password = "";
$base_datos = "juegos_reunidos";

// Creamos la conexión
$conn = new mysqli($servidor, $usuario, $password, $base_datos);

// Comprobamos si la conexión falló
if ($conn->connect_error) {
    echo json_encode(["exito" => false, "mensaje" => "Error de conexión: " . $conn->connect_error]);
    exit;
}

// 4. Preparamos la consulta SQL
// Usamos "?" como marcadores de posición por seguridad
$sql = "INSERT INTO usuarios (nombre, email, contrasena, tipo, fecha_nacimiento, telefono, sexo, dispositivo, aficiones, cantidad_juegos) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

// 5. Vinculamos los datos que vienen del TypeScript ($datos) con los "?"
// La cadena "sssssssssi" significa: 9 strings y 1 entero al final
$stmt->bind_param("sssssssssi", 
    $datos['nombre'], 
    $datos['email'], 
    $datos['contrasena'], 
    $datos['tipo'], 
    $datos['fecha_nacimiento'], 
    $datos['telefono'], 
    $datos['sexo'], 
    $datos['dispositivo'], 
    $datos['aficiones'], 
    $datos['cantidad_juegos']
);

// 6. Ejecutamos y respondemos a jQuery
$respuesta = [];

try {
    if ($stmt->execute()) {
        $respuesta = ["exito" => true];
    } else {
        // Esto suele pasar si el email o nombre ya existen (campos UNIQUE)
        $respuesta = ["exito" => false, "mensaje" => "El usuario o email ya están registrados."];
    }
} catch (Exception $e) {
    $respuesta = ["exito" => false, "mensaje" => "Error en el servidor: " . $e->getMessage()];
}

// 7. Enviamos el resultado final de vuelta a la vista de registro
echo json_encode($respuesta);

// Cerramos todo
$stmt->close();
$conn->close();
?>