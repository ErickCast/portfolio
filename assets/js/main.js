$(document).ready(function(){
	//Navegacion scroll
	var misServicios = $("#my-service").offset().top,
	portfolio =$("#portfolio").offset().top,
	habilidades =$("#habilidades").offset().top,
	redes =$("#redes-sociales").offset().top,
	contacto =$("#contacto").offset().top;


	$("#btn-myservice").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: misServicios 
		},500);
	});
	$("#btn-portfolio").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: portfolio
		},500);
	});
	$("#btn-habilidades").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: habilidades
		},500);
	});
	/*$("#btn-blog").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: blog
		},500);
	});*/
	$("#btn-redes").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: redes
		},500);
	});
	$("#btn-contacto").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: contacto
		},500);
	});
	//Aparecer profesion
	

    var web = $(".web");
    var webIndex = -1;

    function showNextQuote() {
        ++webIndex;
        web.eq(webIndex % web.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();


	
	//Scroll hacia arriba
	$(".flotante").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop:0,
		},500);
		return false;
	});


});