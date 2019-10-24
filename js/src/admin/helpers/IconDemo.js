export default function IconDemo(type, icon) {
  if (type == 'original') var i = icon.originalIcon();
  if (type == 'modified') var i = icon.modifiedIcon();

  var element = document.querySelector('#' + type + icon.id());
  if (element) {
    var new_element = document.createElement('i');
    new_element.setAttribute('id', type + icon.id());
    if (i) new_element.setAttribute('class', 'icon ' + i);
    element.replaceWith(new_element);
  }

  var random = document.getElementById('random' + icon.id());
  if (random) {
    var new_random = document.createElement('i');
    new_random.setAttribute('id', 'random' + icon.id());
    if (icon.originalIcon() && icon.modifiedIcon()) new_random.setAttribute('class', 'icon fas fa-random');
    random.replaceWith(new_random);
  }
}
