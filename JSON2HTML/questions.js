
function loadQuestions(){
  $.ajax({url: "schema.json", async: false, success: function(result) {
      window.questions = result;
  }});

  $.ajax({url: "steps.json", async: false, success: function(result) {
      window.steps = result;
  }});

 // showQuestion(  )

/*
function handleSubmit(){
	console.log("hi from handelSubmit");
} */

 $("#form").alpaca({
    "schema": questionSchema ,
   //"schema":a ,
    "options": {
      "form":{
        "buttons":{
          "next":{
            "title": "Anwser",
            "click": function() {
                var answer = this.getValue();
                nextQuestionNme = window.steps[ questionName ][answer];
                showQuestion(nextQuestionName);
                console.log(answer.selectedOption);
            }
          }
        }
      }
    }
 })
 
$(document).ready(function() {
  $.parseJSON( stepsJson );
});
}
