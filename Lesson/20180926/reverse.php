<?php
$arr = array(9,1,6);
$_arr = array();
$cnt = 3;
for($i=0; $i < count($arr); $i++){
    $cnt = $cnt - 1;
    $_arr[$cnt] = $arr[$i];
}
sort($_arr);
var_dump($_arr);