
const song1 = newAudio('')
let isPlaying = false

document.getElementById('play').addEventListener('click', () => {
    if(isPlaying) {
        song1.play();
        isPlaying = true
    }})

    document.getElementById('stop').addEventListener('click', () => {
        if(isPlaying) {
            song1.pause()
            song1.currentTime = 0
            isPlaying = false
        }})