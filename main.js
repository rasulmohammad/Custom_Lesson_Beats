// DO NOT WORRY ABOUT THIS:
import wavFiles, {isRecording, recordedBeats, recordBtn, playBtn, playBeats, stopRecording, startRecording} from "./array.js"

// (wavFiles is an array that contains all of the .wav sounds in our folder)










































































































// DISREGARD THE CODE DOWN HERE, IT'S NOT FOR YOU GUYS!! (but if you're curious, I left some documentation to understand it)

// Getting all our elements
let savedContainer = document.getElementById("save")
let saved = false;
let logsDiv = document.getElementById("logs")
let finalPlay = document.getElementById("final")
let recordingNumber = 0
let audioContainer = document.getElementById("audioDiv")


// On function save
savedContainer.addEventListener("click", function(){
    recordingNumber++  // Increment # of recording
    saved = true;  
    logsDiv.innerHTML = "" // Setting the captions to blank
    let newh2 = document.createElement("h2")   // Creating a new caption

    // Create the recording button, give it some text, add it to our audio container
    let newRecording = document.createElement("button")
    newRecording.innerHTML = `Play recording #${recordingNumber}`
    audioContainer.appendChild(newRecording)


    // Establishing a temporary array so we can save our beats
    let tempArr = []

    // CSS for the buttons
    newRecording.style.margin = "20px"
    newRecording.style.backgroundColor = "cadetblue"


    // If there isn't anything recorded, go to else statement. If there is at least something recorded, create a caption "saved"
    if(recordedBeats.length != 0){  
        newh2.innerHTML = "Saved!"
    } else {
        newh2.innerHTML = "Nothing recorded!"
    }


    // Actually having the caption pop up
    logsDiv.appendChild(newh2)


    // We're using a for loop to save this current beat inside our tempArr (which is respective to each button and each audio)
    for(let i = 0; i<recordedBeats.length; i++){
        tempArr.push(recordedBeats[i])
    }


    // Each button gets this respective code process
    newRecording.addEventListener("click", function(){
        const firstBeatTimestamp = tempArr[0].timestamp  // Set the original timestamp

        // For each of the files in the arr ->
        tempArr.forEach(({ soundFile, timestamp}) => {
            const timeBetween = timestamp - firstBeatTimestamp;   // Gets the pauses in between accurately
            setTimeout(() => {
                let audio = new Audio(soundFile)  // Creating audio and playing it
                audio.currentTime = 0;
                audio.play()
            }, timeBetween);
        })
        console.log(tempArr)
    })
    
})



// Recording your audio
recordBtn.addEventListener("click", function (){
    let newh2 = document.createElement("h2")
    logsDiv.innerHTML = ""

    // If we're currently recording and click the btn, we want it to stop
    if(isRecording){
        stopRecording()
        recordBtn.innerHTML = "Record"
        newh2.innerHTML = ""
    } else {  //
        startRecording()
        recordBtn.innerHTML = "Stop Recording"
        newh2.innerHTML = "Currently recording... (remember to click stop after this ends)"
    }
    logsDiv.appendChild(newh2)
    saved = false; // This makes it so that your saved code doesn't run
    
})



// Playing song
playBtn.addEventListener("click", function (){
    logsDiv.innerHTML = ""
    let newh2 = document.createElement("h2")
    if(recordedBeats.length == 0){
        newh2.innerHTML = "Nothing is recorded, go record!"
    } else {
        newh2.innerHTML = "Playing.. "
    }

    logsDiv.appendChild(newh2)

    playBeats()

})
