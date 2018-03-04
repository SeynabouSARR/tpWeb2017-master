
var editingMode = { rect: 0, line: 1, ellipse: 2, losange: 3, hexagone: 4, octagone: 5, star: 6, arc: 7};
var miniature_images = {
    rect:"rectangle.jpg",
    line:"line.jpg",
    ellipse:"ellipse.jpg",
    losange:"losange.jpg",
    hexagone:"hexagone.jpg",
    octagone:"octagone.jpg",
    star:"etoile.jpg",
    arc:"arc.jpg"
    
}

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
    this.currColour = '#320f1f';
    this.currentShape = 0;

    this.dnd = new DnD(canvas, this);



    this.setCurrEditingMode=function(newMode){
        this.currEditingMode =newMode;

        var fileName;
        switch(this.currEditingMode)
        {
            case editingMode.rect: fileName=miniature_images.rect;
            break;
            case editingMode.line: fileName=miniature_images.line;
            break;
            case editingMode.ellipse: fileName=miniature_images.ellipse;
            break;
            case editingMode.losange: fileName=miniature_images.losange;
            break;
            case editingMode.hexagone: fileName=miniature_images.hexagone;
            break;
            case editingMode.octagone: fileName=miniature_images.octagone;
            break;
            case editingMode.star: fileName=miniature_images.star;
            break;
            case editingMode.arc: fileName=miniature_images.arc;
            break;
            default:
            break;
            

        }
        miniature.src="images/"+fileName;
 

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
        //initialisation d'un losange
        else if (this.currEditingMode==editingMode.losange)
        {
            figure=new Losange(dnd.getInitX(),dnd.getInitY(),dnd.getFinalX(),dnd.getFinalY(),this.currLineWidth,this.currColour);
        }
		//initialisation d'un hexagone
        else if (this.currEditingMode==editingMode.hexagone)
        {
            figure=new Hexagone(dnd.getInitX(),dnd.getInitY(),dnd.getFinalX(),dnd.getFinalY(),this.currLineWidth,this.currColour);
        }
        //initialisation d'un octagone
        else if (this.currEditingMode==editingMode.octagone)
        {
            figure=new Octagone(dnd.getInitX(),dnd.getInitY(),dnd.getFinalX(),dnd.getFinalY(),this.currLineWidth,this.currColour);
        }



        //console.log('###DDDDDDDDDDDDDDDEEEEEEEEEEEEEEEEEBBBBBBBBBBBBUUUUUUUUUUUUUUUUTTTTTTTTTTT');

        figure.updateShapeList();
        figure.paint(ctx);
        //drawing.echo2();
        drawing.save(figure);
        //drawing.carteker.echo();
        drawing.echo2();
        //console.log('###FFFFFFFFFFFFFFFFFIIIIIIIIIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN');


        
    }.bind(this);
    

    //initialiser les paramètres de pencil
    //Pour faire correspondre les elements du IHM et du Model
    this.initialisation = function()
    {

        
        pencil.setCurrLineWidth(spinnerWidth.value);
        pencil.setCurrColour(colour.value);

        var currentMode;
        
        if(boutonLine.checked)
        {
            currentMode = editingMode.line;
        }
        else if(boutonRectangle.checked)
        {
            currentMode = editingMode.rect;
        } 
        else if(boutonEllipse.checked)
        {
            currentMode = editingMode.ellipse;
        } 
        else if(boutonLosange.checked)
        {
            currentMode = editingMode.losange;
        } 
        else if(boutonHexagone.checked)
        {
            currentMode = editingMode.hexagone;
        } 
        else if(boutonOctagone.checked)
        {
            currentMode = editingMode.octagone;
        } 
        else if(boutonEtoile.checked)
        {
            currentMode = editingMode.star;
        } 
        else if(boutonArc.checked)
        {
            currentMode = editingMode.arc;
        } 
        
        pencil.setCurrEditingMode(currentMode);
       

    }.bind(this);



};




//le Carteker, c'est qui enregistre la liste des modification du canvas
//grace à lui, on pourra faire undo/redo
function Saver ()
{
	this.listPrevious = [];
    this.listNext =[];
    this.current=[];

	this.getDrawing = function(){ return this.drawing;}.bind(this);

    


    this.save = function (newValue) {
        //console.log('Passe par ici');
        var toSave = cloneArray(this.current);
        this.listPrevious.push(toSave);
        this.current = cloneArray(newValue);
        this.listNext = [];
    }.bind(this);


    this.echo = function(){
        console.log("Prev : "+this.listPrevious.length+" Current : "+this.current.length+ " Next : "+this.listNext.length);
       
    }.bind(this);

   
    this.getPrevious = function () {
    	if(this.listPrevious.length!=0)
		{
            boutonRedo.disabled = false;
            this.listNext.push(cloneArray(this.current));
            this.current = this.listPrevious.pop();
            return cloneArray(this.current);
        }
        return [];

    }.bind(this);


    this.getNext = function () {
    	if(this.listNext.length!=0)
		{
            boutonUndo.disabled = false;
            this.listPrevious.push(cloneArray(this.current));
            this.current = this.listNext.pop();
            return this.current;
        }
        return [];

    }.bind(this);


    this.hasNext = function(){
        if(this.listNext.length == 0 ){
            return false;
        }
        return true;
    }.bind(this);

    this.hasPrevious = function(){
        if(this.listPrevious.length == 0 ){
            return false;
        }
        return true;
    }.bind(this);

    


};


