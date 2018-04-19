class Head {

    // this is what's called when you use the "new" keyword
    constructor($el) {
        this.node = $('<div id="head"/>');
        this.currentDirection = 'right';
        this.SPEED = 500;
        this.length = 0;
        this.previousHeadPos = null;
        this.body = [];
        this.board = $el;
        $el.append(this.node);
        this.node.css({ top: 0, left: 0 });
        setTimeout(this.move.bind(this), this.SPEED);
    }

    // same as Head.prototype.move = function() {...}
    move() {
        //directions and coordinates for snakehead;

        let direction = this.currentDirection;
        let coordinates = this.node.position();
        this.previousHeadPos = { "top": coordinates.top, "left": coordinates.left };
        // this.body.unshift(previousHeadPos);
        switch (direction) {
            case 'right':
                coordinates.left += 50;
                break;
            case 'left':
                coordinates.left -= 50;
                break;
            case 'up':
                coordinates.top -= 50;
                break;
            case 'down':
                coordinates.top += 50;
                break;
            default:
                console.log('Invalid direction');
        }

        this.node.offset(coordinates);

        if (this.length > 0) {
            this.bodyMove();
        }
        if (coordinates.top < 9 || coordinates.left < 9 || coordinates.top >= 709 || coordinates.left >= 709) {
            alert('Game over.');
            this.node.remove();
            window.location.reload();
        }
        const applePos = $('#apple').position();
        if (applePos.top === coordinates.top && applePos.left === coordinates.left) {
            this.repositionApple(coordinates);
            this.growSnake(coordinates);
        }
        setTimeout(this.move.bind(this), this.SPEED);
    }

    repositionApple(snakePosition) {
        let newApplePos = this.randomPosition();
        while (newApplePos === snakePosition) {
            newApplePos = this.randomPosition();
        }
        $('#apple').offset(newApplePos);
    }


    randomPosition() {
        const randomCoordinates = {
            top: 9 + Math.floor(Math.random() * 14) * 50,
            left: 9 + Math.floor(Math.random() * 14) * 50
        };
        return randomCoordinates;
    }

    growSnake(coordinates) {
        let segment = $('<img class="segment"></img>');
        segment.attr('src', 'src/assets/codesmith-hex.png');
        segment.offset(coordinates);
        segment.css('visibility', 'hidden');
        this.board.append(segment);
        setTimeout(function () {
            segment.css('visibility', 'visible');
        }, this.SPEED);
        this.length++;
    }

    bodyMove() {
        const segment = $(".segment");
        segment.offset(this.previousHeadPos);
        /*const segments = $(".segment *");
        segments.forEach((segment, i) => {
          segment.offset(this.body[i]);
          $('#board').append(segment);
        });
        this.body.pop();*/
    }
}