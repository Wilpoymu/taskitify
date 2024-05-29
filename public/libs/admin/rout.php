<?php
        $ruta = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
        if($ruta == '/admin'){
            include 'config.php';
        }else{
            include '../../config.php';
        }
