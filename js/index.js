$(document).ready(() => {
    $("#generate-shape").click((e) => {
        let positions = {};
        //shape animation;
        let shapeAnimate = (shape) => {
            //animate shape from bottom of page to 50 away from the top
            // at normal speed;
            $(shape).animate({
                top: 50,
            }, {
                    duration: 2700,
                    step: function (now, fx) {
                        $(shape).css("top", now);
                        //stored the coordinates of each shape;
                        //object 
                        if (positions != undefined) {
                            positions[Math.floor($(shape).offset().top)] = this;
                        }
                        positions[Math.floor($(shape).offset().top)] = this;
                    },
                    complete: function () {
                        //after initial animate is complete start new animation
                        //at a slower rate to have the gravity effect;
                        $(shape).animate({
                            top: -1000
                        }, {
                                duration: 17000,
                                step: (now, fx) => {
                                    $(shape).css("top", now);
                                    if (positions != undefined) {
                                        positions[Math.floor($(shape).offset().top)] = this;
                                    }
                                    positions[Math.floor($(shape).offset().top)] = this;

                                }
                            })
                    }
                })
        }
        console.log(positions);
        //sets random starting positions for each shape across the page;
        let randomPosition = () => {
            let currentNum;
            if (currentNum !== undefined) {
                let newNum = Math.floor(Math.random() * 1024);
                let diff = Math.abs(newNum - currentNum);
                currentNum = newNum - diff;
                return newNum
            }
            currentNum = Math.floor(Math.random() * 1024);
            return currentNum
        }
        //creates a random size for each shape possibility 
        //manipulating height and width;
        let randomSize = () => {
            return Math.floor(Math.random() * 70) + 30
        }
        let size = randomSize();
        //other way to create shapes would be 
        //using Classes; 
        //would do so if I had more time;
        const squareBlue = $("<div id='squareBlue'></div>").css({ border: '10px solid blue', width: `${size}px`, height: `${size}px`, position: 'absolute', bottom: -100, left: randomPosition() });
        const squareOrange = $("<div id='squareOrange'></div>").css({ border: '10px solid orange', width: `${size}px`, height: `${size}px`, position: 'absolute', bottom: -100, left: randomPosition() });
        const squareGreen = $("<div id='squareGreen'></div>").css({ border: '10px solid green', width: `${size}px`, height: `${size}px`, position: 'absolute', bottom: -100, left: randomPosition() });

        const circleBlue = $("<div id='circleBlue'></div>").css({ border: '10px solid blue', borderRadius: '50%', width: `${size}px`, height: `${size}px`, position: 'absolute', bottom: -100, left: randomPosition() });
        const circleOrange = $("<div id='circleOrange'></div>").css({ border: '10px solid orange', borderRadius: '50%', width: `${size}px`, height: `${size}px`, position: 'absolute', bottom: -100, left: randomPosition() });
        const circleGreen = $("<div id='circleGreen'></div>").css({ border: '10px solid green', borderRadius: '50%', width: `${size}px`, height: `${size}px`, position: 'absolute', bottom: -100, left: randomPosition() });

        const triangleBlue = $("<div><div class='triangle'><div class='empty'></div></div></div>").css({ position: 'absolute', bottom: -100, left: randomPosition() });
        const triangleOrange = $("<div><div class='triangle' style='border-bottom:solid 70px orange'><div class='empty'></div></div></div>").css({ position: 'absolute', bottom: -100, left: randomPosition() });
        const triangleGreen = $("<div><div class='triangle' style='border-bottom:solid 70px green'><div class='empty'></div></div></div>").css({ position: 'absolute', bottom: -100, left: randomPosition() });
        //check which radio was checked, this isn't DRY
        //decided not to use radio form becuase that could
        //prevent you from using certain added functionality down the road; 
        if ($('input[value=blue]:checked').val() && $('input[value=square]:checked').val()) {
            $("#board").append(squareBlue);
            shapeAnimate(squareBlue);

        }
        if ($('input[value=orange]:checked').val() && $('input[value=square]:checked').val()) {
            $("#board").append(squareOrange);
            shapeAnimate(squareOrange);
        }
        if ($('input[value=green]:checked').val() && $('input[value=square]:checked').val()) {
            $("#board").append(squareGreen);
            shapeAnimate(squareGreen);
        }
        if ($('input[value=blue]:checked').val() && $('input[value=circle]:checked').val()) {
            $("#board").append(circleBlue);
            shapeAnimate(circleBlue);
        }
        if ($('input[value=orange]:checked').val() && $('input[value=circle]:checked').val()) {
            $("#board").append(circleOrange);
            shapeAnimate(circleOrange);
        }
        if ($('input[value=green]:checked').val() && $('input[value=circle]:checked').val()) {
            $("#board").append(circleGreen);
            shapeAnimate(circleGreen);
        }
        if ($('input[value=blue]:checked').val() && $('input[value=triangle]:checked').val()) {
            $("#board").append(triangleBlue);
            shapeAnimate(triangleBlue);
        }
        if ($('input[value=orange]:checked').val() && $('input[value=triangle]:checked').val()) {
            $("#board").append(triangleOrange);
            shapeAnimate(triangleOrange);
        }
        if ($('input[value=green]:checked').val() && $('input[value=triangle]:checked').val()) {
            $("#board").append(triangleGreen);
            shapeAnimate(triangleGreen);
        }

    })
})