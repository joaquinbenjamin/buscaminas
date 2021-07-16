var arre=new Array(16);




 for(i=0;i<16;i++){
 	arre[i]=Math.floor((Math.random()*2)+0);
 }



var cont=0;


 function busca(x){

    if(x==0){
	var celda1=document.getElementById("c1");
	if(arre[0]==0){
		
		celda1.style.backgroundColor="red"; cont++;
	}else{
	celda1.style.backgroundColor="blue"
	
			}
	}
  
  

  if(x==1){
	var celda2=document.getElementById("c2");
	if(arre[1]==0){
		celda2.style.backgroundColor="red"; cont++;
	}else{
	celda2.style.backgroundColor="blue"
		
		
  }
  }

  if(x==2){
	var celda3=document.getElementById("c3");
	if(arre[2]==0){
		celda3.style.backgroundColor="red"; cont++;
	}else{
	celda3.style.backgroundColor="blue"
	
		
  }}

  if(x==3){
	var celda4=document.getElementById("c4");
	if(arre[3]==0){
		celda4.style.backgroundColor="red"; cont++;
	}else{
	celda4.style.backgroundColor="blue"
		
		
  }}

  if(x==4){
	var celda5=document.getElementById("c5");
	if(arre[4]==0){
		celda5.style.backgroundColor="red"; cont++;
	}else{
	celda5.style.backgroundColor="blue"
		
	
  }}

  if(x==5){
	var celda6=document.getElementById("c6");
	if(arre[5]==0){
		celda6.style.backgroundColor="red"; cont++;
	}else{
	celda6.style.backgroundColor="blue"
		
		
  }}

  if(x==6){
	var celda7=document.getElementById("c7");
	if(arre[6]==0){
		celda7.style.backgroundColor="red"; cont++;
	}else{
	celda7.style.backgroundColor="blue"
	
	 
  }}

  if(x==7){
	var celda8=document.getElementById("c8");
	if(arre[7]==0){
		celda8.style.backgroundColor="red"; cont++;
	}else{
	celda8.style.backgroundColor="blue"
		
	 
  }}

   if(x==8){
	var celda9=document.getElementById("c9");
	if(arre[8]==0){
		celda9.style.backgroundColor="red"; cont++;
	}else{
	celda9.style.backgroundColor="blue"
		
			
  }}

   if(x==9){
	var celda10=document.getElementById("c10");
	if(arre[9]==0){
		celda10.style.backgroundColor="red"; cont++;
	}else{
	celda10.style.backgroundColor="blue"
		
	 
  }}

   if(x==10){
	var celda11=document.getElementById("c11");
	if(arre[10]==0){
		celda11.style.backgroundColor="red"; cont++;
	}else{
	celda11.style.backgroundColor="blue"
		
			
  }}

   if(x==11){
	var celda12=document.getElementById("c12");
	if(arre[11]==0){
		celda12.style.backgroundColor="red"; cont++;
	}else{
	celda12.style.backgroundColor="blue"
		
			
  }}

   if(x==12){
	var celda13=document.getElementById("c13");
	if(arre[12]==0){
		celda13.style.backgroundColor="red"; cont++;
	}else{
	celda13.style.backgroundColor="blue"
		
		
  }}

   if(x==13){
	var celda14=document.getElementById("c14");
	if(arre[13]==0){
		celda14.style.backgroundColor="red"; cont++;
	}else{
	celda14.style.backgroundColor="blue"
		
			
  }}

   if(x==14){
	var celda15=document.getElementById("c15");
	if(arre[14]==0){
		celda15.style.backgroundColor="red"; cont++;
	}else{
	celda15.style.backgroundColor="blue"
	 
		
  }}

   if(x==15){
	var celda16=document.getElementById("c16");
	if(arre[15]==0){
		celda16.style.backgroundColor="red"; cont++;
	}else{
	celda16.style.backgroundColor="blue"
        
		
  }}

 	if(cont>=1){
 		
 		 alert("MINA __ PERDISTE");
 	}
 }
