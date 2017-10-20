
function showspeed() {
    var content = document.createTextNode('x' + this.playbackRate.toString());
    if (e = document.getElementById('ytpbsi')) { e.remove() }

    var ibox = document.createElement('div');
    ibox.classList.add('ytpbsi-speed');
    ibox.id = 'ytpbsi';
    ibox.appendChild(content);

    var fragment = document.createDocumentFragment();
    fragment.appendChild(ibox);
    
    this.parentElement.insertBefore(fragment, this.parentElement.firstChild);
    this.classList.add('ytpbsi-init');

}

var p = document.getElementsByTagName('video')[0];
p.addEventListener('play', showspeed);
p.addEventListener('ratechange', showspeed);

if (! p.paused ) { 
    p.pause();
    p.play();
}



