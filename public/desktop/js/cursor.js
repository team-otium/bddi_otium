// CURSOR

(function() {
    var mousePos;
    var moved = false;

    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100);

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;
      
      moved = true;

        event = event || window.event;
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        cursor.classList.add("show")
        cursor.classList.remove("hide")
        document.body.style.cursor = " url(/both/assets/img/cursor.png), auto"
        clearTimeout(window.cursorTime)

        window.cursorTime = setTimeout(()=>{
          cursor.classList.add("hide")
          cursor.classList.remove("show")
          document.body.style.cursor = "none"
        },3000)

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }
    function getMousePosition() {
        var pos = mousePos;

        if (!pos) {
            // We haven't seen any movement yet
        }
        else if(moved === true) {
          moved = false;
          cursor = document.querySelector('#cursor');
          cursor.style.left = (pos.x -5) + 'px' ;
          cursor.style.top = (pos.y -5) + 'px';
        }
    }
})();
