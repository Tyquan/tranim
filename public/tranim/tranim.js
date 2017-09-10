class Tranim {
    
    // Get an element from a document using either a class attribute ( . ) or an id attribute ( # )
    getElement(element) {
        return document.querySelector(element);
    }

    // Sets the position of any element
    setPos(position) {
        var pos = position;
        return pos;
    }
    
    //Slide Horizontal Animation
    slideHor(direction, elem, startPosition, endPosition, speed, callback){
        var pos = this.setPos(startPosition);
        var end = this.setPos(endPosition);
        var id = setInterval(frame, speed);
        var dir = direction.toLowerCase();

        function frame() {
            if (pos == end) {
                clearInterval(id);
            } else {
                pos++;
                if (dir == 'left') {
                    elem.style.right = pos + 'px';
                }
                if (dir == 'right') {
                    elem.style.left = pos + 'px';
                }
            }
        }
        
        callback();
    }
    
    //Slide Verical Animation
    slideVert(direction, elem, startPosition, endPosition, speed, callback){
        var pos = this.setPos(startPosition);
        var end = this.setPos(endPosition);
        var id = setInterval(frame, speed);
        var dir = direction.toLowerCase();

        function frame() {
            if (pos == end) {
                clearInterval(id);
            } else {
                pos++;
                if (dir == 'down') {
                    elem.style.top = pos + 'px';
                }
                if (dir == 'up') {
                    elem.style.bottom = pos + 'px';
                }
            }
        }
        
        callback();
    }
    
    animate(options) {
        var start = new Date;
        var id = setInterval(function() {
            var timePassed = new Date - start;
            var progress = timePassed / options.duration;
            if (progress > 1) {
                progress = 1;
            }
            options.progress = progress;
            var delta = options.delta(progress);
            options.step(delta);
            if (progress == 1) {
                clearInterval(id);
                options.complete();
            }
        }, options.delay || 10);
    }
    
    swing(progress) {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
    }
    
    // Allow an element to Fade Into a document
    fadeOut(element, options) {
        var startOpacity = 1;
        this.animate({
            duration: options.duration,
            delta: function(progress) {
                progress = this.progress;
                //return this.swing(progress);
                return 0.5 - Math.cos(progress * Math.PI) / 2;
            },
            complete: options.complete,
            step: function(delta) {
                element.style.opacity = startOpacity - delta;
            }
        });
    }
    
    fadeIn (element, options) {
        var startOpacity = 0;
        this.animate({
            duration: options.duration,
            delta: function(progress) {
                progress = this.progress;
                //return this.swing(progress);
                return 0.5 - Math.cos(progress * Math.PI) / 2;
            },
            complete: options.complete,
            step: function(delta) {
                element.style.opacity = startOpacity + delta;
            }
        });
    }
    
}