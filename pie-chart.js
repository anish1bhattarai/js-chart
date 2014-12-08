// JavaScript Document
var obj=[1000,2000,3000,4000,1500,200,3000];
var objName=["ram", "shyam", "hari", "anish","kt","bkt"];
var a=new PieChart();
a.calculateAngle(obj);

function PieChart(){
	var last=0;
    var mycan=document.getElementById("pie-chart");
	this.cwidth=mycan.width;
    this.cheight=mycan.height;
	var that=this;
    //mycan.style.backgroundColor="red";
    var ctx=mycan.getContext("2d");
    var mycolor=["pink","green","blue","yellow","orange","violet","cyan","purple","black","grey"];
	var that=this;
	
	this.calculateAngle=function(object){
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
			
	for(var k=0;k<object.length;k++)
	{
	  ctx.beginPath();
	  ctx.moveTo(that.cwidth/2 , that.cheight/2);
	  ctx.fillStyle=mycolor[k];
	  ctx.strokeStyle="black";
	  ctx.lineWidth=1; 	
	  ctx.arc(that.cwidth/2, that.cheight/2, radius, last, last + (object[k]));                
	  ctx.lineTo(that.cwidth / 2,  that.cheight / 2);  
	  ctx.fill();
	  ctx.stroke();   
	  ctx.font = "20px arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
	  
      var middle = last + (object[k])/2;
	  console.log(Math.cos(middle) );
	  var txtx = that.cwidth/2 + Math.cos(middle) * radius*1.4;
      var txty = that.cheight/2 + Math.sin(middle) * radius*1.3-12;
	  	 
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




