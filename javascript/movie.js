let videoIndex = 0;
const videoUrls = [
    'https://www.youtube.com/embed/jrQ-pInzXHE?si=3ayLS3opF_LwN-Ph',
    'https://www.youtube.com/embed/4VsGsYSOxAc?si=UQirxXqonhu-I6Em',
    'https://www.youtube.com/embed/-AZ7cnwn2YI?si=6-XMT67M1G1Bjhv1'
];

function playVideo(url) {
    document.getElementById('youtubeVideo').src = url;
}

function changeVideo() {
    videoIndex = (videoIndex + 1) % videoUrls.length;
    playVideo(videoUrls[videoIndex]);
}
