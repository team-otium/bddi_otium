/**************************  
**************************  QUESTION 8
**************************/

/**
 * MOBILE
 */

// The html (without section)
mobile_html =
    `
    <div class="text_center_mobile">
        <h1 class="question_mobile">Composez votre son</h1>
        <button id="q8button1" class="q8button"></button>
        <button id="q8button2" class="q8button"></button>
        <button id="q8button3" class="q8button"></button>
        <button id="q8button4" class="q8button"></button>
    </div> 
    <div class="trace_son">
        <div class="draw_son"><img src="/both/assets/img/q8/trace-son.png"></div>
    </div>


    <div id="selectedSon">
        <svg height="20" width="20">
            <circle class="selectedSon2" cx="8" cy="10" r="8" stroke="#000000" stroke-width="1" fill="transparent" fill-opacity="1" />
        </svg>
        <svg height="20" width="20">
            <circle class="selectedSon3" cx="8" cy="10" r="8" stroke="#000000" stroke-width="1" fill="transparent" fill-opacity="1" />
        </svg>
        <svg height="20" width="20">
            <circle class="selectedSon4" cx="8" cy="10" r="8" stroke="#000000" stroke-width="1" fill="transparent" fill-opacity="1" />
        </svg>
    </div>


    <div class="btnValidQ8">
        <a class="validQ8" href="#"><img src="/both/assets/img/q8/valid.png" alt=""></a>
    </div>
 `

// All listeners, one variable per listener
mobile_listener1 = [".q8button", "touchstart", (e) => {
    socket.emit("q8", e.target.id)
}]

mobile_listener2 = ["#q8button1", "touchstart", () => {
    document.querySelector('.draw_son').style.animation = "drawTrace 4.5s forwards"
}]

mobile_listener3 = [".btnValidQ8", "click", () => {
    document.querySelector('.btnValidQ8').style.display = "none"
    document.querySelector('.btnValidQ8').style.transition = "2s"

    document.querySelector('.draw_son').style.opacity = "0"
    document.querySelector('.draw_son').style.transition = "2s"

    document.querySelector('#q8button1').style.display = "none"

    setTimeout(function(){ 
        document.querySelector('.trace_son').style.display = "none"
        document.querySelector('.firstMenu').style.display = "block"

        document.querySelector('#q8button2').style.display = "block"
        document.querySelector('#q8button3').style.display = "block"
        document.querySelector('#q8button4').style.display = "block"

        document.querySelector('#selectedSon').style.display = "block"
    }, 2000);

    socket.emit("q8", "valid")
}]

mobile_listener4 = ["#q8button2", "touchstart", () => {
    document.querySelector('.selectedSon2').style.fill = "#000000"
    document.querySelector('#q8button2').style.opacity = "1"
}]

mobile_listener5 = ["#q8button3", "touchstart", () => {
    document.querySelector('.selectedSon3').style.fill = "#000000"
    document.querySelector('#q8button3').style.opacity = "1"
}]

mobile_listener6 = ["#q8button4", "touchstart", () => {
    document.querySelector('.selectedSon4').style.fill = "#000000"
    document.querySelector('#q8button4').style.opacity = "1"

    setTimeout(function(){ 
        document.querySelector('#q8button2').style.display = "none"
        document.querySelector('#q8button3').style.display = "none"
        document.querySelector('#q8button4').style.display = "none"
    
        document.querySelector(".circle1").style.display = "block"
        document.querySelector(".circle2").style.display = "block"
    }, 3000);
}]


// Socket on
mobile_socketOn1 = ["name", () => {

}]

// Script to be executed when the page is displayed
mobile_script = () => {
    document.querySelector(".circle1").style.display = "none"
    document.querySelector(".circle2").style.display = "none"
    document.querySelector('.firstMenu').style.display = "none"

    ValidationBtn.canValidate = true
    ValidationBtn.actualPage = questions.q8
    ValidationBtn.nextPage = questions.q9
    ValidationBtn.actualQ = "8"
    ValidationBtn.nextQ = "9"
}

// Name of the transitions classes [when he leave, when he arrive]
mobile_transition = ["out", "in"]

/**
 * DESKTOP
 */

desktop_html =
    `
    <div class="text_center">
        <h1 class="question_desktop">Composez votre son</h1>
            <audio id="q8song1" src="/both/assets/sound/q8/btn1.mp3"></audio>
            <audio id="q8song2" src="/both/assets/sound/q8/btn2.mp3"></audio>
            <audio id="q8song3" src="/both/assets/sound/q8/btn3.mp3"></audio>
            <audio id="q8song4" src="/both/assets/sound/q8/btn4.mp3"></audio>
            <canvas id="q8can"></canvas>
    </div>
    <div id="q8imgContainer">
        <img id="q8img1" class="q8show" src="/both/assets/img/q8/geste-interaction.png">
        <img id="q8img2" class="q8hide" src="/both/assets/img/q8/geste-interaction.gif">

        <img id="q8img3" class="q8hide" src="/both/assets/img/q8/geste-interaction_1.png">
        <img id="q8img4" class="q8hide" src="/both/assets/img/q8/geste-interaction_1.gif">

        <img id="q8img5" class="q8hide" src="/both/assets/img/q8/geste-interaction_2.png">
        <img id="q8img6" class="q8hide" src="/both/assets/img/q8/geste-interaction_2.gif">

        <img id="q8img7" class="q8hide" src="/both/assets/img/q8/geste-interaction_3.png">
        <img id="q8img8" class="q8hide" src="/both/assets/img/q8/geste-interaction_3.gif">
    </div>
 `

desktop_listener1 = ["selector", "type", () => {

}]

desktop_listener2 = ["selector", "type", () => {

}]

desktop_socketOn1 = ["q8", (data) => {
    console.log(data)
    switch (data) {
        case "q8button1":
            if (window.q8song["1"]) {
                window.q8song["1"] = false
                document.querySelector("#q8song1").pause()
                document.querySelector("#q8song1").currentTime = 0
            } else {
                window.q8song["1"] = true
                document.querySelector("#q8song1").play()
                document.getElementById("q8img1").classList.add("q8hide")
                document.getElementById("q8img1").classList.remove("q8show")

                document.getElementById("q8img2").classList.add("q8show")
                document.getElementById("q8img2").classList.remove("q8hide")
            }
            break;
        case "q8button2":
            if (window.q8song["2"]) {
                window.q8song["2"] = false
                document.querySelector("#q8song2").pause()
                document.querySelector("#q8song2").currentTime = 0
                document.getElementById("q8img3").classList.add("q8show")
                document.getElementById("q8img3").classList.remove("q8hide")
                document.getElementById("q8img4").classList.add("q8hide")
                document.getElementById("q8img4").classList.remove("q8show")
            } else {
                window.q8song["2"] = true
                document.querySelector("#q8song2").play()
                document.getElementById("q8img4").classList.add("q8show")
                document.getElementById("q8img4").classList.remove("q8hide")
                document.getElementById("q8img3").classList.add("q8hide")
                document.getElementById("q8img3").classList.remove("q8show")
            }
            break;
        case "q8button3":
                if (window.q8song["3"]) {
                    window.q8song["3"] = false
                    document.querySelector("#q8song3").pause()
                    document.querySelector("#q8song3").currentTime = 0
                    document.getElementById("q8img5").classList.add("q8show")
                    document.getElementById("q8img5").classList.remove("q8hide")
                    document.getElementById("q8img6").classList.add("q8hide")
                    document.getElementById("q8img6").classList.remove("q8show")
                } else {
                    window.q8song["3"] = true
                    document.querySelector("#q8song3").play()
                    document.getElementById("q8img6").classList.add("q8show")
                    document.getElementById("q8img6").classList.remove("q8hide")
                    document.getElementById("q8img5").classList.add("q8hide")
                    document.getElementById("q8img5").classList.remove("q8show")
                }
            break;
        case "q8button4":
                if (window.q8song["4"]) {
                    window.q8song["4"] = false
                    document.querySelector("#q8song4").pause()
                    document.querySelector("#q8song4").currentTime = 0
                    document.getElementById("q8img7").classList.add("q8show")
                    document.getElementById("q8img7").classList.remove("q8hide")
                    document.getElementById("q8img8").classList.add("q8hide")
                    document.getElementById("q8img8").classList.remove("q8show")
                } else {
                    window.q8song["4"] = true
                    document.querySelector("#q8song4").play()
                    document.getElementById("q8img8").classList.add("q8show")
                    document.getElementById("q8img8").classList.remove("q8hide")
                    document.getElementById("q8img7").classList.add("q8hide")
                    document.getElementById("q8img7").classList.remove("q8show")
                }
            break;

        case "valid":

                document.getElementById("q8img3").classList.add("q8show")
                document.getElementById("q8img3").classList.remove("q8hide")

                document.getElementById("q8img5").classList.add("q8show")
                document.getElementById("q8img5").classList.remove("q8hide")

                document.getElementById("q8img7").classList.add("q8show")
                document.getElementById("q8img7").classList.remove("q8hide")

        break;
    
        default:
            break;
    }
}]

desktop_script = () => {
    window.q8animate = true
    document.getElementById("iframeAudio").pause()
    window.q8song = {
        "1":false,
        "2":false,
        "3":false,
        "4":false
    }

    var canvas = document.getElementById("q8can");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = window.innerWidth
    canvas.style.height = window.innerHeight
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    var audio = document.getElementById("q8song1");

    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = Math.pow(2,6) ;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        ctx.clearRect(0,0,WIDTH,HEIGHT)
  
        x = 0;
  
        analyser.getByteFrequencyData(dataArray);
        bufferLength = analyser.frequencyBinCount;
        barWidth = (WIDTH / (bufferLength));
  
        for (var i = 0; i < bufferLength; i++) {
          barHeight = map(dataArray[i],0, 256, 0, (HEIGHT-135)/2);

          var r = map(dataArray[i], 0, 256, 83, 209)
          var g = map(dataArray[i], 0, 256, 255, 66) + i
          var b = map(dataArray[i], 0, 256, 221, 240) + i
  
          ctx.beginPath()
          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, (HEIGHT/2) - 1, barWidth, barHeight);
          
          ctx.closePath()

          ctx.beginPath()
          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, (HEIGHT/2) - barHeight, barWidth, barHeight);
          
          ctx.closePath()
          
          
          x += barWidth + 2;
        }
      }
      renderFrame()
      function map(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
      }
}

desktop_transition = ["out", "in"]

/**
 * Export
 */

q8_mobile = {
    html: mobile_html,
    listeners: [mobile_listener1, mobile_listener2, mobile_listener3, mobile_listener4, mobile_listener5, mobile_listener6],
    socketOn: [],
    script: mobile_script,
    transitions: mobile_transition,
}

q8_desktop = {
    html: desktop_html,
    listeners: [],
    socketOn: [desktop_socketOn1],
    script: desktop_script,
    transitions: desktop_transition,
}