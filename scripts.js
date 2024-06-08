document.addEventListener('DOMContentLoaded', () => {
	(function () {
		'use strict'
	
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll('.needs-validation')
	
		// Loop over them and prevent submission
		Array.prototype.slice.call(forms)
			.forEach(function (form) {
				form.addEventListener('submit', function (event) {
					if (!form.checkValidity()) {
						event.preventDefault()
						event.stopPropagation()
					}
	
					form.classList.add('was-validated')
				}, false)
			})
	})()

	const form = document.getElementById('form');

	const emailInput = document.getElementById('email');
	const emailError = document.getElementById('emailError');

	const usernameInput = document.getElementById('username');
	const usernameError = document.getElementById('usernameError');

	const validateEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
	};

	const validateUsername = (username) => {
	const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
	return usernameRegex.test(username);
	};

	const showError = (input, message) => {
	const errorElement = input.nextElementSibling;
	errorElement.textContent = message;
	errorElement.style.display = 'block';
	};

	const hideError = (input) => {
	const errorElement = input.nextElementSibling;
	errorElement.style.display = 'none';
	};

	emailInput.addEventListener('input', () => {
	if (validateEmail(emailInput.value)) {
	hideError(emailInput);
	} else {
	showError(emailInput, 'Por favor, introduce un correo válido.');
	}
	});

	usernameInput.addEventListener('input', () => {
	if (validateUsername(usernameInput.value)) {
	hideError(usernameInput);
	} else {
	showError(usernameInput, 'Nombre de usuario inválido (3-16 caracteres, solo letras, números y guiones bajos).');
	}
	});

	form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (validateEmail(emailInput.value) && validateUsername(usernameInput.value)) {
	alert('¡Parece que lo has logrado! Todos los campos han sido validados en el primer formulario ✅');
	} else {
	alert('Por favor, corrige los errores en el formulario.');
	}
	});

	// Used for states

	const states = [
	{
	selected: false,
	text: 'Amazonas',
	value: 'Amazonas'
	},
	{
	selected: false,
	text: 'Anzoátegui',
	value: 'anzoategui'
	},
	{
	selected: false,
	text: 'Apure',
	value: 'apure'
	},
	{
	selected: false,
	text: 'Aragua',
	value: 'aragua'
	},
	{
	selected: false,
	text: 'Barinas',
	value: 'barinas'
	},
	{
	selected: false,
	text: 'Bolívar',
	value: 'bolivar'
	},
	{
	selected: false,
	text: 'Carabobo',
	value: 'carabobo'
	},
	{
	selected: false,
	text: 'Cojedes',
	value: 'cojedes'
	},
	{
	selected: false,
	text: 'Delta Amacuro',
	value: 'delta-amacuro'
	},
	{
	selected: false,
	text: 'Dependencias Federales',
	value: 'dependencias-federales'
	},
	{
	selected: false,
	text: 'Distrito Federal',
	value: 'distrito-federal'
	},
	{
	selected: false,
	text: 'Falcón',
	value: 'falcon'
	},
	{
	selected: false,
	text: 'Guárico',
	value: 'guarico'
	},
	{
	selected: false,
	text: 'Lara',
	value: 'lara'
	},
	{
	selected: false,
	text: 'Mérida',
	value: 'merida'
	},
	{
	selected: false,
	text: 'Miranda',
	value: 'miranda'
	},
	{
	selected: false,
	text: 'Monagas',
	value: 'monagas'
	},
	{
	selected: false,
	text: 'Nueva Esparta',
	value: 'nueva-esparta'
	},
	{
	selected: false,
	text: 'Portuguesa',
	value: 'portuguesa'
	},
	{
	selected: false,
	text: 'Sucre',
	value: 'sucre'
	},
	{
	selected: false,
	text: 'Táchira',
	value: 'tachira'
	},
	{
	selected: false,
	text: 'Trujillo',
	value: 'trujillo'
	},
	{
	selected: false,
	text: 'Vargas',
	value: 'vargas'
	},
	{
	selected: false,
	text: 'Yaracuy',
	value: 'yaracuy'
	},
	{
	selected: false,
	text: 'Zulia',
	value: 'zulia'
	},
	]

	let optionList = document.getElementById('state').options;

	states.forEach(option =>
	optionList.add(
	new Option(option.text, option.value, option.selected)
	)
	);
});


