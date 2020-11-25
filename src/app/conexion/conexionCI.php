<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


function conectar(){
    $user = 'root';
    $pass = '';
    $server = 'localhost';
    $db = 'bduta';

    $con = mysqli_connect($server,$user,$pass,$db);
    return $con;
}
$sql = "SELECT * FROM `clientes`";
$con = conectar();
$registros = mysqli_query($con, $sql);

while($reg=mysqli_fetch_array($registros)){
    $vec[]=$reg;
} 

$cad =json_encode($vec);
header('Content-Type: application/json');
echo $cad;
?>