
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    ctx.rect(this.getX(),this.getLargeur(), this.getY(),this.getHauteur());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {

    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx,canvas) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};


Form.prototype.paint = function (ctx) {
    this.couleur="";
    this.epaisseur = 0;
}
