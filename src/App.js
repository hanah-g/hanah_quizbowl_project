import './App.css';
import React, { useState } from 'react';
import { questions } from './QuestionList'

function App() {

const[showresults, setresults] = useState(false);
const[score, setScore] = useState(0);
const[currentQ, setCurrentQ] = useState(0);
/* these allow us to dynamically change the status of
the final results, score, and the # of question we are on (stats)
with useState and the initial condition set */

/* if the answer we click is correct, increment score by 1 */
const ansClicked = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  /* checks if we have reached the end of the q's and should show the final score */
  if (currentQ + 1 < questions.length) {
    setCurrentQ(currentQ + 1);
  } else {
    setresults(true);
  }
};

/* resets our stats to start conditions again */
const restartGame = () => {
  setScore(0);
  setCurrentQ(0);
  setresults(false);
};

  return (
    /* Quiz Information Layout */
    <div className="App">
     <h1>QuizBowl Practice Test</h1>
     <h2>Current Score : {score}</h2>

    {/* checks if we should show results or not based on condition */}
     {showresults ?

     /* Final Results Layout */
     <div className = 'finalResults'>
     <h1> !!! Final Results !!! </h1>
     <h2> {score} out of {questions.length} correct! </h2>
     <button onClick = {() => restartGame()}> Try Again </button>
    </div>
    
    :

     /* Question Card Layout */
     <div className = 'questions'>
      <h2>Question {currentQ + 1} of {questions.length} 
      {" ---- " + questions[currentQ].title}
      {" ---- " + questions[currentQ].category}</h2>
      <h3 className = "questionTitle">
      {questions[currentQ].text}</h3>

      <ul>
            {questions[currentQ].options.map((option) => {
              return (
                <li className = "options"
                  key={option.id}
                  onClick={() => ansClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
     </div>
    }
  </div>
  );
}

export default App;

