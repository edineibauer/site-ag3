$(function () {
    if (typeof dup === 'undefined') {
        var dup = 1;
        let equipe = dbLocal.exeRead("equipe");
        let template = dbLocal.exeRead("__template", 1);

        let voce = {
            'nome': 'Vaga em aberto',
            'atuacao': 'Front-end Developer',
            'imagem': HOME + VENDOR + "site-ag3/public/assets/img/user.png",
            'descricao': '',
        };

        Promise.all([equipe, template]).then(d => {
            $.each(d[0], function (i, e) {
                if(typeof e.imagem !== null)
                    e.imagem = e.imagem[0].url;

                $("#equipe").append(Mustache.render(d[1].time, e));
            });
            $("#equipe").append(Mustache.render(d[1].time, voce));

            if(!navigator.onLine) {
                $("img").each(function (i, img) {
                    let pat = new RegExp("\/uploads\/", "i");
                    if(pat.test($(img).attr("src"))) {
                        $(img).attr("src", HOME + VENDOR + "site-ag3/public/assets/img/user.png");
                    };
                })
            }
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
    }
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