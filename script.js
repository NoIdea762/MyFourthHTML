function upDate(previewPic) {
  console.log("Event triggered");
  console.log("Alt: " + previewPic.alt + ", Src: " + previewPic.src);
  document.getElementById("image").innerHTML = previewPic.alt;
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
  document.getElementById("image").style.backgroundImage = "url('')";
}