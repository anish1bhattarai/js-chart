// JavaScript Document
var obj=[8000,2000,500,2000,1000,1000];
var objName=["ram", "shyam", "hari", "anish","kt","bkt"];
var a=new PieChart();
a.angleCalculate(obj);

function PieChart(){
	var last=0;
    var mycan=document.getElementById("pie-chart");
	//mycan.style.backgroundColor="grey";
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
	
    ctx.shadowBlur=10;
	var repeat= parseInt(radius/4);
	
	for(var j=2;j<repeat;j++)
	 {
	 ctx.beginPath();
	  ctx.moveTo(that.cwidth/2 , that.cheight);
	  ctx.fillStyle=mycolor[k];
	  ctx.strokeStyle="black";
	 ctx.lineWidth=3; 	 
	  ctx.arc(that.cwidth/2, that.cheight+j, radius,(Math.PI)/180 , Math.PI- (Math.PI)/180);
	 ctx.stroke();
	 ctx.lineTo(that.cwidth / 2,  that.cheight); 
	
	 }
	
		
	for(var k=0;k<object.length;k++)
{
	  ctx.beginPath();
	  ctx.moveTo(that.cwidth/2 , that.cheight);
	  ctx.fillStyle=mycolor[k];
	  ctx.strokeStyle="black";
	 ctx.lineWidth=3; 	
	  ctx.arc(that.cwidth/2, that.cheight, radius, last,last + (object[k]));
	 ctx.lineTo(that.cwidth / 2,  that.cheight);  
	  ctx.stroke();
	  ctx.closePath();
	  ctx.save();
	  
	
	 ctx.fill();
	 
	  
		
	   
	  ctx.font = "20px arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
	  
      var middle = last + (object[k])/2;
	  var txtx = that.cwidth/2 + Math.cos(middle) * radius*1.4;
      var txty = that.cheight+ Math.sin(middle) * radius*1.5 - 12;
	  	 
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
	
	
  





