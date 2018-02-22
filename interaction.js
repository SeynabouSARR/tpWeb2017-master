
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

    //Quand j'appuie sur le bouton gauche de la souris
    this.pression=function(evt){
        var mousePosition = getMousePosition(canvas,evt);
        this.interactor.onInteractionStart(this,mousePosition);
    }.bind(this);

    //Deplacement de la souris
    this.deplacement=function(evt){
        //console.log("je déplace la souris");
    }.bind(this);

    //Quand je relache le bouton gauche de la souris
    this.relachement=function(evt){
        var mousePosition = getMousePosition(canvas,evt);
        this.interactor.onInteractionEnd(this,mousePosition);

    }.bind(this);







    // Ajout des évènements au canvas.
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





