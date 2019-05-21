/**
 * MOBILE
 */

// The html (without section)
let mobile_html =
    `

`

// All listeners, one variable per listener
let mobile_listener1 = ["selector", "type", () => {

}]

let mobile_listener2 = ["selector", "type", () => {

}]
/** And more... */

// Socket on

// Script to be executed when the page is displayed
let mobile_script = () => {

}

// Name of the transitions classes [when he leave, when he arrive]
let mobile_transition = ["out", "in"]

/**
 * DESKTOP
 */

let desktop_html =
    `
<!----------- 
------------- SECTION 1 animation logo  
----------->
<div class="logo_center">
    <video autoplay="" muted="" id="video">
        <source src="/both/assets/img/logo.mp4" type="video/mp4">
    </video>
    <canvas id="logoAnim"></canvas>
</div>
<!----------- 
------------- FIN SECTION 1 animation logo  
----------->
`

let desktop_listener1 = ["selector", "type", () => {

}]

let desktop_listener2 = ["selector", "type", () => {

}]

let desktop_script = () => {
    setTimeout(() => {
        intro.animationLogo.transitionTo("desktop", intro.intro)
        document.querySelector(".logo_top_left").classList.add("out")
        document.querySelector(".logo_top_left").classList.add("in")
    }, 3700)

    var canvas = document.getElementById('logoAnim');
    var ctx = canvas.getContext('2d');
    var video = document.getElementById('video');
    video.play()
    canvas.classList.add("opacityAdd")
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // set canvas size = video size when known
    video.addEventListener('loadedmetadata', function() {
        console.log("ok")
    
    });

    video.addEventListener('play', function() {
    var $this = this; //cache
    (function loop() {
        if (!$this.paused && !$this.ended) {
                // Save the state, so we can undo the clipping
            ctx.save();

            // Create a shape, of some sort
            ctx.beginPath();
            ctx.arc(video.videoHeight/2, video.videoHeight/2, (video.videoHeight/2)-10, 0, 2 * Math.PI)
            ctx.closePath();
            // Clip to the current path
            ctx.clip();

            ctx.drawImage($this, 0, 0);

            // Undo the clipping
            ctx.restore();
            setTimeout(loop, 1000 / 15); // drawing at 30fps
        }
    })();
    }, 0);
}

let desktop_transition = ["out", "in"]

/**
 * Export
 */

let animation_logo_mobile = {
    html: mobile_html,
    listeners: [],
    socketOn: [],
    script: () => { },
    transitions: mobile_transition,
}

let animation_logo_desktop = {
    html: desktop_html,
    listeners: [],
    socketOn: [],
    script: desktop_script,
    transitions: desktop_transition,
} 