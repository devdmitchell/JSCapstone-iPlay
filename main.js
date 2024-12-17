// Select necessary elements
const songs = document.querySelectorAll('.song');   //grabs all songs
const playPauseButton = document.getElementById('play-pause');   //play pause button
const skipForwardButton = document.getElementById('skip forward');    //skip forward button
const skipBackwardButton = document.getElementById('skip backward');   //skip backward button

let currentSongIndex = 0;   //current song that is highlighted
let isPlaying = false;      //sees if song is playing or not
let audio = new Audio();    // object to play songs

// this function is so it can update the visual highlight of the selected song
function updateHighlight() {
    songs.forEach((song, index) => {
        song.style.backgroundColor = index === currentSongIndex ? 'blue' : 'lightgrey';
        song.style.color = index === currentSongIndex ? 'white' : 'black';
    });
}

// Initialize the song highlight when it loads
updateHighlight();

// this function is for the play pause button
function togglePlayPause() {
    const currentSong = songs[currentSongIndex]; 
    const audioSrc = currentSong.getAttribute('data-audio'); 

    if (audio.src !== audioSrc) {
        audio.src = audioSrc;
    }

    if (isPlaying) {
        audio.pause();      //pause the song
        console.log(`Paused: ${currentSong.textContent}`);
    } else {
        audio.play();         //play the song
        console.log(`Playing: ${currentSong.textContent}`);
    }
    isPlaying = !isPlaying;
}

// this function is for the skip forward button
function skipForward() {
    if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;      //moves to the next song
        isPlaying = false;     
        updateHighlight();     //updates the blue highlight
        togglePlayPause();     //plays the song
    }
}

// this function is for the skip backwards button
function skipBackward() {
    if (currentSongIndex > 0) {
        currentSongIndex--;   //moves back a song
        isPlaying = false;
        updateHighlight();    //updates the blue highlight
        togglePlayPause();    //plays the song
    }
}

// Event listeners for my buttons
playPauseButton.addEventListener('click', togglePlayPause); //functionality of play pause button
skipForwardButton.addEventListener('click', skipForward); //functionality of skip forward button
skipBackwardButton.addEventListener('click', skipBackward);  //functionality of skip backward button

// Additional functionality: Keyboard navigation
// Allows users to navigate songs and play/pause using keyboard arrows and Enter key
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        if (currentSongIndex < songs.length - 1) {
            currentSongIndex++;
            updateHighlight();
        }
    } else if (e.key === 'ArrowUp') {
        if (currentSongIndex > 0) {
            currentSongIndex--;
            updateHighlight();
        }
    } else if (e.key === 'Enter') {
        togglePlayPause();
    }
});
