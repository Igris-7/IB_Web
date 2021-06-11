'use strict'

/*document.addEventListener('DOMContentLoaded',ejecutarCuandoPaginaCargada);/*este evento carga el javascript cuando todo el documento HTML HA SIDO CARGADO*/
/*
function  ejecutarCuandoPaginaCargada()
{*/

/*desplazamiento en Y de arriba hacia abjo*/
var posInicial=window.pageYOffset;
/*Obtengo la clase  go-top*/
var gotop=document.querySelector('.go-top');
var contenedorMenu=document.querySelector('.contenedor');

window.onscroll = () =>
{
	var despuesScroll=window.pageYOffset;
	if(posInicial>despuesScroll)/*valor > 0*/
	{
		contenedorMenu.style.top='0';
		contenedorMenu.style.transition='0.5s';
	}
	else
	{
		contenedorMenu.style.top='-60px';
		contenedorMenu.style.transition='0.5s';
	}

	posInicial=despuesScroll; /*no se hizo scroll o volvio a la posicion inical , se mostrara el Menu*/

	 /*Mostrar el icono para subir arriba*/
	var arriba=window.pageYOffset;
	if (arriba<=600) 
	{
		gotop.style.right='-100%';
	}
	else
	{
		gotop.style.right='0';
		gotop.style.transition='0.5s';
	}

}


gotop.addEventListener('click',()=>
{
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
});



/*cambiar de color los botones*/


var estiloAzul=document.querySelector('.azul');
var clasesBotones=document.querySelector('.decoracion');
var clasesBotones2=document.querySelector('.decoracion2');

estiloAzul.addEventListener('mouseover', () =>
{
	estiloAzul.style.background='#008B8B';
	estiloAzul.style.transform='translateY(-10px)';
	clasesBotones.style.textDecoration='underline';
	estiloAzul.style.transition='1s';
}
);

estiloAzul.addEventListener('mouseout',()=>
{
	estiloAzul.style.background='#384975';
	estiloAzul.style.transform='translateY(0px)';
	clasesBotones.style.textDecoration='none';
	estiloAzul.style.transition='1s';
});

var estiloNaranja=document.querySelector('.naranja');

estiloNaranja.addEventListener('mouseover',() =>
{
	estiloNaranja.style.background='#008B8B';
	estiloNaranja.style.transform='translateY(-10px)';
	clasesBotones2.style.textDecoration='underline';
	estiloNaranja.style.transition='1s';
});

estiloNaranja.addEventListener('mouseout', () =>
{
	estiloNaranja.style.background='#FF6600';
	estiloNaranja.style.transform='translateY(0px)';
	clasesBotones2.style.textDecoration='none';
	estiloNaranja.style.transition='1s';
});

/*Cambiar HTML*/
var claseCambiar=document.querySelector('.encabezado-titulo');

claseCambiar.addEventListener('mouseover',()=>
{
	claseCambiar.innerHTML='AQUÍ MEJORAMOS TÚ';
});

claseCambiar.addEventListener('mouseout',()=>
{
	claseCambiar.innerHTML='POTENCIAMOS TÚ';
});


var ventanaEmergente=document.getElementById('emergente');

ventanaEmergente.addEventListener('click', ()=>
{
	window.open('http://www.google.com.pe/','venta1','width=400,height=400,scrollbars=no');
});

/*function abrirVentana(url) //bloquear ventanas emergentes
{
	window.open(url,"Aea manito","width=400,height=300");
}

abrirVentana("http://www.google.com.pe/");
*/

/*}*/


