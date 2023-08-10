const wavFiles = [
    "sounds/clap-808.wav",
    "sounds/clap-analog.wav",
    "sounds/clap-crushed.wav",
    "sounds/clap-fat.wav",
    "sounds/clap-slapper.wav",
    "sounds/clap-tape.wav",
    "sounds/cowbell-808.wav",
    "sounds/crash-808.wav",
    "sounds/crash-acoustic.wav",
    "sounds/crash-noise.wav",
    "sounds/crash-tape.wav",
    "sounds/hihat-808.wav",
    "sounds/hihat-acoustic01.wav",
    "sounds/hihat-acoustic02.wav",
    "sounds/hihat-analog.wav",
    "sounds/hihat-digital.wav",
    "sounds/hihat-dist01.wav",
    "sounds/hihat-dist02.wav",
    "sounds/hihat-electro.wav",
    "sounds/hihat-plain.wav",
    "sounds/hihat-reso.wav",
    "sounds/hihat-ring.wav",
    "sounds/kick-808.wav",
    "sounds/kick-acoustic01.wav",
    "sounds/kick-acoustic02.wav",
    "sounds/kick-big.wav",
    "sounds/kick-classic.wav",
    "sounds/kick-cultivator.wav",
    "sounds/kick-deep.wav",
    "sounds/kick-dry.wav",
    "sounds/kick-electro01.wav",
    "sounds/kick-electro02.wav",
    "sounds/kick-floppy.wav",
    "sounds/kick-gritty.wav",
    "sounds/kick-heavy.wav",
    "sounds/kick-newwave.wav",
    "sounds/kick-oldschool.wav",
    "sounds/kick-plain.wav",
    "sounds/kick-slapback.wav",
    "sounds/kick-softy.wav",
    "sounds/kick-stomp.wav",
    "sounds/kick-tape.wav",
    "sounds/kick-thump.wav",
    "sounds/kick-tight.wav",
    "sounds/kick-tron.wav",
    "sounds/kick-vinyl01.wav",
    "sounds/kick-vinyl02.wav",
    "sounds/kick-zapper.wav",
    "sounds/openhat-acoustic01.wav",
    "sounds/openhat-analog.wav",
    "sounds/openhat-slick.wav",
    "sounds/openhat-tight.wav",
    "sounds/perc-808.wav",
    "sounds/perc-chirpy.wav",
    "sounds/perc-hollow.wav",
    "sounds/perc-laser.wav",
    "sounds/perc-metal.wav",
    "sounds/perc-nasty.wav",
    "sounds/perc-short.wav",
    "sounds/perc-tambo.wav",
    "sounds/perc-tribal.wav",
    "sounds/perc-weirdo.wav",
    "sounds/ride-acoustic01.wav",
    "sounds/ride-acoustic02.wav",
    "sounds/shaker-analog.wav",
    "sounds/shaker-shuffle.wav",
    "sounds/shaker-suckup.wav",
    "sounds/snare-808.wav",
    "sounds/snare-acoustic01.wav",
    "sounds/snare-acoustic02.wav",
    "sounds/snare-analog.wav",
    "sounds/snare-big.wav",
    "sounds/snare-block.wav",
    "sounds/snare-brute.wav",
    "sounds/snare-dist01.wav",
    "sounds/snare-dist02.wav",
    "sounds/snare-dist03.wav",
    "sounds/snare-electro.wav",
    "sounds/snare-lofi01.wav",
    "sounds/snare-lofi02.wav",
    "sounds/snare-modular.wav",
    "sounds/snare-noise.wav",
    "sounds/snare-pinch.wav",
    "sounds/snare-punch.wav",
    "sounds/snare-smasher.wav",
    "sounds/snare-sumo.wav",
    "sounds/snare-tape.wav",
    "sounds/snare-vinyl01.wav",
    "sounds/snare-vinyl02.wav",
    "sounds/tom-808.wav",
    "sounds/tom-acoustic01.wav",
    "sounds/tom-acoustic02.wav",
    "sounds/tom-analog.wav",
    "sounds/tom-chiptune.wav",
    "sounds/tom-fm.wav",
    "sounds/tom-lofi.wav",
    "sounds/tom-rototom.wav",
    "sounds/tom-short.wav"
]

// Gathering our buttons
let recordBtn = document.getElementById("record")
let playBtn = document.getElementById("play")
 
let isRecording = false;
let recordedBeats = []


function startRecording(){
    
    isRecording = true
    recordedBeats = [] // resetting beats


}

function stopRecording(){

    isRecording = false;

}


function playBeats(){

    recordedBeats.forEach(({ soundFile, timestamp}) => {
        const timeBetween = timestamp - recordedBeats[0].timestamp;
        setTimeout(() => {
            let audio = new Audio(soundFile)
            audio.currentTime = 0;
            audio.play()
        }, timeBetween);
    })

}




export {isRecording, recordedBeats, recordBtn, playBtn, playBeats, stopRecording, startRecording}
export default wavFiles