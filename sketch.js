// https://www.youtube.com/watch?v=IKB1hWWedMk&t=0s

let cols,rows;

let scl = 50;

let w = 600;
let h = 1200;

let flying = 0;

let terrain = [];

var inc = 0.2;

function setup(){
	createCanvas(600,600, WEBGL);
	pixelDensity(1);
	//noiseDetail(4);

	frameRate(60);
	
	cols = w / scl;
	rows = h / scl;


}

function draw(){
	flying -= 0.1;
	
	let yoff = flying;
	for (let y = 0; y < rows; y++){
		let xoff = 0;
		for (let x = 0; x < cols; x++){
		terrain[x + y*rows] = map(noise(xoff,yoff),0,1,-20,100);
		xoff += inc;
		}
	yoff += inc;
	}


	background(0);

	ambientMaterial(250);

	//Stroke();
	stroke(255);
	fill(0,0,255,255);
	//noFill();

	push();
	translate(width/2,height/2);
	rotateX(PI/3);
	
	translate(-w,-h/2,200);
	for (let y = 0; y < rows-1; y++){
		beginShape(TRIANGLE_STRIP);
		for (let x = 0; x < cols; x++){
			vertex(x*scl, y*scl, terrain[x + y*rows]);
			vertex(x*scl, (y+1)*scl,terrain[x + (y+1)*rows] );
		}
		endShape();
	}
	pop();

}
