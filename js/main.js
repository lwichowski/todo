var add_btn = document.getElementById('add-btn');

add_btn.addEventListener('click', function(){
  /*var li = document.createElement("LI");
  var panel = document.getElementById('panel');
  var newLi = panel.appendChild(li);
  newLi.classList.add('panel-box');
  var input = document.getElementById('panel-input');
  newLi.innerHTML = '<p>' + input.value + '</p>';
  incHeight();*/
  var panel = document.getElementById('panel').lastChild;
  var cln = panel.cloneNode(true);
  panel.appendChild(cln);

});

function incHeight() {
  var el = document.getElementById('container');
  if (document.getElementsByTagName('li').length > 3) {
    var height = el.offsetHeight;
    var newHeight = height + 200;
    el.style.height = newHeight + 'px';
  }
}
