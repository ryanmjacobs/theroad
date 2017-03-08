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

setOpacity(["h1"], 1);
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

///////

// data = ["header", "body"]
function render_box(data) {
    var head_el = document.getElementsByClassName("dbox-word")[0];
    var body_el = document.getElementsByClassName("dbox-definition")[0];

    head_el.innerHTML = data[0];
    body_el.innerHTML = data[1];
}

function get_text(key) {
    var k = (key.split(" ")[0]);

    if (k == "mistrusted")
        return ["mistrusted", "This word contributes to the weary tone of the passage and the novel as a whole. He doesn’t trust things, even good things like pleasant dreams."];
    else if (k == "peril")
        return ["peril", "This adds to the threatened tone of the novel. There are very few instances of safety and comfort."];
    else if (k == "languor")
        return ["languor and death", "These words remind the reader of the ever present threat of death and the tone of nothingness and blackness."];
    else if (k == "dark")
        return ["dark", "Throughout the novel, the audience is reminded of the contrast between light and dark. There are two paths in the novel, with both figurative and literal grey coming between the light and dark ways."];
    else if (k == "if")
        return ["if he lived... all be lost", "The phrasing of this sentence brings about the theme of sadness and uncertainty. There is the question of how long he will live, and how the world will fare during this post apocalyptic time. The sadness comes in when he talks of all of the world being lost. Everything will fade."];
    else if (k == "blind")
        return ["blind", "Throughout the novel, the theme of sight and blindness is prevalent. The tone here is loss and sadness. He often feels like his life and journey are lacking direction. He can’t seem to see the way in front of him."];
    else if (k == "fading")
        return ["slowly fading", "The tone here is of desolation. The world they knew is fading; all that remains is the dreams, and even those are fading. Nothing good and pure remains, except memories, and all of our memories fail us eventually."];
    else if (k == "phantom")
        return ["phantom", "The ghost of an old world still haunts the man and death lingers everywhere in this landscape."];
    else
        return [];
}

var tone_els = document.getElementsByClassName("tone");

var tone_click = function() {
    var txt = get_text(this.innerHTML);
    if (txt && txt.length == 2)
        render_box(txt);

    for (var i = 0; i < tone_els.length; i++ ) {
        tone_els[i].classList.remove("tone-clicked");
    }

    this.classList.add("tone-clicked");
};
var tone_mouseover = function() {
    console.log(this);
};
var tone_mouseout = function() {
    console.log(this);
};

for (var i = 0; i < tone_els.length; i++ ) {
    var el = tone_els[i];
    el.onclick = tone_click;
    el.onmouseover = tone_mouseover;
    el.onmouseout  = tone_mouseout;
}
