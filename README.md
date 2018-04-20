### Shape Generator Case Study

The case study was to create a shape generator based off this GIF
(http://gph.is/1bn5EyK)

And it should look similar to this
(https://drive.google.com/open?id=17WBulMzKOjH10y1H8v_sSuJASAh9JSl2)

There are no frameworks allowed; however, this use of jQuery and SASS/SCSS is available

### My Findings

# Classes vs. Creating jQuery Elements
I started out by generating the shapes in Classes. I found this useful for narrowing down the shapes coordinates and the code looked clean; however, I decided to use jQuery's animate, so it was easier to create the elements in using jQuery. If I had more time I may have used Classes for the shapes.

# Radio Forms vs. Not Using Radio Forms
I could have easily used a radio form but with some of the new ES6-7 features, they don't work too nicely with forms. I did this in case there needed to be any added functionality. The downside to this, is it makes the code less DRY.

# Collision of Shapes
To get each shapes coordinates, I used jQuery's offset method inside the animate method, and nested animate method. I put an object containing each move, the top coordinates (rounded) as the property and the shape that was moving as the value.
```{top coordinates: shape}```
This was I could see the shapes every move. I wasn't successful with this due to lack of time. 

# Animation
jQuery's animate is great! It has that smooth animation, similar to the example in the GIF. This is why I decided to use it. I found there was a complete method in animate, where I couuld re animate at a certain point on the page and have the shape move slower to give it that scrolling gravity effect. 

### Conclusion
I really enjoyed doing this! As I mentioned, I didn't have a lot of time. I had to devote my time to my current position. Since we just launched, we have had a lot of fires to put out. This isn't my best work, but with more time I'd be able to figure out the problems

This had sparked my curiosity on collision, and I'll be figuring that out! 

Thanks for giving me the opportunity to give this a shot.