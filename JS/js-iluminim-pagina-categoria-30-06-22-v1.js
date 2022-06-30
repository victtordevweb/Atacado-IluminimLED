var PaginaCategoria = {
    
   paginasPersonalizadas(){

      let PaginasPersonalizadas = [
         
         {
            paginasURL: ['/iluminacao'],

            gerarHTML(){
      
               return `
                  <div id="allDepartment">
                        <div class="banner-dpt span12 text-center">
                           <!-- backup https://cdn.awsli.com.br/257/257163/arquivos/banner-dpt-ilm-24-01.png -->
                           <a href="/oferta-da-semana?sort=mais_vendidos"><img width="1280" height="364" src="https://cdn.awsli.com.br/257/257163/arquivos/banner-na-home-mais-vendidos-com-desconto-07-08-2020.png" alt="Banner Todos Departamentos"/></a>
                        </div>

                        <div class="texto-dpt span12">
                           Conheça agora a maior linha de <b>Iluminação</b> LED da internet e surpreenda-se com a maior qualidade e o menor preço do Brasil.
                           A Iluminim é uma loja de iluminação online que oferece uma extensa linha de Lâmpadas de LED, Refletores, Luminárias, Plafons, 
                           Fitas de LED, Spots e muitos outros produtos seletamente escolhidos para sua necessidade. Seja ela iluminação de jardim, 
                           iluminaçao residencial, iluminação publica ou iluminação para festas, temos o melhor material para você utilizar em seu projeto, 
                           a maior garantia do mercado e as melhores condições de pagamento. Parcelamos em até 4x sem juros ou por boleto/pix. Aproveite agora mesmo e adquira o tudo em <b>Iluminação</b>
                           de LED na Iluminim. Confie em quem entende! Confie na líder!
                        </div>
                        <div class="block-categories span12">
                           <div class="block-categories-into one span12">
                              <div class="span4">
                                    <h4><a href="/refletores-holofotes-led?sort=mais_vendidos">Refletores LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-refletores-alldepartment.png" alt="">
                              </div>
                              <div class="span4">
                                    <h4><a href="/luminarias-plafons-led?sort=mais_vendidos">Luminárias LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-luminarias-alldepartment.png" alt="">
                              </div>
                              <div class="span4">
                                    <h4><a href="/spot-led?sort=mais_vendidos">Spots LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-spots-alldepartment.png" alt="">
                              </div>
							  <div class="span4">
                                    <h4><a href="/fita-de-led?sort=mais_vendidos">Fitas LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-fitas-alldepartment.png" alt="">
                              </div>
                              <div class="span4">
                                    <h4><a href="/lampadas-led?sort=mais_vendidos">Lâmpadas LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-lampadas-alldepartment.png" alt="">
                              </div>
                           </div>
                        </div>

                        <div class="block-call-action span12">
                           <div class="block-video span6">
                              <iframe width="570" height="317" src="https://www.youtube.com/embed/ew74UyFfO6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           </div>
                           <div class="block-environment span6">
                              <div class="box-image-environment span6">
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/banner-chamada-compre-por-ambiente-alldepartment.png" alt="Banner Chamada Compre por ambiente">
                              </div>
                              <div class="box-call-environment span6">
                                    <h4>Compre por <br/><b>Ambiente</b></h4>
                                    <a href="/compre-por-ambiente?sort=mais_vendidos">Confira!</a>
                              </div>
                           </div>
                        </div>

                        <div class="block-benefits span12">
                           <div class="sidebar-benefits span3">
                              <h3>Vantagens e <br/><b>Benefícios LED</b></h3>
                              <ul>
                                    <li><a href="javascript:void(0);" target="#one" class="active-benefitt"><i class="icon-chevron-right"></i> Longa Vida Útil</a></li>
                                    <li><a href="javascript:void(0);" target="#two"><i class="icon-chevron-right"></i> Muito Mais Economia</a></li>
                                    <li><a href="javascript:void(0);" target="#tree"><i class="icon-chevron-right"></i> Mais Sustentabilidade</a></li>
                                    <li><a href="javascript:void(0);" target="#four"><i class="icon-chevron-right"></i> Baixa Emissão de Calor</a></li>
                                    <li><a href="javascript:void(0);" target="#five"><i class="icon-chevron-right"></i> Variedade de Cores de Luz</a></li>
                              </ul>
                           </div>
                           <div class="show-benefits span9">
                              <ul>
                                    <li id="one" class="active-benefit">
                                       <div class="box-show-text">
                                          <h3>Longa <b>Vida Útil</b></h3>
                                          <span>
                                                Os produtos de LED são fabricados para durarem cerca de 30 mil horas de uso - podem chegar a 50 mil ou mais -, o que pode durar décadas, dependendo da frequência de utilização por horas/dia.
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-lvu.png" alt="Longa Vida Últil">
                                       </div>
                                    </li>
                                    <li id="two">
                                       <div class="box-show-text">
                                          <h3>Muito <b>Mais Economia</b></h3>
                                          <span>
                                                Alta eficiência aliada ao baixo consumo de energia elétrica. A lâmpada emite o mesmo fluxo luminoso que as outras, mas com a vantagem de ser até 80% mais econômica que as incandescentes e a diferença para a fluorescente é de 30% (em uma comparação utilizando lâmpadas com 20W de potência).
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-eco.png" alt="Icon Mais Economia">
                                       </div>
                                    </li>
                                    <li id="tree">
                                       <div class="box-show-text">
                                          <h3>Mais <b>Sustentabilidade</b></h3>
                                          <span>
                                                Por não conter elementos tóxicos, esse tipo de lâmpada também é amigável ao meio ambiente, ao contrário das lâmpadas fluorescentes que têm mercúrio em seu interior. Cerca de 98,5% dos materiais usados na fabricação da lâmpada LED são recicláveis.
                                                <br/>Além disso, por terem uma vida útil longa, ela também se torna mais sustentável e ajuda a produzir menos lixo a longo prazo.
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-sus.png" alt="Icon Mais Sustentabilidade">
                                       </div>
                                    </li>
                                    <li id="four">
                                       <div class="box-show-text">
                                          <h3>Baixa <b>Emissão de Calor</b></h3>
                                          <span>
                                                Esse também é um dos fatores que a tornam mais econômica. Isso ocorre porque outros tipos de lâmpadas transformam parte da energia consumida em calor, enquanto o LED utiliza somente o suficiente para gerar um bom fluxo luminoso com uma emissão de calor muito baixa.
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-bec.png" alt="Icon Baixa Emissão de Luz">
                                       </div>
                                    </li>
                                    <li id="five">
                                       <div class="box-show-text">
                                          <h3>Variedade de <b>Cores de Luz</b></h3>
                                          <span>
                                                A lâmpada de LED pode ter inúmeras cores, você encontra todo o espectro RGB com a possibilidade de alterar as cores com um controle específico em alguns modelos, já outros vêm com a cor de luz fixa em verde, azul, vermelho, rosa, amarelo e muito mais. Tendo a possibilidade de transformar qualquer ambiente.
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-var.png" alt="Icon Variedade de Cores">
                                       </div>
                                    </li>
                              </ul>   
                           </div>
                        </div>



                        <div id="box-estatisticas">
                           <div class="container">
                              <div class="linha-um into-estatisticas">
                                    <div class="texto-estatisticas">
                                       <p class="texto-estatistica--into">A <b>Iluminim</b> revolucionou o mercado de iluminação e hoje - há 10 anos no segmento - é referência em produtos de LED. Mudando o jeito de fazer negócio, a Iluminim se preocupa fundamentalmente com o cliente, seja oferecendo as melhores condições de pagamento com opção de parcelamento de até <b>4x sem juros</b> ou por boleto/pix. <b>A maior garantia do mercado</b> elevando ainda mais o patamar do maior e-commerce de LED do Brasil. Além de fazer bem para o seu bolso, a Iluminim também preza pela sustentabilidade do planeta, seja comercializando a tecnologia mais sustentável do ramo, quanto em ações sociais que visam a empatia ao próximo (ao finalizar uma compra você pode selecionar para qual programa iremos doar um fundo monetário). Confie em quem entende o que é melhor para o planeta. Confie na líder!</p>
                                    </div>
                                    <div class="progresssbar-estatisticas">
                                       <h3 class="titulo-texto-estatisticas">Saiba porquê investir em LED:</h3>
                                       <div class="progressbox one">
                                          <span class="titlle-progressbar">Economia de energia em até 80%</span>
                                          <div class="progressbar" data-progress="80%" style="--width: 80;"></div>
                                       </div>
                                       <div class="progressbox two">
                                          <span class="titlle-progressbar">Material 98,5% reciclável</span>
                                          <div class="progressbar" data-progress="98.5%" style="--width: 92;"></div>
                                       </div>
                                    </div>
                              </div> 
                              <div class="linha-dois into-estatisticas">
                                    <div class="numeros-estatisticas">
                                       <span class="quantidade-numeros">10</span>
                                       <span class="texto-numeros">ANOS DE MERCADO</span>
                                    </div>
                                    <div class="numeros-estatisticas">
                                       <span class="quantidade-numeros">+ 1.000.000</span>
                                       <span class="texto-numeros">CLIENTES SATISFEITOS</span>
                                    </div>
                                    <div class="numeros-estatisticas">
                                       <span class="quantidade-numeros">+ 140.000</span>
                                       <span class="texto-numeros">PRODUTOS NO CATÁLOGO</span>
                                    </div>
                                    <div class="numeros-estatisticas">
                                       <span class="quantidade-numeros">6</span>
                                       <span class="texto-numeros">INSTITUIÇÕES BENEFICIADAS</span>
                                    </div>
                              </div>
                           </div> 
                        </div>



                        <div class="withdraw__in__store">
                           <div class="box-information span3">
                              <div class="withdraw__box-header">
                                    <img width="190" height="69" alt="Encontre um produto" title="Encontre um produto" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-box-encontre-produto.png"/>
                              </div>
                              <div class="withdraw__box-body">
                                    <h4>Encontre um produto</h4>
                                    <p>
                                    Escolha o produto que você quer comprar online e retirar na loja.
                                    </p>
                              </div>
                           </div>
                           <div class="box-information span3">
                              <div class="withdraw__box-header">
                                    <img width="59" height="76" alt="Encontre uma loja" title="Encontre uma loja" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-box-escolha-uma-loja.png"/>
                              </div>
                              <div class="withdraw__box-body">
                                    <h4>Escolha uma loja</h4>
                                    <p>
                                    Escolha uma loja física mais perto de você
                                    </p>
                              </div>
                           </div>
                           <div class="box-information span3">
                              <div class="withdraw__box-header">
                                    <div class="withdraw__box-header--into">
                                       <img width="38" height="31" alt="Finalize a compra" title="Finalize a compra" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-box-pegue-hoje.png"/>
                                       <span>pegue na loja hoje!</span>
                                    </div>
                                    <a href="#">comprar</a>
                              </div>
                              <div class="withdraw__box-body">
                                    <h4>Finalize a compra</h4>
                                    <p>
                                       Faça o pedido com a opção de "Retirada pessoalmente" e aguarde o e-mail de confirmação para retirada
                                    </p>
                              </div>
                           </div>
                           <div class="box-information span3">
                              <div class="withdraw__box-header">
                                    <img width="76" height="81" alt="Agora é só retirar" title="Agora é só retirar" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-box-retirar-agora.png"/>
                              </div>
                              <div class="withdraw__box-body">
                                    <h4>Agora é só retirar</h4>
                                    <p>
                                       Pegue o número do pedido e corre para a loja que você escolheu!
                                    </p>
                              </div>
                           </div>
                        </div>


                  </div>
               `;

            },

            toggleBeneficios(){

               $('.sidebar-benefits.span3 ul>li>a').on('click', function(e){

                  e.preventDefault();

                  let benefitClicked = $(this).attr('target');

                  $('.sidebar-benefits.span3 ul>li>a').removeClass('active-benefitt');

                  $(this).addClass('active-benefitt');

                  $('.show-benefits.span9 ul li').removeClass('active-benefit');
                  
                  $(`.show-benefits.span9 ul li${benefitClicked}`).addClass('active-benefit');

               });

            },

            renderizar(){

               let html = this.gerarHTML();

               $('body').addClass('pagina-personalizada-todos-departamentos');

               $('.conteudo.span9').prepend(html);

               this.toggleBeneficios();

            },
         },
         
         {
            paginasURL: ['/oferta-da-semana', '/led-friday'],

            listagensPersonalizadas: {

               gerarObjeto(){

                  let objeto = {

                        ['/oferta-da-semana']: [
                           {
                              url: '/oferta-da-semana-refletor-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Refletores-banner-ods-23-06-2022.png',
                              //imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_REFLETORES_led_friday_6.0-22-10-21.png',
                              nome: 'Refletores LED'
                           },
                           {
                              url: '/oferta-da-semana-plafon-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Luminarias-banner-ods-23-06-2022.png',
                              //imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_LUMINARIAS_led_friday_6.0-22-10-21.png',
                              nome: 'Luminárias LED'
                           },
                           {
                              url: '/oferta-da-semana-spot-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Spots-banner-ods-23-06-2022.png',
                              //imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_SPOTS_led_friday_6.0-22-10-21.png',
                              nome: 'Spots LED'
                           },
                           {
                              url: '/oferta-da-semana-fita-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fitas-banner-ods-23-06-2022.png',
                              //imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_FITAS_led_friday_6.0-22-10-21.png',
                              nome: 'Fitas LED'
                           },
                           {
                              url: '/oferta-da-semana-lampada-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Lampadas-banner-ods-23-06-2022.png',
                              //imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_LAMPADAS__led_friday_6.0-22-10-21.png',
                              nome: 'Lâmpadas LED'
                           },
                           {
                              url: '/pendente?sort=mais_vendidos',
                              //imagem: '', NÃO TEMOS A IMAGEM ORIGINAL, PRECISAMOS DESENVOLVER
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendentes-banner-ods-23-06-2022.png',
                              nome: 'Pendentes LED'                    
                           },
                           /*{
                              url: '/lustre?sort=mais_vendidos',
                              //imagem: '', NÃO TEMOS A IMAGEM ORIGINAL, PRECISAMOS DESENVOLVER
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-ods-27-12-21-lustres-led.png',
                              nome: 'Lustres LED'                    
                           },*/
                           /*{
                              url: '/oferta-da-semana-acessorios-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-ods-27-12-21-acessorios-led.png',
                              //imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_ACESSORIOS_led_friday_6.0-22-10-21.png',
                              nome: 'Acessórios LED'
                           },*/
                           {
                              url: '/lancamentos-led?sort=ultimos_produtos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LANCAMENTOS-banner-ods-23-06-2022.png',
                              //imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_Lancamentos_led_friday_6.0-22-10-21.png',
                              nome: 'Lançamentos LED'
                           },
                        ],
                        
                        ['/led-friday']: [
                           {
                              url: '/refletor-led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_REFLETORES_led_friday_6.0-22-10-21.png',
                              nome: 'Refletores LED'
                           },
                           {
                              url: '/plafon-led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_LUMINARIAS_led_friday_6.0-22-10-21.png',
                              nome: 'Luminárias LED'
                           },
                           {
                              url: '/kits-led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_KITS_led_friday_6.0-22-10-21.png',
                              nome: 'Kits LED'                    
                           },
                           {
                              url: '/spot-led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_SPOTS_led_friday_6.0-22-10-21.png',
                              nome: 'Spots LED'
                           },
                           {
                              url: '/fita-led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_FITAS_led_friday_6.0-22-10-21.png',
                              nome: 'Fitas LED'
                           },
                           {
                              url: '/lampada-led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_LAMPADAS__led_friday_6.0-22-10-21.png',
                              nome: 'Lâmpadas LED'                    
                           },
                           {
                              url: '/pendente-led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Banner_vertical_PENDENTES_led_friday_6.0-16-11-21.png',
                              nome: 'Pendentes LED'                    
                           },
                           {
                              url: '/lustre-led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Banner_vertical_LUSTRES_led_friday_6.0-16-11-21.png',
                              nome: 'Lustres LED'                    
                           },
                           {
                              url: '/acessorios-led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_ACESSORIOS_led_friday_6.0-22-10-21.png',
                              nome: 'Acessórios LED'                    
                           },
                           {
                              url: '/lancamentos-led?sort=ultimos_produtos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_Lancamentos_led_friday_6.0-22-10-21.png',
                              nome: 'Lançamentos LED'                    
                           }
                        ]

                  }

                  return objeto[window.location.pathname];

               },

               gerarHTML(){

                  let objeto = this.gerarObjeto();

                  let HTMLCategorias = objeto.map((item, index) => {

                        let { url, imagem, nome } = item;

                        return `
                           <div class="conteudo-ofertasemana--bloco-categoria categoria-${ index + 1 }" data-load="${ url }">
                           
                              <div class="bloco-categoria--banner">
                                    
                                    ${ILUMINIM_UTILS.screen.isDesktop() ? `
                                       <a href="javascript:void(0);">
                                          <img src="${ imagem }">
                                       </a>
                                    ` : ''}

                                    <div class="banner--cronometro">
                                       <ul class="countdown-target"></ul>
                                    </div>

                                    <div class="banner--progresso">

                                       ${ILUMINIM_UTILS.screen.isDesktop() ? `

                                          ${ ILUMINIM_UTILS.gerarBarraProgressoCustom() }

                                       ` : ''}

                                       ${ILUMINIM_UTILS.screen.isMobile() ? `
                                          <div class="banner-titulo">
                                             <span class="banner-titulo-icone">${ILUMINIM_UTILS.icones.relogio_3}</span>
                                             <span>${nome}</span>
                                          </div>
                                       ` : ''}

                                    </div>
                              </div>

                              <div class="bloco-categoria--produtos">

                                    <div class="bloco-produtos-titulo">
                                       <a href="${url}">Ver mais</a>
                                    </div>

                                    <div class="produtos--produtos-carrousel carousel-target">
                                       <div class="carregando-produtos">${ ILUMINIM_UTILS.icones.loading }</div>
                                    </div>
                              </div>

                              ${ILUMINIM_UTILS.screen.isMobile() ? `

                                 <div class="banner--conteudo-mobile">

                                    <div class="banner--cronometro cronometro-mobile">
                                       <ul class="countdown-target"></ul>
                                    </div>

                                    <div class="banner--progresso progresso-mobile">

                                       ${ ILUMINIM_UTILS.gerarBarraProgressoCustom() }

                                    </div>

                                 </div>
                                 
                              ` : ''}

                           </div>
                        `;

                  }).join('');

                  return `
                        <div id="OfertaSemanaCustomizada">

                           <div class="conteiner">

                              <div class="OfertaSemanaCustomizada--conteudo-ofertasemana">
                                 ${HTMLCategorias}
                              </div>
                              
                           </div>

                        </div>
                  `;
                  
               },

               carregarProdutos(){ //CARREGANDO OS PRODUTOS NAS SUAS CATEGORIAS RESPECTIVAS.

                  let $this = this;

                  $('#OfertaSemanaCustomizada .conteudo-ofertasemana--bloco-categoria').each(function(){
            
                        let urlLoad = $(this).attr('data-load');
                        
                        if(ILUMINIM_UTILS.screen.isDesktop()){
            
                           $this.executarCronometro($(this).find('.bloco-categoria--banner .countdown-target'));
                           
                        }
                        
                        $(this).find('.bloco-categoria--produtos .produtos--produtos-carrousel').load(`${urlLoad} div#listagemProdutos .listagem-item`, ()=>{
                           
                           if($(this).find('.listagem-item').length > 0){

                              $this.executarCarrousel( $(this).find('.produtos--produtos-carrousel') );
                              
                              ILUMINIM_UTILS.ajusteDescontoListagem( $(this).find('.listagem-item') );

                              ILUMINIM_UTILS.adicionarListaDesejosListagem( $(this).find('.listagem-item') );

                           }
            
                        });
            
                  });
            
               },

               executarCarrousel(alvo){
            
                  alvo.owlCarousel({
                        margin:0,
                        nav:true,
                        dots: false,
                        autoHeight: true,
                        navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                        responsive:{
                           0:{
                              items:1
                           },
                           767:{
                              items:2
                           },
                           1024:{
                              items:3
                           }
                  
                        }
                  });
            
               },
            
               executarCronometro(alvo){
            
                  alvo.yuukCountDown({
                        starttime: '2016/11/11 00:00:00',
                        endtime: '2030/12/30 00:00:00'
                  });
            
               },
               
               cronometros(){

                  $(`
                     .banner.cheio .slides img[alt="Categoria Oferta da Semana Banner Principal @DESKTOP"],
                     .banner.cheio .slides img[alt="Categoria -> /oferta-da-semana - Chamada Cronometro - @mobile"],
                     .banner.cheio .slides img[alt="Categoria -> /led-friday - Chamada Cronometro"],
                     .banner.cheio .slides img[alt="Categoria -> /led-friday - Chamada Cronometro - @mobile"]
                  `).after(`
                     <div class="cronometro-banner">
                        <ul class="countdown-target"></ul>
                     </div>
                  `);

                  this.executarCronometro( $('.countdown-target') );

               },

               barraProgressoFullBanner(){

                  $(`
                     .banner.cheio .slides img[alt="Categoria Oferta da Semana Banner Principal @DESKTOP"],
                     .banner.cheio .slides img[alt="Categoria -> /oferta-da-semana - Chamada Cronometro - @mobile"],
                     .banner.cheio .slides img[alt="Categoria -> /led-friday - Chamada Cronometro"],
                     .banner.cheio .slides img[alt="Categoria -> /led-friday - Chamada Cronometro - @mobile"]
                  `).after(`
                     ${window.location.pathname == '/led-friday' ? `
                        
                        ${ ILUMINIM_UTILS.gerarBarraProgressoCustom() }

                     ` : `

                        ${ ILUMINIM_UTILS.gerarBarraProgresso() }

                     `}
                  `);

               },
              
               adicionarClassesCustomizadasBody(){

                  if(window.location.pathname == '/led-friday'){

                     $('body').addClass('pagina-led-friday');

                  }

               },
              
               iniciar(){

                  this.adicionarClassesCustomizadasBody();
                  this.carregarProdutos();

               }

            },

            renderizar(){

               $('body').addClass('pagina-personalizada-oferta-da-semana');

               let html = this.listagensPersonalizadas.gerarHTML();
      
               $('.conteudo.span9').before(html);
   
               this.listagensPersonalizadas.iniciar();

               this.listagensPersonalizadas.cronometros();

               this.listagensPersonalizadas.barraProgressoFullBanner();

               $('.conteudo.span9 > .componente:not(.texto-categoria-rodape)').prependTo('div#OfertaSemanaCustomizada > .conteiner');

            },

         },

      ];


      let paginaPersonalizada = PaginasPersonalizadas.filter(item => item.paginasURL.includes(window.location.pathname));

      if(paginaPersonalizada.length > 0){

         paginaPersonalizada[0].renderizar();

      }

   },

   duploVideo(){

      const DuploVideo = {

         gerarObjeto(){

            let config = {

               ['/spot-led-friday']: {
                  seletor: 'div#listagemProdutos .listagem-linha:nth-child(4)',
                  videos: ['eE1TJx4_es', 'YMgHvl6D8rI']
               },

               ['/refletor-led-friday']: {
                  seletor: 'div#listagemProdutos .listagem-linha:nth-child(4)',
                  videos: ['N5Nd0l3AKE8', 'jkXidWyLKi0']
               },

               ['/spot-led-redondo']: {
                  seletor: 'div#listagemProdutos .listagem-linha:nth-child(2)',
                  videos: ['Mxy74DIE9mU', 'JnGJO1WwrOA']
               },

               ['']: {
                  seletor: '',
                  videos: ['', '']
               },

               ['/luminaria-de-teto']: {
                  seletor: 'div#listagemProdutos .listagem-linha:nth-child(2)',
                  videos: ['dyKA-VI0kn8', 'l8p5QVHf4Es']
               }

            }


            return config[window.location.pathname];

         },

         gerarHTML(videos){

            let videosHTML = videos.map(video_id => {

               return `
                  <div class="grid-listagem-item">
                     <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/${video_id}" width="427"></iframe>
                  </div>
               `;

            }).join('');


            return `
               <div class="gird-listagem-customizada">
                  <div class="gird-listagem-customizada-conteudo grid-listagem-1 grid-listagem-duplo-video">
                     ${videosHTML}
                  </div>
               </div>
            `;

         },

         renderizar(){

            let objeto = this.gerarObjeto();

            if(!objeto) return;

            let html = this.gerarHTML(objeto.videos);

            $(objeto.seletor).after(html);

         }

      }

      DuploVideo.renderizar();

   },

   adicionarFiltroPrecoPersonalizado(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }
      
      $('.secao-principal .coluna').append(`
         <div class="lateral outras filtro-coluna filtro-preco-personalizado">
               <div class="filtro lista borda-principal">
                  
                  <h4 class="titulo cor-secundaria">Filtro Personalizado</h4>
                  
                  <div class="conteudo">
         
                     <div class="preco-personalizado">
                              
                           <div class="preco-personalizado-bloco-1">
                              <span>de <b>R$</b></span>
                              <input type="number" placeholder="min" class="preco-minimo preco-personalizado-input">
                              <span>,00</span>
                           </div>
         
                           <div class="preco-personalizado-bloco-2">
                              <span>até <b>R$</b></span>
                              <input type="number" placeholder="max" class="preco-maximo preco-personalizado-input">
                              <span>,00</span>
                           </div>
         
                           <div class="preco-personalizado-bloco-3">
                              <button class="preco-personalizado-botao-filtrar">ok</button>
                           </div>
         
                           <div class="preco-personalizado-bloco-4">
                              <a class="limpar-filtro-preco-personalizado" href="?sort=mais_vendidos"><i class="icon-rotate-left"></i>Limpar</a>
                           </div>
         
                     </div>
         
                  </div>
               </div>
         </div>
      `);

      $('.preco-personalizado .preco-personalizado-input').keypress(function(e) {
         if(e.which == 13) {
               $('.preco-personalizado .preco-personalizado-botao-filtrar').trigger('click');
         }
      });

      
      $('.preco-personalizado .preco-personalizado-botao-filtrar').click(function(){

         let preco_minimo = $(this).parents('.preco-personalizado').find('.preco-minimo');
         let preco_maximo = $(this).parents('.preco-personalizado').find('.preco-maximo');

         if ( preco_minimo.val().length == 0 || preco_maximo.val().length == 0 ){ 
      
               alert('Preencha os campos corretamente!');
         
         }else if(parseInt(preco_maximo.val()) == 0) {

               alert('Digite um valor máximo válido.');

         }else if ( parseInt(preco_minimo.val()) >= parseInt(preco_maximo.val()) ){
         
               alert('O valor mínimo não pode ser maior que o valor máximo.');

         }else {

               var filtro = `?fq=Preco%3A${preco_minimo.val()}.00%2F${preco_maximo.val()}.00`;

               if(window.location.search !== ''){

                  var filtro = filtro.replace('?', '&');

               }
               
               let filtro_preco_storage = {
                  preco_minimo: preco_minimo.val(),
                  preco_maximo: preco_maximo.val(),
                  query: filtro
               }

               localStorage.setItem('filtro_preco_personalizado', JSON.stringify(filtro_preco_storage));

               window.location.href = window.location.href + filtro;
               
         }
      
      });
      
      
      let filtro_preco_personalizado = JSON.parse(localStorage.getItem('filtro_preco_personalizado'));

      if(filtro_preco_personalizado){

         if(window.location.href.includes(filtro_preco_personalizado.query)) {

               $('body').addClass('filtro-personalizado-ativo');
               $('.filtro-preco-personalizado .preco-personalizado .preco-minimo').val(filtro_preco_personalizado.preco_minimo);
               $('.filtro-preco-personalizado .preco-personalizado .preco-maximo').val(filtro_preco_personalizado.preco_maximo);

         } else {

               localStorage.removeItem('filtro_preco_personalizado');

         }
   
      }

   },

   moverTextoCategoria(){

      $('.secao-principal .coluna > .componente').prependTo('.secao-principal > .conteudo.span9');
      
   },

   verificarCategoriaAtiva(){

      let categoriaAcessada = window.location.pathname;
      let categoriaPrincipalJaAberta = false;

      $('.menu.lateral .menu__nivel-dois > ul > li.menu__item').each(function(){

         let alvo = $(this).children('a');
         let categoriaMenuLateral = alvo.attr('href').split('?')[0];

         if(categoriaMenuLateral == categoriaAcessada){

            alvo.addClass('menu-open');
            $(this).addClass('categoria-ativa').children('ul.menu__nivel-tres').attr('style', 'display: block;');
            $('.menu.lateral .menu__nivel-dois > ul').prepend(this);

            categoriaPrincipalJaAberta = true;

         }

      });
      
      $('.menu.lateral .menu__nivel-tres li').each(function(){
            
         let alvo = $(this).children('a');
         let categoriaMenuLateral = (alvo.attr('href') || '').split('?')[0];

         if(categoriaMenuLateral == categoriaAcessada){

            alvo.addClass('subcategoria-ativa');

         }

      });

      if(!categoriaPrincipalJaAberta){

         $('.menu.lateral .menu__nivel-tres li:not(.not-primary)').each(function(){
            
            let alvo = $(this).children('a');
            let categoriaMenuLateral = (alvo.attr('href') || '').split('?')[0];

            if(categoriaMenuLateral == categoriaAcessada){

               alvo.addClass('subcategoria-ativa');

               $(this).parents('li[data-target-sub-menu]').addClass('categoria-ativa').children('ul.menu__nivel-tres').attr('style', 'display: block;');

               $(this).parents('li[data-target-sub-menu]').children('a').addClass('menu-open');
               
               $('.menu.lateral .menu__nivel-dois > ul').prepend($(this).parents('li[data-target-sub-menu]'));

            }

         });

      }

   },

   dropDownTextoCategoria(){

      $(window).on('load', () => {
      
         if ($(".new__description.in__block").length > 0) {
            
            $("#show__text").click(function() {

               let textButton = $(this).text();
               
               if(textButton == 'Ler mais...'){

                     $(this).text('Fechar');

                  }else{

                     $(this).text('Ler mais...');

                  }
                  
               $(".secondary__block").toggle();

            });

            $('#corpo .componente .interno').first().addClass('new-description');

         }else {

            let el_1 = $('#corpo .componente .interno .texto-categoria-personalizado');
            let el_2 = $('.pagina-categoria .componente .interno>h4+p');

            if(el_1.height() > 80 || el_2.height() > 80){
               
               $('#corpo .componente .interno').first().addClass('has-view-more');

            }

         }

         if(($('.pagina-categoria .componente .interno>h4+p').html() || '').trim() == ''){

            $('.pagina-categoria .componente .interno>h4+p').attr('style', 'display: none!important;');

         }

      });

      $(document).on('click', '#corpo .componente .interno.has-view-more:not(.new-description)', function(){

         $(this).toggleClass('active');

      });

   },

   videoCategoria(){

      let VideoCategoria = {

         gerarObjeto(){

               let objeto = {

                  ["/refletores-holofotes-led"]: {
                     titulo: 'Quer ver dicas de refletores em vídeo?',
                     link: 'N5Nd0l3AKE8',
                  },
                  
               }

               return objeto[window.location.pathname];

         },

         gerarHTML(){

               let objeto = this.gerarObjeto();
            
               if(!objeto){
                  return;
               }

               let { titulo, link } = objeto;

               $('body').append(`
                  <div class="modal modal-personalizado fade modal_play_iluminim modal_midia_listagem" id="modal_midia_categoria">
                     <div class="modal-dialog">

                           <div class="modal-content">

                              <div class="modal-header">
                                 <h5 class="modal-title">${titulo}</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>

                              <div class="modal-body">

                                 <iframe id="modal_midia_categoria" src="//youtube.com/embed/${link}?enablejsapi=1" width="100%" height="350" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                              </div>

                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
                              </div>

                           </div>

                     </div>
                  </div>
               `);

               return `
                  <div class="video-categoria">
                     <div class="video-categoria--conteudo">
                           <div class="conteudo--titulo">${titulo}</div>
                           <div id="botao-video" class="conteudo--botao-video" data-toggle="modal" data-target="#modal_midia_categoria">
                              <div class="botao-video--icone"></div>
                              <div class="botao-video--texto">ASSISTIR VÍDEO</div>
                           </div>
                     </div>
                  </div>
               `;

         },

         renderizar(){

               let html = this.gerarHTML();

               if(!html){
                  return;
               }

               $('div#listagemProdutos').after(html);

         }

      }

      VideoCategoria.renderizar();

   },

   reviewsQuemComprou(){

      let Reviews = {

         gerarObjeto(){

               let objeto = [
                  {
                     categorias: ['/luminarias-plafons-led'],
                     utm_campaign: 'ReviewLuminaria',
                     reviews: [
                           {
                              nome: 'Rony sobre sua',
                              nome_produto: 'Luminária Plafon 18w LED Embutir Branco Frio',
                              link_produto: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado',
                              comentario: 'Veio exatamente como descrito no site, ilumina muito bem, até um pouco mais forte do que eu imaginava, acabamento muito bom e vem pronto para instalar! Ótima também por ser slim.'
                           },
                           {
                              nome: 'Yolanda sobre sua',
                              nome_produto: 'Luminária Plafon 18w LED Sobrepor Branco Frio',
                              link_produto: '/luminaria-plafon-18w-led-sobrepor-branco-frio-quadrado',
                              comentario: 'Comprei vários e todos estão funcionando, esse não foi diferente. São duráveis e bonitos. Além da instalação ser prática e rápida de se fazer. Melhor opção que encontrei na internet, sem dúvidas!'
                           },
                           {
                              nome: 'Joana sobre sua',
                              nome_produto: 'Luminária Plafon 30x30 32W LED Sobrepor Branco Frio',
                              link_produto: '/luminaria-plafon-30x30-32w-led-sobrepor-branco-frio',
                              comentario: 'Ótimo produto, superou minhas expectativas! Seu custo benefício é o melhor que encontrei, a luminosidade é alta e o preço é acessível. Instalei uma na cozinha e ficou perfeita para o local.'
                           },
                           {
                              nome: 'Maurício sobre sua',
                              nome_produto: 'Luminária Plafon 25w LED Embutir Branco Frio',
                              link_produto: '/luminaria-plafon-25w-led-embutir-branco-frio-quadrado',
                              comentario: 'Produto excelente com um lindo design, acabamento perfeito, luz forte e econômica, recomendo a todos. Sempre acabo voltando a fazer negócio com esta loja.'
                           },
                     ]
                  },
                  {
                     categorias: ['/refletores-holofotes-led'],
                     utm_campaign: 'ReviewRefletores',
                     reviews: [
                           {
                              nome: 'Flávio sobre seu',
                              nome_produto: 'Refletor Holofote MicroLED Slim 300W Branco Frio',
                              link_produto: '/refletor-holofote-micro-led-slim-300w-branco-frio',
                              comentario: 'Ótimo custo benefício! Gostei bastante do retorno que tive com esse produto, muito eficiente. Foi um bom investimento compra-lo para a minha quadra de futebol sintético. A economia no fim do mês também é notória. Recomendo!'
                           },
                           {
                              nome: 'Bruno sobre seu',
                              nome_produto: 'Refletor Holofote MicroLED 100W Multifocal Branco Frio Metálico',
                              link_produto: '/refletor-holofote-micro-led-100w-multifocal-branco-frio-metalico',
                              comentario: 'Tenho certeza que foi uma excelente aquisição, pois meus antigos refletores de vapor metálico já não atendiam mais minhas expectativas, tanto em luminosidade quanto em economia. O atendimento também foi muito bom, sempre volto a fazer negócio com essa loja. Top!'
                           },
                           {
                              nome: 'Paola sobre seu',
                              nome_produto: 'Refletor MicroLED Ultra Thin 150W Verde Black Type',
                              link_produto: '/refletor-microled-ultra-thin-150w-verde-black-type',
                              comentario: 'Ficou perfeito para iluminar o jardim do condomínio onde sou síndico. Comprei 10 unidades e foi de longe a melhor compra que fiz em custo benefício para o local. Voltarei a adquirir produtos de iluminação aqui quando for necessário.'
                           },
                           {
                              nome: 'Lúcia sobre seu',
                              nome_produto: 'Refletor Holofote MicroLED Slim 100W Branco Frio',
                              link_produto: '/refletor-holofote-microled-100w-branco-frio',
                              comentario: 'Após muito pesquisa e comparações de qualidade e preço na internet, resolvi confiar nesse modelo da Iluminim. Sem arrependimentos até então! Compra segura e produto de alto desempenho, como eu esperava, queria e precisava. Sendo assim, super recomendo!'
                           },
                     ]
                  },
                  {
                     categorias: ['/spots-led-'],
                     utm_campaign: 'ReviewSpots',
                     reviews: [
                           {
                              nome: 'Eduardo Macedo sobre seu ',
                              nome_produto: 'Spot 7W Dicróica LED Direcionável Base Branca :',
                              link_produto: '/spot-7w-dicroica-led-base-branca',
                              comentario: 'Comprei um Spot de 5w para instalar na sanca da minha sala e o resultado ficou incrível. Utilizei um ponto de luz principal e os spots para complementar a iluminação. Indico a loja, ótimo custo-benefício!'
                           },
                           {
                              nome: 'Luiza Andrade sobre seu ',
                              nome_produto: 'Spot Dicróica 3w LED Direcionável Corpo Branco',
                              link_produto: '/spot-dicroica-3w-led-direcionavel-corpo-branco',
                              comentario: 'Adquiri o spot 3w para uso embutido em móveis. A Maria Eduarda foi bem atenciosa comigo e tirou todas as minhas dúvidas sobre o produto e a cor de luz ideal para o local de instalação. Atendimento nota 10!'
                           },
                           {
                              nome: 'Júlio César sobre seu',
                              nome_produto: 'Spot Dicróica 5w LED Direcionável Corpo Branco',
                              link_produto: '/spot-dicroica-5w-led-direcionavel-corpo-branco',
                              comentario: 'Os Spots de luz da Iluminim são práticos e de qualidade excelente. São completos e não é necessário a compra de lâmpadas avulsas, pois acompanham as presilhas, o driver o o chip de led. Além disso, já vem pronto para instalar e com manual. Recomendo.'
                           },
                           {
                              nome: 'Maria Luiza Neto sobre seu',
                              nome_produto: 'Kit Trilho Eletrificado 1,5m + 3 Spot LED Cob 10W 3000K Branco',
                              link_produto: '/kit-trilho-eletrificado-1-5m-3-spot-led-cob-10w-3000k-branco',
                              comentario: 'Os spots de trilho da Iluminim são uma boa opção de decoração e iluminação. Comprei um kit de spot trilho para instalação na sala de jantar e deixou o espaço com outra cara. Achei bem prático que a empresa já vende o trilho com o spot junto, facilitando a compra!'
                           },
                     ]
                  },
                  {
                     categorias: ['/spots-led-'],
                     utm_campaign: 'ReviewFitas',
                     reviews: [
                           {
                              nome: 'Larissa sobre sua',
                              nome_produto: 'Fita de LED RGB 5050',
                              link_produto: '/fita-led-12v-5050-rgb-5-metros-ip65',
                              comentario: 'Simplesmente adorei o produto. Coloquei a Fita LED no meu quarto e é maravilhosa. Além de iluminar muito bem consigo trocar as cores pelo controle com muita facilidade. Recomendo muito esse produto e essa loja.'
                           },
                           {
                              nome: 'Simone sobre sua',
                              nome_produto: 'Fita de LED 5050 Branco Quente',
                              link_produto: '/fita-led-5050-branco-quente-5-metros-ip65-a-prova-dagua-72w',
                              comentario: 'Atendeu muito as minhas expectativas e deixou minha cozinha com uma iluminação incrível. O produto funciona que é uma beleza. Veio no prazo certo e foi entregue com muito cuidado. Certamente é um ótimo negócio.'
                           },
                           {
                              nome: 'Ivone sobre sua ',
                              nome_produto: 'Fita de LED 3528 RGB :',
                              link_produto: '/fita-led-12v-3528-rgb-5-metros-ip65',
                              comentario: 'Produto excelente e com ótimo custo benefício. Coloquei no balcão da minha loja e deu um toque bem especial visualmente falando. Fora que a funcionalidade dele é ótima, a luminosidade ótima e o preço bem acessível.'
                           },
                           {
                              nome: 'Anderson sobre sua ',
                              nome_produto: 'Fita de LED 3528 Azul',
                              link_produto: '/fita-led-12v-3528-azul-5-metros-ip65',
                              comentario: 'Ótimo produto, atingiu minhas expectativas. Além da instalação ser fácil, deu um ar completamente atmosférico no meu estúdio onde gravo vídeos. Fazer negócio com essa loja é um excelente investimento.'
                           },
                     ]
                  },
                  {
                     categorias: ['/lampadas-led'],
                     utm_campaign: 'ReviewLâmpadas',
                     reviews: [
                           {
                              nome: 'Caroline sobre sua ',
                              nome_produto: 'Lâmpada LED de Alta Potência',
                              link_produto: '/lampada-led-alta-potencia',
                              comentario: 'Eu já sabia que estava adquirindo uma luz de alta potência, mas me surpreendi muito com o produto, positivamente! Atendeu muito bem as minhas expectativas, e a lâmpada é de excelente qualidade.'
                           },
                           {
                              nome: 'Lisandro sobre sua',
                              nome_produto: 'Lâmpada LED Bulbo :',
                              link_produto: '/lampada-led-bulbo',
                              comentario: 'Gostei muito da lâmpada! Ela ilumina muito melhor que as lâmpadas convencionais. E o melhor, o produto veio no prazo e foi entregue com muito cuidado. Aprovadíssimo.'
                           },
                           {
                              nome: 'Eva sobre sua',
                              nome_produto: 'Lâmpada LED Vintage Retrô :',
                              link_produto: '/led-retro',
                              comentario: 'Coloquei elas em pendentes também adquiridos na Iluminim e ficaram sensacionais! Além de lindas, fazem uma iluminação que tornam o ambiente aconchegante e o preço é super em conta! Adorei.'
                           },
                           {
                              nome: 'Cristiano sobre sua ',
                              nome_produto: 'Lâmpada LED Tubular :',
                              link_produto: '/lampada-led-tubular',
                              comentario: 'A eficiência da lâmpada tubular é simplesmente incrível! Muito potente, econômica e ecológica. Gostei muito do investimento. Recomendo muito os produtos da Iluminim!'
                           },
                     ]
                  }
               ]

               let objetoFiltrado = objeto.filter(item=> item.categorias.includes(window.location.pathname));

               return objetoFiltrado[0];

         },

         gerarHTML(){

               let objeto = this.gerarObjeto();
            
               if(!objeto){
                  return;
               }

               let html = objeto.reviews.map(item=> {
      
                  return `
                     <div class="review-item">

                           <div class="review-icone-estrelas">
                              <i class="icon-star"></i>
                              <i class="icon-star"></i>
                              <i class="icon-star"></i>
                              <i class="icon-star"></i>
                              <i class="icon-star"></i>    
                           </div>

                           <div class="review-informacoes-nomes">
                              <span class="review-nome">${item.nome}</span>
                              <a href="${item.link_produto}">${item.nome_produto}</a>
                           </div>

                           <div class="review-comentario">${item.comentario}</div>

                     </div>
                  `;
      
               }).join('');

               return html;

         },

         renderizar(){

               let html = this.gerarHTML();

               if(!html){
                  return;
               }

               var target = $('.secao-principal .listagem .posts_blog');

               if(ILUMINIM_UTILS.screen.isMobile()){

                  var target = $('.secao-principal div#listagemProdutos');

               }

               target.after(`
                  <div class="reviews-categoria">

                     <div class="reviews-categoria-titulo">
                           <div class="reviews-categoria-titulo-texto">Reviews de quem já comprou produtos da categoria:</div>
                     </div>

                     <div class="reviews-categoria-conteudo">
                           <div class="reviews-categoria-lista carousel-target">
                              ${html}
                           </div>
                     </div>   

                  </div>
               `);

               $('.reviews-categoria .carousel-target').owlCarousel({
                  margin:15,
                  autoHeight: true,
                  nav:true,
                  dots: false,
                  navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                  responsive:{
                     0: {
                           items:1
                     },
                     768: {
                           items:2
                     }
                  }
               });

         }

      }

      Reviews.renderizar();

   },

   postsBlog(){

      if(!ILUMINIM_UTILS.screen.isDesktop()){
         return;
      }


      let PostsBlog = {

         gerarObjeto(){

               let objeto = {

                  ["/refletores-holofotes-led"]: [
                     {
                           title: 'Top 5 Melhores Refletores LED em 2021',
                           img: 'https://blog.iluminim.com.br/wp-content/uploads/2020/02/top-5-melhores-refletores-led-em-2020-1-1-1280x640.jpg',
                           description: 'Você está querendo reformar aquela quadra do condomínio onde é síndico',
                           link: 'https://blog.iluminim.com.br/top-5-melhores-refletores-led/'
                     },
                     {
                           title: 'Saiba como comprar refletor de LED com segurança',
                           img: 'https://blog.iluminim.com.br/wp-content/uploads/2018/09/240229-saiba-como-comprar-refletor-de-led-com-seguranca-1280x640.jpg',
                           description: 'Se você precisa saber como comprar refletor de LED com segurança',
                           link: 'https://blog.iluminim.com.br/saiba-como-comprar-refletor-de-led-com-seguranca/'
                     }
                  ],

                  ["/luminarias-plafons-led"]: [
                     {
                           title: 'Qual luminária de LED comprar em 2021? Descubra aqui!',
                           img: 'https://blog.iluminim.com.br/wp-content/uploads/2021/02/capa1-1280x640.jpg',
                           description: 'Um dos elementos mais importantes em um projeto de decoração é a iluminação.',
                           link: 'https://blog.iluminim.com.br/qual-luminaria-de-led-comprar/'
                     },
                     {
                           title: 'Top 5 melhores luminárias plafon em 2021',
                           img: 'https://blog.iluminim.com.br/wp-content/uploads/2021/03/plafon-sobrepor-teto-parede-azul-1280x640.jpg',
                           description: 'As luminárias têm várias funções importantes: contribuem para ...',
                           link: 'https://blog.iluminim.com.br/top-5-melhores-luminarias-plafon/'
                     }
                  ],
                  
               }

               return objeto[window.location.pathname];

         },

         gerarHTML(){

               let objeto = this.gerarObjeto();
            
               if(!objeto){
                  return;
               }

               let html = objeto.map((post) => {
                  return `
                  <div class="span6">
                     <div class="img_post">
                           <img src="${post.img}" alt="${post.title}"/>
                     </div>
                     <div class="text_post">
                           <h2>${post.title}</h2>
                           <p>${post.description}</p>
                           <a href="${post.link}" target="_blank" rel="noopener">Continue lendo...</a>
                     </div>
                  </div>
                  `
               }).join('');

               return html;

         },

         renderizar(){

               let html = this.gerarHTML();

               if(!html){
                  return;
               }

               $('div#listagemProdutos .listagem-linha:last-child').after(`
                  <div class="posts_blog">
                     <h2>Confira o que temos para te ajudar</h2>
                     <div class="content_posts">
                           ${html}
                     </div>
                  </div>
               `);

         }

      }

      PostsBlog.renderizar();

   },

   palavrasMaisBuscadas(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;                        
      }

      let PalavrasMaisBuscadas = {

         gerarObjeto(){
      
               let config = {

                  ['/spot-led-trilho-eletrificado']: [
                     { palavra: 'spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho com spots', link: '/kit-trilho-eletrificado-1-5m-3-spot-led-10w-branco-quente-preto' },
                     { palavra: 'spot de trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot para trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho de spot', link: '/buscar?q=trilho+de+spot' },
                     { palavra: 'luminaria spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot para trilho eletrificado', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot trilho 3 lampadas', link: '/kit-trilho-eletrificado-1-5m-3-spot-led-10w-branco-quente-preto' },
                     { palavra: 'trilho 4 spots', link: '/buscar?q=trilho+4+spots' },
                     { palavra: 'spot trilho preto', link: '/buscar?q=spot+trilho+preto' },
                     { palavra: 'spot trilho 2 lampadas', link: '/kit-trilho-eletrificado-1m-2-spot-led-10w-branco-quente-preto' },
                     { palavra: 'trilho spot sala', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'iluminação com trilhos e spots', link: 'https://blog.iluminim.com.br/spot-de-trilho-o-que-e-e-quando-usa-lo-na-iluminacao/', blank: true },
                     { palavra: 'spot trilho branco', link: '/buscar?q=spot+trilho+branco' },
                     { palavra: 'trilho spot cozinha', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilhos com spots direcionáveis', link: '/kit-trilho-eletrificado-1-5m-3-spot-led-10w-branco-quente-preto' },
                     { palavra: 'lustre spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho branco com spots', link: '/kit-trilho-eletrificado-1m-2-spot-led-18w-branco-quente-branco' },
                     { palavra: 'spot trilho 10w', link: '/buscar?q=spot+trilho+10w' },
                     { palavra: 'lampada led spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot dicroica trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot trilho preço', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot trilho teto', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho spot banheiro', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho spot 1m', link: '/trilho-eletrificado-para-spot-led-1-metro-bivolt-preto' },
                     { palavra: 'como instalar spot de trilho', link: 'https://blog.iluminim.com.br/spot-de-trilho-o-que-e-e-quando-usa-lo-na-iluminacao/', blank: true },
                     { palavra: 'spot branco trilho', link: '/buscar?q=spot+branco+trilho' },
                  ],
      
                  ['/spot-led-embutir']: [
                     { palavra: 'spot led embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot de embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot led embutir quadrado', link: '/spot-led-quadrado' },
                     { palavra: 'spot led embutir redondo', link: '/spot-led-redondo' },
                     { palavra: 'spot de embutir preto', link: '/spot-led-colorido-?sort=mais_vendidos' },
                     { palavra: 'mini spot led embutir', link: '/mini-spot-led' },
                     { palavra: 'spot cristal embutir', link: '/spot-led-cristal' },
                     { palavra: 'spot dicroica embutir', link: '/buscar?q=spot+dicroica+embutir' },
                     { palavra: 'spot led embutir 5w', link: '/spot-led-5w' },
                     { palavra: 'spot led embutir redondo 12w', link: '/spot-led-12w' },
                     { palavra: 'spot led embutir gesso', link: '/spot-led-embutir' },
                     { palavra: 'spot led embutir redondo 3w', link: '/spot-led-3w' },
                     { palavra: 'spot led embutir redondo 7w', link: '/spot-led-7w' },
                     { palavra: 'kit spot led embutir', link: '/kit-spot-dicroica-led?sort=mais_vendidos' },
                     { palavra: 'lampada para spot de embutir', link: '/buscar?q=spot+lampada+dicroica+embutir' },
                     { palavra: 'luminaria spot de embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot led embutir quadrado 5w', link: '/spot-led-5w' },
                     { palavra: 'spot lampada dicroica embutir', link: '/buscar?q=spot+lampada+dicroica+embutir' },
                     { palavra: 'spot led embutir quadrado preto', link: '/buscar?q=spot+led+embutir+quadrado+preto' },
                     { palavra: 'tamanho de spot de embutir', link: '/spot-led-embutir' },
                     { palavra: 'kit spot embutir', link: '/kit-spot-dicroica-led?sort=mais_vendidos' },
                     { palavra: 'luminaria tipo spot de embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot chao embutir', link: '/balizador-led?sort=mais_vendidos' },
                     { palavra: 'spot embutir direcionavel', link: '/buscar?q=spot+embutir+direcionavel' },
                  ],
      
                  ['/lampada-led-tubular']: [
                     { palavra: 'tubular led sobrepor', link: '/lampada-led-tubular?sort=%2Bpreco' },
                     { palavra: 'Lampada LED Tubular T8 18w - 1,20m', link: '/lampada-led-tubular-1-20m?sort=mais_vendidos' },
                     { palavra: 'Tubular LED Sobrepor Completa 36W', link: '/tubular-led-sobrepor-completa-36w-branco-frio' },
                     { palavra: 'lampada led tubular 40w', link: '/tubular-led-sobrepor-completa-36w-1.20m-branco-quente' },
                     { palavra: 'lampada led tubular 18w', link: '/Lampada-led-tubular-t8-18w-120m-vermelha' },
                     { palavra: 'tubular t5', link: '/lampada-led-tubular-t5-18w-120m-branco-neutro-inmetro' },
                     { palavra: 'tubular t8', link: '/lampada-led-tubular-t8-18w-120m-amarelo-ambar-inmetro' },
                     { palavra: 'Kit tubular', link: '/kit-5-tubular-led-sobrepor-completa-36w-120m-branco-quente' },
                     { palavra: 'tubular amarela', link: '/tubular-led-sobrepor-completa-20w-60cm-branco-quente' },
                     { palavra: 'Lampada LED Tubular HO 65w 2,40m T8 Branco Frio | Inmetro', link: '/lampada-led-tubular-ho-65w-240m-t8-branco-frio-inmetro' },
                     { palavra: 'tubular 1,20', link: '/lampada-led-tubular-1-20m?sort=mais_vendidos' },
                     { palavra: 'tubular branco neutro', link: '/lampada-led-tubular-t5-18w-120m-branco-neutro-inmetro' },
                     { palavra: 'Lampada LED Tubular T8 18w', link: '/lampada-led-tubular-t8-18w-120m-amarelo-ambar-inmetro' },
                     { palavra: 'tubular 60cm', link: '/lampada-led-tubular-60cm?sort=mais_vendidos' },
                     { palavra: 'tubular azul', link: '/lampada-led-tubular-t8-10w-60cm-azul-inmetro' },
                     { palavra: 'Kit 20 Tubular LED Sobrepor Completa 36W 1,20m Branco Frio', link: '/kit-20-tubular-led-sobrepor-completa-36w-120m-branco-frio' }
                  ],
      
                  ['/led-automotivo']: [
                     { palavra: 'lampada de led automotiva', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'lampadas automotivas', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'lampada led 12v automotiva', link: '/buscar?q=lampada+led+12v+automotiva' },
                     { palavra: 'lampada led automotiva para farol', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'melhor lampada led automotiva', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'kit lampada led automotiva', link: '/buscar?q=kit+lampada+led+automotiva' },
                     { palavra: 'lampada led automotiva h4', link: '/buscar?q=lampada+h4' },
                     { palavra: 'lampadas automotivas atacado', link: 'https://www.iluminimatacado.com.br/led-automotivo?sort=mais_vendidos', blank: true },
                     { palavra: 'distribuidora de lampadas automotivas', link: 'https://www.iluminimatacado.com.br/led-automotivo?sort=mais_vendidos', blank: true },
                     { palavra: 'lampada t5 automotiva', link: '/buscar?q=lampada+t5+automotiva' },
                     { palavra: 'lampada de led automotiva 2 polos', link: '/buscar?q=lampada+de+led+automotiva+2+polos' },
                     { palavra: 'lampada led automotiva amarela', link: '/buscar?q=lampada+led+automotiva+amarela' },
                     { palavra: 'lampadas automotivas super led', link: '/buscar?q=lampadas+automotivas+super+led' },
                  ],
      
                  ['/fita-led-rgb']: [
                     { palavra: 'fita led rgb', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 5050', link: '/buscar?q=fita+led+rgb+5050' },
                     { palavra: 'fita de led rgb com controle', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 10m', link: '/fita-led-rgb-10-metros?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 6803', link: '/fita-led-digital-rgb-colorida-6803-5-metros-ip65-com-fonte' },
                     { palavra: 'fita led rgb 5m', link: '/fita-led-rgb-5-metros?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 15m', link: '/fita-led-rgb-15-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led rgb 5 metros', link: '/fita-led-rgb-5-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led rgb com controle e fonte', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb para pc', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'como instalar fita de led rgb', link: 'https://blog.iluminim.com.br/fita-led-tire-todas-suas-duvidas-aqui/', blank: true },
                     { palavra: 'fita led rgb 5050 10m', link: '/kit-10-metros-fita-led-rgb-colorida-5050' },
                     { palavra: 'fita led rgb 5050 5m', link: '/fita-led-12v-5050-rgb-5-metros-ip65' },
                     { palavra: 'fita led rgb 20 metros', link: '/fita-led-rgb-20-metros?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 3528', link: '/fita-led-3528-rgb-5-metros-ip20-24w' },
                     { palavra: 'emenda fita led rgb', link: '/buscar?q=emenda+fita+led+rgb' },
                     { palavra: 'fita led rgb quarto', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'controlador fita led rgb', link: '/buscar?q=controlador+fita+led+rgb' },
                     { palavra: 'fita led rgb 5050 15m', link: '/fita-led-rgb-5050-colorida-15-metros-com-fonte' },
                     { palavra: 'fita led rgb com fonte', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 5050 colorida', link: '/buscar?q=fita+led+rgb+5050+colorida' },
                     { palavra: 'fita led rgb para mesa', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'kit fita led rgb', link: '/buscar?q=kit+fita+led+rgb' },
                     { palavra: 'adaptador fita led rgb', link: '/conectores-led?sort=mais_vendidos' },
                     { palavra: 'fita de led rgb 30 metros', link: '/fita-led-rgb-30-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led rgb para gabinete', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb rolo', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'amplificador de fita led rgb', link: '/amplificador-fita-led-rgb' },
                  ],
      
                  ['/fita-led-branco-quente']: [
                     { palavra: 'fita de led branco quente', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente com fonte', link: '/buscar?q=fita+de+led+branco+quente+com+fonte' },
                     { palavra: 'fita led 5050 branco quente', link: '/buscar?q=fita+led+5050+branco+quente' },
                     { palavra: 'fita de led 3528 branco quente', link: '/buscar?q=fita+led+3528+branco+quente' },
                     { palavra: 'fita de led branco quente 20 metros', link: '/fita-led-branco-quente-20-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente com controle', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita de led 12v branco quente', link: '/buscar?q=fita+de+led+12v+branco+quente' },
                     { palavra: 'fita de led branco quente 5050 com fonte', link: '/fita-led-5050-branco-quente-5-metros-com-fonte-corregador-ip65-a-prova-dagua-72w' },
                     { palavra: 'fita led 220v branco quente', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente 5m', link: '/fita-led-branco-quente-5-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente 2700k', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente 3000k', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita led 10m branco quente', link: '/fita-led-branco-quente-10-metros?sort=mais_vendidos' },
                     { palavra: 'fita led 110v branco quente', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                  ],
      
                  ['/fita-led-branca']: [
                     { palavra: 'fita de led branca fria', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita de led branco frio', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita led 5050 branco frio', link: '/buscar?q=fita+led+5050+branco+frio' },
                     { palavra: 'fita de led branca fria 220v', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita de led branca fria 110v', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita led branco frio com fonte', link: '/buscar?q=fita+led+branco+frio+com+fonte' },
                     { palavra: 'fita super led branco frio', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita led 5050 branco frio 12v', link: '/buscar?q=fita+led+5050+branco+frio+12v' },
                     { palavra: 'fita de led branca fria 10m', link: '/fita-led-branco-frio-10-metros?sort=mais_vendidos' },
                     { palavra: 'fita led branco frio 6500k', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita de led 5050 branco frio 110v', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita de led 5050 branco frio com fonte', link: '/buscar?q=fita+de+led+5050+branco+frio+com+fonte' },
                     { palavra: '3528 fita led branco frio', link: '/buscar?q=3528+fita+led+branco+frio' },
                     { palavra: 'como emendar fita de led branco frio', link: 'https://blog.iluminim.com.br/fita-led-tire-todas-suas-duvidas-aqui/', blank: true },
                     { palavra: 'como ligar fita de led branco frio', link: 'https://blog.iluminim.com.br/fita-led-tire-todas-suas-duvidas-aqui/', blank: true },
                     { palavra: 'comprar fita led fria branca 15mts', link: '/fita-led-branco-frio-15-metros?sort=mais_vendidos' },
                  ],
      
                  ["/refletores-de-led"]: [
                     { palavra: 'refletor 100w', link: '/refletor-led-100w' },
                     { palavra: 'refletor led 30w', link: '/refletor-led-30w' },
                     { palavra: 'refletor solar', link: '/refletor-led-solar?sort=mais_vendidos' },
                     { palavra: 'Refletor 200w', link: '/refletor-led-200w' },
                     { palavra: 'Refletor 50w', link: '/refletor-led-50w' },
                     { palavra: 'refletor rgb', link: '/refletor-micro-led-ultra-thin-rgb' },
                     { palavra: 'Refletor verde', link: '/refletor-micro-led-smd-verde' },
                     { palavra: 'refletor 300w', link: '/refletor-led-300w' },
                     { palavra: 'Refletor Holofote MicroLED Slim 100W Branco Frio', link: '/refletor-holofote-microled-100w-branco-frio' },
                     { palavra: 'Refletor Holofote MicroLED Slim 200W Branco Frio', link: '/refletor-micro-led-slim-200w-branco-frio' },
                     { palavra: 'refletor 400w', link: '/refletor-led-400w' },
                     { palavra: 'Kit refletor', link: '/holofotes-led' },
                     { palavra: 'refletor branco quente', link: '/refletor-micro-led-slim-branco-quente' },
                     { palavra: 'Refletor 20w', link: '/refletor-led-20w' },
                     { palavra: 'Refletor Holofote MicroLED Slim 50W Branco Frio', link: '/refletor-holofote-microled-slim-50w-branco-frio-ip66' },
                     { palavra: 'refletor holofote', link: '/refletores-de-led' },
                     { palavra: 'refletor branco frio', link: '/refletor-micro-led-slim-branco-frio' },
                     { palavra: 'refletor com sensor', link: '/refletor-micro-led-com-sensor-de-presenca?sort=mais_vendidos' }
                  ],

                  ["/luminarias-led"]: [
                     { palavra: 'luminaria plafon', link: '/plafon-led', },
                     { palavra: 'luminaria de mesa', link: '/luminaria-de-mesa', },
                     { palavra: 'luminaria solar', link: '/luminaria-solar-led?sort=mais_vendidos', },
                     { palavra: 'luminaria sobrepor', link: '/plafon-led-sobrepor?sort=mais_vendidos', },
                     { palavra: 'Luminaria pendente', link: '/pendente?sort=mais_vendidos', },
                     { palavra: 'luminaria de emergencia', link: '/luminaria-emergencia-led?sort=mais_vendidos', },
                     { palavra: 'luminaria tubular', link: '/lampada-led-tubular?sort=mais_vendidos', },
                     { palavra: 'luminaria externa', link: '/arandela-externa-led?sort=mais_vendidos', },
                     { palavra: 'luminaria publica', link: '/luminarias-publicas-led?sort=mais_vendidos', },
                     { palavra: 'luminaria de embutir', link: '/plafon-led-embutir?sort=mais_vendidos', },
                     { palavra: 'luminaria retangular', link: '/plafon-led-embutir-retangular?sort=mais_vendidos', },
                     { palavra: 'luminaria industrial', link: '/luminaria-led-industrial-highbay?sort=mais_vendidos', },
                     { palavra: 'luminaria tartaruga', link: '/arandela-led?sort=mais_vendidos', },
                     { palavra: 'luminaria parede', link: '/arandela-externa-led?sort=mais_vendidos', },
                     { palavra: 'luminaria de piso', link: '/balizador-led?sort=mais_vendidos', },
                     { palavra: 'luminaria linear', link: '/luminaria-led-18w-linear-retangular-de-sobrepor-60cm', },
                     { palavra: 'luminaria plafon 25w', link: '/plafon-led-25w?sort=mais_vendidos', },
                     { palavra: 'luminaria plafon 18w', link: '/plafon-led-18w?sort=mais_vendidos', },
                     { palavra: 'luminaria calha', link: '/luminaria-led-18w-linear-retangular-de-sobrepor-60cm', },
                     { palavra: 'luminaria cozinha', link: '/plafon-led?sort=mais_vendidos', },
                     { palavra: 'luminaria de chao', link: '/balizador-led?sort=mais_vendidos', },
                     { palavra: 'luminaria plafon embutir', link: '/plafon-led-embutir?sort=mais_vendidos', },
                     { palavra: 'kit luminaria', link: '/kit-plafon?sort=mais_vendidos', },
                     { palavra: 'luminaria 30x30', link: '/kit-5-luminaria-plafon-30x30-32w-led-sobrepor-branco-frio', },
                     { palavra: 'luminaria borda infinita', link: '/plafon-led-borda-infinita?sort=mais_vendidos', },
                     { palavra: 'luminaria 120', link: '/plafon-led-embutir-retangular?sort=mais_vendidos', },
                     { palavra: 'luminaria 40x40', link: '/luminaria-plafon-40x40-32w-led-sobrepor-branco-frio', },
                     { palavra: 'luminaria articulada', link: '/luminaria-de-mesa' },
                  ],

                  ["/plafon-led"]: [
                     { palavra: 'plafon 25w', link: '/plafon-led-25w' },
                     { palavra: 'plafon 18w', link: '/plafon-led-18w' },
                     { palavra: 'plafon 12w', link: '/plafon-led-12w' },
                     { palavra: 'Plafon sobrepor', link: '/plafon-led-sobrepor' },
                     { palavra: 'plafon embutir', link: '/plafon-led-embutir' },
                     { palavra: 'plafon preto', link: '/plafon-led-colorido?sort=mais_vendidos' },
                     { palavra: 'Luminária Plafon 25w LED Sobrepor Branco Frio', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'plafon retangular', link: '/plafon-led-sobrepor-retangular?sort=mais_vendidos' },
                     { palavra: 'plafon 40x40', link: '/luminaria-plafon-40x40-42w-led-sobrepor-branco-frio' },
                     { palavra: 'Plafon 30x30', link: '/luminaria-plafon-30x30-32w-led-sobrepor-branco-frio' },
                     { palavra: 'Luminária Plafon 25w LED Embutir Branco Frio', link: '/luminaria-plafon-25w-led-embutir-branco-frio-quadrado' },
                     { palavra: 'Luminária Plafon 18w LED Embutir Branco Frio', link: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado' },
                     { palavra: 'Kit plafon', link: '/kit-plafon' },
                     { palavra: 'plafon 60x60', link: '/luminaria-plafon-60x60-48w-led-sobrepor-branco-neutro-borda-branca' },
                     { palavra: 'Plafon redondo', link: '/plafon-led-sobrepor-redondo?sort=mais_vendidos' },
                     { palavra: 'Luminária Plafon 18w LED Sobrepor Branco Frio', link: '/luminaria-plafon-18w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'plafon 36w', link: '/plafon-led-36w' },
                     { palavra: 'plafon 6w', link: '/plafon-led-6w' },
                     { palavra: 'plafon 24w', link: '/plafon-led-25w' },
                     { palavra: 'plafon borda infinita', link: '/plafon-led-borda-infinita?sort=mais_vendidos' },
                     { palavra: 'plafon branco quente', link: '/luminaria-plafon-18w-led-embutir-branco-quente-quadrado' },
                     { palavra: 'plafon branco neutro', link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado' },
                     { palavra: 'Luminária Plafon 25w LED Embutir Branco Neutro', link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado' },
                     { palavra: 'plafon sobrepor preto', link: '/luminaria-plafon-18w-led-sobrepor-quadrado-branco-frio-preto' },
                     { palavra: 'Plafon sobrepor 25w', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'Luminária Plafon 12w LED Sobrepor Branco Frio', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'plafon 20x20', link: '/luminaria-plafon-12w-led-sobrepor-branco-neutro-quadrado' },
                     { palavra: 'plafon 25w sobrepor', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'Kit 5 Luminária Plafon LED 25w Embutir Branco Frio', link: '/kit-5-luminaria-plafon-25w-led-sobrepor-quadrado-branco-frio' },
                     { palavra: 'plafon 30x120', link: '/luminaria-plafon-30x120-48w-led-embutir-branco-quente' },
                     { palavra: 'plafon 25w embutir', link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado' },
                     { palavra: 'plafon neutro', link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado' },
                     { palavra: 'Plafon 18w embutir', link: '/plafon-led-18w' },
                     { palavra: 'Plafon 18w sobrepor', link: '/plafon-led-18w' },
                     { palavra: 'plafon 30x60', link: '/luminaria-plafon-30x60-41w-led-embutir-branco-frio-borda-branca' }
                  ],
      
                  ["/spots"]: [
                     { palavra: 'spot led 7w', link: '/spot-led-7w' },
                     { palavra: 'spot led 5w', link: '/spot-led-5w' },
                     { palavra: 'spot led 3w', link: '/spot-led-3w' },
                     { palavra: 'spot sobrepor', link: '/spot-led-sobrepor' },
                     { palavra: 'Spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'Kit spot', link: '/kits-spots-led-dicroica' },
                     { palavra: 'spot duplo', link: '/kit-trilho-eletrificado-1m-2-spot-led-20w-branco-quente-preto' },
                     { palavra: 'spot embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot preto', link: '/spot-led-colorido-' },
                     { palavra: 'spot par 20', link: '/lampada-led-par20-7w-e27-bivolt-branco-neutro-inmetro' },
                     { palavra: 'mini spot', link: '/mini-spot-led-quadrado' },
                     { palavra: 'spot branco quente', link: '/spot-led-smd-7w-redondo-branco-quente' },
                     { palavra: 'spot dicroica', link: '/spot-led-quadrado' },
                     { palavra: 'trilho spot', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot balizador', link: '/balizador-led?sort=mais_vendidos' },
                     { palavra: 'Spot recuado', link: '/spot-led-recuado' },
                     { palavra: 'spot direcionavel', link: '/spot-dicroica-3w-led-direcionavel-corpo-preto' },
                     { palavra: 'spot 12w', link: '/spot-led-12w' },
                     { palavra: 'spot ar111', link: '/lampada-ar111-led-11w-bivolt-gu10-amarela' },
                     { palavra: 'spot ar70', link: '/lampada-led-ar70-7w-gu10-branco-frio' },
                     { palavra: 'spot led quadrado', link: '/spot-led-quadrado?sort=mais_vendidos' },
                     { palavra: 'trilho 4 spots', link: '/kit-trilho-eletrificado-2m-4-spot-led-10w-branco-quente-preto' },
                     { palavra: 'Spot branco frio', link: '/spot-led-smd-5w-redondo-branco-frio' },
                     { palavra: 'Spot 9w', link: '/spot-led-9w' },
                     { palavra: 'spot jardim', link: '/balizador-led-para-jardim?sort=mais_vendidos' },
                     { palavra: 'spot 10w', link: '/spot-led-10w?sort=mais_vendidos' }
                  ],
      
                  ["/fita-de-led"]: [
                     { palavra: 'fita led rgb', link: '/fita-led-rgb' },
                     { palavra: 'Fita led colorida', link: '/fita-led-rgb' },
                     { palavra: 'fita led 5050', link: '/kit-fitas-led-5050' },
                     { palavra: 'Fita led branco quente', link: '/fita-led-branco-quente' },
                     { palavra: 'Fita led branca', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'Fita led branco frio', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'conector fita led', link: '/conectores-led?sort=mais_vendidos' },
                     { palavra: 'Fonte fita led', link: '/fonte-convencional?sort=mais_vendidos' },
                     { palavra: 'Fita led 5050 branco frio', link: '/fita-led-branca' },
                     { palavra: 'Fita led amarela', link: '/fita-led-branco-quente' },
                     { palavra: 'Fita led rgb 5050', link: '/fita-led-rgb-colorida-5050-5-metros-com-fonte' },
                     { palavra: 'Fita led azul', link: '/fita-led-azul?sort=mais_vendidos' },
                     { palavra: 'emenda fita led', link: '/emenda-para-fita-de-led?sort=mais_vendidos' },
                     { palavra: 'Fita led 5 metros', link: '/kit-fitas-led-5-metros' },
                     { palavra: 'Fita led branco morno', link: '/fita-led-branco-morno' },
                     { palavra: 'fita 100 metros', link: '/kit-fitas-led-25-metros' },
                     { palavra: 'Fita led 10 metros', link: '/kit-fitas-led-10-metros' },
                     { palavra: 'fita led 6803', link: '/fita-led-digital-rgb-colorida-6803-5-metros-ip65-com-fonte' },
                     { palavra: 'Kit fita led', link: '/kit-fita-led' },
                     { palavra: 'fita led 3528', link: '/kit-fitas-led-3528' },
                     { palavra: 'Fita LED RGB Colorida 3528 5 metros com Fonte', link: '/fita-led-rgb-colorida-3528-5-metros-com-fonte' },
                     { palavra: 'Fita led com controle', link: '/fita-de-led?sort=mais_vendidos' },
                     { palavra: 'fita led 20 metros', link: '/kit-fitas-led-20-metros' },
                     { palavra: 'fita de led com fonte', link: '/kit-fita-led' },
                     { palavra: 'Fita led 3 metros', link: '/kit-fitas-led-3-metros' },
                     { palavra: 'Fita led 2 metros', link: '/kit-fitas-led-2-metros' },
                     { palavra: 'Fita led 15 metros', link: '/kit-fitas-led-15-metros' },
                     { palavra: 'Fita led 1 metro', link: '/kit-fitas-led-1-metro' },
                     { palavra: 'Fita LED Branco Quente 3528 5 metros com Fonte', link: '/fita-led-branco-quente-3528-5-metros-com-fonte' }
                  ],

                  ["/lampada-led"]: [
                     { palavra: 'lampada led tubular', link: '/lampada-led-tubular?sort=mais_vendidos' },
                     { palavra: 'lampada led bulbo', link: '/lampada-led-bulbo?sort=mais_vendidos' },
                     { palavra: 'lampada led 15w', link: '/lampada-led-15w' },
                     { palavra: 'lampada led 20w', link: '/lampada-led-20w' },
                     { palavra: 'lampada led amarela', link: '/buscar?q=lampada+branco+quente' },
                     { palavra: 'lampada led 12w', link: '/lampada-led-12w' },
                     { palavra: 'lampada led 9w', link: '/lampada-led-9w' },
                     { palavra: 'kit lampada led', link: '/kit-lampadas-de-led' },
                     { palavra: 'lampada led bluetooth', link: '/lampada-led-12w-rgb-com-caixa-de-som-bluetooth-e-controle-remoto' },
                     { palavra: 'lampada inteligente', link: '/lampada-led-bulbo-10w-rgb-bivolt-smart-compativel-com-alexa-elgin' },
                     { palavra: 'lampada camera', link: '/lampada-led-12w-camera-wifi-panoramica-360' },
                     { palavra: 'lampada espiã', link: '/lampada-led-12w-camera-wifi-panoramica-360' },
                     { palavra: 'lampada de filamento', link: '/led-retro?sort=mais_vendidos' },
                     { palavra: 'lampada solar', link: '/luminaria-solar-led-sensor-de-movimento-8-leds' },
                     { palavra: 'lampada smart', link: '/lampada-led-bulbo-10w-rgb-bivolt-smart-compativel-com-alexa-elgin' },
                     { palavra: 'lampada dicroica', link: '/lampada-dicroica' },
                     { palavra: 'lampada retro', link: '/led-retro?sort=mais_vendidos' },
                     { palavra: 'lampada e27', link: '/lampada-led-e27' },
                     { palavra: 'lampada wifi', link: '/lampada-led-bulbo-10w-rgb-bivolt-smart-compativel-com-alexa-elgin' },
                     { palavra: 'bocal de lampada', link: '/soquete-led?sort=mais_vendidos' },
                     { palavra: 'lampada rgb', link: '/lampada-led-rgb' },
                     { palavra: 'lampadas decorativas', link: '/lampada-led-colorida' },
                     { palavra: 'lampada colorida', link: '/lampada-led-colorida' },
                     { palavra: 'lampada com sensor de presença', link: '/sensor-de-presenca?sort=mais_vendidos' },
                     { palavra: 'varal de lampadas', link: '/varal-de-lampadas-5-metros-iluminacao-externa-preto' },
                     { palavra: 'lampada led quadrada', link: '/spot-led-quadrado?sort=mais_vendidos' },
                     { palavra: 'lampada led automotiva', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'lampada de emergencia', link: '/luminaria-emergencia-led?sort=mais_vendidos' }
                  ],
      
                  ["/acessorios-para-leds"]: [
                     {
                           "palavra": "filtro de linha",
                           "link": "/filtro-de-linha-6-tomadas-com-disjuntor"
                     },
                     {
                           "palavra": "sensor de presença",
                           "link": "/sensor-de-presenca?sort=mais_vendidos"
                     },
                     {
                           "palavra": "cabo coaxial",
                           "link": "/cabo-de-energia?sort=mais_vendidos"
                     },
                     {
                           "palavra": "extensão tomada",
                           "link": "/interruptores-tomadas-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "dimmer",
                           "link": "/dimmer-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "tomada dupla",
                           "link": "/conjunto-tomada-distanciadas-2pt-de-embutir-10a-modular"
                     },
                     {
                           "palavra": "espelho de tomada",
                           "link": "/conjunto-placa-para-1-interruptor-1-tomada"
                     },
                     {
                           "palavra": "soquete e27",
                           "link": "/soquete-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "soquete para lampada",
                           "link": "/soquete-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "lampada com sensor de presença",
                           "link": "/sensor-presenca-soquete-e27-automatico"
                     },
                     {
                           "palavra": "tomada 20 amperes",
                           "link": "/conjunto-tomada-2pt-de-embutir-20a-modular"
                     },
                     {
                           "palavra": "interruptor com tomada",
                           "link": "/conjunto-interruptor-1-tecla-simples-tomada-20a-modular"
                     },
                     {
                           "palavra": "plug de tomada",
                           "link": "/adaptador-soquete-lampada-led-e27-com-tomada-plug-bipino"
                     },
                     {
                           "palavra": "rele fotoeletrico",
                           "link": "/rele-fotoeletrico?sort=mais_vendidos"
                     },
                     {
                           "palavra": "regua tomada",
                           "link": "/filtro-de-linha-6-tomadas-com-disjuntor"
                     },
                     {
                           "palavra": "tomada industrial",
                           "link": "/interruptores-tomadas-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "tomada preta",
                           "link": "/interruptores-tomadas-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "tomada rj45",
                           "link": "/interruptores-tomadas-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "fonte para fita de led",
                           "link": "/fonte-convencional?sort=mais_vendidos"
                     },
                     {
                           "palavra": "soquete g9",
                           "link": "/soquete-lampada-led-halopin-g9"
                     },
                     {
                           "palavra": "dimmer para led",
                           "link": "/dimmer-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "soquete gu10",
                           "link": "/soquete-lampada-led-GU10"
                     },
                     {
                           "palavra": "fonte para led",
                           "link": "/fonte-convencional?sort=mais_vendidos"
                     },
                     {
                           "palavra": "conector fita led",
                           "link": "/conectores-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "chip led 50w",
                           "link": "/chip-de-refletor-50w-branco-frio"
                     },
                     {
                           "palavra": "emenda fita led",
                           "link": "/emenda-para-fita-de-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "led controle remoto",
                           "link": "/controles?sort=mais_vendidos"
                     },
                     {
                           "palavra": "chip de led",
                           "link": "/chip-led?sort=mais_vendidos"
                     }
                  ],
      
                  ["/pendente"]: [
                     { palavra: 'Lustre pendente', link: '/lustre-pendente?sort=ultimos_produtos' },
                     { palavra: 'Pendente aramado', link: '/pendente-aramado?sort=mais_vendidos' },
                     { palavra: 'Pendente preto', link: '/pendente-cone-preto-e27' },
                     { palavra: 'Pendente cristal', link: '/pendente-cristal-bolhas-led-7w-30cm' },
                     { palavra: 'Pendente madeira', link: '/pendente-de-madeira?sort=mais_vendidos' },
                     { palavra: 'Kit pendente', link: '/kit-pendentes?sort=mais_vendidos' },
                     { palavra: 'pendente retangular', link: '/pendente-quadrado?sort=mais_vendidos' },
                     { palavra: 'pendente dourado', link: '/pendente-fluire-metal-led-dourado' },
                     { palavra: 'pendente industrial', link: '/pendente-industrial?sort=mais_vendidos' },
                     { palavra: 'Pendente duplo', link: '/pendente-perola-arco-preto-fosco-g45-2-lampadas' },
                     { palavra: 'Pendente para quarto', link: '/pendente-aluminio-tulipa-18cm-preto' },
                     { palavra: 'Pendente cozinha', link: '/pendente-aluminio-tulipa-18cm-preto' },
                     { palavra: 'Pendente bola', link: '/pendente-perola-libra-preto-fosco-3-lampadas-g45' },
                     { palavra: 'pendente tubo', link: '/pendente-aramado-base-concreto-e27' },
                     { palavra: 'Pendente cobre', link: '/pendente-cobre-e27' },
                     { palavra: 'Pendente globo', link: '/pendente-perola-constelacao-preto-fosco-6-lampadas-g45' },
                     { palavra: 'Pendente corda', link: '/pendente-corda-1m-e27' },
                     { palavra: 'Pendente triplo', link: '/pendente-perola-libra-preto-fosco-3-lampadas-g45' },
                     { palavra: 'Pendente cone', link: '/pendente-cone?sort=mais_vendidos' },
                     { palavra: 'Pendente gota', link: '/pendente-gota?sort=mais_vendidos' },
                     { palavra: 'Pendente rose', link: '/pendente-aluminio-cone-rose-gold-e27' },
                     { palavra: 'Pendente jabuticaba', link: '/pendente-perola-gota-preto-fosco-2-lampadas-g45' },
                     { palavra: 'Pendente redondo', link: '/pendente-aluminio-redondo-preto-gu24' },
                     { palavra: 'Pendente vidro', link: '/pendente-de-metal-cromado-e-vidro-transparente' },
                     { palavra: 'Pendente vermelho', link: '/buscar?q=pendente+vermelho' },
                     { palavra: 'Pendente rústico', link: '/pendente-de-madeira?sort=mais_vendidos' },
                     { palavra: 'pendente silicone', link: '/buscar?q=pendente+silicone' },
                     { palavra: 'Pendente moderno', link: '/pendente-cage-metal-led-branco-quente-cobre-fosco-500mm' },
                     { palavra: 'pendente concreto', link: '/pendente-aramado-base-concreto-e27' },
                     { palavra: 'Pendente LED 7W Cristal Bolhas 30cm', link: '/pendente-cristal-bolhas-led-7w-30cm' },
                     { palavra: 'Pendente sputinik', link: '/pendente-perola-constelacao-preto-fosco-6-lampadas-g45' },
                     { palavra: 'Mini Pendente Verde Retro E27', link: '/mini-pendente-verde-retro-e27' }
                  ],
      
                  ["/luminarias-publicas-led"]: [
                     { palavra: 'luminária pública 150w', link: '/luminaria-led-publica-150w-branco-frio' },
                     { palavra: 'luminária pública 100w', link: '/luminaria-led-publica-100w-branco-frio' },
                     { palavra: 'luminária pública 200w', link: '/luminaria-publica-ultra-led-smd-200w-branco-frio' },
                     { palavra: 'luminaria publica solar', link: '/luminaria-publica-solar-led-150w-branco-frio-com-sensor' },
                     { palavra: 'Luminária Pública 50w Branco Frio', link: '/luminaria-led-publica-50w-branco-frio' },
                     { palavra: 'luminária pública 50w', link: '/luminaria-publica-led-50w-externa-para-poste-branco-frio' },
                     { palavra: 'Luminária Pública 150w Branco Frio', link: '/luminaria-led-publica-150w-branco-frio' },
                     { palavra: 'Luminária Pública 100W Branco Frio', link: '/luminaria-publica-led-100w-externa-para-poste-branco-frio' },
                     { palavra: 'Luminária Pública SMD 50W Branco Frio', link: '/luminaria-publica-led-50w-externa-para-poste-branco-frio' },
                     { palavra: 'Luminária Pública 100w Branco Frio Fotoeletrico', link: '/luminaria-publica-ultra-led-smd-100w-branco-frio-fotoeletrico' },
                     { palavra: 'luminária pública fotoeletrico', link: '/luminaria-publica-ultra-led-smd-50w-branco-frio-fotoeletrico' },
                     { palavra: 'Luminária Pública 200w Branco Frio', link: '/luminaria-led-publica-200w-branco-frio-para-poste' },
                     { palavra: 'Luminária Pública Ultra 50w Branco Frio', link: '/luminaria-publica-ultra-led-smd-50w-branco-frio-fotoeletrico' },
                     { palavra: 'Luminária Pública 50w Branco Frio Fotoeletrico', link: '/luminaria-publica-ultra-led-smd-50w-branco-frio-fotoeletrico' },
                     { palavra: '30w luminaria publica', link: '/luminaria-publica-micro-led-30w-externa-para-poste-branco-frio' },
                     { palavra: 'Kit Luminária Pública 100w Branco Frio', link: '/kit-5-luminaria-publica-ultra-led-smd-100w-branco-frio' },
                     { palavra: 'Luminária Pública SMD 150w Branco Frio', link: '/luminaria-ultra-led-smd-publica-150w-branco-frio-para-rua' },
                     { palavra: 'Luminária Pública SMD 200w Branco Frio', link: '/luminaria-publica-ultra-led-smd-200w-branco-frio' },
                     { palavra: 'Kit 5 Luminária Pública 30w Branco Frio', link: '/kit-5-luminaria-publica-led-smd-30w-branco-frio' },
                     { palavra: 'Kit 5 Luminária Pública 50w Branco Frio', link: '/kit-5-luminaria-publica-super-led-50w-branco-frio' }
                  ],
      
                  ["/luminaria-de-mesa"]: [
                     {
                           "palavra": "luminaria de mesa articulada",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa de jantar",
                           "link": "/pendente?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminarias de mesa para quarto",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa com garra",
                           "link": "/luminaria-led-para-leitura-livro-pc-dj-mesa-partitura"
                     },
                     {
                           "palavra": "luminaria de mesa infantil",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa preta",
                           "link": "/buscar?q=lumin%C3%A1ria+mesa+preta"
                     },
                     {
                           "palavra": "luminaria de mesa rosa",
                           "link": "/luminaria-touch-sem-fio-3-niveis-luz-14-leds-rosa"
                     },
                     {
                           "palavra": "luminaria de mesa branca",
                           "link": "/buscar?q=lumin%C3%A1ria+mesa+branca"
                     },
                     {
                           "palavra": "lampada para luminaria de mesa",
                           "link": "/lampada-led"
                     },
                     {
                           "palavra": "luminaria de mesa recarregável",
                           "link": "/buscar?q=lumin%C3%A1ria+mesa+recarreg%C3%A1vel"
                     },
                     {
                           "palavra": "luminaria de mesa azul",
                           "link": "/luminaria-de-mesa-led-4w-portatil-com-entrada-usb-azul"
                     },
                     {
                           "palavra": "luminaria de mesa flexivel",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa moderna",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa usb",
                           "link": "/buscar?q=lumin%C3%A1ria+usb"
                     },
                     {
                           "palavra": "luminaria de mesa articulada com garra",
                           "link": "/luminaria-led-para-leitura-livro-pc-dj-mesa-partitura"
                     },
                     {
                           "palavra": "luminaria de mesa led touch",
                           "link": "/buscar?q=lumin%C3%A1ria+touch"
                     },
                     {
                           "palavra": "luminaria de mesa verde",
                           "link": "/luminaria-touch-sem-fio-3-niveis-luz-14-leds-verde"
                     },
                     {
                           "palavra": "preço de luminaria de mesa",
                           "link": "/luminaria-de-mesa?sort=%2Bpreco"
                     },
                     {
                           "palavra": "luminaria de mesa colorida",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa laranja",
                           "link": "/luminaria-led-usb-para-notebook-laranja"
                     }
                  ],
      
                  ["/arandela-led"]: [
                     { palavra: 'Arandelas', link: '/arandela-externa-led?sort=%2Bnome' },
                     { palavra: 'Arandela externa', link: '/arandela-externa-led?sort=mais_vendidos' },
                     { palavra: 'arandela colonial', link: '/luminaria-arandela-led-40w-bojo-madeira-ipe' },
                     { palavra: 'Arandela de parede', link: '/arandela-led?sort=mais_vendidos' },
                     { palavra: 'Arandela interna', link: '/arandela-interna-led?sort=mais_vendidos' },
                     { palavra: 'arandela preta', link: '/lumiaria-arandela-led-frisada-preta' },
                     { palavra: 'arandela tartaruga', link: '/luminaria-arandela-led-8w-sobrepor-tartaruga-branco-frio-branca' },
                     { palavra: 'luminaria arandela', link: '/arandela-led?sort=mais_vendidos' },
                     { palavra: 'Arandela slim', link: '/lumiaria-arandela-led-frisada-preta' },
                     { palavra: 'arandela 2 fachos', link: '/luminaria-arandela-led-20w-arredondada-branco-quente' },
                     { palavra: 'Arandela muro', link: '/luminaria-arandela-led-5w-sobrepor-tartaruga-branco-frio-preto' },
                     { palavra: 'Arandela banheiro', link: '/luminaria-arandela-led-4w-externa-branco-quente-branca' },
                     { palavra: 'kit arandela', link: '/arandela-externa-led?sort=%2Bnome' },
                     { palavra: 'Arandela 2 fachos', link: '/luminaria-arandela-led-4w-sobrepor-quadrada-branco-neutro-branca' },
                     { palavra: 'Arandela 2 focos', link: '/luminaria-arandela-led-4w-sobrepor-quadrada-branco-neutro-branca' },
                     { palavra: 'Arandela articulada', link: '/luminaria-arandela-led-6w-cubo-direcionavel-branco-quente-preta' },
                     { palavra: 'Arandela quadrada', link: '/luminaria-arandela-led-6w-cubo-direcionavel-branco-quente-preta' },
                     { palavra: 'Arandela marrom', link: '/luminaria-arandela-led-3w-quadrada-bivolt-branco-quente-quente-marrom' },
                     { palavra: 'arandela 12w', link: '/luminaria-arandela-led-12w-sobrepor-tartaruga-branco-quente-branca' },
                     { palavra: 'arandela parede 18w', link: '/luminaria-arandela-led-18w-sobrepor-branco-frio' },
                     { palavra: 'Arandela quarto', link: '/arandela-interna-led?sort=mais_vendidos' },
                     { palavra: 'arandela branco quente', link: '/luminaria-arandela-led-8w-sobrepor-branco-quente-preto' },
                     { palavra: 'Arandela jardim', link: '/lumiaria-arandela-led-frisada-preta' },
                     { palavra: 'Arandela sobrepor', link: '/arandela-led?sort=mais_vendidos' }
                  ],
      
                  ["/lampada-led-bulbo"]: [
                     { palavra: 'lampada bulbo led 15w', link: '/lampada-led-bulbo-15w-e27-bivolt-branca-inmetro' },
                     { palavra: 'lampada bulbo e27', link: '/lampada-led-bulbo-9w-residencial-branco-quente-bivolt' },
                     { palavra: 'lampada bulbo filamento', link: '/lampada-led-bulbo-a60-4w-vintage-carbon-branco-quente' },
                     { palavra: 'lampada bulbo leitoso', link: '/lampada-led-g95-4w-leitosa-branco-frio-filamento-inmetro' },
                     { palavra: 'lâmpada led colorida', link: '/lampada-led-colorida' },
                     { palavra: 'lâmpada fria', link: '/lampada-led-bulbo-10w-e27-bivolt-branca-amarela-inmetro' },
                     { palavra: 'lâmpada dimerizavel', link: '/lampada-led-bulbo-dimerizavel-e27-11w-branco-quente-inmetro' },
                     { palavra: 'lâmpada led 60w', link: '/lampada-led-70w' },
                     { palavra: 'lâmpada led branco quente', link: '/lampada-led-bulbo-9w-residencial-branco-quente-bivolt' },
                     { palavra: 'lâmpada vintage retrô', link: '/led-retro' },
                     { palavra: 'lâmpada vermelha', link: '/lampada-led-bulbo-6w-e27-vermelho-bivolt' },
                     { palavra: 'lâmpada quadrada', link: '/spot-led-quadrado?sort=mais_vendidos' },
                     { palavra: 'lâmpada amarela decorativa', link: '/lampada-led-bulbo-repelente-9w-e27-bivolt-amarela-inmetro' },
                     { palavra: 'lâmpadas super branca', link: '/lampada-led-g95-4w-leitosa-branco-frio-filamento-inmetro' },
                     { palavra: 'lâmpada led bulbo 20w', link: '/lampada-led-20w' },
                     { palavra: 'lâmpada led 12w', link: '/lampada-led-12w' },
                     { palavra: 'kit lâmpada de led', link: '/kit-lampadas-de-led' },
                     { palavra: 'lâmpada de bluetooth', link: '/lampada-led-bulbo-10w-rgb-bivolt-smart-compativel-com-alexa-elgin' },
                     { palavra: 'lâmpada de led com controle remoto', link: '/lampada-led-bulbo-5w-e27-bivolt-rgb-com-controle-inmetro' },
                     { palavra: 'lâmpada de led 30 watts', link: '/lampada-led-30w' },
                     { palavra: 'lampada bulbo led 20w', link: '/lampada-led-alta-potencia-20w-bivolt-branco-frio' },
                     { palavra: 'lampada bulbo 50w', link: '/lampada-led-alta-potencia-50w-branco-frio' },
                     { palavra: 'lampada bulbo led 50w', link: '/lampada-led-alta-potencia-50w-branco-frio' },
                     { palavra: 'lampada bulbo 9w', link: '/lampada-led-9w' },
                     { palavra: 'lampada bulbo 40w', link: '/lampada-led-alta-potencia-50w-branco-frio' },
                     { palavra: 'lampada bulbo 100w', link: '/lampada-led-alta-potencia-100-w-branco-frio' },
                     { palavra: 'lampada bulbo 30w', link: '/lampada-led-alta-potencia-30w-bivolt-branco-frio' },
                     { palavra: 'lampada bulbo 12w', link: '/lampada-led-bulbo-12w-e27-bivolt-branca-amarela-inmetro' },
                     { palavra: 'lampada bulbo dimerizavel', link: '/lampada-led-bulbo-dimerizavel-e27-11w-branco-quente-inmetro' },
                     { palavra: 'lampada bulbo 16w', link: '/lampada-led-bulbo-16w-residencial-branco-frio-bivolt' },
                     { palavra: 'lampada bulbo 60w', link: '/lampada-led-alta-potencia-70w-branco-frio-inmetro' }
                  ],
      
                  ["/refletor-micro-led-slim"]: [
                     { palavra: 'refletor 100w', link: '/refletor-led-100w' },
                     { palavra: 'refletor led 30w', link: '/refletor-led-30w' },
                     { palavra: 'refletor solar', link: '/refletor-led-solar?sort=mais_vendidos' },
                     { palavra: 'Refletor 200w', link: '/refletor-led-200w' },
                     { palavra: 'Refletor 50w', link: '/refletor-led-50w' },
                     { palavra: 'refletor rgb', link: '/refletor-micro-led-ultra-thin-rgb' },
                     { palavra: 'Refletor verde', link: '/refletor-micro-led-smd-verde' },
                     { palavra: 'refletor 300w', link: '/refletor-led-300w' },
                     { palavra: 'Refletor Holofote MicroLED Slim 100W Branco Frio', link: '/refletor-holofote-microled-100w-branco-frio' },
                     { palavra: 'Refletor Holofote MicroLED Slim 200W Branco Frio', link: '/refletor-micro-led-slim-200w-branco-frio' },
                     { palavra: 'refletor 400w', link: '/refletor-led-400w' },
                     { palavra: 'Kit refletor', link: '/holofotes-led' },
                     { palavra: 'refletor branco quente', link: '/refletor-micro-led-slim-branco-quente' },
                     { palavra: 'Refletor 20w', link: '/refletor-led-20w' },
                     { palavra: 'Refletor Holofote MicroLED Slim 50W Branco Frio', link: '/refletor-holofote-microled-slim-50w-branco-frio-ip66' },
                     { palavra: 'refletor holofote', link: '/refletores-de-led' },
                     { palavra: 'refletor branco frio', link: '/refletor-micro-led-slim-branco-frio' },
                     { palavra: 'refletor com sensor', link: '/refletor-micro-led-com-sensor-de-presenca?sort=mais_vendidos' }
                  ],

                  ["/lustre"]: [
                     { palavra: 'Lustre pendente', link: '/lustre-pendente?sort=ultimos_produtos' },
                     { palavra: 'Lustre cristal', link: '/lustre-de-cristal-pendente-retangular-branco-gelo-27x80' },
                     { palavra: 'Lustre sala', link: '/gxt06bvsn-lustre-de-cristal-k9-pendente-quadrado-30x60' },
                     { palavra: 'Lustre quarto', link: '/lustre-de-cristal-k9-plafon-led-quadrado-40x40' },
                     { palavra: 'Lustre para sala de jantar', link: '/pendente-bolhas-led-cristal-retangular-2m' },
                     { palavra: 'Lustre preto', link: '/lustre-de-cristal-pendente-redondo-floresta-40x20-preto' },
                     { palavra: 'Lustre madeira', link: '/lustre' },
                     { palavra: 'Lustre moderno', link: '/lustre-metal-e-acrilico-pendente-led-3-arcos' },
                     { palavra: 'Lustre candelabro', link: '/lustre-candelabro-de-cristal-60-x-47-x-60-cm' },
                     { palavra: 'Lustre quadrado', link: '/lustre-de-cristal-k9-plafon-led-quadrado-3-cores-50x50' },
                     { palavra: 'Lustre redondo', link: '/lustre-de-cristal-k9-plafon-led-redondo-3-cores-40cm' },
                     { palavra: 'Lustre plafon', link: '/lustre-de-cristal-k9-plafon-led-quadrado-3-cores-40x40' },
                     { palavra: 'Lustre de parede', link: '/lustre-de-parede?sort=mais_vendidos' },
                     { palavra: 'Lustre jabuticaba', link: '/pendente-perola-10-globos-cobre' },
                     { palavra: 'Lustre aramado', link: '/pendente-aramado-bronze-e27' },
                     { palavra: 'Lustre dourado', link: '/lustre-de-cristal-pendente-retangular-champanhe-27x80' },
                     { palavra: 'Lustre retangular', link: '/lustre-de-cristal-pendente-retangular-champanhe-27x80' },
                     { palavra: 'lustre industrial', link: '/pendente-triangulo-de-madeira-led-embutido-branco-quente' },
                     { palavra: 'Lustre cozinha', link: '/lustre-de-cristal-champanhe-cascata-k9-plafon-redondo-35x24' },
                     { palavra: 'lustre quadrado 40x40', link: '/lustre-de-cristal-k9-plafon-led-quadrado-3-cores-40x40' },
                     { palavra: 'Lustre rústico', link: '/pendente-perola-constelacao-preto-fosco-6-lampadas-g45' },
                     { palavra: 'Lustre sputinik', link: '/pendente-perola-10-globos-cobre' },
                     { palavra: 'lampada lustre', link: '/vela-led?sort=mais_vendidos' },
                     { palavra: 'Lustre bola', link: '/pendente-perola-constelacao-preto-fosco-6-lampadas-g45' },
                     { palavra: 'Lustre de teto', link: '/lustre' },
                     { palavra: 'Lustre cobre', link: '/lustre' },
                     { palavra: 'Lustre vintage', link: '/lustre' },
                     { palavra: 'Arco lustre', link: '/lustre-metal-e-acrilico-pendente-led-1-arco' },
                     { palavra: 'Lustre anel', link: '/lustre-metal-e-acrilico-pendente-led-3-arcos' },
                     { palavra: 'Lustre de Cristal K9 Pendente Redondo 40x60', link: '/lustre-de-cristal-k9-pendente-redondo-40x60' }
                  ],

                  ['/led-friday']: [
                     { palavra: 'rgb black friday', link: '/buscar?q=RGB&sort=mais_vendidos' },
                     { palavra: 'arandela black friday', link: '/arandela-led?sort=mais_vendidos' },
                     { palavra: 'Pendente black friday', link: '/pendente?sort=mais_vendidos' },
                     { palavra: 'plafon 25w black friday', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'spot led 7w black friday', link: '/spot-7w-dicroica-led-base-branca' },
                     { palavra: 'Fita led black friday', link: '/fita-de-led?sort=mais_vendidos' },
                     { palavra: 'Plafon black friday', link: '/plafon-led?sort=mais_vendidos' },
                     { palavra: 'Spot black friday', link: '/spots?sort=mais_vendidos' },
                     { palavra: 'refletor 100w black friday', link: '/refletor-microled-ultra-thin-100w-branco-frio-preto' },
                     { palavra: 'plafon 18w black friday', link: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado' },
                     { palavra: 'Trilho black friday', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'Lustre black friday', link: '/lustre?sort=mais_vendidos' },
                     { palavra: 'lampada led black friday', link: '/lampada-led?sort=mais_vendidos' },
                     { palavra: 'Luminária black friday', link: '/luminarias-led?sort=mais_vendidos' },
                     { palavra: 'solar black friday', link: '/buscar?q=solar&sort=mais_vendidos' },
                     { palavra: 'balizador black friday', link: '/balizador-led?sort=mais_vendidos' },
                     { palavra: 'Tomada black friday', link: '/interruptores-tomadas-led?sort=mais_vendidos' },
                     { palavra: 'Plafon sobrepor black friday', link: '/plafon-led-sobrepor?sort=mais_vendidos' },
                     { palavra: 'Interruptor black friday', link: '/interruptores-tomadas-led?sort=mais_vendidos' },
                     { palavra: 'perfil black friday', link: '/buscar?q=perfil' }
                  ],

                  ['/luminaria-de-teto']: [
                     { palavra: 'luminaria plafon', link: '/plafon-led' },
                     { palavra: 'luminaria sobrepor', link: '/plafon-led-sobrepor?sort=mais_vendidos' },
                     { palavra: 'luminaria tubular', link: '/lampada-led-tubular?sort=mais_vendidos' },
                     { palavra: 'luminaria retangular', link: '/plafon-led-embutir-retangular?sort=mais_vendidos' },
                     { palavra: 'luminaria industrial', link: '/luminaria-led-industrial-highbay?sort=mais_vendidos' },
                     { palavra: 'luminaria plafon 25w', link: '/plafon-led-25w?sort=mais_vendidos' },
                     { palavra: 'luminaria plafon 18w', link: '/plafon-led-18w?sort=mais_vendidos' },
                     { palavra: 'luminaria cozinha', link: '/plafon-led?sort=mais_vendidos' },
                     { palavra: 'luminaria plafon embutir', link: '/plafon-led-embutir?sort=mais_vendidos' },
                     { palavra: 'kit luminaria', link: '/kit-plafon?sort=mais_vendidos' },
                     { palavra: 'Pendente aramado', link: '/pendente-aramado?sort=mais_vendidos' },
                     { palavra: 'Pendente preto', link: '/pendente-cone-preto-e27' },
                     { palavra: 'Pendente cristal', link: '/pendente-cristal-bolhas-led-7w-30cm' },
                     { palavra: 'Pendente madeira', link: '/pendente-de-madeira?sort=mais_vendidos' },
                     { palavra: 'Kit pendente', link: '/kit-pendentes?sort=mais_vendidos' },
                     { palavra: 'Lustre sala', link: '/gxt06bvsn-lustre-de-cristal-k9-pendente-quadrado-30x60' },
                     { palavra: 'Lustre pendente', link: '/lustre-pendente?sort=ultimos_produtos' },
                     { palavra: 'Lustre candelabro', link: '/lustre-candelabro?sort=mais_vendidos' },
                     { palavra: 'Lustre de teto', link: '/lustre?sort=mais_vendidos' },
                     { palavra: 'Lustre plafon', link: '/lustre-plafon?sort=mais_vendidos' }
                  ]
      
               }

               let LEDFriday = {
                  ["/refletor-led-friday"]: config["/refletores-de-led"],
                  ["/luminarias-led-friday"]: config["/luminarias-led"],
                  ["/plafon-led-friday"]: config["/plafon-led"],
                  ["/spot-led-friday"]: config["/spots"],
                  ["/lampada-led-friday"]: config["/lampada-led"],
                  ["/acessorios-led-friday"]: config["/acessorios-para-leds"],
                  ["/pendente-led-friday"]: config["/pendente"],
                  ["/lustre-led-friday"]: config["/lustre"],
                  ["/fita-led-friday"]: config["/fita-de-led"],
               }

               config = { ...config, ...LEDFriday };

               //console.log('Path name Led Friday', config[window.location.pathname]);

               return config[window.location.pathname];
      
         },
      
         gerarHTML(){
      
               let palavras = this.gerarObjeto();
      
               if(!palavras){
                  return;
               }
      
               let html = palavras.map(item=> {
      
                  return `
                     <li>
                           <a href="${item.link}" title="${item.palavra}" alt="${item.palavra}" ${item.blank ? 'target="_blank" rel="noopener"' : ''}>
                              <label>${item.palavra}</label>
                           </a>
                     </li>
                  `;
      
               });
      
               return {
      
                  html_palavras_rodape: `
                     <div class="palavras-mais-buscadas">
                           <div class="conteudo-titulo-palavras-buscadas">
                              <span>Produtos em alta</span>
                           </div> 

                           <div class="conteudo-lista-palavras-mais-buscadas">
                              <ul class="lista-palavras-mais-buscadas">
                                 ${html.join('')}
                              </ul>
                           </div>
                     </div>
                  `,
      
                  html_palavras_lateral: `
                     <div class="lateral outras filtro-coluna filtro-lista-personalizada palavras-mais-buscadas-lateral">
                           <div class="filtro lista borda-principal">
                              <h4 class="titulo cor-secundaria">Produtos em alta</h4>
                              <div class="atributo-lista">
                                 <ul>
                                       ${html.slice(0, 10).join('')}
                                 </ul>
                              </div>
                           </div>
                     </div>
                  `,
      
               };
      
         },
      
         renderizar(){
      
               let { html_palavras_rodape, html_palavras_lateral } = this.gerarHTML() || {};
   
               if(!html_palavras_rodape || !html_palavras_lateral){
                  return;
               }
   
               $('.pagina-categoria #corpo .conteudo.span9').append(html_palavras_rodape);
               $('.pagina-categoria .coluna.span3').append(html_palavras_lateral);

         },
      
      }

      PalavrasMaisBuscadas.renderizar();

   },

   pesquisasEmAlta(){
                              
      let PesquisasEmAlta = {

         gerarObjeto(){

               let config = {

                  ['/refletores-holofotes-led']: {

                     termos: [{
                        termo: 'Refletor',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-mini-19-08-21.png',
                        link: '/refletores-de-led'
                     },
                     {
                        termo: 'refletor 100w',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-slim-18-08-21.png',
                        link: '/refletor-led-100w'
                     },
                     {
                        termo: 'refletor solar',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-solar-19-08-21.png',
                        link: '/refletor-led-solar?sort=mais_vendidos'
                     },
                     {
                        termo: 'refletor led 30w',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-30w-23-08-21.jpg',
                        link: '/refletor-led-30w'
                     },
                     {
                        termo: 'Refletor 200W',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-200w-23-08-21.jpg',
                        link: '/refletor-led-200w'
                     }]

                  },

                  ['/luminarias-plafons-led']: {

                     termos: [{
                           termo: 'plafon 25w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
                           link: '/plafon-led-25w?sort=mais_vendidos'
                     },
                     {
                           termo: 'plafon',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Redondo-20-08-21.jpg',
                           link: '/plafon-led?sort=mais_vendidos'
                     },
                     {
                           termo: 'arandela',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-arandela.png',
                           link: '/arandela-led?sort=mais_vendidos'
                     },
                     {
                           termo: 'Pendente',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/pendente-led-19-08-21.png',
                           link: '/pendente?sort=mais_vendidos'
                     },
                     {
                           termo: 'plafon 18w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-embutir-19-08-21.png',
                           link: '/plafon-led-18w?sort=mais_vendidos'
                     }]
      
                  },

                  ['/spots-led-']: {

                     termos: [
                           {
                              termo: 'spot led 7w',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-7w-23-08-21.jpg',
                              link: '/spot-led-7w'
                           },
                           {
                              termo: 'spot led 5w',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-dicroica-redondo-19-08-21.png',
                              link: '/spot-led-5w'
                           },
                           {
                              termo: 'spot led 3w',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-3w-23-08-21.jpg',
                              link: '/spot-led-3w'
                           },
                           {
                              termo: 'Spot',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-dicroica-23-08-21.jpg',
                              link: '/spots'
                           },
                           {
                              termo: 'trilho',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-com-trilho-23-08-21.jpg',
                              link: '/spot-led-trilho-eletrificado?sort=mais_vendidos'
                           },
                     ]

                  },

                  ['/fita-de-led']: {

                     termos: [
                           {
                              termo: 'Fita led',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Frio-19-08-2021-menu.png',
                              link: '/fita-de-led'
                           },
                           {
                              termo: 'Fita led rgb',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
                              link: '/fita-led-rgb?sort=mais_vendidos'
                           },
                           {
                              termo: 'fita led 5050',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Quente-19-08-2021-menu.png',
                              link: '/kit-fitas-led-5050'
                           },
                           {
                              termo: 'Fio',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Frio-19-08-2021-menu.png',
                              link: '/fita-de-led'
                           },
                           {
                              termo: 'Fita led colorida',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
                              link: '/fita-led-rgb?sort=mais_vendidos'
                           },
                     ]

                  },

                  ['/lampadas-led']: {

                     termos: [{
                           termo: 'lampada led 12w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-12w-23-08-21.jpg',
                           link: '/lampada-led-12w'
                     },
                     {
                           termo: 'lampada led 15w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-15w-23-08-21.jpg',
                           link: '/lampada-led-15w'
                     },
                     {
                           termo: 'lampada led 5w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-5w-23-08-21.jpg',
                           link: '/lampada-led-5w'
                     },
                     {
                           termo: 'lampada led 7w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-7w-23-08-21.jpg',
                           link: '/lampada-led-7w'
                     },
                     {
                           termo: 'lampada led 9w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-9w-23-08-21.jpg',
                           link: '/lampada-led-9w'
                     }]

                  },

                  ['/acessorios-para-leds']: {

                     termos: [
                           {
                              termo: 'fonte',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fonte Chaveada LED-20-10-21.png',
                              link: '/fonte-chaveada-led?sort=mais_vendidos'
                           },
                           {
                              termo: 'Tomada',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/tomada-23-08-21.jpg',
                              link: '/interruptores-tomadas-led?sort=mais_vendidos'
                           },
                           {
                              termo: 'sensor',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/sensor-23-08-21.jpg',
                              link: '/sensor-de-presenca?sort=mais_vendidos'
                           },
                           {
                              termo: 'Interruptor',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/interruptor-23-08-21.jpg',
                              link: '/interruptores-tomadas-led?sort=mais_vendidos'
                           },
                           {
                              termo: 'soquete',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/soquete-23-08-21.jpg',
                              link: '/soquete-led?sort=mais_vendidos'
                           },
                     ]

                  },

               }

               return config[window.location.pathname] || {};
               
         },

         gerarHTML(){

               let { termos } = this.gerarObjeto();

               if(!termos){
                  return;
               }

               let html = termos.map(item=> {

                  return `
                     <a href="${item.link}" class="item-pesquisas-em-alta">
                           <div class="item-pesquisa-textos">
                              <div class="nome-pesquisas">${item.termo}</div>
                           </div>
                           <div class="item-pesquisa-imagem"><img alt="${item.termo}" title="${item.termo}" src="${item.imagem}"></div>
                     </a>
                  `;

               }).join('');

               return `
                  <div class="pesquisas-em-alta">
                     <div class="titulo-pesquisas-em-alta">Pesquisas em alta</div>
                     <div class="conteudo-pesquisas-em-alta">
                           ${html}
                     </div>
                  </div>
               `;

         },

         renderizar(){

               if(screen.width > 767){

                  let html = this.gerarHTML();

                  if(html){
                     $('.palavras-mais-buscadas').before(html);
                  }

               }

         }

      }

      PesquisasEmAlta.renderizar();

   },
   
   avalicoesTrustVoxCategoria(){

      let AvaliacoesTrustVox = {

         gerarObjeto(){

               let objeto = {

                  ['/']: [
                     /*{
                           nome: 'Dione Pereira',
                           local: 'Juazeiro do Norte - CE',
                           comentario: 'Rapidez na entrega, ótimo preço e o serviço 0800 (primeira de luxo) atendido rapidamente. Com certeza vou fazer outras compras.'
                     },
                     {
                           nome: 'Wolfram Metzler',
                           local: 'Campo Bom - RS',
                           comentario: 'Ótimo produto, preço justo, foi entregue antes do prazo.'
                     },
                     {
                           nome: 'Bianca Pianelli',
                           local: 'Salto - SP',
                           comentario: 'O produto é muito bom e atendeu plenamente minha necessidade.'
                     },
                     {
                           nome: 'Bruno da Silva',
                           local: 'Canoas - RS',
                           comentario: 'Produto fantástico e com funcionalidades incríveis. Super recomendo, entregue tudo certinho e dentro do prazo.'
                     },
                     {
                           nome: 'Roque Almeida',
                           local: 'Ijuí -RS',
                           comentario: 'Fique muito satisfeito com esse produto e com a seriedade do vendedor na entrega antes do prazo previsto.'
                     },
                     {
                           nome: 'Bartholomeu Duarte',
                           local: 'Lauro de Freitas - BA',
                           comentario: 'Escolhi comprar com vocês devido ao ótimo atendimento, qualidade do produto, pontualidade na entrega e preço, muito satisfeito!'
                     },
                     {
                           nome: 'Odilon Fonseca',
                           local: 'Joinville - SC',
                           comentario: 'Produto de ótima qualidade, muito bem atendido, loja de confiança, parabéns!'
                     },
                     {
                           nome: 'Geraldo de Abreu',
                           local: 'Belo Horizonte - MG',
                           comentario: 'Excelente atendimento, entrega super rápida. Recomendo!'
                     },
                     {
                           nome: 'Marcia Zeviani',
                           local: 'São Paulo - SP',
                           comentario: 'Precisava de luminárias com qualidade e bom preço, encontrei tudo na Iluminim que entregou o produto antes do prazo. Adorei a Loja e já a indiquei para amigos'
                     },
                     {
                           nome: 'Alexandre Augusto',
                           local: 'Florianópolis - SC',
                           comentario: 'Excelente produto. Excelente atendimento de venda e atenção ao cliente.'
                     },
                     {
                           nome: 'Chilon Magno',
                           local: 'Novo Hamburgo – RS',
                           comentario: 'Porque fui bem atendido, entrega rápida, ótimo produto.'
                     },
                     {
                           nome: 'Marcelo Belloli',
                           local: 'Porto Alegre - RS',
                           comentario: 'Preço e qualidade reunidos em um único produto, além é claro, da garantia de três anos.'
                     },
                     {
                           nome: 'Myrian Madeu',
                           local: 'Louveira - SP',
                           comentario: 'Atendeu a todas as minhas expectativas tanto no produto, qto no atendimento e entrega pela loja'
                     },*/
                     {
                           nome: 'Rogerio Binati Fornaziero',
                           comentario: 'Produto sensacional! Correspondeu as expectativas, fácil instalação e resultado excelente.'
                     },
                     {
                           nome: 'Rogério Soares Stock',
                           comentario: 'Produto Excelente, simples de instalar, funciona perfeitamente.'
                     },
                     {
                           nome: 'Sergio Maeso Junior',
                           comentario: 'Produto de valor e qualidade e muito boa.'
                     },
                     {
                           nome: 'Christian Cleber Maux Calheiros',
                           comentario: 'Excelente produto e acabamento com ótimo custo benefício!'
                     },
                     {
                           nome: 'Claudio Achkar',
                           comentario: 'Produto bom como descrito, sem defeitos, sem peças faltantes, compraria novamente e recomendaria.'
                     },
                  ],

               }

               let avaliacoes = objeto[window.location.pathname];

               if(!avaliacoes){ //CAINDO NESSA CONDICIONAL SIGNIFICA QUE NÃO EXISTE NENHUMA AVALIÇÃO ESPECIFICA PARA CATEGORIA, ENTÃO PEGUE TODAS.

                  avaliacoes = objeto['/'];

               }

               if(window.location.pathname == '/led-friday'){
                  return;
               }

               return avaliacoes;

         },

         gerarHTML(){

               let avaliacoes = this.gerarObjeto();
            
               if(!avaliacoes){
                  return;
               }

               //console.log('avaliacoes', avaliacoes);

               let html = avaliacoes.map(item=> {
      
                  return `
                     <div class="avalicao-item">
                           <div class="avalicao-icone">
                              <div class="avaliacao-icone-usuario">${ILUMINIM_UTILS.icones.usuario}</div>
                              <div class="avaliacao-icone-texto">Avaliação:</div>
                              <div class="avaliacao-icone-estrelas">
                                 <i class="icon-star"></i>
                                 <i class="icon-star"></i>
                                 <i class="icon-star"></i>
                                 <i class="icon-star"></i>
                                 <i class="icon-star"></i>    
                              </div>
                           </div>
                           <div class="avalicao-informacoes">
                              <div class="avaliacao-nome">${item.nome}</div>
                              <div class="avaliacao-comentario">${item.comentario}</div>
                              <div class="avaliacao-ver-mais">Ver mais</div>
                           </div>
                     </div>
                  `;
      
               }).join('');

               return html;

         },

         renderizar(){

               let html = this.gerarHTML();

               if(!html){
                  return;
               }

               $('.secao-principal .conteudo.span9').append(`
                  <div class="avalicoes-categoria">

                     <div class="avaliacoes-categoria-titulo">
                           <div class="avaliacoes-categoria-titulo-icone">${ILUMINIM_UTILS.icones.medalha}</div>
                           <div class="avaliacoes-categoria-titulo-texto">Veja o que dizem nossos clientes</div>
                     </div>

                     <div class="avalicoes-categoria-conteudo">
                           <div class="avaliacoes-categoria-lista carousel-target">
                              ${html}
                           </div>
                     </div>   

                     <div class="avalicoes-categoria-rodape">
                           <div class="avalicoes-categoria-trustvox">
                              <div class="avalicoes-categoria-trustvox-texto">Avaliações reais, auditadas por</div>
                              <div class="avalicoes-categoria-trustvox-logo"><img src="https://cdn.awsli.com.br/257/257163/arquivos/ra-trustvox.png"></div>
                           </div>
                     </div>

                  </div>
               `);


               $('.avalicoes-categoria .carousel-target').owlCarousel({
                  margin:10,
                  autoHeight: true,
                  nav:true,
                  dots: false,
                  navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                  responsive:{
                     0: {
                           items:1
                     },
                     768: {
                           items:2
                     }
                  }
               });


               $('.avalicoes-categoria .avaliacao-ver-mais').on('click', function(){
                  let texto = $(this).text();
                  if(texto == 'Ver mais'){
                     $(this).text('Ver menos');
                     $(this).siblings('.avaliacao-comentario').addClass('show-more');
                     
                  }else {
                     $(this).text('Ver mais');
                     $(this).siblings('.avaliacao-comentario').removeClass('show-more');
                  }
                  
                  $('.avalicoes-categoria .carousel-target').trigger('refresh.owl.carousel');
               });

         }

      }

      AvaliacoesTrustVox.renderizar();

   },

   cronometroCategoria(){

      if(!ILUMINIM_UTILS.screen.isDesktop()){
         return;
      }

      let banner_cronometro = {

         /*['/lampada-led-bulbo']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lamp-bulbo-10-09-21.jpg',
            link: '/lampada-led-bulbo-9w-residencial-branco-frio-bivolt',
            nome_1: 'Lâmpada LED Bulbo 9w',
            nome_2: 'Residêncial Branco Frio Bivolt',
            porcentagem_desconto: '69',
         },
     
         ['/pendente']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/pendente-10-09-21.jpg',
            link: '/pendente-aluminio-tulipa-18cm-preto',
            nome_1: 'Pendente Alumínio',
            nome_2: 'Tulipa Preto',
            porcentagem_desconto: '70',
         },
     
         ['/spot-led-trilho-eletrificado']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/trilho-10-09-21.jpg',
            link: '/kit-trilho-eletrificado-2m-4-spot-led-10w-branco-quente-preto',
            nome_1: 'Kit Trilho Eletrificado 2m',
            nome_2: '+4 Spot LED 10W Branco Quente Preto',
            porcentagem_desconto: '28',
         },
     
         ['/led-para-dormitorios']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
            link: '/luminaria-plafon-25w-led-sobrepor-branco-neutro-quadrado',
            nome_1: 'Luminária Plafon 25W',
            nome_2: 'LED Sobrepor Branco Neutro',
            porcentagem_desconto: '55',
         },
     
         ['/plafon-led-sobrepor']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
            link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado',
            nome_1: 'Luminária Plafon 25W',
            nome_2: 'LED Sobrepor Branco Frio',
            porcentagem_desconto: '62',
         },
     
         ['/plafon-led-embutir']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-embutir-19-08-21.png',
            link: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado',
            nome_1: 'Luminária Plafon 18W',
            nome_2: 'LED Embutir Branco Frio',
            porcentagem_desconto: '65',
         },
     
         ['/refletores-de-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-slim-18-08-21.png',
            link: '/refletor-holofote-microled-100w-branco-frio',
            nome_1: 'Refletor Holofote',
            nome_2: 'MicroLED Slim 100W Branco Frio',
            porcentagem_desconto: '77',
         },
     
         ['/luminarias-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
            link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado',
            nome_1: 'Luminária Plafon 25W',
            nome_2: 'LED Sobrepor Branco Frio',
            porcentagem_desconto: '62',
         },

         ['/luminaria-emergencia-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/produto-luminaria-emergencia-led-29-11-2021.png',
            link: '/luminaria-de-emergencia-30-leds-slim',
            nome_1: 'Luminária de Emergência', 
            nome_2: '30 LED\'s',
            porcentagem_desconto: '50',
         },
     
         ['/spots']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spots-10-09-21.jpg',
            link: '/spot-led-smd-5w-quadrado-branco-quente',
            nome_1: 'Spot LED SMD 5W',
            nome_2: 'Quadrado Branco Quente',
            porcentagem_desconto: '48',
         },
     
         ['/spot-led-redondo']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-redondo-10-09-21.jpg',
            link: '/spot-led-smd-7w-redondo-branco-frio',
            nome_1: 'Spot LED SMD 7W',
            nome_2: 'Redondo Branco Frio',
            porcentagem_desconto: '72',
         },
     
         ['/fita-de-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
            link: '/fita-led-rgb-colorida-3528-5-metros-com-fonte',
            nome_1: 'Fita LED RGB Colorida',
            nome_2: '3528 5 metros com Fonte',
            porcentagem_desconto: '56',
         },
     
         ['/fita-led-rgb']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
            link: '/fita-led-rgb-colorida-3528-5-metros-com-fonte',
            nome_1: 'Fita LED RGB Colorida',
            nome_2: '3528 5 metros com Fonte',
            porcentagem_desconto: '56',
         },
     
         ['/acessorios-para-leds']: {
            imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/123255341/8933f432e8.jpg',
            link: '/cabo-flexivel-750v-150-mm-100m-preto',
            nome_1: 'Cabo Flexível',
            nome_2: '750V 1,50mm 100m Preto',
            porcentagem_desconto: '44',
         },
     
         ['/fonte-convencional']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fonte-led-10-09-21.png',
            link: '/fonte-12v-2a-para-led',
            nome_1: 'Fonte 12w',
            nome_2: '2a para LED',
            porcentagem_desconto: '28',
         },
     
         ['/fonte-chaveada-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fonte-led-10-09-21.png',
            link: '/fonte-12v-2a-para-led',
            nome_1: 'Fonte 12w',
            nome_2: '2a para LED',
            porcentagem_desconto: '28',
         },
     
         ['/lampada-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-lampada-19-08-2021.png',
            link: '/pack-6-lampada-led-bulbo-9w-e27-bivolt-branco-frio-avant',
            nome_1: 'Pack 6 Lâmpadas LED',
            nome_2: 'Bulbo 9W E27 Bivolt Branco Frio',
            porcentagem_desconto: '66',
         },
     
         ['/lampada-led-tubular']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-tubular-10-09-21.jpg',
            link: '/tubular-led-sobrepor-completa-36w-branco-frio',
            nome_1: 'Tubular LED Sobrepor',
            nome_2: 'Completa 36W 1,20 Branco Frio',
            porcentagem_desconto: '83',
         },
     
         ['/halopin-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/halopin-led-10-09-21.jpg',
            link: '/lampada-led-para-geladeira-3w-branco-frio',
            nome_1: 'Lâmpada LED',
            nome_2: 'Para Geladeira 3W Branco Frio',
            porcentagem_desconto: '60',
         },
     
         ['/refletor-micro-led-slim']: {
           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-slim-18-08-21.png',
           link: '/refletor-holofote-microled-100w-branco-frio',
           nome_1: 'Refletor Holofote',
           nome_2: 'MicroLED Slim 100W Branco Frio',
           porcentagem_desconto: '77',
        },
     
        ['/refletor-micro-led-slim-branco-frio']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/26503826/7127b4ba5a.jpg',
           link: '/refletor-micro-led-slim-200w-branco-frio',
           nome_1: 'Refletor Holofote',
           nome_2: 'MicroLED Slim 200W Branco Frio',
           porcentagem_desconto: '82',
        },
     
        ['/refletor-micro-led-slim-branco-quente']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/50065763/b0a19eb5ef.jpg',
           link: '/refletor-holofote-microled-smd-slim-300w-branco-quente',
           nome_1: 'Refletor Holofote',
           nome_2: 'MicroLED SMD Slim 300W Branco Quente',
           porcentagem_desconto: '82',
        },
     
        ['/refletor-micro-led-smd-rgb']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/100566637/e17d0098c2.jpg',
           link: '/refletor-holofote-microled-smd-50w-rgb-com-controle',
           nome_1: 'Refletor Holofote',
           nome_2: 'MicroLED SMD 50w RGB com Controle',
           porcentagem_desconto: '34',
        },
     
        ['/refletor-micro-led-smd-verde']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/32519915/071e0168cd.jpg',
           link: '/refletor-holofote-microled-smd-30w-verde',
           nome_1: 'Refletor Holofote',
           nome_2: 'MicroLED SMD 30W Verde',
           porcentagem_desconto: '46',
        },
     
        ['/refletor-led-smd-ultra-thin']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/42825315/311747e37f.jpg',
           link: '/refletor-holofote-microled-smd-30w-verde',
           nome_1: 'Refletor MicroLED SMD',
           nome_2: 'Ultra Thin 300W Branco Frio',
           porcentagem_desconto: '63',
        },
     
        ['/refletor-micro-led-ultra-thin-branco-frio']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/24686346/3611abf8a7.jpg',
           link: '/refletor-microled-ultra-thin-200w-branco-frio-preto',
           nome_1: 'Refletor MicroLED Ultra Thin',
           nome_2: '200W Branco Frio Black Type',
           porcentagem_desconto: '13',
        },
     
        ['/refletor-micro-led-ultra-thin-rgb']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/65160426/65bde99120.jpg',
           link: '/refletor-micro-led-ultra-thin-400w-rgb-colorido-com-controle',
           nome_1: 'Refletor Micro LED Ultra Thin',
           nome_2: '400W RGB Colorido com Controle',
           porcentagem_desconto: '82',
        },
     
        ['/refletor-micro-led-ultra-thin-verde']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/39523790/57fe09af57.jpg',
           link: '/refletor-microled-ultra-thin-50w-verde-black-type',
           nome_1: 'Refletor MicroLED',
           nome_2: 'Ultra Thin 50W Verde Black Type',
           porcentagem_desconto: '56',
        },
     
        ['/refletor-led-solar']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/49760354/2514d5570e.jpg',
           link: '/refletor-led-solar-200w-80-leds-auto-recarregavel',
           nome_1: 'Refletor LED Solar',
           nome_2: '200W 80 Leds Auto Recarregável',
           porcentagem_desconto: '22',
        },
     
        ['/mini-refletor-led']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/51230767/7bbc6a6c16.jpg',
           link: '/mini-refletor-holofote-led-smd-400w-branco-frio-ip67',
           nome_1: 'Mini Refletor Holofote LED',
           nome_2: ' SMD 400W Branco Frio IP67',
           porcentagem_desconto: '26',
        },
     
        ['/refletor-led-alta-performance']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/19460004/4e23e4083f.jpg',
           link: '/refletor-led-industrial-modular-50w-performance-pro-branco-frio-ip66',
           nome_1: 'Refletor LED Industrial Modular',
           nome_2: '50w Performance PRO Branco Frio - IP67',
           porcentagem_desconto: '57',
        },
     
        ['/refletor-microled-ultra']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/24686346/3611abf8a7.jpg',
           link: '/refletor-microled-ultra-thin-200w-branco-frio-preto',
           nome_1: 'Refletor MicroLED Ultra Thin',
           nome_2: '200W Branco Frio Black Type',
           porcentagem_desconto: '13',
        },
        
        ['/refletor-micro-led-com-sensor-de-presenca']: {
           imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/65875916/6a2986f8ca.jpg',
           link: '/refletor-holofote-micro-led-smd-sensor-de-presenca-50w-branco-frio',
           nome_1: 'Refletor Holofote Micro LED',
           nome_2: 'SMD Sensor de Presença 50W Branco Frio',
           porcentagem_desconto: '35',
        },

         ['/luminaria-de-teto']: {
            imagem: 'https://cdn.awsli.com.br/300x300/257/257163/produto/8046508/45c5ef0993.jpg',
            link: '/luminaria-plafon-18w-led-sobrepor-branco-frio-quadrado',
            nome_1: 'Luminária Plafon 18w LED',
            nome_2: 'Sobrepor Branco Frio',
            porcentagem_desconto: '57',
         },*/

         ['/refletores-holofotes-led']: {
            imagem: 'https://cdn.awsli.com.br/300x300/1234/1234739/produto/48396536/refletor-microled-ultra-thin-200w-branco-frio-black-type-ff973033.jpg',
            link: '/refletor-microled-ultra-thin-200w-branco-frio-black-type',
            nome_1: 'Refletor MicroLED Ultra Thin',
            nome_2: '200W Branco Frio Black Type',
            porcentagem_desconto: '15',
         },

         ['/luminarias-plafons-led']: {
            imagem: 'https://cdn.awsli.com.br/300x300/1234/1234739/produto/48396045/luminaria-plafon-62x62-48w-led-embutir-branco-frio-borda-branca-e0c2506c.jpg',
            link: '/luminaria-plafon-62x62-48w-led-embutir-branco-frio-borda-branca',
            nome_1: 'Luminária Plafon 62x62 48W',
            nome_2: 'LED Embutir Branco Frio Borda Branca',
            porcentagem_desconto: '52',
         },

         ['/lampadas-led']: {
            imagem: 'https://cdn.awsli.com.br/300x300/1234/1234739/produto/75673665/lampada-led-tubular-ho-65w-240m-t8-branco-frio-inmetro-304b8de3.jpg',
            link: '/lampada-led-tubular-ho-65w-240m-t8-branco-frio-inmetro',
            nome_1: 'Lampada LED Tubular HO 65w',
            nome_2: '2,40m T8 Branco Frio | Inmetro',
            porcentagem_desconto: '46',
         },
     
         ['/fita-de-led']: {
            imagem: 'https://cdn.awsli.com.br/300x300/1234/1234739/produto/48394065/fita-led-3528-branca-fria-rolo-5m-a-prova-dagua-24w-5f8ee15b.jpg',
            link: '/fita-led-3528-branca-fria-rolo-5m-24w',
            nome_1: 'Fita LED 3528 Branca Fria',
            nome_2: 'Rolo 5m - 24W',
            porcentagem_desconto: '37',
         },

         ['/acessorios-led']: {
            imagem: 'https://cdn.awsli.com.br/300x300/1234/1234739/produto/48394317/fonte-chaveada-12v-5a-para-led-d24f74be.jpg',
            link: '/fonte-chaveada-12v-5a-para-led',
            nome_1: 'Fonte Chaveada',
            nome_2: '12v 5A para LED',
            porcentagem_desconto: '46',
         },

         ['/pendente']: {
            imagem: 'https://cdn.awsli.com.br/300x300/1234/1234739/produto/112952008/a3892d0f05.jpg',
            link: '/pendente-triangular-de-madeira-led-embutido-branco-quente-',
            nome_1: 'Pendente Triangular de Madeira',
            nome_2: 'LED Embutido Branco Quente',
            porcentagem_desconto: '34',
         },

         ['/spot-led']: {
            imagem: 'https://cdn.awsli.com.br/300x300/1234/1234739/produto/48396623/spot-balizador-led-5w-branco-morno-para-piso-b448c4e3.jpg',
            link: '/spot-balizador-led-5w-branco-morno-para-piso',
            nome_1: 'Spot Balizador LED',
            nome_2: '5W Branco Morno para Piso',
            porcentagem_desconto: '24',
         },

         ['/lustre']: {
            imagem: 'https://cdn.awsli.com.br/300x300/1234/1234739/produto/128704201/1b4856ad32.jpg',
            link: '/lustre-candelabro-de-cristal-70-x-47-x-70-cm',
            nome_1: 'Lustre Candelabro de Cristal',
            nome_2: '70 x 47 x 70 cm',
            porcentagem_desconto: '21',
         },

     }
      
      let banner = banner_cronometro[window.location.pathname];

      if(!banner){
         return;
      }

      let { imagem, link, nome_1, nome_2, porcentagem_desconto } = banner;

      let html = `
         <div class="banner-cronometro-categoria">
               <a href="${ link }" class="conteudo-banner-cronometro-categoria" onclick="ga('send', 'event', 'Banner cronometro com desconto categoria', 'click', '${nome_1} ${nome_2}')">
                  <div class="banner-cronometro-informacoes">
                     <div class="cronometro-categoria-imagem-produto"><img alt="${nome_1} ${nome_2}" title="${nome_1}${nome_2}" src="${imagem}"></div>
                     <div class="cronometro-categoria-nome-produto">
                           <span>${nome_1}</span>
                           <span>${nome_2}</span>
                     </div>
                     <div class="cronometro-categoria-texto-desconto">
                           <span><strong>${porcentagem_desconto}%</strong> de desconto</span>
                           <span>Oferta por <strong>Tempo Limitado</strong></span>
                     </div>
                     <div class="btn-custom">Comprar</div>
                  </div>

                  <div class="conteudo-cronometro">
                     <div class="conteudo-icone-cronometro">
                        ${ILUMINIM_UTILS.icones.relogio_2}
                     </div>
                     <ul class="countdown-target"></ul>
                  </div>
               </a>
         </div>
      `;

      $('div#corpo > .conteiner').prepend(html);

      $('.banner-cronometro-categoria .countdown-target').yuukCountDown({
         starttime: '2016/11/12 00:00:00',
         endtime: '2030/12/30 00:00:00',
      });

   },

   navegacaoCategoria(){

      let NavegacaoCategoria = {
         
         gerarObjeto(){

               let objeto = [

                  {
                     categorias: [
                        '/luminarias-led', 
                        '/kit-plafon-led', '/plafon-led-embutir-quadrado',
                        '/plafon-led-embutir-retangular', '/plafon-led-sobrepor-quadrado', 
                        '/plafon-led-sobrepor-retangular', '/plafon-led-embutir-redondo',
                        '/plafon-led-borda-infinita', '/plafon-led-sobrepor-redondo',
                        '/luminaria-plafon-led-recuada', '/plafon-led-colorido',
                        '/arandela-led', '/luminaria-abajur',
                        '/luminaria-de-mesa', '/luminarias-publicas-led',
                        '/luminaria-emergencia-led', '/luminaria-emergencia-led',
                        '/espeto-led', '/luminarias-posto-led'
                     ],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-luminarias-led-19-08-21.png',
                              link: '/kit-plafon-led?sort=mais_vendidos',
                              nome: 'Kits Luminárias LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-embutir-19-08-21.png',
                              link: '/plafon-led-embutir-quadrado?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Embutir Retangular-20-08-21.jpg',
                              link: '/plafon-led-embutir-retangular?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Retangular'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
                              link: '/plafon-led-sobrepor-quadrado?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Retangular-20-08-21.jpg',
                              link: '/plafon-led-sobrepor-retangular?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Retangular'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Embutir Redondo-20-08-21.jpg',
                              link: '/plafon-led-embutir-redondo?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-borda-infinita-19-08-21.png',
                              link: '/plafon-led-borda-infinita?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Borda Infinita'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Redondo-20-08-21.jpg',
                              link: '/plafon-led-sobrepor-redondo?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-recuado-19-08-21.png',
                              link: '/luminaria-plafon-led-recuada?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Recuado'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Colorido-20-08-21.jpg',
                              link: '/plafon-led-colorido?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Colorido'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-arandela.png',
                              link: '/arandela-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Arandela'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-abajur-19-08-21.png',
                              link: '/luminaria-abajur?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Abajur'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-mesa-19-08-21.png',
                              link: '/luminaria-de-mesa?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Mesa'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-publica-19-08-21.png',
                              link: '/luminarias-publicas-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Pública'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-emergencia-19-08-21.png',
                              link: '/luminaria-emergencia-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Emergência'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-industrial-19-08-21.png',
                              link: '/luminaria-industrial?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Industrial'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-espeto-19-08-21.png',
                              link: '/espeto-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Espeto'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-posto-19-08-21.png',
                              link: '/luminarias-posto-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Posto'
                           },
                        ]
                     ],
                  },

                  {
                     categorias: ['/plafon-led-friday'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-luminarias-led-19-08-21.png',
                              link: '/kit-plafon-led?sort=mais_vendidos',
                              nome: 'Kits Plafons LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-embutir-19-08-21.png',
                              link: '/plafon-led-embutir-quadrado?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Embutir Retangular-20-08-21.jpg',
                              link: '/plafon-led-embutir-retangular?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Retangular'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
                              link: '/plafon-led-sobrepor-quadrado?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Retangular-20-08-21.jpg',
                              link: '/plafon-led-sobrepor-retangular?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Retangular'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Embutir Redondo-20-08-21.jpg',
                              link: '/plafon-led-embutir-redondo?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-borda-infinita-19-08-21.png',
                              link: '/plafon-led-borda-infinita?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Borda Infinita'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Redondo-20-08-21.jpg',
                              link: '/plafon-led-sobrepor-redondo?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-recuado-19-08-21.png',
                              link: '/luminaria-plafon-led-recuada?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Recuado'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Colorido-20-08-21.jpg',
                              link: '/plafon-led-colorido?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Colorido'
                           },
                        ],
                     ]
                  },

                  {
                     categorias: ['/spots'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-spots-led-30-09-21.png',
                              link: '/kits-spots-led-dicroica?sort=mais_vendidos',
                              nome: 'Kits Spots LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-redondo-30-09-21.png',
                              link: '/spot-led-redondo?sort=mais_vendidos',
                              nome: 'Spot LED<br>Dicróica Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-quadrado-30-09-21.png',
                              link: '/spot-led-quadrado?sort=mais_vendidos',
                              nome: 'Spot LED<br>Dicróica Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-colorido-30-09-21-v2.png',
                              link: '/spot-led-colorido-?sort=mais_vendidos',
                              nome: 'Spot LED<br>Colorido'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-trilho-eletrificado-19-08-21.png',
                              link: '/spot-led-trilho-eletrificado?sort=mais_vendidos',
                              nome: 'Spot LED<br>Trilho Eletrificado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-recuado-16-09-21-v1.png',
                              link: '/spot-led-recuado?sort=mais_vendidos',
                              nome: 'Spot LED<br>Recuado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-mini-redondo-19-08-21.png',
                              link: '/mini-spot-led-redondo?sort=mais_vendidos',
                              nome: 'Spot LED<br>Mini Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-mini-quadrado-19-08-21.png',
                              link: '/mini-spot-led-quadrado?sort=mais_vendidos',
                              nome: 'Spot LED<br>Mini Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-balizador-19-08-21.png',
                              link: '/balizador-led?sort=mais_vendidos',
                              nome: 'Spot LED<br>Balizador'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-sobrepor-19-08-21.png',
                              link: '/spot-led-sobrepor?sort=mais_vendidos',
                              nome: 'Spot LED<br>Sobrepor'
                           },
                        ],
                     ],
                  },

                  /*{
                     categorias: ['/fita-de-led'],
                     navegacao: [
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Kits-Fitas-LED-19-08-2021-menu.png',
                                 link: '/kit-fita-led?sort=mais_vendidos',
                                 nome: 'Kits Fitas LED'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
                                 link: '/fita-led-rgb?sort=mais_vendidos',
                                 nome: 'Fita LED<br>RGB'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Vermelha-19-08-2021-menu-sup.png',
                                 link: '/fita-led-vermelha?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Vermelha'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Quente-19-08-2021-menu.png',
                                 link: '/fita-led-branco-quente?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Branco Quente'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Verde-19-08-2021-menu.png',
                                 link: '/fita-led-verde?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Verde'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Frio-19-08-2021-menu.png',
                                 link: '/fita-led-branca?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Branco Frio'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fita-ultra-violeta-14-09-21.png',
                                 link: '/fita-led-ultravioleta?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Ultravioleta'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Morno-19-08-2021-menu.png',
                                 link: '/fita-led-branco-morno?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Branco Morno'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Rosa-19-08-2021-menu.png',
                                 link: '/fita-led-rosa?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Rosa'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Azul-19-08-2021-menu-sup.png',
                                 link: '/fita-led-azul?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Azul'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-12V-19-08-2021-menu.png',
                                 link: '/fita-led-12v?sort=mais_vendidos',
                                 nome: 'Fita LED<br>12v'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Mangueira-LED-08-09-21.png',
                                 link: '/mangueiras-led?sort=mais_vendidos',
                                 nome: 'Mangueiras LED'
                              },
                           ],
                     ],
                  },*/

                  {
                     categorias: ['/lustre', '/lustre-pendente', '/lustre-cristal', '/lustre-plafon', '/lustre-candelabro', '/lustre-classico', '/lustre-industrial', '/lustre-de-parede'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LUSTRE-DUQUESA-BR-Lustre-Pendente-08-09-21.jpg',
                              link: '/lustre-pendente?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Pendente'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/PF-CR-32W-350MM-Lustre-Cristal-08-09-21.jpg',
                              link: '/lustre-cristal?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Cristal'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/SL-93779-C9-CHP-Lustre-Plafon-08-09-21.jpg',
                              link: '/lustre-plafon?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Plafon'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/SL-5834-H8-CLEAR-Lustre-Candelabro-08-09-21.jpg',
                              link: '/lustre-candelabro?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Candelabro'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RS-0840-Lustre-Classico-08-09-21.jpg',
                              link: '/lustre-classico?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Clássico'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/SL-5872-H10-COP-Lustre-Industrial-08-09-21.jpg',
                              link: '/lustre-industrial?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Industrial'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/ARA-15X20-Lustre-de-Parede-08-09-21-v2.jpg',
                              link: '/lustre-de-parede?sort=mais_vendidos',
                              nome: 'Lustre LED<br>de Parede'
                           },
                        ],
                     ],
                  },

                  {
                     categorias: ['/pendente'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Kits_Pendentes-19-08-21.png',
                              link: '/kit-pendentes?sort=mais_vendidos',
                              nome: 'Kits Pendente'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente industrial-19-08-21.png',
                              link: '/pendente-industrial?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Industrial'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Aramado-19-08-21.png',
                              link: '/pendente-aramado?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Aramado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Cone-19-08-21.png',
                              link: '/pendente-cone?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Cone'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente de Madeira-19-08-21.png',
                              link: '/pendente-de-madeira?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Madeira'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente_gota-19-08-21.png',
                              link: '/pendente-gota?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Gota'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Redondo-19-08-21.png',
                              link: '/pendente-redondo-led?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Quadrado-19-08-21.png',
                              link: '/pendente-quadrado?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Cilindrico-19-08-21.png',
                              link: '/pendente-cilindrico?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Cilíndrico'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente_Tulipa-19-08-21.png',
                              link: '/pendente-tulipa?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Tulipa'
                           },
                        ],
                     ],
                  },

                  {
                     categorias: ['/acessorios-para-leds'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/CB-FL-2-5-BR-100M-28-09-21.png',
                              link: '/cabo-de-energia?sort=mais_vendidos',
                              nome: 'Fios e Cabos LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Conector LED-20-10-21.png',
                              link: '/conectores-led?sort=mais_vendidos',
                              nome: 'Conector LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Soquete-LED-13-10-21.png',
                              link: '/soquete-led?sort=mais_vendidos',
                              nome: 'Soquete LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Sensor-13-10-21.png',
                              link: '/sensor-de-presenca?sort=mais_vendidos',
                              nome: 'Sensor de Presença LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Interruptor Tomada LED-19-08-21.png',
                              link: '/interruptores-tomadas-led?sort=mais_vendidos',
                              nome: 'Interruptor LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Rele-13-10-21.png',
                              link: '/rele-fotoeletrico?sort=mais_vendidos',
                              nome: 'Relé Fotoelétrico LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fonte Chaveada LED-20-10-21.png',
                              link: '/fonte-chaveada-led?sort=mais_vendidos',
                              nome: 'Fonte LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Amplificador-13-10-21.png',
                              link: '/amplificadores-led?sort=mais_vendidos',
                              nome: 'Amplificador LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Emenda-13-10-21.png',
                              link: '/emenda-para-fita-de-led?sort=mais_vendidos',
                              nome: 'Emenda LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Chip-13-10-21.png',
                              link: '/chip-led?sort=mais_vendidos',
                              nome: 'Chip LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Driver-13-10-21.png',
                              link: '/drivers?sort=mais_vendidos',
                              nome: 'Driver LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Controle-13-10-21.png',
                              link: '/controles?sort=mais_vendidos',
                              nome: 'Controle LED'
                           },
                        ],
                     ],
                  },

                  {
                     categorias: ['/acessorios-led-friday'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fonte Chaveada LED-20-10-21.png',
                              link: '/fonte-chaveada-led?sort=mais_vendidos',
                              nome: 'Fonte Chaveada LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Interruptor Tomada LED-19-08-21.png',
                              link: '/interruptores-tomadas-led?sort=mais_vendidos',
                              nome: 'Interruptor LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/CB-FL-2-5-BR-100M-28-09-21.png',
                              link: '/cabo-de-energia?sort=mais_vendidos',
                              nome: 'Fios e Cabos LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Soquete-LED-13-10-21.png',
                              link: '/soquete-led?sort=mais_vendidos',
                              nome: 'Soquete LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Emenda-13-10-21.png',
                              link: '/emenda-para-fita-de-led?sort=mais_vendidos',
                              nome: 'Emenda LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Sensor-13-10-21.png',
                              link: '/sensor-de-presenca?sort=mais_vendidos',
                              nome: 'Sensor de Presença LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Rele-13-10-21.png',
                              link: '/rele-fotoeletrico?sort=mais_vendidos',
                              nome: 'Relé Fotoelétrico LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Amplificador-13-10-21.png',
                              link: '/amplificadores-led?sort=mais_vendidos',
                              nome: 'Amplificador LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Chip-13-10-21.png',
                              link: '/chip-led?sort=mais_vendidos',
                              nome: 'Chip LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Driver-13-10-21.png',
                              link: '/drivers?sort=mais_vendidos',
                              nome: 'Driver LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Conector LED-20-10-21.png',
                              link: '/conectores-led?sort=mais_vendidos',
                              nome: 'Conector LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Controle-13-10-21.png',
                              link: '/controles?sort=mais_vendidos',
                              nome: 'Controle LED'
                           },
                        ],
                     ],
                  },

                  {
                     categorias: [
                        '/luminaria-de-teto', 
                     ],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-luminarias-led-19-08-21.png',
                              link: '/kit-plafon-led?sort=mais_vendidos',
                              nome: 'Kits Luminárias LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-embutir-19-08-21.png',
                              link: '/plafon-led-embutir-quadrado?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Embutir Retangular-20-08-21.jpg',
                              link: '/plafon-led-embutir-retangular?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Retangular'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
                              link: '/plafon-led-sobrepor-quadrado?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Retangular-20-08-21.jpg',
                              link: '/plafon-led-sobrepor-retangular?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Retangular'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Embutir Redondo-20-08-21.jpg',
                              link: '/plafon-led-embutir-redondo?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-borda-infinita-19-08-21.png',
                              link: '/plafon-led-borda-infinita?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Borda Infinita'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Redondo-20-08-21.jpg',
                              link: '/plafon-led-sobrepor-redondo?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-recuado-19-08-21.png',
                              link: '/luminaria-plafon-led-recuada?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Recuado'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Colorido-20-08-21.jpg',
                              link: '/plafon-led-colorido?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Colorido'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LUSTRE-DUQUESA-BR-Lustre-Pendente-08-09-21.jpg',
                              link: '/lustre-pendente?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Pendente'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/SL-93779-C9-CHP-Lustre-Plafon-08-09-21.jpg',
                              link: '/lustre-plafon?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Plafon'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/PF-CR-32W-350MM-Lustre-Cristal-08-09-21.jpg',
                              link: '/lustre-cristal?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Cristal'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RS-0840-Lustre-Classico-08-09-21.jpg',
                              link: '/lustre-classico?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Clássico'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Kits_Pendentes-19-08-21.png',
                              link: '/kit-pendentes?sort=mais_vendidos',
                              nome: 'Kits Pendente'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Cone-19-08-21.png',
                              link: '/pendente-cone?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Cone'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Aramado-19-08-21.png',
                              link: '/pendente-aramado?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Aramado'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente industrial-19-08-21.png',
                              link: '/pendente-industrial?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Industrial'
                           },
                        ],
                     ],
                  },
            
               ]

               let objetoFiltrado = objeto.filter(item=> item.categorias.includes(window.location.pathname));

               return objetoFiltrado[0];

         },

         gerarHTML(){

               let objeto = this.gerarObjeto();

               if(!objeto){
                  return;
               }

               let navegacao = objeto.navegacao.map(item=> {

                  let htmlItems = item.map(categoria=> {

                     return `
                        <div class="navegacao-categoria-item ${window.location.pathname == categoria.link.split('?')[0] ? 'navegacao-active' : ''}">
                           <a href="${categoria.link}" class="navegacao-categoria-item-conteudo">
                              <div class="navegacao-categoria-item-imagem">
                                    <img src="${categoria.imagem}" title="${categoria.nome}" alt="${categoria.nome}">
                              </div>

                              <div class="navegacao-categoria-item-nome">
                                    <span>${categoria.nome}</span>
                              </div>
                           </a>
                        </div>
                     `;

                  });

                  return `
                     <div class="navegacao-categoria-items ${ htmlItems.length > 1 ? 'navegacao-categoria-items-custom' : 'navegacao-categoria-items-padrao' }">
                        ${htmlItems.join('')}
                     </div>
                  `;

               }).join('');

               return `
                  <div class="navegacao-categoria">
                     <div class="navegacao-categoria-conteudo">
                           <div class="navegacao-categoria-lista carousel-target">${navegacao}</div>
                     </div>
                  </div>
               `;

         },

         ativarCarousel(){

               $('.navegacao-categoria .carousel-target').owlCarousel({
                  loop:false,
                  margin:10,
                  autoHeight: true,
                  nav:true,
                  dots: false,
                  navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                  responsive:{
                     0: {
                           items:2
                     },
                     768: {
                           items:3
                     },
                     1024:{
                           items:4
                     },
                     1300:{
                           items:5
                     }
                  }
               });

         },

         renderizar(){

               let html = this.gerarHTML();

               if($('.pagina-categoria #corpo > .conteiner > .secao-principal > .conteudo > .componente:first-child').length > 0){

                  $('.pagina-categoria #corpo > .conteiner > .secao-principal > .conteudo > .componente:first-child').after(html);

               } else {

                  $('.pagina-categoria #corpo > .conteiner > .secao-principal > .conteudo').prepend(html);

               }

               this.ativarCarousel();

         }

      }

      NavegacaoCategoria.renderizar();

   },

   textosRodapeCategoria(){

      let TextosCategoriaRodape = {

         gerarObjeto(){

            let objeto = {

               ['3931472']: { //REFLETORES LED
                  html: `
                  A <b>Iluminim Atacado</b> é a <strong>distribuidora de refletor led</strong> que conta com a maior variedade de <strong>refletores led atacado</strong> do Brasil!
                  Aqui você encontra todos os tipos de <strong>refletor led</strong> em diferentes cores e potências. Prontos para surprir suas necessidades e de seus clientes.
                  Perfeitos para instalações internas e externas, como: fachadas, outdoors, sacadas, iluminação de residências e espaços comerciais. 
                  Garanta agora mesmo o menor preço do Brasil no maior site <strong>fornecedor de refletor led</strong>.
                  `,
               },

               ['3931442']: { //LUMINARIAS LED
                  html: `
                  A mais completa linha de <strong>luminárias led</strong> do Brasil você só encontra na Iluminim Atacado. Nosso site dispõe de uma ampla variedade de <strong>luminaria led</strong>, incluindo modelos como: <strong>luminaria led embutir</strong>, <strong>luminaria led sobrepor</strong>.<br/><br/>
                  Conte com a melhor <b>qualidade</b> do mercado LED em nossos produtos, que possuem um acabamento impecável, são construídos em material inoxidável e têm um design muito elegante e moderno, atendendo a todas as normas de construção de produtos LED.<br/><br/>
                  O mercado de LED está em grande expansão, pois está recebendo muitos produtos novos, para atender à diversos tipos de clientes. A Iluminim Atacado está sempre atualizada, dispondo dos lançamentos de <strong>luminarias led</strong> e de muitos mais produtos desta tecnologia.<br/><br/>
                  Aproveite as melhores condições de compra com CNPJ do mercado de atacado led e adquira já sua <strong>luminaria led</strong> com a maior <b>fornecedora led</b> do país!!!
                  `,
               },

               ['3931377']: { //FITAS LED
                  html: `
                  A Iluminim Atacado dispõe da maior linha de <strong>fita de led</strong> do país. Presente no mercado há mais de 10 anos no mercado, somos a principal referência em fornecedora de produtos LED.<br/><br/>
                  Conheça um pouco sobre as principais vantagens de investir em <strong>fita led</strong> hoje com a Iluminim Atacado.<br/><br/>
                  <b>Amplo catálogo</b><br/>
                  Hoje a Iluminim Atacado é dona do maior e melhor catálogo de <strong>fitas de led</strong> presente no mercado de distribuidores led. Temos os modelos mais procurados, entre eles estão: <strong>fita de led rgb</strong>, <strong>fita de led branco quente</strong>, sendo todos os modelos, <strong>fita led adesiva</strong>.<br/><br/>
                  <b>Praticidade</b><br/>
                  Em nosso site atacado é muito simples efetuar qualquer compra, basta cadastrar seu CNPJ de revendedor LED, aguardar a aprovação, que leva até 12 horas e logo em seguida efetuar os pedidos.<br/><br/>
                  <b>Economia</b><br/>
                  Justamente por ser a maior <strong>distribuidora led</strong> do país contamos com os melhores preços e as melhores condições de pagamento, buscamos levar um ótimo retorno sobre o investimento de nossos clientes, para que sua empresa possa comercializar produtos LED com valores abaixo do mercado. Outro ponto é a economia que a tecnologia led traz em cada produto, por serem muito mais duradouros e utilizarem 80% menos energia elétrica.
                  `
               },

               ['3931375']: { //LAMPADAS LED
                  html: `
                  Investir em LED hoje é sem dúvida uma das melhores opções para consumidores finais e revendedores, por isso a Iluminim Atacado disponibiliza uma inifinidade de modelos de <strong>lampada de led</strong>.<br/><br/>
                  Simbolo de ideias brilhantes e energia, a lâmpada é o item mais lembrado quando pensamos em luz. Este produto carrega uma história muito importante, por ser pioneiro no surgimento da energia elétrica e se tornou atemporal e necessário.<br/><br/>
                  Seu design é inconfundível em qualquer lugar do mundo, mesmo sendo redesenhado e atualizado com o passa do tempo, em muitas dessas resignificações foram criados outros modelos de lâmpadas.<br/><br/>
                  A iluminim traz para você os principais modelos e muitos deles, exclusivos que proporcionam criações incríveis, tanto como decoração, como utilitário.<br/><br/>
                  Alguns exemplos dos itens mais procurados são elas:<br/>
                  -<strong>lampada led tubular</strong>, característica por seu formato linear, garantindo um grande ângulo de iluminação; <br/>
                  -<strong>lampada led bulbo</strong>, o modelo clássico de lâmpada, muito buscada para uso convencional, por sua extrema praticidade, e por fim; <br/>
                  -<strong>lâmpada led rgb</strong> a queridinha do público que busca criar muitos ambientes com uma só lâmpada, já que esta, cria muitos efeitos e cores de luz e acompanha um controle remoto, item que aumenta muito a praticidade no uso.<br/><br/>
                  Os modelos presentes no site são feitos com a última geração da tecnologia LED, que consiste em diodos emissores de luz, que, diferente das tecnologias convencionais, não emitem raios UV e aquecem considerávelmente menos, sendo assim, uma tecnologia sustentável para o planeta.<br/><br/>
                  Vale falar da economia que o LED proporciona, ponto que atrai muitos clientes para investir neste tipo de iluminação. O LED reduz o consumo de energia elétrica resultando em redução de gastos, desde a sua fabricação até o uso do consumidor final.
                  `
               },

               ['3931361']: { //SPOTS LED
                  html: `
                  A Iluminim Atacado conta com maior categoria de <strong>Spot LED</strong> de todo o mercado atacadista do país.<br/>
                  Produtos de muitos modelos, perfeitos para muitas necessidades. Os mais procurados pelos consumidores do mundo todo estão aqui.<br/>
                  <b>Presente nos maiores projetos de iluminação</b><br/>
                  Profissionais das áreas de design de interiores e arquitetura investem muito em <strong>spot de led</strong> para criarem os mais variados e incríveis projetos de iluminação. Os modelos mais usados, sendo mais pedidos por clientes destes profissionais e por estarem muito presentes em tendências de decoração de ambientes são:<br/><br/>
                  - <strong>Spot LED Trilho</strong>: muito usado em decorações do estilo industrial. Seu design, com trilhos e canhão direcionável lembra muito estúdios de cinema e ambientes industriais, geralmente combina-se com quadros, pisos de cimento queimado, para aumentar o estilo da decoração.<br/>
                  - <strong>Spot LED embutir</strong>: conhecido também como dicróica, modelo de embutir no forro, que cria um efeito luminoso delicado, pois a luz vem de dentro do forro. Decorações com forros de gesso contam muito com o uso desta luminária.<br/>
                  - <strong>Mini Spot LED</strong>: uma versão mais delicada de spot, um modelo mais minimalista, mas que entrega a potência e a luz ideal para a sua escolha.<br/><br/>
                  <b>Porque investir em Spot LED?</b><br/>
                  Sem dúvida, uma ótima opção de investimento é revender <strong>spot led</strong>. A grande procura por este produto, devido aos muitos benefícios que este oferece tem atraído muitos clientes. Desfrute de ainda mais benefícios com a Iluminim, que lhe garante as melhores condições de compra em atacado com CNPJ!
                  `
               },
               
            }

            return objeto[ILUMINIM_UTILS.categoria.id()];

         },

         gerarHTML(){

            let objeto = this.gerarObjeto();
         
            if(!objeto){
               return;
            }

            let { html } = objeto;

            return `
               <div class="componente texto-categoria-rodape">
                  <div class="interno has-view-more">
                     <div class="texto-categoria-personalizado">
                        ${html}
                     </div>
                  </div>
               </div>
            `;

         },

         renderizar(){

            let html = this.gerarHTML();

            if(!html){
               return;
            }

            $('.pagina-categoria #corpo > .conteiner .secao-principal > .conteudo.span9').append(html);

         }

      }

      TextosCategoriaRodape.renderizar();

   },

   CSSBlackFridayTemporario(){

      let paginas = [
         '/led-friday',
         '/refletor-led-friday', 
         '/acessorios-led-friday',
         '/fita-led-friday',
         '/kits-led-friday',
         '/lampada-led-friday',
         '/luminarias-led-friday',
         '/lustre-led-friday',
         '/pendente-led-friday',
         '/plafon-led-friday',
         '/spot-led-friday',
      ];

      if(paginas.includes(window.location.pathname)){

         let elem = document.createElement('link');
         elem.rel = ' stylesheet'
         elem.href = 'https://cdn.awsli.com.br/257/257163/arquivos/css-black-testes-31-10-21-v1.css';
         document.head.appendChild(elem);

      }

   },

   paginasComFundoBlack(){

      let paginas = [
         '/refletores-de-led',
         '/luminarias-led',
         '/spots',
         '/fita-de-led',
         '/lampada-led',
         '/pendente',
         '/lustre',
         '/acessorios-para-leds',
         '/luminaria-de-teto'
      ];

      if(paginas.includes(window.location.pathname)){

         $('body').addClass('pagina-categoria-fundo-black');

      }

   },

   iniciar(){ //INICIAR SCRIPTS DA PÁGINA;

      //ILUMINIM_UTILS.renderizarCategoriasFlutuante();
      ILUMINIM_UTILS.renderizarBotaoVoltarAoTopo();
      ILUMINIM_UTILS.adicionarFiltroLancamentos();
      //ILUMINIM_UTILS.newsletterFlutuante();
      ILUMINIM_UTILS.ajustePaginacao();
      ILUMINIM_UTILS.verificarFiltrosAtivo();
      //ILUMINIM_UTILS.adicionaTextoModalCompraSegura();
      //ILUMINIM_UTILS.adicionarBlocoLateralNaoEncontrouOqueProcurava();
      ILUMINIM_UTILS.adaptacaoFiltroMobile();

      this.cronometroCategoria();
      this.moverTextoCategoria();
      //this.adicionarFiltroPrecoPersonalizado();
      this.verificarCategoriaAtiva();
      //this.postsBlog();
      this.reviewsQuemComprou();
      this.palavrasMaisBuscadas();
      this.pesquisasEmAlta();
      this.avalicoesTrustVoxCategoria();
      this.videoCategoria();
      this.navegacaoCategoria();
      this.dropDownTextoCategoria();
      this.textosRodapeCategoria();
      this.duploVideo();

      this.paginasComFundoBlack();

      this.paginasPersonalizadas(); //MANTER NO FINAL.

      //this.CSSBlackFridayTemporario()

   }

}

$(document).ready(()=> {

  PaginaCategoria.iniciar();

});