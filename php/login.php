<?php
header('Content-Type: application/json');

// Leer los datos que vienen del JSON de TypeScript
$json = file_get_contents('php://input');
$datosRecibidos = json_decode($json, true);

$nombre = $datosRecibidos['nombre'] ?? '';
$contrasena = $datosRecibidos['contrasena'] ?? '';

$servername = "localhost";
$database = "juegos_reunidos";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    echo json_encode(["exito" => false, "error" => "Error de conexión"]);
    exit;
}

$stmt = $conn->prepare("SELECT id, nombre, contrasena, email, tipo, fecha_nacimiento, telefono, sexo, dispositivo, aficiones, cantidad_juegos FROM usuarios WHERE nombre = ?");
$stmt->bind_param("s", $nombre);
$stmt->execute();
$result = $stmt->get_result();

$rawdata = array();
$i = 0;

while($row = mysqli_fetch_assoc($result))
{
    $rawdata[$i] = $row;
    $i++;
}

// Lógica para que el Frontend entienda si el login fue correcto
if ($i > 0) {
    
    $hashBD = $rawdata[0]['contrasena'];

    if (!password_verify($contrasena, $hashBD)) {
            
        echo json_encode([
            "exito" => false, 
            "mensaje" => "Credenciales incorrectas"
            ]);
            exit;

    }else{
        unset($rawdata[0]['contrasena']); // Por seguridad, no enviamos el hash al frontend

        echo json_encode([
        "exito" => true, 
        "usuario" => $rawdata[0] // Enviamos el primer usuario encontrado
        ]);
    }

} else {
    echo json_encode([
        "exito" => false, 
        "mensaje" => "Credenciales incorrectas"
    ]);
}

$stmt->close();
$conn->close();
?>