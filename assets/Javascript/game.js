var triviaObject = []
var correctCounter = 0;
var incorrectCounter = 0;
var question = [];
var incorrect = [];
var correct = [];
var answerArray = [];
var percentageCorrect = [];
var emptyArray = []

/// grab trivia questions from a API, 
axios({
    url: "https://opentdb.com/api.php?amount=20&category=21&difficulty=medium&type=multiple",
    method: "GET"
})
    .then(function (response) {
        for (i = 0; i < response.data.results.length; i++) {
            question = response.data.results[i].question
            incorrect = response.data.results[i].incorrect_answers
            correct = response.data.results[i].correct_answer
            answerArray = incorrect
            answerArray.push(correct)
            
        } 
        for (i = 0; i < answerArray.length; i++){
        
        $(".answerDiv").append("<input type='button' id='answerButton' class=" + answerArray[i] + " value=" + answerArray[i] + "></input>").attr(answerArray[i])
          
    }
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
