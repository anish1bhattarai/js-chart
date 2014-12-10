// JavaScript Document
var obj=[1000,6000,3000,2000,4000,5000,1000,680,1200,5000];
var head=[" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"]
var mycan=document.getElementById("line-chart");
    //mycan.style.backgroundColor="red";
    var mycolor=["pink","green","blue","yellow","orange","violet","cyan","purple","black","grey"];
    var a=new LineChart(mycan);
	a.calculateInterval(obj);



function LineChart(mycan) { 
  var that = this; 
  this.cwidth=mycan.width;
  this.cheight=mycan.height;
  this.ctx=mycan.getContext("2d");
  var header=50;
  var footer=5;
 
 
 
 
  this.calculateInterval = function(object){
	  var count=0;
	  var large=that.largest(object);
	  var smallest=that.lowest(object);
	  var yStepSize=large/10;
	  var yScale=(that.cheight-header-footer)/large;
	  
	  that.ctx.strokeStyle = "blue";
	  var next=((that.cwidth-45-15)/(object.length));    
	  /* you can change to object.length+1 to have gap at end */
	  for (var scale = large; scale >= 0; scale -= yStepSize) {  
	   //console.log(scale);              
	   var y = (header+yStepSize * count *yScale); 
	   //console.log(y); 
	   that.ctx.font = "12pt arial";
       that.ctx.textBaseline = "center";              
	   that.ctx.fillText(scale, 0,y);                 
	   that.ctx.moveTo(45, y) ;    
       that.ctx.lineTo(that.cwidth, y); 
	   count++;           
	   }
	  that.ctx.stroke(); 
	  
	  
	  for(i=0;i<object.length;i++)
	  {
		object[i]=(object[i]/large)*(that.cheight-header-footer);
	  }
	  console.log(object);
	  
	  that.drawLine(object,next,large);
		 
	   }
	   
	this.drawLine=function(l,lnth,large){
		  for (var ln=0; ln < l.length+1; ln++)
	  {
		   that.ctx.moveTo(45+(ln)*lnth,0);
		   that.ctx.lineTo(45+(ln)*lnth,that.cheight-footer);
		   that.ctx.stroke();
		  
		  
		  
	  }
		
		
		
		
		 for (var ln=0; ln < l.length; ln++) {	
		 that.ctx.strokeStyle = "green";
		 that.ctx.beginPath();
		 if(ln==0)
		 {
			 that.ctx.moveTo(45 , that.cheight-footer);
			 
		 }
		 else
		 {
         that.ctx.moveTo(45+((ln)*lnth) , that.cheight-footer-l[ln-1]);
		
		 }
		 that.ctx.lineTo(45+((ln+1)*lnth) , that.cheight-footer-l[ln]);
		 console.log(that.cheight-footer-l[ln]);
		 that.ctx.stroke();
  }
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
   
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
