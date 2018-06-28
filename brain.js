
var precedence=[];

var ValidOperatorPrecedence=[];
var j=0;
var number="";
var gotanswer=false;
var finalnumber="";
function a(){	
		document.getElementById("1").addEventListener("click",function(){
			finalnumber+=""+1;
			document.getElementById("display").innerHTML+=1;

			});

		document.getElementById("2").addEventListener("click",function(){
			finalnumber+=""+2;
			document.getElementById("display").innerHTML+=2;

			});
		document.getElementById("3").addEventListener("click",function(){
			finalnumber+=""+3;
			document.getElementById("display").innerHTML+=3;

			});
		document.getElementById("4").addEventListener("click",function(){
			finalnumber+=""+4;
			document.getElementById("display").innerHTML+=4;

			});
		document.getElementById("5").addEventListener("click",function(){
			finalnumber+=""+5;
			document.getElementById("display").innerHTML+=5;

			});
		document.getElementById("6").addEventListener("click",function(){
			finalnumber+=""+6;
			document.getElementById("display").innerHTML+=6;

			});
		document.getElementById("7").addEventListener("click",function(){
			finalnumber+=""+7;
			document.getElementById("display").innerHTML+=7;

			});
		document.getElementById("8").addEventListener("click",function(){
			finalnumber+=""+8;
			document.getElementById("display").innerHTML+=8;

			});
		document.getElementById("9").addEventListener("click",function(){
			finalnumber+=""+9;
			document.getElementById("display").innerHTML+=9;

			});
		document.getElementById("0").addEventListener("click",function(){
			finalnumber+=""+0;
			document.getElementById("display").innerHTML+=0;

			});
		
		document.getElementById("+").addEventListener("click",function(){
			var pop=precedence[precedence.length-1];
			
			console.log(pop);
			if(finalnumber!="" && (pop!='*' || pop!='/' || pop!='-' || pop!='+' )){
			finalnumber=parseInt(finalnumber);
			precedence.push(finalnumber);
			finalnumber="+";
			precedence.push(finalnumber);			
			finalnumber="";document.getElementById("display").innerHTML+="+";
			}
			});
		document.getElementById("-").addEventListener("click",function(){
			var pop=precedence[precedence.length-1];
			
			console.log(pop);

			if(finalnumber!="" && (pop!='*' || pop!='/' || pop!='-' || pop!='+') ){
				finalnumber=parseInt(finalnumber);
			precedence.push(finalnumber);
			finalnumber="-";
			precedence.push(finalnumber);			
			finalnumber="";
			document.getElementById("display").innerHTML+="-";
			}
			});

		document.getElementById("/").addEventListener("click",function(){
			var pop=precedence[precedence.length-1];
			
			console.log(pop);

			if(finalnumber!="" && (pop!='*' || pop!='/' || pop!='-' || pop!='+') ){
				finalnumber=parseInt(finalnumber);
			precedence.push(finalnumber);
			finalnumber="/";
			precedence.push(finalnumber);			
			finalnumber="";
			document.getElementById("display").innerHTML+="/";
			}
			});
		document.getElementById("*").addEventListener("click",function(){
			var pop=precedence[precedence.length-1];
			
			console.log(pop);

			if(finalnumber!="" && (pop!='*' || pop!='/' || pop!='-' || pop!='+') ){
				finalnumber=parseInt(finalnumber);
			precedence.push(finalnumber);
			finalnumber="*";
			precedence.push(finalnumber);			
			finalnumber="";
			document.getElementById("display").innerHTML+="*";
			}
			});
								
document.getElementById("cal").addEventListener("click",function(){
		finalnumber=parseInt(finalnumber);
			precedence.push(finalnumber);
				finalnumber=Answer();
				ValidOperatorPrecedence=[];
				precedence=[];
				precedence.push(finalnumber);
				document.getElementById("display").innerHTML=finalnumber;
				;

});
			}	
			

function Answer(){

	for( j=0;j<precedence.length;j++){
		var ss="";
		var k=j+1;
		if(precedence[j]==1||precedence[j]==2||precedence[j]==3||precedence[j]==4||precedence[j]==5||precedence[j]==6||precedence[j]==7||
 			precedence[j]==8||precedence[j]==9||precedence[j]==0){
			ss=precedence[j]+"";
			while(k<precedence.length && precedence[k]==1||precedence[k]==2||precedence[k]==3||precedence[k]==4||precedence[k]==5||precedence[k]==6||precedence[k]==7||
 			precedence[k]==8||precedence[k]==9||precedence[k]==0){
				
					ss=ss+""+precedence[k];
				k++;
				j=k+1;
					
			}
			ValidOperatorPrecedence.push(parseInt(ss));
		}
		else {
	ValidOperatorPrecedence.push(precedence[j]);
			
		}

	}
	var multicount=0;
	for(var i=0;i<ValidOperatorPrecedence.length;i++){
		if(ValidOperatorPrecedence[i]==="*"){
			multicount++;
		}
	}
	if(multicount>0){
		for(var k=0;k<multicount;k++){
			for(var i=0;i<ValidOperatorPrecedence.length;i++){
				if(ValidOperatorPrecedence[i]=='*'){
					ValidOperatorPrecedence[i]=ValidOperatorPrecedence[i-1]*ValidOperatorPrecedence[i+1];
					ValidOperatorPrecedence[i-1]="ignore";
					ValidOperatorPrecedence[i+1]="ignore";
					ValidOperatorPrecedence=restore(ValidOperatorPrecedence);
				}
			}
	}}
var div=0;
	for(var i=0;i<ValidOperatorPrecedence.length;i++){
		if(ValidOperatorPrecedence[i]==="/"){
			div++;
		}
	}
	if(div>0){

		for(var k=0;k<div;k++){
			for(var i=0;i<ValidOperatorPrecedence.length;i++){
				if(ValidOperatorPrecedence[i]=='/'){
					ValidOperatorPrecedence[i]=ValidOperatorPrecedence[i-1]/ValidOperatorPrecedence[i+1];
					ValidOperatorPrecedence[i-1]="ignore";
					ValidOperatorPrecedence[i+1]="ignore";
					ValidOperatorPrecedence=restore(ValidOperatorPrecedence);
				}
			}
	}	
	}


var add=0;
	for(var i=0;i<ValidOperatorPrecedence.length;i++){
		if(ValidOperatorPrecedence[i]==="+"){
			add++;
		}
	}

	if(add>0){

		for(var k=0;k<add;k++){
			for(var i=0;i<ValidOperatorPrecedence.length;i++){
				if(ValidOperatorPrecedence[i]=='+'){
					ValidOperatorPrecedence[i]=ValidOperatorPrecedence[i-1]+ValidOperatorPrecedence[i+1];
					ValidOperatorPrecedence[i-1]="ignore";
					ValidOperatorPrecedence[i+1]="ignore";
					ValidOperatorPrecedence=restore(ValidOperatorPrecedence);
				}
			}
	}	
	}



var sub=0;
	for(var i=0;i<ValidOperatorPrecedence.length;i++){
		if(ValidOperatorPrecedence[i]==="-"){
			sub++;
		}
	}
	if(sub>0){

		for(var k=0;k<sub;k++){
			for(var i=0;i<ValidOperatorPrecedence.length;i++){
				if(ValidOperatorPrecedence[i]=='-'){
					ValidOperatorPrecedence[i]=ValidOperatorPrecedence[i-1]-ValidOperatorPrecedence[i+1];
					ValidOperatorPrecedence[i-1]="ignore";
					ValidOperatorPrecedence[i+1]="ignore";
					ValidOperatorPrecedence=restore(ValidOperatorPrecedence);
				}
			}
	}	
	}

document.getElementById("display").innerHTML=ValidOperatorPrecedence[0];
return ValidOperatorPrecedence[0];
}

function restore(ValidOperatorPrecedence){
	 var ValidOperatorPrecedence1=[]
	for(var i=0;i<ValidOperatorPrecedence.length;i++){
		if(ValidOperatorPrecedence[i]!="ignore" ){
			ValidOperatorPrecedence1.push(ValidOperatorPrecedence[i]);
		}
	}
	return ValidOperatorPrecedence1;
}
function reset(){
// for(var i=0;i<precedence.length;i++){
// 	precedence.pop();
// }
precedence=[];
ValidOperatorPrecedence=[];
var j=0;
var number="";
var i1=0;
var finalnumber="";
document.getElementById("display").innerHTML="";
a();
}


