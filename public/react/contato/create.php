<?php

$envio = [
    "email_destinatario" => "galera.org@gmail.com",
    "assunto" => "Contato no Site " . SITENAME,
    "mensagem" => $dados['nome'] . " entrou em contato pelo site<br><br>" . $dados['mensagem'] . "<br><br>tel: " . $dados['telefone'] . "<br>email: " . $dados['email']
];

\Entity\Entity::add("email_envio", $envio);