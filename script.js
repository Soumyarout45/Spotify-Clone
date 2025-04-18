// Store the music link in a variable
const musicLink = 'songs/संदेशे_आते_है_(4K)_-_Sandese_Aate_Hai_Full_4K_Video_Song_(Border)_-_बॉर्डर_-_सनी_देओल(48k).mp3';
// Create an audio element
const audio = new Audio(musicLink);

    //  // Log all properties of the audio object to the console
    //  console.log('Audio Object Properties:');
    //  for (let property in audio) {
    //      if (audio.hasOwnProperty(property)) {
    //          console.log(`${property}: ${audio[property]}`);
    //      } else {
    //          console.log(`${property} (inherited): ${audio[property]}`);
    //      }
    //  }

    //  // Additionally, you can log the entire audio object to explore it in the console
    //  console.log(audio);

const previousBtn = document.getElementById('previousButton');
const playBtn = document.getElementById('playButton');
const nextBtn = document.getElementById('nextButton');
let playbars = document.getElementsByClassName('playbar');
let play = document.getElementById('x');
const songListDisplay = document.getElementById('songList');

const songs = [
    {
        name : "songs/संदेशे_आते_है_(4K)_-_Sandese_Aate_Hai_Full_4K_Video_Song_(Border)_-_बॉर्डर_-_सनी_देओल(48k).mp3",
        title: "Aashiqui_Aa_Gayi",
        artist: "Arijit_Singh",
    },
    {
        name : "songs/He_Mahabahu_-_Satyajit_Pradhan_-_Viral_Jagannath_Bhajan_-_New_Odia_Bhajan_Song_2023_-_Viral_Bhajan(48k).mp3",
        title: "He_Mahabahu",
        artist: "Satyajit_Pradhan",
    },
    {
        name : "songs/संदेशे_आते_है_(4K)_-_Sandese_Aate_Hai_Full_4K_Video_Song_(Border)_-_बॉर्डर_-_सनी_देओल(48k).mp3",
        title: "Meri_Zindagi_Hai_Tu",
        artist: "Neeti___Manoj",
    },
    {
        name : "songs/He_Mahabahu_-_Satyajit_Pradhan_-_Viral_Jagannath_Bhajan_-_New_Odia_Bhajan_Song_2023_-_Viral_Bhajan(48k).mp3",
        title: "He_Mahabahu",
        artist: "Satyajit_Pradhan",

    },
    {
        name : "songs/संदेशे_आते_है_(4K)_-_Sandese_Aate_Hai_Full_4K_Video_Song_(Border)_-_बॉर्डर_-_सनी_देओल(48k).mp3",
        title: "Aashiqui_Aa_Gayi",
        artist: "Arijit_Singh",
    },
    {
        name : "songs/He_Mahabahu_-_Satyajit_Pradhan_-_Viral_Jagannath_Bhajan_-_New_Odia_Bhajan_Song_2023_-_Viral_Bhajan(48k).mp3",
        title: "He_Mahabahu",
        artist: "Satyajit_Pradhan",

    }
];

let isPlaying = false;

//for play music
const playMusic = () => {
    isPlaying=true;
    audio.play();
    playBtn.src ='svg/pause.svg';
    for(let i=0;i<playbars.length;i++){
        playbars[i].style.opacity='1';
    }
    
    console.log("play");
    document.querySelector('.songinfo').innerHTML= `${songs.title} - ${songs.artist}.mp3`;
    document.querySelector('.songtime').innerHTML= "00:00/00:00";
}

//for pause music
const pauseMusic = () => {
    isPlaying=false;
    audio.pause();
    playBtn.src ='svg/play.svg';
    for(let i=0;i<playbars.length;i++){
        playbars[i].style.opacity='0';
    }
    
   
    console.log("pause");
}

// Add event listeners to the buttons to control the audio playback
playBtn.addEventListener('click', () => {
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
    

});
document.getElementById('x').addEventListener('click', () => {
    if(isPlaying){
        pauseMusic();
        playbars.style.opacity = "0";
    }else{
        playMusic();
        playbars.style.opacity = "1";
    }
});

//music play next and previous

const loadSong = (songs) => {
    audio.src = songs.name;
}

let songIndex =0;

const nextSong = () =>{
    songIndex=(songIndex + 1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
    console.log(songs[songIndex]);
}

const prevSong = () =>{
    songIndex=(songIndex - 1 + songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
    console.log(songs[songIndex]);
}


nextBtn.addEventListener('click', nextSong);
previousBtn.addEventListener('click', prevSong);

// Function to populate the song list
const populateSongList = () => {
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        // li.textContent = `${song.title} - /n ${song.artist}mp3 `;
        li.innerHTML = ` <img src="svg/music.svg" alt="" id="leftPause"> ${song.title} - ${song.artist}.mp3 
     <div class="playNow">
        <img src="svg/leftPlayBtn.svg" alt="Play" class="leftPlayBtn">
    </div>`;
    const leftPlayIcon = document.getElementById('playButton');
        li.addEventListener('click', () => {
            songIndex = index;
            // loadSong(song);
            // playMusic();
            if(isPlaying){
                pauseMusic();
                leftPause.src= 'svg/leftPlayBtn.svg';
                playbars.style.opacity = "0";
            }else{
                playMusic();
                leftPause.src= 'svg/leftPauseBtn.svg';
                playbars.style.opacity = "1";
            }

        });
        songListDisplay.appendChild(li);
    });
}
// Populate the song list on page load
populateSongList();

//Add an event listnear for hamburger

document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".left").style.left = "0";
})

//Add an event listnear for close

document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".left").style.left = "-100%";
})

songs.forEach(song => {
    console.log(`Name: ${song.name}`);
});

let a="songs\संदेशे_आते_है_(4K)_-_Sandese_Aate_Hai_Full_4K_Video_Song_(Border)_-_बॉर्डर_-_सनी_देओल(48k).mp3"
console.log(audio);





