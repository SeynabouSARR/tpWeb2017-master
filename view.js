const ROTATION = 0; //en radian
const ANGLE_DEBUT = 0; //en radian
const ANGLE_FIN = 2 * Math.PI; //en radian


Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle = this.getCouleur();
    ctx.rect(this.getX(), this.getY(),this.getLargeur(),this.getHauteur());
    ctx.stroke();
    //alert('ok');
    //ctx.clearRect(this.getX(), this.getY(),this.getLargeur()+50,this.getHauteur()+50);

};


Rectangle.prototype.updateShapeList = function () {
    shapeList.innerHTML+='<li><button type="button" class="btn btn-default" onclick="">'+
        '<span class="glyphicon glyphicon-remove-sign"></span>'+
    '</button>'+
        "Rectangle ( id: "+this.getId()+" --- "+this.getX()+','+this.getY()+','+this.getLargeur()+','+this.getHauteur() +') </li>';
    //if(this instanceof Rectangle)
    
};






Line.prototype.paint = function(ctx) {

    ctx.beginPath();
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle = this.getCouleur();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};


Line.prototype.updateShapeList = function () {
    shapeList.innerHTML+='<li id="figure_'+this.getId()+'" onclick="drawing.delete('+this.getId()+')"><button type="button"  class="btn btn-default">'+
        '<span class="glyphicon glyphicon-remove-sign"></span>'+
        '</button>'+
        "Line ( id: "+this.getId()+" --- "+this.getInitX()+","+this.getInitY()+","+this.getFinalX()+","+this.getFinalY() +") </li>";

};




Ellipse.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle = this.getCouleur();
    ctx.ellipse(this.getCenterX(), this.getCenterY(), this.getRayonX(), this.getRayonY(), ROTATION, ANGLE_DEBUT, ANGLE_FIN);
    ctx.stroke();
    console.log('paint ellipse ('+this.getCenterX()+','+this.getCenterY()+','+this.getRayonX()+','+this.getRayonY());
};


Ellipse.prototype.updateShapeList = function () {
    shapeList.innerHTML+='<li id="figure_'+this.getId()+'" onclick="drawing.delete('+this.getId()+')"><button type="button"  class="btn btn-default">'+
        '<span class="glyphicon glyphicon-remove-sign"></span>'+
        '</button>'+
        "Ellipse ( id: "+this.getId()+" --- "+this.getCenterX()+','+this.getCenterY()+','+this.getRayonX()+','+this.getRayonY() +') </li>';
};





Drawing.prototype.paint = function(ctx,canvas) {
    //redessine la zone de dessin
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    shapeList.innerHTML="";

    //on parcourt toutes les figures pour les redessiner sur la zone de dessin
    this.getForms().forEach(function(figure) {
        figure.paint(ctx);
        var string_data = "";

        if(figure instanceof Line)
        {
            //si c'est une ligne, on écrit ceci
            string_data = "Line ( id: "+figure.getId()+" --- "+figure.getInitX()+","+figure.getInitY()+","+figure.getFinalX()+","+figure.getFinalY() +") </li>";
        }
        else if (figure instanceof Rectangle)
        {
            //si c'est un rectangle, on écrit autre chose
            string_data = "Rectangle ( id: "+figure.getId()+" --- "+figure.getX()+','+figure.getY()+','+figure.getLargeur()+','+figure.getHauteur() +') </li>';
        }
        else if (figure instanceof Ellipse)
        {
            //si c'est un Ellipse
            string_data = "Ellipse ( id: "+figure.getId()+" --- "+figure.getRayonX()+','+figure.getRayonY()+','+figure.getRayonX()+','+figure.getRayonY() +') </li>';
        }


        shapeList.innerHTML+='<li id="figure_'+figure.getId()+'" onclick="drawing.delete('+figure.getId()+')"><button type="button"  class="btn btn-default">'+
            '<span class="glyphicon glyphicon-remove-sign"></span>'+
            '</button>'+ string_data;
    });

};





Form.prototype.paint = function (ctx) {
    this.couleur="";
    this.epaisseur = 0;

    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle="red";
}


