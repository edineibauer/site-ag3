<?php

require_once 'D:/WampServer/www/ag3/_config/config.php';

$base = PATH_HOME . "public/cron";

//Tempo para controle de execução
list($ano, $mes, $dia, $hora, $minuto) = explode('/', date("Y/m/d/H/i"));
$hoje = date("Y-m-d");

/* Recursividade para incluir todos os arquivos PHP dentro da pasta cron */
function readCron(string $base)
{
    foreach (\Helpers\Helper::listFolder($base) as $item) {
        if (is_dir($base . "/{$item}"))
            readCron($base . "/{$item}");
        elseif($item !== "index.php")
            include $base . "/{$item}";
    }
}

/* Inicia Leitura dos arquivos na pasta cron */
readCron($base);

/* Inicia Leitura dos arquivos na pasta cron das LIBs */
foreach (\Helpers\Helper::listFolder(PATH_HOME . VENDOR) as $lib) {
    $base = PATH_HOME . VENDOR . $lib . "/public/cron";
    if (file_exists($base))
        readCron($base);
}