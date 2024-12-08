
const clics  = [0, 0, 0, 0, 0, 3];
const posiciones = [0, 0, 0, 0, 0, 0];

function moverDerechaDia( dia ) {
	
	const carrusel = document.getElementById('dia' + dia);
	if (clics[dia-1] < 4){
		clics[dia-1]++;
		posiciones[dia-1] -= 310; // Incrementar la posición en 30px
		carrusel.style.left = posiciones[dia-1] + 'px'; // Actualizar la propiedad 'left'
		carrusel.style.left = posiciones[dia-1] + 'px'; // Actualizar la propiedad 'left'
	}
}

function moverIzquierdaDia( dia ) {
	
	const carrusel = document.getElementById('dia' + dia);
	if (clics[dia-1] > 0){
		posiciones[dia-1] += 310;
		clics[dia-1]--;
		carrusel.style.left = posiciones[dia-1] + 'px'; // Actualizar la propiedad 'left'
	} else {clics[dia-1] = 0}
}

function moverDerechaOrg() {
	
	const carrusel = document.getElementById('organiz_contenido');
	if (clics[5] < 6){
		clics[5]++;
		posiciones[5] -= 120; // Incrementar la posición en 30px
		carrusel.style.left = posiciones[5] + 'px'; // Actualizar la propiedad 'left'
		carrusel.style.left = posiciones[5] + 'px'; // Actualizar la propiedad 'left'
	}
}

function moverIzquierdaOrg() {
	
	const carrusel = document.getElementById('organiz_contenido');
	if (clics[5] > 0){
		posiciones[5] += 120;
		clics[5]--;
		carrusel.style.left = posiciones[5] + 'px'; // Actualizar la propiedad 'left'
	} else {clics[5] = 0}
}