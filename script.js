document.addEventListener('DOMContentLoaded', function () {
    var videoElement = document.getElementById('fullscreen-video');
    videoElement.addEventListener('click', function () {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
            videoElement.webkitRequestFullscreen();
        }
    });
});
