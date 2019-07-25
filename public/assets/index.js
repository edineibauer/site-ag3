$(function () {
    let equipe = dbLocal.exeRead("equipe");
    let template = dbLocal.exeRead("__template", 1);

    let voce1 = {
        'nome': 'Vaga em aberto',
        'atuacao': 'Desenvolvedor React',
        'imagem': HOME + 'public/assets/img/user.png',
        'descricao': '',
    };
    let voce2 = {
        'nome': 'Vaga em aberto',
        'atuacao': 'Desenvolvedor Moodle',
        'imagem': HOME + 'public/assets/img/user.png',
        'descricao': '',
    };

    Promise.all([equipe, template]).then(d => {
        $.each(d[0], function (i, e) {
            e.imagem = e.imagem[0].url;
            $("#equipe").append(Mustache.render(d[1].time, e));
        });
        $("#equipe").append(Mustache.render(d[1].time, voce1));
        $("#equipe").append(Mustache.render(d[1].time, voce2));

        if(!navigator.onLine) {
            $("img").each(function (i, img) {
                let pat = new RegExp("\/uploads\/", "i");
                if(pat.test($(img).attr("src"))) {
                    $(img).attr("src", HOME + "public/assets/img/user.png");
                };
            })
        }
    });

    /**
     * Animação
     * */
    $(window).scroll(function (event) {
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

$(function() {
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
});