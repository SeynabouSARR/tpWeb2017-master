
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	var xdebut=0;
	var xfin=0;
	var ydebut=0;
	var yfin=0;

	// Developper les 3 fonctions gérant les événements
   this.pression=function(evt){
        console.log(evt.x+','+evt.y);
    }.bind(this);

    this.deplacement=function(evt){
    console.log("je déplace la souris");
    }.bind(this);

    this.relachement=function(evt){
    console.log(evt.x+','+evt.y);
    }.bind(this)
	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown',this.pression,false);
	canvas.addEventListener('mousemove',this.deplacement,false);
	canvas.addEventListener('mouseup', this.relachement,false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};





