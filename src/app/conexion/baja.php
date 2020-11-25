<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php");
$con=conectar();

mysqli_query($con, "DELETE FROM `articulos` where id=$_GET [id_articulo]");

class Result{}

$response= new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos borrado';


header('Content-Type: application/json');
echo json_encode($response);
?>