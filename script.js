// console.log('lets write js');

let currentSong = new Audio();

let songs;

// let currFolder;

function secondsToMinutesSeconds(seconds){
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
        
    }

    const  minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2,'0');
    const formattedSeconds = String(remainingSeconds).padStart(2,'0');

    return `${formattedMinutes}: ${formattedSeconds}`;

}

async function getSongs() {
    // currFolder = folder;
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();

    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[0])
        }

    }

    return songs


}

const playMusic = (track, pause=false) => {
    currentSong.src = "/songs/" + track
    if (!pause) {
        currentSong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function main() {

    
    // get the list of all songs
    songs = await getSongs()
    playMusic(songs[0], true)

    // show all song in play list
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div> ${song.replaceAll("http://127.0.0.1:3000/%5Csongs%5C", " ")}</div>
                                <div>Sarveshwar</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="play.svg" alt="">
                            </div> </li>`;

    }
    // atach an event lister to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })

    })

    // attach an event listner to play 

    play.addEventListener("click", ()=>{
        if (currentSong.paused) {
            currentSong.play()
            play.src = "pause.svg"
        }
        else{
            currentSong.pause()
            play.src = "play.svg"
        }
    })

    // listen for timeupdate event
    currentSong.addEventListener("timeupdate", ()=>{
        // console.log(currentSong.currentTime, currentSong.currentTime);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}` 
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 +"%";
        
    })


    // Add an event listerner to seekbar
    document.querySelector(".seekbar").addEventListener("click", e=>{
        let percent = (e.offsetX /e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";

        currentSong.currentTime = ((currentSong.duration) * percent)/100
        
    })

    //Add an event listerner for humburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = 0
    })

    //Add an event listerner for close button
    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-120%"
    })

    // add event listner to privious
previous.addEventListener("click", ()=>{

    let currentFile = decodeURIComponent(currentSong.src).split(/[\/\\]/).pop();
    let index = songs.findIndex(s => decodeURIComponent(s).split(/[\/\\]/).pop() === currentFile);

    if ((index - 1) >= 0) {
        let targetFile = decodeURIComponent(songs[index - 1]).split(/[\/\\]/).pop();
        playMusic(targetFile)
    }

})

// add event listner to next
next.addEventListener("click", ()=>{

    let currentFile = decodeURIComponent(currentSong.src).split(/[\/\\]/).pop();
    let index = songs.findIndex(s => decodeURIComponent(s).split(/[\/\\]/).pop() === currentFile);

    if ((index + 1) < songs.length) {
        let targetFile = decodeURIComponent(songs[index + 1]).split(/[\/\\]/).pop();
        playMusic(targetFile)
    }

})

    // add an event to volume

    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e)=>{
        console.log("Setting valome", e.target.value, "/100");
        currentSong.volume = parseInt(e.target.value)/100
        
    })

    //load the playlist whenever card is clicked

    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item=>{            
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
        })
    });

}

main()