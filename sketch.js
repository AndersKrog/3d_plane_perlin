// https://www.youtube.com/watch?v=ikwNrFvnL3g

var inc = 0.05;

function setup(){
	createCanvas(200,200);
	pixelDensity(1);
	noiseDetail(4);
}

function draw(){
	var xoff = 0;

	loadPixels();
	for(var x = 0; x < width; x++){
		var yoff = 0;
		for(var y = 0; y < height; y++){
			index = (y * width + x)*4;
			
			r = noise(xoff,yoff) * 255;
			g = noise(xoff*2,yoff*2) * 255;
			b = noise(xoff*3,yoff*3) * 255;

			//r = random(255);
			
			pixels[index] = r;
			pixels[index+1] = g;
			pixels[index+2] = b;
			pixels[index+3] = 255;
			yoff += inc;
		}
		xoff += inc;
	}
	updatePixels();


}
