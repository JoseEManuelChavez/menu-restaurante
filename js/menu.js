$(".btnverMenu").on("click", function(){

	 $(".paginaIzquierda").addClass("paginaIzquierda2");

	 setTimeout(function(){
	 	$(".paginaDerecha").addClass("paginaDerecha2"); 
	 },300)
	
})
$(".btnCerrar").on("click", function(){

	 $(".paginaIzquierda").removeClass("paginaIzquierda2");

	 setTimeout(function(){
	 	$(".paginaDerecha").removeClass("paginaDerecha2"); 
	 },300)
	
})