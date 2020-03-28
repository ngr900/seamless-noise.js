# seamless-noise.js
This is a brutally simple bit of code that takes 4D simplex noise (by default using [simplex-noise.js](https://github.com/jwagner/simplex-noise.js)) and wraps it around to create tileable 2D noise.
Here's an example of a seamless 200x200 noise tile generated using this glorified gist, and another example of regular 2D simplex noise:

![Tileable Simplex Noise](https://i.imgur.com/6uugoNn.png)
![Regular Simplex Noise](https://i.imgur.com/EMs7ADT.png)

Note the differences in texture. This is not a fault of this or any other implementation, simplex noise is simply not quite as pretty in higher dimensions.
# usage
Initialize an instance of `SeamlessNoise` exactly like you would with `SimplexNoise`, either provide a seed or a random one will be generated.
```javascript
generator = new SeamlessNoise('seed');
generator = new SeamlessNoise(); // random seed
```
To retrieve the noise value for given `(x,y)` call `noise2D` on the instance. `tileSize` determines the width & height of the tile, `scale` determines the scale of the noise (larger value - larger noise).
```javascript
value = generator(x,y,tileSize,scale);
value = generator(0,0,500,2);
```
# example
Generating a simple noise tile might look something like this:
```javascript
const size = 500, scale = 2;
const generator = new SeamlessNoise('seed');

const imageData = new ImageData(size,size)
var index = 0;

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
  
    var value = generator.noise2D (x,y,size,scale);
    value = (value + 1)/2*255;
    imageData.data[index++] = value,
    imageData.data[index++] = value,
    imageData.data[index++] = value,
    imageData.data[index++] = 255;
    
  }
}

const canvas = document.createElement('canvas');
canvas.width = size, canvas.height = size;
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

ctx.putImageData(imageData,0,0)
```
