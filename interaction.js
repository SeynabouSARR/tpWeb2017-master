
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

    this.getInitX=function(){return this.xDebut}.bind(this);
    this.getFinalX=function(){return this.xFin }.bind(this);
    this.getInitY=function(){return this.yDebut}.bind(this);
    this.getFinalY=function () {return this.yFin}.bind(this);

    this.setInitX=function(x){ this.xDebut =x; }.bind(this);
    this.setFinalX=function(x){ this.xFin = x ;}.bind(this);
    this.setInitY=function(y){this.yDebut = y; }.bind(this);
    this.setFinalY=function (y) { this.yFin = y; }.bind(this);

    // Developper les 3 fonctions gérant les événements
    this.pression=function(evt){
        this.setInitX(getMousePosition(canvas,evt).x);
        this.setInitY(getMousePosition(canvas,evt).y);
        this.interactor.onInteractionStart(this);
    }.bind(this);

    this.deplacement=function(evt){
        //console.log("je déplace la souris");
    }.bind(this);

    this.relachement=function(evt){
        this.setFinalX(getMousePosition(canvas,evt).x);
        this.setFinalY(getMousePosition(canvas,evt).y);
        this.interactor.onInteractionEnd(this);
        this.interactor.onInteractionUpdate(this);

    }.bind(this);



    // Associer les fonctions précédentes aux évènements du canvas.
	this.canvas.addEventListener('mousedown',this.pression,false);
    this.canvas.addEventListener('mousemove',this.deplacement,false);
    this.canvas.addEventListener('mouseup', this.relachement,false);

};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};





