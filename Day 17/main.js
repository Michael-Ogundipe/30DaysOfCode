var color = [ "#5f27cd", "#222f2e","#222f3e","#f368e0","#0abde3","#10ac84"];

var i = 0;

document.querySelector("button").addEventListener("click", 
    function(){ 
         i = i < color.length ? ++i : 0; 
document.querySelector("body").style.background = color[i] } )
