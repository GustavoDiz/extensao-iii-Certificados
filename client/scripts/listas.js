$(document).ready(function () {
    function setupAcordeon() {
      $(".sublista").hide();

      $("#menu-acordeon > li").click(function () {
        if (!$(this).parents(".exercise-section").length) {
          $(this).siblings().find(".sublista").slideUp();
        }
        $(this).find(".sublista").slideToggle();
      });
    }

    function setupCarousel() {
        var imagens = $(".item");
        var indexAtual = 0;
        var intervalId;
  
        function mostrarImagem(index) {
          imagens.hide();
          imagens.eq(index).fadeIn();
          var mensagem = imagens.eq(index).data("mensagem");
          var data = imagens.eq(index).data("data");
          $(".mensagem").text(mensagem);
          $(".data").text(data);
        }
  
        function avancarImagem() {
          indexAtual++;
          if (indexAtual >= imagens.length) {
            indexAtual = 0;
          }
          mostrarImagem(indexAtual);
        }
  
        function retrocederImagem() {
          indexAtual--;
          if (indexAtual < 0) {
            indexAtual = imagens.length - 1;
          }
          mostrarImagem(indexAtual);
        }
  
        // Ocultar as imagens no início
        imagens.hide();
  
        $("#anterior").click(function () {
          clearInterval(intervalId); 
          retrocederImagem();
          iniciarIntervalo(); 
        });
  
        $("#proximo").click(function () {
          clearInterval(intervalId); 
          avancarImagem();
          iniciarIntervalo(); 
        });
  
        function iniciarIntervalo() {
          intervalId = setInterval(avancarImagem, 3000); 
        }
  
        iniciarIntervalo(); 
      }
  
      setupAcordeon();
      setupCarousel();
  });