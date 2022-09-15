import './App.css';
import React, { useState } from 'react';
import { questions } from './QuestionList'

function App() {

const[showfinalresults, setfinalresults] = useState(false);
const[score, setScore] = useState(0);
const[currentQ, setCurrentQ] = useState(0);

const optionClicked = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  if (currentQ + 1 < questions.length) {
    setCurrentQ(currentQ + 1);
  } else {
    setfinalresults(true);
  }
};

/* Resets the game back to default */
const restartGame = () => {
  setScore(0);
  setCurrentQ(0);
  setfinalresults(false);
};

  return (
    <div className="App">
     <h1>QuizBowl Practice Test</h1>

     {/*2. Current Score*/ }
     <h2>Current Score : {score}</h2>

     {showfinalresults ?

     /*3. Final Results*/
     <div className = 'finalResults'>
     <h1> Final Results!!! </h1>
     <h2> {score} out of {questions.length} correct! </h2>
     <button onClick = {() => restartGame()}>Practice Again </button>
    </div>
    
    :

     /*3. Question*/
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
                  onClick={() => optionClicked(option.isCorrect)}
                  /*Needs to be here to refrain from printing this as text ^ */
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
