var obstacles=[];
var sphere;
var gravity;
function setup()
{
	
	createCanvas(800,600);
	for(var i=0;i<10;i++)
		obstacles[i]=new Obstacles(100*i+100,height-60);
	sphere=new Sphere(100,height/2);
	gravity=createVector(0,0.1);
}
function draw()
{
	background(0);
	sphere.display();
	/*rotateY(frameCount*-0.02);
	rotateX(frameCount*-0.02);
	sphere(frameCount*3,27,27);
	box(50,50,50);*/
	sphere.update();
	for(var i=0;i<10;i++)
	{
		obstacles[i].display();
		//obstacles[i].move();
	}
	
	//click();
	
	sphere.applyforce(gravity);
	edge();
	end();
}
/*function click()
{
	if(keyCode===RIGHT_ARROW)
	{
		sphere.speed.x+=0.01;
	}
	
	
}*/
function edge()
{
	for(var i=0; i<10; i++)
	{
		if(sphere.pos.x>=obstacles[i].x&&sphere.pos.x<=obstacles[i].x+50)
		{
			if(sphere.pos.y>obstacles[i].y-10&&sphere.pos.y<height-50)
			{
				sphere.pos.y=obstacles[i].y-10;
				sphere.speed.y=0;
			}
		}
		/*else {
			if(sphere.pos.y>obstacles[i].y-10)
			break;
			continue;
		}*/ 
	}	
}
function keyPressed()
{
	 if(keyCode===32)
	 {
		if(sphere.pos.y==height-70){
		jump=createVector(0,-3);
		sphere.applyforce(jump);
		}
	 }
	else if(keyCode===RIGHT_ARROW)
	{
		sphere.speed.x+=1;
	}
}
function end()
{
	if(sphere.pos.y>height)
	{
		textSize(32)
		text("Game Over",width/2,height-100);
	}
}
