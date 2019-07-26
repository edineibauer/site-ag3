$(function () {
    let equipe = dbLocal.exeRead("equipe");
    let portifolio = dbLocal.exeRead("portifolio");
    let template = dbLocal.exeRead("__template", 1);

    let voce = {
        'nome': 'Vaga em aberto',
        'atuacao': 'Front-end Developer',
        'imagem': HOME + VENDOR + "site-ag3/public/assets/img/user.png",
        'descricao': '',
    };

    /**
     * Equipe
     * */
    Promise.all([equipe, template]).then(d => {
        $.each(d[0], function (i, e) {
            if (typeof e.imagem !== null)
                e.imagem = e.imagem[0].url;

            $("#equipe").append(Mustache.render(d[1].time, e));
        });
        $("#equipe").append(Mustache.render(d[1].time, voce));

        if (!navigator.onLine) {
            $("img").each(function (i, img) {
                let pat = new RegExp("\/uploads\/", "i");
                if (pat.test($(img).attr("src")))
                    $(img).attr("src", HOME + VENDOR + "site-ag3/public/assets/img/user.png");
            })
        }
    });

    /**
     * Portifólio
     * */
    Promise.all([portifolio, template]).then(d => {
        var itens = [];
        $.each(d[0], function (i, e) {
            let thumb = [];
            let imagem = [];
            let imagemName = [];
            if (typeof e.imagens !== null) {
                $.each(e.imagens, function(i, img) {
                    thumb.push(img.urls['300']);
                    imagem.push(img.urls['medium']);
                    imagemName.push('');
                });
            } else {
                thumb.push(HOME + "assetsPublic/img/img.png");
                imagem.push(HOME + "assetsPublic/img/img.png");
                imagemName.push('');
            }

            itens.push({
                'title': e.nome_do_projeto,
                'description': e.depoimento,
                'thumbnail': thumb,
                'large': imagem,
                'img_title': imagemName,
                'button_list':
                    [
                        {'title': 'Site', 'url': e.link_do_site, 'new_window': true}
                    ],
                'tags': [e.tag]
            });
        });

        $("#elastic_grid").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'moveup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 400,
            'items': itens
        });
    });

    /**
     * Animação
     * */
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 400)
            $(".ballon").css("transform", "translate(180px, 150px)");
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("Olá DEV, estamos contratando!");
});

// $(function() {
/*
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    setTimeout(function() {
      modal.style.display = "block";
    },1500);

    $(".modal-header").find(".close").on("click", function() {
          modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
*/
// });