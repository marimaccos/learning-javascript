// Esconde a mensagem
$('#flashMessage').hide()

// Cria evento ao clicar no botao
$('#previewButton').click( function () {
  
  // Atribui os valores do input as variaveis
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  // Seleciona os elementos para atribuir os inputs
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').text(content);

  // Faz animaçao com a mensagem
  $('#flashMessage')
  .slideDown(1000)
  .delay(3000)
  .slideUp();
});