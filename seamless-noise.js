function SeamlessNoise ( seed ) {

  const _generator = new SimplexNoise ( seed );

  this.noise2D = function ( x, y, tileSize, scale ) {

    let x1 = -scale, x2 = scale;
    let y1 = -scale, y2 = scale;

    let a1 = ( x / tileSize ) * 2 * Math.PI,
        a2 = ( y / tileSize ) * 2 * Math.PI;

    let dx = x2 - x1, dy = y2 - y1;

    let nx = x1 + Math.cos ( a1 ) * dx / ( 2 * Math.PI );
    let ny = y1 + Math.cos ( a2 ) * dy / ( 2 * Math.PI );
    let nz = x1 + Math.sin ( a1 ) * dx / ( 2 * Math.PI );
    let nw = y1 + Math.sin ( a2 ) * dy / ( 2 * Math.PI );

    return _generator.noise4D ( nx, ny, nz, nw );

  }

}
