function ativaScrollSuave(selector) {

  $(selector).click(function(event) {
    
    event.preventDefault();               // Cancela o evento padrão - Descer rápido

    var target = $(this).attr('href');    // Pega o valor do atributo href do elemento passado 

    $('html, body').animate({
      scrollTop: $(target).offset().top   // Faz uma animação com 0.8 segundo no elemento 'target'
    }, 800)

  });
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');