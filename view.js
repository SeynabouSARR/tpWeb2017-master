
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

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
    shapeList.innerHTML+='<li><button type="button" class="btn btn-default">'+
        '<span class="glyphicon glyphicon-remove-sign"></span>'+
    '</button>'+
    'Rectangle ('+this.x+','+this.y+','+this.largeur+','+this.hauteur +') </li>';
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
    shapeList.innerHTML+='<li><button type="button" class="btn btn-default">'+
        '<span class="glyphicon glyphicon-remove-sign"></span>'+
        '</button>'+
        "Line ("+this.x1+","+this.y1+","+this.x2+","+this.y2 +") </li>";
};





Drawing.prototype.paint = function(ctx,canvas) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    shapeList.innerHTML="";
    var i=1;

    this.getForms().forEach(function(eltDuTableau) {
        eltDuTableau.paint(ctx);
        shapeList.innerHTML = "<li>"+(i++)+"</li>";

    });
};





Form.prototype.paint = function (ctx) {
    this.couleur="";
    this.epaisseur = 0;

    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle="red";
}

