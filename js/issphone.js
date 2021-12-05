var Ftsize =1;
  if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
	alert("phone mode");
    Ftsize = Ftsize + Vle;
if(Vle == "0") Ftsize = 2;
window.parent.document.body.style.zoom = Ftsize;
  } else {
    alert("PC mode");
  }