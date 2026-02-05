<?php

$nombreUsuario = $_POST['nombreLogin'];
$contrasena = $_POST['contrasenaLogin'];

include 'conexion_bd.php';

$sql = "SELECT * FROM usuarios WHERE nombreUsuario = '$nombreUsuario' AND contrasena = '$contrasena'";
$result = $conn->query($sql);

$rawdata = array();

$i=0;

while($row = mysqli_fetch_assoc($result)) {

    $rawdata[$i] = $row;
    $i++;
}

$conn->close();
echo json_encode($rawdata);


?>