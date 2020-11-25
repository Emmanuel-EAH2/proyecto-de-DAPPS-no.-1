<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require ("conexion.php");
$con = conectar();
$sql = "SELECT * FROM `articulos`";
$registros= mysqli_query($con,$sql);

$vec=[];

while($reg=mysqli_fetch_array($registros)){
    $vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>