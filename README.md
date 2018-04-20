# Shape Generator Case Study

The case study was to create a shape generator based off this GIF
(http://gph.is/1bn5EyK)

And it should look similar to this
(https://drive.google.com/open?id=17WBulMzKOjH10y1H8v_sSuJASAh9JSl2)

There are no frameworks allowed; however, this use of jQuery and SASS/SCSS is available

# Functionality
I was able to generate each shape, by color, and with a random size (all except the triangle). The shapes fill the page and have 2 animations to give it the effect similar to the GIF. There's some functionality I was able to do. With more time, I could have figured it out. Please readymy findings for more details!

# My Findings

### Classes vs. Creating jQuery Elements
I started out by generating the shapes in Classes. I found this useful for narrowing down the shapes coordinates and the code looked clean; however, I decided to use jQuery's animate, so it was easier to create the elements in using jQuery. If I had more time I may have used Classes for the shapes.

### Radio Forms vs. Not Using Radio Forms
I could have easily used a radio form but with some of the new ES6-7 features, they don't work too nicely with forms. I did this in case there needed to be any added functionality. The downside to this, is it makes the code less DRY.

### Collision of Shapes
To get each shapes coordinates, I used jQuery's offset method inside the animate method, and nested animate method. I put an object containing each move, the top coordinates (rounded) as the property and the shape that was moving as the value.
```{top coordinates: shape}```
This was I could see the shapes every move. I wasn't successful with this due to lack of time. 

### Animation
jQuery's animate is great! It has that smooth animation, similar to the example in the GIF. This is why I decided to use it. I found there was a complete method in animate, where I couuld re animate at a certain point on the page and have the shape move slower to give it that scrolling gravity effect. When I attemped to use Classes, I was able to get a similar effect, but it wasn't as smooth. I didn't have too much time to play around with Classes to really see, so this was my initial thought.

# Conclusion
I really enjoyed doing this! As I mentioned, I didn't have a lot of time. I had to devote my time to my current position. This isn't my best work, but with more time I'd be able to figure out the problems

Doing this had sparked my curiosity on collision and potentially using Classes for the shapes; I had a project of this veriety where I used Classes.

Thanks for giving me the opportunity to give this a shot.