
/*
 * 
 * Thumbs App :D
 * 
 */

  /* Global */
  var d = document;
  var w = window;
  var tFile = d.getElementById('theFile');
  var preview = d.createElement('img');
  var showPreview;

(function(){
    tFile.addEventListener( 'change', loadThumb, false );
    preview.addEventListener( 'load', loadCanvas, false );
})();

function loadCanvas(){
    
    //preview.width = 150;
    //preview.height = 200;
    
    var canvas = d.getElementById('canvas');    
    var mw = 220;
    var mh = 220;
    var i = preview.width;
    var h = preview.height;
    
    if( i > h ){
        
        if( i > mw ){
            h *= mw / i;
            i = mw;
        }
        
    }else{
        if( h > mh ){
            i *= mh / h;
            h = mh;
        }
    }
    
    canvas.width = i;
    canvas.height = h;
    
    var ctx = canvas.getContext("2d");
    //ctx.drawImage( preview, -( canvas.width ) / 2, -( canvas.height ) / 2 );
    ctx.drawImage( preview, 0, 0, i, h );
    
}

function loadThumb(){
   
    var file = tFile.files[0];  
    showPreview = d.getElementById('showPreview');
        
   preview.src = w.URL.createObjectURL(file);   
    //preview.src = 'http://cartoonvsmanga.com/wp-content/uploads/2011/02/Usop_Luffy_onepiece.jpg';
    showPreview.innerHTML = "";
    //showPreview.appendChild( preview );
    
};