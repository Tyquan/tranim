# Tranim

> tranim.js is a fast, small, and makes HTML animation simpler.

> Note that this is the API documentation for tranim.js

## new Tranim()
> Create a new Tranim object to work with the api

    const app = new Tranim();
    console.log(app);
    
## .getElement(argument)
> Grab an element from the html file
> The .getElement(argument) method is based on the documents .querySelector() method So a user should use (.) to represent class attributes or (#) to repesent id attributes as the argument.

    const app = new Tranim();
    let animate = app.getElement('#animate');
    console.log(animate);

## slideHor(direction, elem, startPosition, endPosition, speed, callback)
> Slides an element horizontally based on its start position and end position. Speed is based on integer 1- 10

    var app = new Tranim();
    
    var lButton = app.getElement('#lButton');
    var rButton = app.getElement('#rButton');
    var animate = app.getElement('#animate');
    
    rButton.addEventListener('click', () => {
        app.slideHor('right', animate, 0, 1150, 5, () => {
            console.log('Sliding');
        });
    });

    lButton.addEventListener('click', () => {
        app.slideHor('left', animate, 0, 1150, 5, () => {
            console.log('Sliding');
        });
    });