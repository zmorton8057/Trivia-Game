var triviaObject = []
var correctCounter = 0;
var incorrectCounter = 0;
var question = [];
var incorrect = [];
var correct = [];
var answerArray = [];
var percentageCorrect = [];


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


/// grab trivia questions from a API, 
axios({
    url: "https://opentdb.com/api.php?amount=20&category=21&difficulty=medium&type=multiple",
    method: "GET"
})
    .then(function (response) {
        shuffle(response.data.results)
        var j = 0;
        function resetVar(){
        ////question number start at zero begins at the array when gets to next function increment the variable and then update the DOM
        
        
        ///loops through the object to return the question
        console.log(response.data.results[0].question)
        console.log(response.data.results[1].question)
        console.log(response.data.results[3].question)
        question = response.data.results[j].question

        incorrect = response.data.results[j].incorrect_answers
        correct = response.data.results[j].correct_answer
        answerArray = incorrect
        answerArray.push(correct)
        shuffle(answerArray)
        j++
        }

        resetVar();



        for (var i = 0; i < answerArray.length; i++) {

            $(".answerDiv").append("<div>" + answerArray[i] + "</div>")

        }




        /// prints question to the dom

        $("#questionDiv").append("<div>" + question + "</div>")



        /// prints correctCounter to the dom
        $(".correct").text("Correct:" + correctCounter)

        /// prints incorrectCounter to the Dom
        $(".incorrect").text("Incorrect:" + incorrectCounter)



        /////////////////Sets Timer Interval
        var number = 16;

        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;
    
        //  When the stop button gets clicked, run the stop function.
        $("#stop").on("click", stop);
    
        //  When the resume button gets clicked, execute the run function.
        $("#resume").on("click", run);
    
        //  The run function sets an interval
        //  that runs the decrement function once a second.
        //  *****BUG FIX******** 
        //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
        function run() {
          clearInterval(intervalId);
          intervalId = setInterval(decrement, 1000);
        }
    
        //  The decrement function.
        function decrement() {
    
          //  Decrease number by one.
          number--;
    
          //  Show the number in the #show-number tag.
          $(".countdown").html("<h2>" + number + "</h2>");
    
    
          //  Once number hits zero...
          if (number === 0) {
    
            //  ...run the stop function.
            stop();
    
            //  Alert the user that time is up.
            incorrectCounter++
            
          }
        }
    
        //  The stop function
        function stop() {
    
          //  Clears our intervalId
          //  We just pass the name of the interval
          //  to the clearInterval function.
          clearInterval(intervalId);
        }
    
        //  Execute the run function.
        run();
    
        

        
        ////assigning click value to each button... then check against the correct array and return true or false   
        $('.answerDiv').click(function (e) {
            stop()
            number = 16;
            run()
            if (e.target.innerText === correct) {
                
                correctCounter++
                $(".correct").text("Correct: " + correctCounter)
                
                j++
                resetVar()    

                
                for (var i = 0; i < answerArray.length; i++) {

                    $(".answerDiv").append("<div>" + answerArray[i] + "</div>")

                }
                $("#questionDiv").append("<div>" + question + "</div>")
                
                
            } else if (e.target.innerText === incorrect) {
                incorrectCounter++
                $(".incorrect").text("Incorrect: " + incorrectCounter)
                
                j++

                resetVar()

                for (var i = 0; i < answerArray.length; i++) {

                    $(".answerDiv").append("<div>" + answerArray + "</div>")

                }
                $("#questionDiv").append("<div>" + question + "</div>")
                
            }
            
            
                
            
            
        });

        
                



        console.log(response.data.results)
        console.log(question)
        console.log(incorrect)
        console.log(correct)
        console.log(answerArray)
























    })
///append questions to the buttons,

//if correct answer is selected correctCounter++;   

///else if answer is incorrect incorrectCounter++

//// number of correct selected "/" the number of questions answered (incorrectCounter + correctCounter)

/// append div with new buttons/questions
