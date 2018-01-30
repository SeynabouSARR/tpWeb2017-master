
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var boutonRect = document.getElementById('butRect');
var boutonLine = document.getElementById('butLine');
var spinnerWidth = document.getElementById('spinnerWidth');
var colour = document.getElementById('colour');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
//new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

 //Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(0, 300, 200, 25, 5, '#00CCC0');
//rec.paint(ctx);
var ligne = new Rectangle(60, 60, 1, 75, 3, '#FF0000');
//ligne.paint(ctx);
 //tester également Dessin.

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
drawing.addForm(rec);
drawing.addForm(ligne);
var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);



boutonRect.addEventListener('click',function () {
    pencil.setCurrEditingMode(editingMode.rect);
    console.log(pencil);
});

boutonLine.addEventListener('click',function () {
    pencil.setCurrEditingMode(editingMode.line);
    console.log(pencil);
});


spinnerWidth.addEventListener('change',function () {
    pencil.setCurrLineWidth(this.value);
    console.log(pencil);
});

colour.addEventListener('change', function(){
    ctx.strokeStyle="blue";
 });


colour.addEventListener('change',function () {
    pencil.setCurrColour(this.value);
    console.log(pencil);
});




