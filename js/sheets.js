// Sheets layout (CAD + Portfolio): project reel arrows + counter, active tab while scrolling
(function(){
  var reel=document.getElementById("reel");
  if(reel){
    var tiles=reel.querySelectorAll(".tile"),cnt=document.getElementById("reel-count");
    function step(){return tiles.length>1?tiles[1].offsetLeft-tiles[0].offsetLeft:reel.clientWidth;}
    function upd(){var i=Math.round(reel.scrollLeft/step());cnt.textContent=String(Math.min(i+1,tiles.length)).padStart(2,"0")+" / "+String(tiles.length).padStart(2,"0");}
    document.getElementById("reel-prev").addEventListener("click",function(){reel.scrollBy({left:-step(),behavior:"smooth"});});
    document.getElementById("reel-next").addEventListener("click",function(){reel.scrollBy({left:step(),behavior:"smooth"});});
    reel.addEventListener("scroll",upd,{passive:true});upd();
  }

  // the active tab is the last project whose top has passed 40% of the screen
  var tabs=document.querySelectorAll(".tabs a");
  var ids=Array.prototype.map.call(tabs,function(a){return a.getAttribute("href").slice(1);});
  function mark(){
    var cur=ids[0],line=window.innerHeight*0.4;
    ids.forEach(function(id){var el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=line)cur=id;});
    tabs.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+cur);});
  }
  if(tabs.length){window.addEventListener("scroll",mark,{passive:true});window.addEventListener("resize",mark);mark();}
})();
