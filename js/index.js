$(document).ready(() => {
    $("#generate-shape").click((e) => {
        let positions = [];
        let shapeAnimate = (shape) => {
            $(shape).animate({
                top: 50,
            }, {
                    duration: 4700,
                    step: (now, fx) => {
                        $(shape).css("top", now);
                        if (positions[0] != undefined) {
                            positions[0] = Math.floor($(shape).offset().top)
                        }

                        positions[0] = Math.floor($(shape).offset().top)
                    },
                    complete: function () {
                        console.log(positions)
                        $(shape).animate({
                            top: -1000
                        }, {
                                duration: 17000,
                                step: (now, fx) => {
                                    $(shape).css("top", now);
                                }
                            })
                    }
                })
        }
        console.log(positions)
        let random = () => {
            let currentNum;
            if (currentNum !== undefined) {
                let newNum = Math.floor(Math.random() * 1024)
                let diff = Math.abs(newNum - currentNum)
                currentNum = newNum - diff
                return newNum
            }
            currentNum = Math.floor(Math.random() * 1024)
            return currentNum
        }

        let randomSize = () => {
            return Math.floor(Math.random() * 70) + 30
        }
        let size = randomSize();
        let squareBlue = $("<div class='square'></div>").css({ position: 'absolute', bottom: -100, left: random(), display: 'inline-block', margin: 0, border: '10px solid blue', width: `${size}px`, height: `${size}px` })
        let squareOrange = $("<div class='square'></div>").css({ border: '10px solid orange', position: 'absolute', bottom: -100, left: random() })
        let squareGreen = $("<div class='square'></div>").css({ border: '10px solid green', position: 'absolute', bottom: -100, left: random() })

        let circleBlue = $("<div class='circle'></div>").css({ position: 'absolute', bottom: -100, left: random(), border: '10px solid blue', borderRadius: '50%', width: `${size}px`, height: `${size}px` })
        let circleOrange = $("<div class='circle'></div>").css({ border: '10px solid orange', position: 'absolute', bottom: -100, left: random() })
        let circleGreen = $("<div class='circle'></div>").css({ border: '10px solid green', position: 'absolute', bottom: -100, left: random() })

        let triangleBlue = $("<div><div class='triangle'><div class='empty'></div></div></div>").css({ position: 'absolute', bottom: -100, left: random() })
        let triangleOrange = $("<div><div class='triangle' style='border-bottom:solid 70px orange'><div class='empty'></div></div></div>").css({ position: 'absolute', bottom: -100, left: random() })
        let triangleGreen = $("<div><div class='triangle' style='border-bottom:solid 70px green'><div class='empty'></div></div></div>").css({ position: 'absolute', bottom: -100, left: random() })

        if ($('input[value=blue]:checked').val() && $('input[value=square]:checked').val()) {
            $("#board").append(squareBlue)
            shapeAnimate(squareBlue)

        }
        if ($('input[value=orange]:checked').val() && $('input[value=square]:checked').val()) {
            $("body").append(squareOrange)
            shapeAnimate(squareOrange)
        }
        if ($('input[value=green]:checked').val() && $('input[value=square]:checked').val()) {
            $("body").append(squareGreen)
            shapeAnimate(squareGreen)
        }
        if ($('input[value=blue]:checked').val() && $('input[value=circle]:checked').val()) {
            $("body").append(circleBlue)
            shapeAnimate(circleBlue)
        }
        if ($('input[value=orange]:checked').val() && $('input[value=circle]:checked').val()) {
            $("body").append(circleOrange)
            shapeAnimate(circleOrange)
        }
        if ($('input[value=green]:checked').val() && $('input[value=circle]:checked').val()) {
            $("body").append(circleGreen)
            shapeAnimate(circleGreen)
        }
        if ($('input[value=blue]:checked').val() && $('input[value=triangle]:checked').val()) {
            $("body").append(triangleBlue)
            shapeAnimate(triangleBlue)
        }
        if ($('input[value=orange]:checked').val() && $('input[value=triangle]:checked').val()) {
            $("body").append(triangleOrange)
            shapeAnimate(triangleOrange)
        }
        if ($('input[value=green]:checked').val() && $('input[value=triangle]:checked').val()) {
            $("body").append(triangleGreen)
            $(triangleGreen).animate({ bottom: '200%' }, 7000)
        }

    })
})