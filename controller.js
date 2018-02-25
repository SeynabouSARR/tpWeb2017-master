
var editingMode = { rect: 0, line: 1, ellipse: 2};

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
    this.currColour = '#320f1f';
    this.currentShape = 0;


    this.setCurrEditingMode=function(newMode){
    	this.currEditingMode =newMode;
    }.bind(this);

    this.setCurrLineWidth=function(newWidth){
    	this.currLineWidth = newWidth ;
    }.bind(this);

    this.setCurrColour=function(newColor){
		this.currColour = newColor;
    }.bind(this);
    
    this.setCurrentShape=function (newShape) {
    	this.currentShape = newShape;
    }.bind(this);

    
	this.dnd = new DnD(canvas, this);

	this.onInteractionStart= function(dnd,mousePosition){
		dnd.setInitX(mousePosition.x);
		dnd.setInitY(mousePosition.y);
	}.bind(this);

	
    this.onInteractionUpdate=function (dnd) {
        console.log("Update");



	}.bind(this);


	this.onInteractionEnd= function (dnd,mousePosition) {

		dnd.setFinalX(mousePosition.x);
        dnd.setFinalY(mousePosition.y);
        var figure;

		//si ligne a été selectionné, on dessine une ligne
	    if(this.currEditingMode==editingMode.line){
            figure=new Line(dnd.getInitX(),dnd.getFinalX(),dnd.getInitY(),dnd.getFinalY(),this.currLineWidth,this.currColour);
            //figure=new Ellipse(dnd.getInitX(),dnd.getFinalX(),dnd.getInitY(),dnd.getFinalY(),this.currLineWidth,this.currColour);

        }
		//si on a decidé de dessiner un rectangle
	    else if (this.currEditingMode==editingMode.rect) {
	        var largeur= dnd.getFinalX()-dnd.getInitX();
	        var hauteur=dnd.getFinalY()-dnd.getInitY();
			figure=new Rectangle(dnd.getInitX(),dnd.getInitY(),largeur,hauteur,this.currLineWidth,this.currColour);
			
		}
		//si on a choisi figure ellipse
        else if (this.currEditingMode==editingMode.ellipse) {
            figure=new Ellipse(dnd.getInitX(),dnd.getInitY(),dnd.getFinalX(),dnd.getFinalY(),this.currLineWidth,this.currColour);
        }



        figure.updateShapeList();
		figure.paint(ctx);
		drawing.addForm(figure);


        
	}.bind(this);



};


