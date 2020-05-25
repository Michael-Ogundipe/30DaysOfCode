var score = 0;

function myCheck(){

	function mycheck1(){
		if (document.getElementById("answer1").checked == true){
			score++;
		}
	}
	mycheck1();

	function mycheck2(){
		if (document.getElementById("answer2").checked == true){
			score++;
		}
	}
	mycheck2();

	function mycheck3(){
		if (document.getElementById("answer3").checked == true){
			score++;
		}
	}
	mycheck3();

	function mycheck4(){
		if (document.getElementById("answer4").checked == true){
			score++;
		}
	}
	mycheck4();

	function mycheck5(){
		if (document.getElementById("answer5").checked == true){
			score++;
		}
	}
	mycheck5();

	function mycheck6(){
		if (document.getElementById("answer6").checked == true){
			score++;
		}
	}
	mycheck6();

	function mycheck7(){
		if (document.getElementById("answer7").checked == true){
			score++;
			alert("You Scored " + score + "/7  Please Refresh Page")
		}
	}
	mycheck7();
}



	/*function question1(QuestionId){
		var answer = document.querySelector(
			"#" + QuestionId + "input[type=radio]:checked");
		if(answer.checked === null){
			document.querySelector("#" + QuestionId + ".choice_error").style.display = "inline";
		}
		else{
			document.querySelector("#" + QuestionId + ".choice_error").style.display = "";
			answer = answer.value;
		}
		return answer;
		
	};*/
	
