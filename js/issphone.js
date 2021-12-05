var Ftsize =1;
  if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
    Ftsize = Ftsize + Vle;
if(Vle == "0") Ftsize = 1;
window.parent.document.body.style.zoom = Ftsize;
  } else {
    return false;
  }