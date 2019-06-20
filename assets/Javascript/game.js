var triviaObject = []
var correctCounter = 0;
var incorrectCounter = 0;
var question = [];
var incorrect = [];
var correct = [];
var answerArray = [];
var percentageCorrect = [];

/// grab trivia questions from a API, 
axios({
    url: "https://opentdb.com/api.php?amount=20&category=21&difficulty=medium&type=multiple",
    method: "GET"
})
    .then(function (response) {
        for (i = 0; i < response.data.results.length; i++) {
            ///loops through the object to return the question
            question = response.data.results[i].question
            incorrect = response.data.results[i].incorrect_answers
            correct = response.data.results[i].correct_answer
            answerArray = incorrect
            answerArray.push(correct)
            
        } 
        for (i = 0; i < answerArray.length; i++){
        
        $(".answerDiv").append("<div>" + answerArray[i] + "</div>")
        
        
    }
     ////assigning click value to each button... then check against the correct array and return true or false   
    $('.answerDiv').click(function(e) {  
        $(".answerDiv").val(answerArray[i]);
    });

     /// prints question to the dom
     $("#questionDiv").append("<div>" + question + "</div>")

     /// prints correctCounter to the dom
     $(".correct").text("Correct:" + correctCounter)
    
    /// prints incorrectCounter to the Dom
     $(".incorrect").text("Incorrect:" + incorrectCounter)



        console.log(response.data.results)
        console.log(question)
        console.log(incorrect)
        console.log(correct)
        console.log(answerArray)
        console.log(typeof(response.data.results[i].incorrect_answers))
      
        





















    })
///append questions to the buttons,

//if correct answer is selected correctCounter++;   

///else if answer is incorrect incorrectCounter++

//// number of correct selected "/" the number of questions answered (incorrectCounter + correctCounter)

/// append div with new buttons/questions
