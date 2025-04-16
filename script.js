let startingDatePrompt = prompt("Enter the Starting Date and Time (month date, year hrs:min:sec)","")
// let endingDatePrompt = prompt("Enter the Ending TDate and Time (date month, year hrs:min:sec)","")

const endDate=new Date(startingDatePrompt).getTime();
const startDate=new Date().getTime();


let x = setInterval(function updateTime(){
    const now = new Date().getTime()

    const distanceCovered = now-startDate
    const distancePending = endDate-now
    
    //calcualte days,min,hrs and sec
    //1 day = 24 * 60 * 60 * 1000 ms
    //1 hrs = 60 * 60 * 1000 ms
    //1 min = 60 * 1000 ms
    //1 sec = 1000 ms
    const days = Math.floor(distancePending/(24 * 60 * 60 * 1000))
    const hrs = Math.floor((distancePending%(24 * 60 * 60 * 1000))/(60 * 60 * 1000))
    const min = Math.floor((distancePending%(60 * 60 * 1000))/(60 * 1000))
    const sec = Math.floor((distancePending%(60 * 1000))/(1000))+1

    //polpulate to UI
    document.getElementById("days").innerHTML = days
    document.getElementById("hrs").innerHTML = hrs
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec

    //calculate percentage of distance of progress bar
    const totalDistance = endDate - startDate

    const percentageDistance = (distanceCovered / totalDistance)*100

    //put it into progress bar width
    document.getElementById("progress-bar").style.width = percentageDistance + "%"

    if(distancePending<0){
        clearInterval(x)
        document.getElementById("countDown").innerHTML="EXPIRED"
        document.getElementById("progress-bar").style.width="100%"
    }

},1000)