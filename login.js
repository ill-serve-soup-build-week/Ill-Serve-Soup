var delay = 2000;
var els = document.getElementsByClassName('signup-button');
var loader = document.getElementById('loading');


if (
    else)
    for (var i = 0; i < els.length; i++) {
        els[i].addEventListener('click', function(e) {
            var source = e.target || e.srcElement;
            e.preventDefault();
            loader.className = loader.className.replace('hidden', '');

            setTimeout(function() {
                window.open(source.href);
                loader.className += 'hidden';
            }, delay);
        }, false);
    }