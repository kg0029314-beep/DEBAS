document.addEventListener("DOMContentLoaded",()=>{
	const loginForm=document.getElementById("loginForm");
	if(loginForm){
		logingForm.addEventListener("submit",function(e){
			e.preventDefaultDefault();
			const name=document.getElementById("studentName").value;
			const name=document.getElementById("studentId").value;
			const name=document.getElementById("teacherName").value;
			const name=document.getElementById("examPassword").value;
			if(password==="exam123"){
				sessionStorage.setItem("studentName",name);
				window.location.href="exam.html";
			}else{
				alert("Invalid exam password!");
		}
		});
	}const examForm=document.getElementById("examFprm");
	if(examform){
		examForm.addEventListener("submit",function (e){
			e.preventDefault();
			let score=0;
			if(document.querySelector('input[name="q1"]:checked')?.value==="paris")score++;
			if(document.querySelector('input[name="q2"]:checked')?.value==="JavaScript")
				score++;
			window.location.href='result.html?score=${score}';
		});
	}
});
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			