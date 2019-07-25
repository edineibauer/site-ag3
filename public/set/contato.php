<?php

$contato['nome'] = trim(strip_tags(filter_input(INPUT_POST, 'nome', FILTER_DEFAULT)));
$contato['email'] = trim(strip_tags(filter_input(INPUT_POST, 'email', FILTER_DEFAULT)));
$contato['telefone'] = trim(strip_tags(filter_input(INPUT_POST, 'telefone', FILTER_DEFAULT)));
$contato['mensagem'] = trim(strip_tags(filter_input(INPUT_POST, 'mensagem', FILTER_DEFAULT)));

$data['data'] = \Entity\Entity::add("contato", $contato);
