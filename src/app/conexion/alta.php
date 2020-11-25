<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json= file_get_contents('php://input');
$params = json_decode($json);

require("conexion.php");
$con = conectar();

mysqli_query($con,"INSERT into articulos
(id_articulo,Nombre,Departamento,Cantidad_Existencias,Costo,Precio_Venta,Descuento,Min_en_Inventario values 
('$params-> id_articulo',
  '$params-> Nombre',
  '$params-> Departamento',
  '$params-> Cantidad_Existencias',
  '$params-> Costo',
  '$params-> Precio_Venta',
  '$params-> Descuento',
  '$params-> Min_en_Inventario')");

class result{}

$response= new result();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';


header('Content-Type: application/json');
echo json_encode($response);
?>