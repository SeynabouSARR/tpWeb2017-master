
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#320f1f';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	//Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

    interactor.onInteractionStart(this);
    interactor.onInteractionUpdate(this);
    interactor.onInteractionEnd(this);

};


