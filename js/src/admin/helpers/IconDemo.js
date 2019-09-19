export default function IconDemo(type, icon) { // a mess, I advise you to skip
  var o = icon.originalIcon();
  if (type == "o") var i = o;
  var m = icon.modifiedIcon();
  if (type == "m") var i = m;

  var e = document.querySelector("icon#" + type + icon.id());
  if (e) {

    var c = e.lastElementChild;
    if (c) {
      while (c) {
        e.removeChild(c);
        c = e.lastElementChild;
      }
    }

    var n = document.createElement("i");
    n.setAttribute("class", i + " Icons-demo");
    e.appendChild(n);
  }

  var r = document.querySelector("icon#r" + icon.id());
  if (r) {
    var cr = r.lastElementChild;

    if (o && m) {
      if (!cr) {
        var nr = document.createElement("i");
        nr.setAttribute("class", "fas fa-random Icons-random");
        r.appendChild(nr);
      }
    } else {
      if (r.lastElementChild) {
        while (cr) {
          r.removeChild(cr);
          cr = r.lastElementChild;
        }
      }
    }
  }
}