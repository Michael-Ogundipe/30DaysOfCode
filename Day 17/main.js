// An array for the colors
var color = [ "#1014d1", "#d6521e","#d1c110","#10e210","#310430","#10ac84"];
var colorname = ["blue","orange","yellow","green","purple","310a04",]

var i = 0;
// Change the body background color
document.querySelector("button").addEventListener("click", 
    function(){ 
         i = i < color.length ? ++i : 0; 
document.querySelector("body").style.background = color[i] } )

// Change the Button's background color.
document.querySelector("button").addEventListener("click", 
    function(){ 
         i = i < color.length ? ++i : 0; 
document.querySelector("button").style.background = color[i] } )
//
 
    


