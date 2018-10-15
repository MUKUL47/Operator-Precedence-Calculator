	var Unvalid_Expression="";
	var valid_Expression=[];
	var Final_Postfix=[];
	var Final_Computed_Expression=[];


	$("#1").click(function(){
	Unvalid_Expression+=1;
	$("h1").html(Unvalid_Expression);
	})
	$("#2").click(function(){
	Unvalid_Expression+=2;
	$("h1").html(Unvalid_Expression);
	})
	$("#3").click(function(){
	Unvalid_Expression+=3;
	$("h1").html(Unvalid_Expression);
	})
	$("#4").click(function(){
	Unvalid_Expression+=4;
	$("h1").html(Unvalid_Expression);
	})
	$("#5").click(function(){
	Unvalid_Expression+=5;
	$("h1").html(Unvalid_Expression);
	})
	$("#6").click(function(){
	Unvalid_Expression+=6;
	$("h1").html(Unvalid_Expression);
	})
	$("#7").click(function(){
	Unvalid_Expression+=7;
	$("h1").html(Unvalid_Expression);
	})
	$("#8").click(function(){
	Unvalid_Expression+=8;
	$("h1").html(Unvalid_Expression);
	})
	$("#9").click(function(){
	Unvalid_Expression+=9;
	$("h1").html(Unvalid_Expression);
	})
	$("#0").click(function(){
	Unvalid_Expression+=0;
	$("h1").html(Unvalid_Expression);
	})

	document.getElementById("+").addEventListener("click",function(){
		var lastpos=Unvalid_Expression[Unvalid_Expression.length-1];
	
	if((lastpos!='*' && lastpos!='+' && lastpos!='/'&& lastpos!='-') && Unvalid_Expression!=""){
		Unvalid_Expression+='+';
		$("h1").html(Unvalid_Expression);	
	}
	})

	document.getElementById("-").addEventListener("click",function(){
			var lastpos=Unvalid_Expression[Unvalid_Expression.length-1];
	
	if((lastpos!='*' && lastpos!='+' && lastpos!='/'&& lastpos!='-') && Unvalid_Expression!=""){
		Unvalid_Expression+='-';
		$("h1").html(Unvalid_Expression);	
	}
	})

	document.getElementById("*").addEventListener("click",function(){
			var lastpos=Unvalid_Expression[Unvalid_Expression.length-1];
	
	if((lastpos!='*' && lastpos!='+' && lastpos!='/'&& lastpos!='-') && Unvalid_Expression!=""){
		Unvalid_Expression+='*';
		$("h1").html(Unvalid_Expression);	
	}
	})

	document.getElementById("/").addEventListener("click",function(){
			var lastpos=Unvalid_Expression[Unvalid_Expression.length-1];
	
	if((lastpos!='*' && lastpos!='+' && lastpos!='/'&& lastpos!='-') && Unvalid_Expression!=""){
		Unvalid_Expression+='/';
		$("h1").html(Unvalid_Expression);	
	}
	})
	document.getElementById("cal").addEventListener("click",function(){
			var lastpos=Unvalid_Expression[Unvalid_Expression.length-1];
	
	if((lastpos!='*' && lastpos!='+' && lastpos!='/'&& lastpos!='-') && Unvalid_Expression!=""){
			Valid();
		}

	})



	function Postfix_Evaluation(){

	for(var i=0;i<Final_Postfix.length;i++){
	if(Final_Postfix[i]!='*' && Final_Postfix[i]!='+' && Final_Postfix[i]!='-' && Final_Postfix[i]!='/'){
	Final_Computed_Expression.push(Final_Postfix[i]);
	}
	else{
		
		for(var j=Final_Computed_Expression.length-1;j>=0;j--){
			
			
				if(Final_Postfix[i]=='*'){
				Final_Computed_Expression[j-1]*=Final_Computed_Expression[j];
				
			}
			else if(Final_Postfix[i]=='+'){
				Final_Computed_Expression[j-1]+=Final_Computed_Expression[j];
			
			}
			else if(Final_Postfix[i]=='-'){
				Final_Computed_Expression[j-1]-=Final_Computed_Expression[j];
				
			}
			else if(Final_Postfix[i]=='/'){
				Final_Computed_Expression[j-1]=Final_Computed_Expression[j-1]/Final_Computed_Expression[j];
				
			}
			Final_Computed_Expression.pop();
			break;
		}
	}
	}
	console.log(Final_Computed_Expression);
	$("h1").html(Final_Computed_Expression[0]);
	Unvalid_Expression="";
	Unvalid_Expression=Final_Computed_Expression[0];
	Final_Computed_Expression=[];
	Final_Postfix=[];
	valid_Expression=[];
	}

	function Infix_To_Postfix() {
	var Temp=[];
	for(var i=0;i<valid_Expression.length;i++){
		if(valid_Expression[i]!='+' && valid_Expression[i]!='-' && valid_Expression[i]!='*' && valid_Expression[i]!='/'){
			Final_Postfix.push(valid_Expression[i]);

		}
		else
		{var flag=0;
			for(var j=0;j<Temp.length;j++){
				if(Temp[j]=='+' && valid_Expression[i]=='-' || Temp[j]=='-' && valid_Expression[i]=='+' || 
				   Temp[j]=='*' && valid_Expression[i]=='/' || Temp[j]=='/' && valid_Expression[i]=='*' || 
				   Temp[j]==valid_Expression[i]){
				flag=1;
				break;	
				}}
				if(flag==1){
					for(var k=Temp.length-1;k>=0;k--){
						Final_Postfix.push(Temp[k]);
					}
					Temp=[];
					Temp.push(valid_Expression[i]);
				}
				else{
					Temp.push(valid_Expression[i]);
							
				}
			}
		
		if(i==valid_Expression.length-1){
			for(var k=Temp.length-1;k>=0;k--){
						Final_Postfix.push(Temp[k]);
					}
		}
	}
	console.log(Final_Postfix);
	Postfix_Evaluation();	
	}

	function Valid(){
	console.log(Unvalid_Expression)




var n=Unvalid_Expression;

var s="";
var i=0
for(i=0;i<n.length;i++){
if(n.charAt(i)!="*" && n.charAt(i)!="+" && n.charAt(i)!="-" && n.charAt(i)!="/"){
s+=n.charAt(i);

		}
		else{
			valid_Expression.push(parseInt(s));
			valid_Expression.push(n.charAt(i));
			s="";
		}
if(i==n.length-1){
	valid_Expression.push(parseInt(s));
	}
}








	console.log(valid_Expression)
	Infix_To_Postfix();
	}


		
	function reset(){
		valid_Expression=[];
		Final_Computed_Expression=[];
		Final_Postfix=[];
		Unvalid_Expression="";
		$("h1").html("");
	}
