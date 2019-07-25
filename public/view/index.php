<?php

use Helpers\Template;

$phone = '5548991561236';

$tpl = new Template(DOMINIO);
$read = new \Conn\Read();
$read->exeRead("equipe", "ORDER BY id LIMIT 9");
$equipe = ($read->getResult() ? $read->getResult() : []);

$read->exeRead("clientes", "WHERE status = 1 ORDER BY id DESC LIMIT 10");
$clientes = ($read->getResult() ? $read->getResult() : []);

?>

<section class="header10 cid-raBgLdchSJ mbr-fullscreen mbr-parallax-background angle" id="header10-0">
    <div class="container" style="z-index: 3">
        <div class="media-container-column mbr-white col-lg-8 col-md-10 ml-auto">
            <h1 class="mbr-section-title align-right mbr-bold pb-3 mbr-fonts-style display-1">DESENVOLVIMENTO DE SISTEMAS E SITES</h1>
            <h3 class="mbr-section-subtitle align-right mbr-light pb-3 mbr-fonts-style display-2">
                projetos sob demanda
            </h3>
            <p class="mbr-text align-right pb-3 mbr-fonts-style display-5">painéis administrativos com relatórios,
                leads, automação de processos, gerenciamento de notificações, e o que mais necessitar!</p>
            <div class="mbr-section-btn align-right">
                <a href="#contato" class="btn btn-md btn-primary right display-4">ENTRAR EM CONTATO</a>
            </div>
        </div>
    </div>

    <div class="header-cover">
    </div>
</section>

<section class="features1 cid-raBh6EkhNv" id="features1-3">

    <div class="container">
        <div class="media-container-row">

            <div class="p-3 col-12 col-lg-6 relative">
                <img src="<?=HOME . VENDOR ?>site-ag3/public/assets/img/pwa-ballon.png" class="ballon" />
                <img src="<?=HOME . VENDOR ?>site-ag3/public/assets/img/pwa-header.png" />
            </div>

            <div class="p-3 col-12 col-lg-6">
                <div class="card-box text-right">
                    <div class="col padding-24"></div>
                    <h2 class="col card-title py-3 text-right mbr-fonts-style display-5 font-xxlarge upper" style="padding-right: 0">WEB, Desktop e APP</h2>
                    <p class="mbr-text mbr-fonts-style text-right display-7 font-large">
                        desenvolvemos sites e sistemas na nuvem para uso online, no desktop ou aplicativo.<br>
                        <b class="padding-32 right">
                            <i class="material-icons left padding-right">signal_wifi_off</i>
                            <span class="left" style="display: contents;">
                                Sem a necessidade de internet para rodar!
                            </span>
                        </b>
                    </p>
                </div>
            </div>


        </div>

    </div>
</section>

<section class="features1 bg-white" id="features1-3" style="padding-bottom: 60px">

    <div class="container">
        <div class="media-container-row">

            <div class="p-3 col-12 col-md-6 col-lg-4">
                <div class="card-img pb-3 text-center">
                    <i class="material-icons font-jumbo text-primary">developer_board</i>
                </div>
                <div class="card-box">
                    <h4 class="card-title py-3 mbr-fonts-style display-5 text-center upper">
                        Personalização
                    </h4>
                    <p class="mbr-text mbr-fonts-style display-7 text-center">
                        Nossos sistemas são criados para atender a sua demanda. E não a sua demanda adaptada para atender o sistema.
                    </p>
                </div>
            </div>

            <div class="p-3 col-12 col-md-6 col-lg-4">
                <div class="card-img pb-3 text-center">
                    <i class="material-icons font-jumbo text-primary">notifications_active</i>
                </div>
                <div class="card-box">
                    <h4 class="card-title py-3 mbr-fonts-style display-5 text-center upper">
                        NOTIFICAÇÕES
                    </h4>
                    <p class="mbr-text mbr-fonts-style display-7 text-center">
                        a automação de processos permite o envio de emails e notificações com informações relevantes para que seu negócio prospére.</p>
                </div>
            </div>

            <div class="p-3 col-12 col-md-6 col-lg-4">
                <div class="card-img pb-3 text-center">
                    <i class="material-icons font-jumbo text-primary">smartphone</i>
                </div>
                <div class="card-box">
                    <h4 class="card-title py-3 mbr-fonts-style display-5 text-center upper">
                        RESPONSIVIDADE
                    </h4>
                    <p class="mbr-text mbr-fonts-style display-7 text-center">
                        Soluções multiplataformas em nuvem para uso no smartphones, notebooks e desktops.
                        Aonde você estiver, não dependa de um equipamento!</p>
                </div>
            </div>


        </div>

    </div>
</section>

<section class="mbr-section content5 cid-raBzwObT2o mbr-parallax-background" id="content5-9">
    <div class="container">
        <div class="media-container-row">
            <div class="title col-12 col-md-8">
                <h2 class="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-1 text-shadow" style="line-height: 80px;">
                    Uma parceria com foco na sua satisfação!
                </h2>
                <h3 class="mbr-section-subtitle align-center mbr-light mbr-white pb-3 mbr-fonts-style display-5">
                    Aqui, você acompanha o desenvolvimento, com entregas dentro do prazo e suporte constante até a entrega final!
                </h3>
            </div>
        </div>
    </div>
</section>

<!--<section class="features12 cid-raBhh36wun" id="features12-4" style="padding-bottom:0">

    <div class="container">
        <h2 class="mbr-section-title pb-2 mbr-fonts-style display-2">
            Sistemas Online Responsivos</h2>
        <h3 class="mbr-section-subtitle pb-3 mbr-fonts-style display-5">O sistema evolui com você!</h3>

        <div class="media-container-row pt-5">
            <div class="block-content align-right">
                <div class="pl-3 pr-3 pb-5">
                    <div class="mbr-card-img-title">
                        <div class="card-img pb-3">
                            <span class="mbri-upload mbr-iconfont"></span>
                        </div>
                        <div class="mbr-crt-title">
                            <h4 class="card-title py-2 mbr-crt-title mbr-fonts-style display-7">
                                Soluções em Nuvem</h4>
                        </div>
                    </div>

                    <div class="card-box">
                        <p class="mbr-text mbr-section-text mbr-fonts-style display-7">
                            Centralize seus dados, compartilhe com seus usuários e gerenciar em equipe.
                        </p>
                    </div>
                </div>

                <div class="pl-3 pr-3 pb-5">
                    <div class="mbr-card-img-title">
                        <div class="card-img pb-3">
                            <span class="mbri-drag-n-drop2 mbr-iconfont"></span>
                        </div>
                        <div class="mbr-crt-title">
                            <h4 class="card-title py-2 mbr-crt-title mbr-fonts-style display-7">
                                Precisa Expandir?</h4>
                        </div>
                    </div>
                    <div class="card-box">
                        <p class="mbr-text mbr-section-text mbr-fonts-style display-7">Estamos esperando por isso!</p>
                    </div>
                </div>
            </div>

            <div class="mbr-figure" style="width: 50%;">
                <img src="<?/*= HOME */?>public/assets/images/mbr-982x655.jpg" alt="ag3tecnologia" title="">
            </div>

            <div class="block-content align-left  ">
                <div class="pl-3 pr-3 pb-5">
                    <div class="mbr-card-img-title">
                        <div class="card-img pb-3">
                            <span class="mbri-features mbr-iconfont"></span>
                        </div>
                        <div class="mbr-crt-title">
                            <h4 class="card-title py-2 mbr-crt-title mbr-fonts-style display-7">
                                Os mais Recentes Recursos</h4>
                        </div>
                    </div>

                    <div class="card-box">
                        <p class="mbr-text mbr-section-text mbr-fonts-style display-7">
                            Trabalhamos com tecnologias recentes e de ponta, não fique para trás!</p>
                    </div>
                </div>

                <div class="pl-3 pr-3 pb-5">
                    <div class="mbr-card-img-title">
                        <div class="card-img pb-3">
                            <span class="mbri-sites mbr-iconfont"></span>
                        </div>
                        <div class="mbr-crt-title">
                            <h4 class="card-title py-2 mbr-crt-title mbr-fonts-style display-7">Você no Controle</h4>
                        </div>
                    </div>
                    <div class="card-box">
                        <p class="mbr-text mbr-section-text mbr-fonts-style display-7">Painéis de gerenciamento e
                            relatórios.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>-->

<section class="clients cid-raBhy5nKVj" id="clientes">
    <div class="container">
        <div class="media-container-row">
            <div class="col-12 align-center">
                <h2 class="mbr-section-title pb-3 mbr-fonts-style display-2">Nossos Clientes</h2>
                <h3 class="mbr-section-subtitle mbr-light mbr-fonts-style display-5">
                    portifólio em manutenção
                </h3>
            </div>
        </div>
    </div>

    <div class="container">
    </div>
</section>

<section class="testimonials1 cid-raBhBYTHhc" id="testimonials1-7">
    <div class="container">
        <div class="media-container-row">
            <div class="title col-12 align-center">
                <h2 class="pb-3 mbr-fonts-style display-2" style="color: #555555">Nossa equipe por trás dos resultados!</h2>
            </div>
        </div>
    </div>

    <div class="container pt-3 mt-2">
        <div class="media-container-row" id="equipe"></div>
    </div>
</section>

<!--<section class="cid-raBhMxACab" style="background: #e9e285;color: #555;">
    <div class="container">
        <h3 class="text-center upper">
            Estamos Crescendo, precisamos de você!
        </h3>
    </div>
</section>-->

<section class="mbr-section form4 cid-raBhtPqFRD" id="contato">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="google-map">
                    <iframe frameborder="0" style="border:0"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&q=place_id:ChIJh4gdblOCIZURz1wvpuz4xow"
                            allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="col-md-6">
                <h2 class="pb-3 align-left mbr-fonts-style display-2">
                    Contato</h2>
                <div>
                    <div class="icon-block pb-2">
                        <i class="material-icons font-xlarge left padding-right color-text-gray">email</i>
                        <h4 class="icon-block__title align-left mbr-fonts-style display-5 emailcontato">
                            contato@ag3tecnologia.com.br
                        </h4>
                    </div>
                    <div class="icon-block pb-4">
                        <i class="material-icons font-xlarge left padding-right color-text-gray">local_phone</i>
                        <h4 class="icon-block__title align-left mbr-fonts-style display-5 emailcontato">
                            (48) 99156-1236
                        </h4>
                    </div>
                    <div class="icon-block pb-3">
                        <a href="https://api.whatsapp.com/send?phone=<?= $phone ?>" target="_blank"
                           style="background: #4dc247" class="btn color-text-white margin-0">
                            <i class="material-icons font-xlarge left padding-right color-text-white">local_phone</i>
                            Whatsapp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="cid-raBhMxACab" id="footer5-8" style="padding-bottom: 10px">

    <div class="container">
        <div class="media-container-row">
            <div class="col-md-3">
                <div class="media-wrap">

                    <img src="<?= HOME ?>assetsPublic/img/favicon-192.png" alt="<?=SITENAME?>" title="<?=SITENAME?>>

                </div>
            </div>
            <div class="col-md-9">
                <p class="mbr-text align-right links mbr-fonts-style display-7" style="float: right">
<!--                    <a href="#" style="padding:5px 10px;float:left;display: block; color: #555555">SOBRE</a>-->
                    <a href="#clientes"
                       style="padding:5px 10px;float:left;display: block; color: #555555">PORTIFÓLIO</a>
<!--                    <a href="#" style="padding:5px 10px;float:left;display: block; color: #555555">FAÇA PARTE</a>-->
                </p>
            </div>
        </div>
        <div class="footer-lower">
            <div class="media-container-row">
                <div class="col-md-12">
                    <hr>
                </div>
            </div>
            <div class="media-container-row mbr-white">
                <div class="col-md-6 copyright">
                    <p class="mbr-text mbr-fonts-style display-7">
                        © Copyright <?= date('Y') ?> AG3 - Todos os direitos Reservados
                    </p>
                    <p class="mbr-text mbr-fonts-style display-7">Rua Imigrante Meller, 437, Ed. João Batista 1455,
                        Criciúma - SC</p>
                </div>
                <div class="col-md-6" style="padding-left: 50px;">
                    <div class="social-list align-right">
                        <div class="soc-item">
                            <a href="https://www.facebook.com/ag3tecnologia/" target="_blank">
                                <span class="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="https://www.youtube.com/channel/UCqI07E_oT8wwFcD2bsbNzbQ" target="_blank">
                                <span class="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="https://www.instagram.com/ag3tecnologia/" target="_blank">
                                <span class="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<a href="https://api.whatsapp.com/send?phone=<?= $phone ?>" target="_blank" id="whatsapp-btn-float">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
         class="whatsapp-block">
        <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
              fill-rule="evenodd"></path>
    </svg>
</a>

<div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <div class="modal-header">
            <h2 style="padding: 5px 0 0;">Boas Festas!</h2>
            <span class="close">&times;</span>
        </div>
        <div class="modal-body">
            <img src="<?= HOME ?>uploads/site/natal.jpeg" style="width:100%;float:left" alt="Feliz Natal"/>
        </div>
    </div>

</div>