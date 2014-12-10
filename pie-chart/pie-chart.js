// JavaScript Document
var obj=[1000,2000,3000,4000,1000,1000];
var objName=["ram", "shyam", "hari", "anish","kt","bkt"];
var a=new PieChart();
a.angleCalculate(obj);

function PieChart(){
	var last=0;
    var mycan=document.getElementById("pie-chart");
	mycan.style.backgroundColor="grey";
	this.cwidth=mycan.width;
    this.cheight=mycan.height;
	var that=this;
    //mycan.style.backgroundColor="red";
    var ctx=mycan.getContext("2d");
    var mycolor=["red","pink","green","blue","yellow","purple","violet","black","grey","cyan","orange","black"];
	var that=this;
	
	this.angleCalculate=function(object){
		var sum=0;
		for(var i=0;i<object.length;i++)
		{
		  sum+=object[i];	
		}
		var newObj=[];
		for(var j=0;j<object.length;j++)
		{
		newObj[j]=(object[j]/sum)*2*Math.PI;	
		}
	    ctx.clearRect(0, 0, that.cwidth, that.cheight); //initializing drawing
		that.makePieChart(newObj);
	}
	this.makePieChart=function(object){
		var radius;
		if(that.cwidth <= that.cheight)
		{
			radius=that.cwidth * 0.3;
		}
		else
		{
			radius=that.cheight * 0.3;
		}
	ctx.scale(1,0.5);
	 
		
	 
	/*  for(var l=0;l<1;l++)
	{
		
		// ctx.shadowBlur=20;
		
	  ctx.beginPath();
	  ctx.moveTo(that.cwidth/2 , that.cheight);
	  ctx.strokeStyle="black";
	  ctx.lineWidth=1; 	
	  ctx.arc(that.cwidth/2, that.cheight, radius, 0,2*Math.PI);     
	  ctx.lineTo(that.cwidth / 2,  that.cheight);
	  ctx.stroke();  
	  ctx.closePath();
	ctx.fill();
	ctx.shadowColor="black";
	   ctx.shadowOffsetX=0;
		ctx.shadowOffsetY=20;
	}	*/
		
		
	for(var k=0;k<object.length;k++)
	{
		
		ctx.shadowBlur=10;
		if (k<3) {
		
	  ctx.beginPath();
	  ctx.moveTo(that.cwidth/2 , that.cheight);
	  ctx.fillStyle=mycolor[k];
	  ctx.strokeStyle="black";
	  ctx.lineWidth=2; 	
	  ctx.arc(that.cwidth/2, that.cheight, radius, last,last + (object[k]));
	   
	  var x= radius * Math.cos( last + (object[k]));
	  ctx.lineTo(that.cwidth / 2,  that.cheight);  
	  ctx.stroke();
	   
	  ctx.closePath();
	  ctx.save();
	  
	 ctx.shadowColor="black";
	 ctx.shadowOffsetX=0;
	 ctx.shadowOffsetY=30;
	 ctx.fill();
	 
	  
		}
	else
		{
		ctx.shadowOffsetX=0;
		ctx.shadowOffsetY=0;
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle=mycolor[k];
	  ctx.strokeStyle="black";
	ctx.lineWidth=2.5; 
	  ctx.arc(that.cwidth/2, that.cheight, radius, last, last + (object[k]));     
	  ctx.lineTo(that.cwidth / 2,  that.cheight);
	  ctx.fill(); 
	  ctx.stroke(); 
	  ctx.closePath();
	  ctx.restore();
		}
			
	  
	  
	 
	 
	  
	  
	  //ctx.stroke();
	    
	  ctx.font = "20px arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
	  
      var middle = last + (object[k])/2;
	 // console.log(Math.cos(middle) );
	  var txtx = that.cwidth/2 + Math.cos(middle) * radius*1.4;
      var txty = that.cheight+ Math.sin(middle) * radius*1.3 - 12;
	  	 
	 ctx.save(); 
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = -1;
                ctx.fillStyle =mycolor[k];
				ctx.fillText(objName[k], txtx, txty);
                ctx.fillText(obj[k], txtx, txty + 22);
                ctx.restore(); 
	   last += object[k];    	  
	}
	  
	
	
	}
	
	
  	
	
}




