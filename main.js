
var canvas = new fabric.Canvas("myCanvas");

var ballY= 0;
var ballX= 0;
var holeY= 400; 
var holeX=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img)  {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:holeY,
			left:holeX
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballX==holeX)&&(ballY==holeY)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have hit the goal!!!"
		document.getElementById("hd3").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY >500){
			ballY=ballY + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When up arrow key is pressed, X = " + ballX + "and Y = " + ballY);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		 if(ballY <=450){
			 ballY=ballY + block_image_height;
			 console.log("block image height = " + block_image_height);
			 console.log("When Down arrow key is pressed, X = " + ballX + "and Y = " + ballY);
			 canvas.remove(ball_obj);
			 new_image();
		 }

	}

	function left()
	{
		if(ball_x >5)
		{
			ballX=ballX + block_image_width;
			 console.log("block image width = " + block_image_width);
			 console.log("When left arrow key is pressed, X = " + ballX + "and Y = " + ballY);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ballX=ballX + block_image_width;
			 console.log("block image width = " + block_image_width);
			 console.log("When right arrow key is pressed, X = " + ballX + "and Y = " + ballY);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}
	
}

