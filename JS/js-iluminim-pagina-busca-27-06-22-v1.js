const PaginaBusca = {

   buscaNaoEncontrada(){
      
      if($('.pagina-busca a.botao.secundario[title="Voltar para página inicial"]').length > 0){

         $('body').addClass('busca-nao-encontrada');

         $('.busca-nao-encontrada .secao-principal.row-fluid.sem-coluna').html(`
               <div class="content-custom">
                  <div class="block-banner-custom">
                     <div class="text-header">
                           <h2>Sua busca não retornou nenhum resultado :(</h2>
                           <p>Infelizmente sua busca não retornou nenhum resultado. Mas não se preocupe, você pode fazer uma nova busca ou navegar pelos nossos departamentos</p>
                     </div>
                  </div>
                  <div class="block-cupom">
                     <div class="wrap-cupom">
                           <div class="text-cupom">
                              <span class="text-bold">Cupom Exclusivo para você!</span>
                              <span class="text-cupom">UTILIZE O CUPOM <span class="text-y">20OFF</span> E</span>
                              <span class="text-bold">Ganhe R$20,00 de desconto</span>
                           </div>
                     </div>
                  </div>
                  <div class="wrap-departamentos">

                     <div class="item-departamento">
                           <a href="/refletores-de-led?sort=mais_vendidos">
                              <img alt="Refletores LED" title="Refletores LED" src="https://cdn.awsli.com.br/257/257163/arquivos/pagina-nao-encontrada-07-05-2020-departamento-refletores-led.png">
                              <div class="wrap-info">
                                 <span>Refletores LED</span>
                                 <i class="icon-angle-right"></i>
                              </div>
                           </a>
                     </div>
                     <div class="item-departamento">
                           <a href="/luminarias-led?sort=mais_vendidos">
                              <img alt="Luminárias LED" title="Luminárias LED" src="https://cdn.awsli.com.br/257/257163/arquivos/pagina-nao-encontrada-07-05-2020-departamento-luminarias-led.png">
                              <div class="wrap-info">
                                 <span>Luminárias LED</span>
                                 <i class="icon-angle-right"></i>
                              </div>
                           </a>
                     </div>
                     <div class="item-departamento">
                           <a href="/fita-de-led?sort=mais_vendidos">
                              <img alt="Fitas LED" title="Fitas LED" src="https://cdn.awsli.com.br/257/257163/arquivos/pagina-nao-encontrada-07-05-2020-departamento-fitas-led.png">
                              <div class="wrap-info">
                                 <span>Fitas LED</span>
                                 <i class="icon-angle-right"></i>
                              </div>
                           </a>
                     </div>
                     <div class="item-departamento">
                           <a href="/lampada-led?sort=mais_vendidos">
                              <img alt="Lâmpadas LED" title="Lâmpadas LED" src="https://cdn.awsli.com.br/257/257163/arquivos/pagina-nao-encontrada-07-05-2020-departamento-lampadas-led.png">
                              <div class="wrap-info">
                                 <span>Lâmpadas LED</span>
                                 <i class="icon-angle-right"></i>
                              </div>
                           </a>
                     </div>
                     <div class="item-departamento">
                           <a href="/acessorios-para-leds?sort=mais_vendidos">
                              <img alt="Acessórios LED" title="Acessórios LED" src="https://cdn.awsli.com.br/257/257163/arquivos/pagina-nao-encontrada-07-05-2020-departamento-acessorios-led.png">
                              <div class="wrap-info">
                                 <span>Acessórios LED</span>
                                 <i class="icon-angle-right"></i>
                              </div>
                           </a>
                     </div>
                     <div class="item-departamento">
                           <a href="/camera-seguranca-led?sort=mais_vendidos">
                              <img alt="Câmeras LED" title="Câmeras LED" src="https://cdn.awsli.com.br/257/257163/arquivos/pagina-nao-encontrada-07-05-2020-departamento-cameras-led.png">
                              <div class="wrap-info">
                                 <span>Câmeras LED</span>
                                 <i class="icon-angle-right"></i>
                              </div>
                           </a>
                     </div>
                     <div class="item-departamento">
                           <a href="/pendente?sort=mais_vendidos">
                              <img alt="Pendentes LED" title="Pendentes LED" src="https://cdn.awsli.com.br/257/257163/arquivos/pagina-nao-encontrada-07-05-2020-departamento-pendentes-led.png">
                              <div class="wrap-info">
                                 <span>Pendentes LED</span>
                                 <i class="icon-angle-right"></i>
                              </div>
                           </a>
                     </div>
                     <div class="item-departamento">
                           <a href="/iluminacao-para-festa?sort=mais_vendidos">
                              <img alt="Festa LED" title="Festa LED" src="https://cdn.awsli.com.br/257/257163/arquivos/pagina-nao-encontrada-07-05-2020-departamento-festa-led.png">
                              <div class="wrap-info">
                                 <span>Festa LED</span>
                                 <i class="icon-angle-right"></i>
                              </div>
                           </a>
                     </div>

                  </div>
               </div>
         `);
      }

   },

   iniciar(){ //INICIAR SCRIPTS DA PÁGINA;

      if(ILUMINIM_UTILS.pagina.isSearch()){

         this.buscaNaoEncontrada();
         
         ILUMINIM_UTILS.adicionarFiltroLancamentos();
         ILUMINIM_UTILS.verificarFiltrosAtivo();
         ILUMINIM_UTILS.ajustePaginacao();
         //ILUMINIM_UTILS.adicionarBlocoLateralNaoEncontrouOqueProcurava();
         ILUMINIM_UTILS.adaptacaoFiltroMobile();

      }
   }
}

$(document).ready(()=> {

   PaginaBusca.iniciar();

});