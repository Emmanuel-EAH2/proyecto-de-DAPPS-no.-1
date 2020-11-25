<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json= file_get_contents('php://input');
$params = json_decode($json);
require("conexion.php");
$con=conectar();

mysqli_query($con,"UPDATE articulos set Departamento='$params-> Departamento',
  Cantidad_Existencias=$params-> Cantidad_Existencias,
  Costo=$params-> Costo,
  Precio_Venta=$params-> Precio_Venta,
  Descuento=$params-> Descuento,
  Min_en_Inventario=$params-> Min_en_Inventario
  where codigo=$params-> id_articulo)");

 class Result{} 

  $response= new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);
?>