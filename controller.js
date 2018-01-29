
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#320f1f';
	this.currentShape = 0;


	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.dnd = new DnD(canvas, this);

	//Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

    this.onInteractionStart= function(dnd){
    	console.log("Start");
	}.bind(this);


    this.onInteractionUpdate=function (dnd) {
        console.log("Update");
	}.bind(this);


	this.onInteractionEnd= function (dnd) {
        console.log("End");
	}.bind(this);



};


