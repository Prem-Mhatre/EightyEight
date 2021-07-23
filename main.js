
var canvas = new fabric.Canvas("myCanvas");

hole_object = "";
hole_x = 800;
hole_y = 400;
hole_width = 50;
hole_height = 50;

ball_img_object = "";
ball_img_x = 10;
ball_img_y = 10;
ball_img_width = 50;
ball_img_height = 50;

block_image_height = 5;
block_image_width = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_object = Img;

		hole_object.scaleToWidth(hole_width);
		hole_object.scaleToHeight(hole_height);
		hole_object.set({
			top: hole_y,
			left: hole_x
		});
		canvas.add(hole_object)
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_img_object = Img;

		ball_img_object.scaleToWidth(ball_img_width);
		ball_img_object.scaleToHeight(ball_img_height);
		ball_img_object.set({
			top: ball_img_y,
			left: ball_img_x
		});
		canvas.add(ball_img_object);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_img_x == hole_x)&&(ball_img_y == hole_y)){
		document.getElementById("myCanvas").style.borderColor = "red";
		document.getElementById("hd3").innerHTML = "You Have Hit The Goal";
		canvas.remove(ball_img_object);
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
		if(ball_img_y >= 0){
			ball_img_y = ball_img_y - block_image_height;
			canvas.remove(ball_img_object);
			new_image();
		}
	}

	function down()
	{
		 if(ball_img_y < 450){
			 ball_img_y = ball_img_y + block_image_height;
			 canvas.remove(ball_img_object);
			 new_image()
		 }
	}

	function left()
	{
		if(ball_img_x >5)
		{
			ball_img_x = ball_img_x - block_image_width;
			canvas.remove(ball_img_object);
			new_image();
		}
	}

	function right()
	{
		if(ball_img_x <=1050)
		{
			ball_img_x = ball_img_x + block_image_width;
			canvas.remove(ball_img_object);
			new_image();
		}
	}
	
}

