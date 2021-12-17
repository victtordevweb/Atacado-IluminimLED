const JSNovasDescricoes = {

   funcoesAntigas(){

      if($('.desc-milho').length > 0){
         $('.desc-lamp.desc-milho a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                 var target = $(this.hash);
                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                 if (target.length) {
                     $('html, body').animate({
                         scrollTop: (target.offset().top -110)
                     }, 700, "easeInOutExpo");
                     return false;
                 }
             }
         });
         var scrollLink = $('.desc-lamp.desc-milho .page-scroll');
         $(window).scroll(function() {
             var scrollbarLocation = $(this).scrollTop();
             scrollLink.each(function() {
                 var sectionOffset = $(this.hash).offset().top -110;
                 if ( sectionOffset <= scrollbarLocation ) {
                     scrollLink.removeClass('active');
                     $(this).addClass('active');
                 }
             });
         });
     }
     
     $('.div-botoes-rgb > div > div').click(function(){
        $('.box-nth-um-rgb .img-rgb-prod').removeAttr('id');
        var newIDRGB = $(this).attr('data-rgb');
        $('.box-nth-um-rgb .img-rgb-prod').attr('id',''+newIDRGB+'');
     });

   },

   descricaoLuminariaPublica(){

      if( $('.descricao-luminaria-publica .descricao-bloco.descricao-bloco-5 .botao-power-luminaria-publica').length > 0){

         $('.descricao-luminaria-publica .descricao-bloco.descricao-bloco-5 .botao-power-luminaria-publica').click(function(){
         
            if($(this).hasClass('active')){
               $('.descricao-luminaria-publica .descricao-bloco[data-target="ligado"]').removeClass('active');
               $('.descricao-luminaria-publica .descricao-bloco[data-target="desligado"]').addClass('active');
            }else {
               $('.descricao-luminaria-publica .descricao-bloco[data-target="desligado"]').removeClass('active');
               $('.descricao-luminaria-publica .descricao-bloco[data-target="ligado"]').addClass('active');
            }
         
            $(this).toggleClass('active');
         
         });

      }

   },

   descricaoArandelaLED(){

      if( $('.descricao-luminaria-arandela-led .descricao-carousel-imagens').length > 0){

         $('.descricao-luminaria-arandela-led .descricao-carousel-imagens').owlCarousel({
            loop:false,
            margin:0,
            nav:true,
            navText: ['<img src="https://cdn.awsli.com.br/257/257163/arquivos/seta-esquerda-desc-arandela-29-07-21.png">', '<img src="https://cdn.awsli.com.br/257/257163/arquivos/seta-direita-desc-arandela-29-07-21.png">'],
            responsive:{
               1024:{
                  items: 1
               }
            }
         });

      }

   },

   refletorLEDVerde(){

      $('.descricao-refletor-verde .conteudo-bloco-carousel').owlCarousel({
         margin: 0,
         autoHeight: true,
         nav: true,
         dots: false,
         navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
         responsive: {
            768: {
               items: 3
            }
         }
      });

      $('.descricao-refletor-verde .conteudo-bloco-interruptor').click(function(){

         $('.descricao-refletor-verde').toggleClass('interruptor-toggle');

      });

   },

   iniciar(){  

      if(screen.width > 1024){

         this.funcoesAntigas();
         this.descricaoArandelaLED();
         this.descricaoLuminariaPublica();
         this.refletorLEDVerde();
         
      }
   }

}


JSNovasDescricoes.iniciar();