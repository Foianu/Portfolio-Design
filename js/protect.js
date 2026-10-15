// Discourage saving pictures: no right-click menu and no drag-out on images (all pages)
(function(){
  function onImage(e){ return e.target.closest && e.target.closest("img, .ph, .tile-img"); }
  document.addEventListener("contextmenu", function(e){ if (onImage(e)) e.preventDefault(); });
  document.addEventListener("dragstart", function(e){ if (onImage(e)) e.preventDefault(); });
})();
