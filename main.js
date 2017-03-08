window.sr = ScrollReveal({
    scale: 1,
    easing: "ease-out"
});

function setOpacity(elements, val) {
    for (var i = 0; i < elements.length; i++) {
        var els = document.querySelectorAll(elements[i]);
        for (var j = 0; j < els.length; j++) {
            els[j].style.opacity = val;
        }
    }
}
setOpacity(["h2","h3","hr","blockquote",".dbox", "img"], 0);

sr.reveal("h1", {duration: 4000, delay: 100, distance: "5px"});

setTimeout(function() {
    setOpacity(["h2"], 1);
    sr.reveal("h2", {duration: 4000, distance: "5px"});
}, 1000);

setTimeout(function() {
    setOpacity(["h3","hr"], 1);
    sr.reveal("h3", {duration: 4200, distance: "0"});
    sr.reveal("hr", {duration: 4200, distance: "0"});
}, 1800);

setTimeout(function() {
    setOpacity(["blockquote", "img"], 1);
    sr.reveal("blockquote", {duration: 5000, distance: "50px"});
    sr.reveal("img", {duration: 5000, distance: "50px"});
}, 3000);

setTimeout(function() {
    setOpacity([".dbox"], 1);
    sr.reveal(".dbox", {duration: 6000, distance: "0"});
}, 4000);
