// @ts-nocheck
var imgs = document.getElementsByClassName("img-wrapper")
var modalImg = document.getElementById("modal-img")
var modal = document.getElementById("myModal")
for (var i = 0, len = imgs.length; i < len; i++) {
  imgs[i].addEventListener("click", function () {
    modal.style.display = "block"
    var tempStyle = getComputedStyle(this)
    modalImg.src = tempStyle.backgroundImage.slice(4, -1).replace(/"/g, "")
  })
}
var span = document.getElementsByClassName("close")[0]
span.onclick = function () {
  modal.style.display = "none"
}

var bioScroll = document.getElementById("bio-link")
bioScroll.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.6,
    scrollTo: { y: "#bio", offsetY: 70 },
  })
})
var musicScroll = document.getElementById("music-link")
musicScroll.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.6,
    scrollTo: { y: "#music", offsetY: 70 },
  })
})
var galleryScroll = document.getElementById("gallery-link")
galleryScroll.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.6,
    scrollTo: { y: "#gallery", offsetY: 70 },
  })
})
