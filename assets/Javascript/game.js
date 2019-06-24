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
        function startTimer(duration, display) {
            var start = Date.now(),
                diff,
                seconds;
            function timer() {
                // get the number of seconds that have elapsed since 
                // startTimer() was called
                diff = duration - (((Date.now() - start) / 1000) | 0);
        
                
                seconds = (diff % 60) | 0;
        
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                display.textContent =  "Time:" + seconds; 
        
                if (diff <= 0) {
                    // add one second so that the count down starts at the full duration
                    // example 05:00 not 04:59
                    start = Date.now() + 1000;
                }
            };
            // we don't want to wait a full second before the timer starts
            timer();
            setInterval(timer, 1000);
            
        }
        
        window.onclick = function () {
            var fifteenSeconds = 15,
                display = document.querySelector('.countdown');
            startTimer(fifteenSeconds, display);
        };
        

        
        ////assigning click value to each button... then check against the correct array and return true or false   
        $('.answerDiv').click(function (e) {
            if (e.target.innerText === correct) {
                correctCounter++
                $(".correct").text("Correct: " + correctCounter)
                
                j++
                resetVar()    

                
                for (var i = 0; i < answerArray.length; i++) {

                    $(".answerDiv").append("<div>" + answerArray[i] + "</div>")

                }
                $("#questionDiv").append("<div>" + question + "</div>")


                

            } else {
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
