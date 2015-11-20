document.querySelector('.noscript').remove();
var mask = document.querySelector('#adultwarningmask');
if (mask) mask.remove() ;

if (location.search.match(/^\?v=.*/)) {
    var textareas = document.querySelectorAll('.comment textarea.hidden')
    var videoInfo = document.querySelector('#video_info');

    textareas = [].slice.call(textareas);

    if (!textareas.length) {
        var div = document.createElement('div');
        div.innerText = 'no link';
        div.style.fontSize = '20px';

        videoInfo.appendChild(div);
    }
    textareas.forEach((t)=> {
        t.parentElement.querySelector('.text').innerText = t.value;
        var match = t.value.match(/http:\/\/www\.cola[^\]]*/)
        if (!match) return;

        var url = match[0];
        var link = document.createElement('a');
        link.text = url;
        link.href = url;
        link.target = "_blank";
        link.style.display = "block"
        videoInfo.appendChild(link);
    })
}
