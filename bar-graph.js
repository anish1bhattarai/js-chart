// JavaScript Document
var obj=[640,1280,300,240];
var mycan=document.getElementById("barGraph");
    mycan.style.backgroundColor="red";
    var ctx=mycan.getContext("2d");
    var mycolor=["pink","green","blue","yellow","orange","violet","cyan","purple","black","grey"];
    var a=new BarGraph(mycan);
	var header=50;
	var footer=5;
	a.interval(obj);

function BarGraph(mycan) {  
  this.cwidth=mycan.width;
  this.cheight=mycan.height;
  var that = this;
  this.interval=function(object){
	  var barWidth=((that.cwidth-150)/(object.length))*0.5;   
	  /*subtraction chahi margin right ko lagi*/
	  var large=that.largest(object);
	  var smallest=that.lowest(object);
	  var yStepSize=large/10;
	  var yScale=(that.cheight-header-footer)/large;
	  ctx.strokeStyle = "rgba(128,128,255, 0.5)";
	  var gap=((that.cwidth+40)/(object.length))*0.5;
	  var count=0;
	 
	  
   for (var scale = large; scale >= 0; scale -= yStepSize) {  
	   console.log(scale);              
	   var y = (header+yStepSize * count *yScale); 
	   console.log(y); 
	    ctx.font = "12pt arial";
       ctx.textBaseline = "center";              
	   ctx.fillText(scale, 0,y);                 
	   ctx.moveTo(45, y) ;    
       ctx.lineTo(that.cwidth, y); 
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
	  ctx.fillStyle = mycolor[j];
	  ctx.shadowColor = "rgba(128,128,128, 0.5)";
	  ctx.shadowOffsetX = 8;
      ctx.shadowOffsetY = 1;
	  	
	   ctx.fillRect(gap+(barWidth+gap)*j , (ht-arr[j]) , barWidth , arr[j]);
		
            
	
	  }
	   
   }}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
