alert("hi");
  if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
    alert("phone mode");
	loadCSS("css\phone.css");
  } else {
    alert("PC mode");
    transform-origin: top left;
    transform: scale(5); 
  }