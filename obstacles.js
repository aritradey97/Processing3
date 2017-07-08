function Obstacles(x,y)
{
	this.x=x;
	this.y=y;
	this.speedx=-3;
	this.display=function()
	{
		fill(255,0,100);
		rect(this.x,this.y,50,60);
	}
	this.move=function()
	{
		this.x+=this.speedx;
	}
}