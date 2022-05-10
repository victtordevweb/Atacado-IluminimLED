const PaginaCheckout = {
    
   /*adaptarInformacoesFormasDeEnvio(){

      $('input#id_cep').on('change', function(){
    
         ILUMINIM_UTILS.adaptarFormasDeEnvioCarrinhoCheckout();
     
      });

      ILUMINIM_UTILS.adaptarFormasDeEnvioCarrinhoCheckout();

   },*/

   ajusteTelefoneContato(){
      $('.carrinho-checkout .atendimento strong.cor-principal.nowrap').html('0800 580-0332').attr('style', 'width: 110px;');
   },

   iniciar(){

      this.ajusteTelefoneContato();
      //this.adaptarInformacoesFormasDeEnvio();

   }

}

$(document).ready(function(){

   PaginaCheckout.iniciar();

});

/*$(window).on('load', () => {
   
   PaginaCheckout.iniciar();

});*/