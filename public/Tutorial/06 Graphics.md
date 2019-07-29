# Graphics

Graphics can be [2D](https://en.wikipedia.org/wiki/2D_computer_graphics) or [3D](https://en.wikipedia.org/wiki/3D_computer_graphics).

In computer graphics, a raster graphics or bitmap image is a dot matrix data structure that represents a generally rectangular grid of pixels (points of color), viewable via a monitor, paper, or other display medium. Raster images are stored in image files with varying formats.

Vector graphics are computer graphics images that are defined in terms of 2D points, which are connected by lines and curves to form polygons and other shapes. Each of these points has a definite position on the x- and y-axis of the work plane and determines the direction of the path; further, each path may have various properties including values for stroke color, shape, curve, thickness, and fill.

## Graphics in Phaser

In Phaser, graphics is like the canvas that lines, shapes, geometry can be dawn on.

We create a graphics on the scene like a canvas first.
`graphics = this.add.graphics();`

A Graphics object is a way to draw primitives to your game. Primitives include forms of geometry, such as Rectangles,
Circles and Polygons. They also include lines, arcs and curves. When you initially create a Graphics object it will
be empty. To 'draw' or 'stroke' to it you first specify a lineStyle or fillStyle (or both), and then draw a shape. For example:

<https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Graphics.html>

To draw a line

```js
var line = new Phaser.Geom.Line(100, 100, 200, 100); // x1,y1,x2,y2
graphics.strokeLineShape(line);
```

To draw a rectangle or fill a rectangle

```js
graphics.lineStyle(5, 0xff00ff, 1.0);
graphics.fillStyle(0xffffff, 1.0);
graphics.fillRect(50, 50, 400, 200);
graphics.strokeRect(50, 50, 400, 200);
```

or you the create the graphics object first, then can pass the graphics as the argument to add them onto the graphics.

```js
var line = new Phaser.Curves.Line([100, 100, 100, 200]);
line.draw(graphics);
```

## draw or fill

Phaser GameObjects Graphics has the following methods to stroke a shape

- stroke and strokePath()
- strokeLineShape(line)
- strokeCircle(x, y, radius)
- strokeCircleShape(circle)
- strokeEllipse(x,y,width,height [,smoothness])
- strokeEllipseShape(ellipse [,smoothness])
- strokeRect(x,y,width,height)
- strokeRectShape(rect)
- strokeRoundedRect(x,y,width,height [,radius])
- strokeTriangle(x0, y0, x1, y1, x2, y2)
- strokeTriangleShape(triangle)
- strokePoints(points [, closeShape][, closepath] [, endIndex]) points is an array of <https://photonstorm.github.io/phaser3-docs/Phaser.Geom.Point.html>

Phaser GameObjects Graphics has the following methods to fill a shape

## Dynamic or static

The graphics is on the scene. It's created in the create method.

If it's not maintained in the update method, it's static.

If it's not maintained in the update method, the graphic gets updated around every 16ms so you can use it to create animations and alike.

## Geom

<https://photonstorm.github.io/phaser3-docs/Phaser.Geom.html>

### Line

[straight line](https://photonstorm.github.io/phaser3-docs/Phaser.Geom.Line)

[curve line](https://photonstorm.github.io/phaser3-docs/Phaser.Curves.Line)

### Triangle

### Rectangle

### Circle

## Add shortcut method

this.add.circle

## Path

## Scale

## Rotation

## Tweens

## Camera

## Resources

Free stock vectors

- [https://www.freepik.com/free-vectors/graphics](https://www.freepik.com/free-vectors/graphics)
- [https://www.vectorstock.com/free-vectors](https://www.vectorstock.com/free-vectors)
- [https://www.vecteezy.com/](https://www.vecteezy.com/)
