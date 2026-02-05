<?php
$conn = new mysqli("localhost", "root", "", "juegos_reunidos");
$campo = $_GET['campo']; // Qué queremos buscar (nombre o email)
$valor = $_GET['valor']; // El texto que ha escrito el usuario

// Usamos una consulta simple
$res = $conn->query("SELECT id FROM usuarios WHERE $campo = '$valor'");

echo json_encode(["ocupado" => $res->num_rows > 0]);
?>