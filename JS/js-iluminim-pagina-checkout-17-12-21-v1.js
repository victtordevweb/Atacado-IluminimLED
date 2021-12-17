const PaginaCheckout = {
    
   adaptarInformacoesFormasDeEnvio(){

      $('input#id_cep').on('change', function(){
    
         ILUMINIM_UTILS.adaptarFormasDeEnvioCarrinhoCheckout();
     
      });

      ILUMINIM_UTILS.adaptarFormasDeEnvioCarrinhoCheckout();

   },

   iniciar(){

      this.adaptarInformacoesFormasDeEnvio();

   }

}

$(window).on('load', () => {
   
   PaginaCheckout.iniciar();

});