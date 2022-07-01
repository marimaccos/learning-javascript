// Seleciona elementos que no href começam(^) com 'https://'
const $secureLinks = $('a[href^="https://"]');
// Seleciona elementos que no href terminam($) com '.pdf'
const $pdfs = $('a[href$=".pdf"]');
// Cria checkbox
const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

// Add a propriedade ao elemento
$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

// Add classe ao elemento
$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

// Cria evento ao clicar
$pdfs.on('click', function(event){
  
  // Checa se a checkbox esta marcada
  // Se nao esta
  if ($(':checked').length === 0){
    
    // Previne download do documento 
    event.preventDefault();
    // Cria janela de alerta 
    alert('Please check the box to allow PDF downloads.');
  }
});

// Add checkbox a web page
$('#links').append($pdfCheckbox);

// Passa por cada elemento 
$('a').each( function() {
  
  // Seleciona o atributo href de cada elemento
  const url = $(this).attr('href');
  
  // Insere o atributo depois da ultima 'child'    
  $(this).parent().append(`(${url})`);
});