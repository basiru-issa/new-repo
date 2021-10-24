let VideoConatiner = document.querySelector('.youtubeVideo');
let VideoPlayerFrame = document.querySelector('.videoFrame');

let videoLinksArray = ['https://www.youtube.com/embed/wARbgs5Fmuw', 'https://www.youtube.com/embed/wARbgs5Fmuw', 'https://www.youtube.com/embed/wARbgs5Fmuw', 'https://www.youtube.com/embed/wARbgs5Fmuw', 'https://www.youtube.com/embed/wARbgs5Fmuw']

VideoConatiner.addEventListener("click", function() {
    // alert("clicked");
    let link = document.createElement("a");
    link.setAttribute('href', '../../videoplayer.html');

    window.location.href = link;
    let videos = document.querySelector('aside');
    videos.firstChild.remove();
    currentlyPlaying.classList.add('rtr');

});

