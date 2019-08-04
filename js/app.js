//1 - Cambiar el Color Del Titulo y Alternarlo Indefenidamente con Dos Colores
setInterval(function(){ 
	$('.main-titulo').css('color',' #fff');  // Alterna la Clase cada 2 Segundos 
	setTimeout(function(){
		$('.main-titulo').css('color',' #DCFF0E'); // Devuelve la Clase cada 1 Segundos 
	},500)
 },1000);

//2 - Funcion para generar Dulces Aleatoriamente y insertalos en la tabla
var arrays_dulces=[];
for(c=1;c<=7;c++){
	for (f=0;f<=5;f++){
		var dulces_random=Math.floor((Math.random()*4)+1);
		$('.col-'+c).append('<img src="image/' + dulces_random + '.png" class="element"></img>');
		arrays_dulces.push(dulces_random);
		$('.col-'+c).draggable();
		console.log('[' + c + ',' + f + '] = ' + arrays_dulces[c,f]);
	}
}
