// JavaScript Document
var obj=[640,1280,300,240,500,800];
var mycan=document.getElementById("barGraph");
   // mycan.style.backgroundColor="red";
    var ctx=mycan.getContext("2d");
    var mycolor=["pink","green","blue","yellow","violet","cyan","purple","black","grey","orange"];
    var a=new BarGraph(mycan);
	var header=50;
	var footer=5;
	a.interval(obj);

function BarGraph(mycan) {  
  this.cwidth=mycan.width;
  this.cheight=mycan.height;
  var that = this;
  this.interval=function(object){
	  var barWidth=((this.cwidth-150)/(object.length))*0.5;   
	  /*subtraction chahi margin right ko lagi*/
	  var large=that.largest(object);
	  var smallest=that.lowest(object);
	  var yStepSize=large/10;
	  var yScale=(that.cheight-header-footer)/large;
	  ctx.strokeStyle = "#06C";
	  var gap=((this.cwidth+40)/(object.length))*0.5;
	  var count=0;
	 
	  
   for (var scale = large; scale >= 0; scale -= yStepSize) {  
	  // console.log(scale);              
	   var y = (header+yStepSize * count *yScale); 
	 
	   //console.log(y); 
	   ctx.font = "12pt arial";
       ctx.textBaseline = "center";              
	   ctx.fillText(scale, 0,y);                 
	   ctx.moveTo(45, y) ;    
       ctx.lineTo(that.cwidth, y); 
	   ctx.lineWidth = 2;
	   count++;           
	   }
	  ctx.stroke(); 
	  
	  
	  for(i=0;i<object.length;i++)
	  {
		  object[i]=(object[i]/large)*(that.cheight-header-footer);
		 //console.log(object[i]);
	  }
	 that.draw(object,gap,large,barWidth,footer);
	   }
 
   this.largest=function(arr){
	    var b=arr[0];
	   for(var i=1;i<arr.length;i++)
	   {
		   if(arr[i]>b)
		   {
			   b=arr[i];
		   }
	   }
	   
	  return b;
	}
    this.lowest=function(arr){
	    var b=arr[0];
	   for(var i=1;i<arr.length;i++)
	   {
		   if(arr[i]<b)
		   {
			   b=arr[i];
		   }
	   }
	   
	  return b;
	}
   
   
   
   this.draw = function (arr,gap,large,barWidth)
   {
	  var ht= that.cheight-footer;
	  for(var j=0;j<arr.length;j++)
	  {
	  //	console.log(ht-arr[j]);
	 
	  ctx.shadowOffsetX = 18;
      ctx.shadowOffsetY = -7;
	  ctx.shadowBlur=20;
      ctx.shadowColor="#333";
      var linear = ctx.createLinearGradient(0 , (ht-arr[j]) , 0 , ht);
      
      linear.addColorStop(0, mycolor[j]); 
	   linear.addColorStop(0.6, '#69F');
      linear.addColorStop(0.9, '#CCC');
      linear.addColorStop(1, 'black');
	  ctx.fillStyle = linear;
	  ctx.strokeStyle="#666";
      var w=20;
	  var angle = ((Math.PI)/4);
	  ctx.fillRect(gap+(barWidth+gap)*j , (ht-arr[j]+w*Math.sin(angle)) , barWidth , arr[j]-w*Math.sin(angle));
	  ctx.lineWidth=2;
	  ctx.strokeRect(gap+(barWidth+gap)*j , (ht-arr[j]+w*Math.sin(angle)) , barWidth , arr[j]-w*Math.sin(angle));
	 
	  var x=gap+(barWidth+gap)*j;
	  var y=(ht-arr[j]+w*Math.sin(angle));
	  
	  
	  
	  ctx.lineWidth=3;
	  //ctx.fillStyle=mycolor[j];
      
	 
	  /*console.log(gap+(barWidth+gap)*j);
	  console.log(ht-arr[j]);*/
	   ctx.beginPath();
	  ctx.moveTo(x,y);
	  ctx.lineTo(x+w*Math.sin(angle),y-w*Math.cos(angle)-(ctx.lineWidth/4));
	  ctx.lineTo(x+w*Math.sin(angle)+barWidth-(ctx.lineWidth/4),y-w*Math.cos(angle)-(ctx.lineWidth/4));
	  ctx.lineTo(x+barWidth,y);
	  ctx.lineTo(x+(ctx.lineWidth/2),y);
	   ctx.stroke();
	   ctx.fill();
	  ctx.closePath();
	 
	
	  
	  
	  
	 ctx.beginPath();
	  ctx.moveTo(x+w*Math.sin(angle)+barWidth,y-w*Math.cos(angle)-(ctx.lineWidth/2));
	  ctx.lineTo(x+w*Math.sin(angle)+barWidth,ht-w*Math.sin(angle));
	  ctx.lineTo(x+barWidth,ht-(ctx.lineWidth/2));
	  ctx.lineTo(x+barWidth,y);
	   ctx.lineTo(x+w*Math.sin(angle)+barWidth,y-w*Math.cos(angle));
	  //ctx.closePath();
	  
	 ctx.stroke();
	  ctx.fill();
	   
	  ctx.closePath();
	  
	   
	      
	  }
	   
   }}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
