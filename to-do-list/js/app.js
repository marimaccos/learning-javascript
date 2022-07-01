// Seleciona botoes
const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

// Cria evento ao clicar no botao
btnCreate.addEventListener('click', () => {												 
  	const input = document.querySelector('.input-main');
	const list = document.querySelector('ul');

	// Insere no início da lista
	list.insertAdjacentHTML(
		'afterbegin',
		`<li>${input.value}</li>`
	);
  	input.value = '';
});

// Cria evento ao clicar no botao
btnToggle.addEventListener('click', () => {
  	const listContainer = document.querySelector('.list-container');

	// Mostra a lista
	if (listContainer.style.display === 'none') {
		btnToggle.textContent = 'Hide List';
		listContainer.removeAttribute('style');
	
	// Esconde a lista
	} else {
		btnToggle.textContent = 'Show List';
		listContainer.style.display = 'none'; 	
	}		
});

// Cria evento ao clicar no botao
btnRemove.addEventListener('click', () => {
	
	// Seleciona a pseudoclasse da tag 'li'
	const lastItem = document.querySelector('li:last-child');
	lastItem.remove(); //Remove elemento
});







