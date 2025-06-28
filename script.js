function upDate(previewPic) {
  // Cập nhật văn bản của div#image
  document.getElementById("image").innerHTML = previewPic.alt;
  
  // Cập nhật background image
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  // Đặt lại văn bản
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
  
  // Đặt lại background image
  document.getElementById("image").style.backgroundImage = "url('')";
}
