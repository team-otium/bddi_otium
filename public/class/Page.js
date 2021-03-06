class Page{
    constructor(desktop, mobile, id) {
        this.mobile = {
            element: document.createElement("section"),

            listeners: mobile.listeners,
            socketOn: mobile.socketOn,

            transitionOut: mobile.transitions[0],
            transitionIn: mobile.transitions[1],

            script: mobile.script
            
        }

        this.desktop = {
            element: document.createElement("section"),

            listeners: desktop.listeners,
            socketOn: desktop.socketOn,

            transitionOut: desktop.transitions[0],
            transitionIn: desktop.transitions[1],

            script: desktop.script
        }

        this.desktop.element.id = id
        this.mobile.element.id = id
        
        this.desktop.element.classList.add(this.desktop.transitionOut)
        this.mobile.element.classList.add(this.mobile.transitionOut)

        this.mobile.element.innerHTML = mobile.html
        this.desktop.element.innerHTML = desktop.html

        
    }

    addListeners(device){
        this[device].script.call()
        
        this[device].listeners.forEach(listeners => {
            document.querySelectorAll(listeners[0]).forEach(el => {
                el.addEventListener(listeners[1] , listeners[2])
            })
        })

        this[device].socketOn.forEach(so => {
            socket.on(so[0], so[1])
        })
    }

    removeListener(device){
        this[device].listeners.forEach(listeners => {
            document.querySelectorAll(listeners[0]).forEach(el => {
                el.removeEventListener(listeners[1] , listeners[2])
            })
        })

        this[device].socketOn.forEach(so => {
            socket.removeListener(so[0], so[1])
        })

        this[device].script = null

        if (this.desktop.element.id = "q1") window.q1animate = false
        if (this.desktop.element.id = "q2") window.q2animate = false
        if (this.desktop.element.id = "q3") window.q3animate = false
        if (this.desktop.element.id = "q4") window.q4animate = false
        if (this.desktop.element.id = "q5") window.q5animate = false
        if (this.desktop.element.id = "q6") window.q6animate = false
        if (this.desktop.element.id = "q7") window.q7animate = false
        if (this.desktop.element.id = "q8") window.q8animate = false
    }

    displayPage(device){
        document.getElementById("navigation").appendChild(this[device].element)
        setTimeout(()=>{
            this[device].element.classList.remove(this[device].transitionOut)
            this[device].element.classList.add(this[device].transitionIn)
            this.addListeners(device)
        }, 300)
    }

    comeBackTo(device){
        document.getElementById("navigation").innerHTML = ""
        document.getElementById("navigation").appendChild(this[device].element)
        for (let variable in intro) {
            intro[variable].removeListener(device)
        }
        for (let variable in questions) {
            questions[variable].removeListener(device)
        }
        setTimeout(()=>{
            this[device].element.classList.remove(this[device].transitionOut)
            this[device].element.classList.add(this[device].transitionIn)
            this.addListeners(device)
        }, 300)
    }
    
    transitionTo(device, to){
        // Start page from out animation
        this[device].element.classList.remove(this[device].transitionIn)
        this[device].element.classList.add(this[device].transitionOut)
        this.removeListener(device)
        document.getElementById("navigation").appendChild(to[device].element)
        setTimeout(() => {
            // Start page to in animation
            document.getElementById("navigation").removeChild(this[device].element)
            to[device].element.classList.remove(to[device].transitionOut)
            to[device].element.classList.add(to[device].transitionIn)
            to.addListeners(device)
        },800)   
    }
}