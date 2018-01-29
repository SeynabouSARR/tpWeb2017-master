
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.xDebut=0;
	this.xFin=0;
	this.yDebut=0;
	this.yFin=0;
	this.i=0;
	this.canvas = canvas;
	this.interactor = interactor;




	// Developper les 3 fonctions gérant les événements
    this.pression=function(evt){
        xdebut = getMousePosition(canvas,evt).x;
        ydebut = getMousePosition(canvas,evt).y;
        interactor.onInteractionStart(this);
    }.bind(this);



    this.deplacement=function(evt){
        //console.log("je déplace la souris");
    }.bind(this);


    this.ok=function(evt){
        console.log("yes");
    }.bind(this);


    this.relachement=function(evt){
        console.log('----------------------------------------------'+evt.x+','+evt.y);
        console.log(this.interactor+"/"+this.i);this.i++;
        interactor.onInteractionEnd(this);
    }.bind(this);


	// Associer les fonctions précédentes aux évènements du canvas.
	this.canvas.addEventListener('mousedown',this.pression,false);
    this.canvas.addEventListener('mousemove',this.deplacement,false);
    this.canvas.addEventListener('mouseup', this.relachement,false);


  
   // interactor.onInteractionUpdate(this);


};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};





