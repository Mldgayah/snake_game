window.onload = function ()
{
    var canvas = document.createElement('canvas');
    var ctx;
    var delay = 1000;
    function init()
    {
        
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        refreshCanvas();
        

    }
    function refreshCanvas()
    {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xCoord,yCoord,100,50)//premier arguments x, y, longueur et largeur;
    }
}