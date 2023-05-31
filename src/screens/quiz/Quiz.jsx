import { Query } from "appwrite";
import {  databases } from "../../services/appwriteConfig";
import React, { useState, useEffect } from "react";
import {  useNavigate } from 'react-router-dom'


const QuizCard = () => {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answer, setanswer] = useState("")
  const [id, setId] = useState("")
 
  const navigate = useNavigate();
   const nextQuestion = () => {
    if (index < questions.length && options.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("no more questions");
      navigate('/')
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.updateDocument("6475bc41d08143bd0b2e", "6475bc4f578738f63e3c", id)

    promise.then(
      function (response) {
        console.log(response);
        
      },
      function (error) {
        console.log(error);
      })

  }
  
  console.log(id);
   
       useEffect(() => {
              const getQuestion = databases.listDocuments("6475bc41d08143bd0b2e", "6475bc4f578738f63e3c",);
              getQuestion.then(
                     function (response) { 
                            setQuestions(response.documents);   
                  setOptions(response.documents) 
                  setId(response)
                 
               
                     }, function (error) {
    console.log(error);
});
       
       }, [])
 
  const currentQuestion = questions[index] || {};
  const currentOption = options[index] || {};
  
       
       return (
         <div>
           <form action="" onSubmit={handleSubmit}>
     {currentQuestion && (
        <div>
          <h1>Question:</h1>
          <p>{currentQuestion.question}</p>
        </div>
           )}
           <div>
        
           {currentOption.option && (
          <>
            <input type="radio" name="option" id="" value={currentOption.option} id="" onChange={(e) => {
                     setanswer(e.target.value)
            }} />
            <label>{currentOption.option}</label>
          </>
        )}
          {currentOption.option2 && (
          <>
            <input type="radio" name="option" id="" value={currentOption.option2} id="" onChange={(e) => {
                     setanswer(e.target.value)
            }}/>
            <label>{currentOption.option2}</label>
          </>
        )}
              {currentOption.option3 && (
          <>
            <input type="radio" name="option" id="" value={currentOption.option3} id="" onChange={(e) => {
                     setanswer(e.target.value)
            }}/>
            <label>{currentOption.option3}</label>
          </>
        )}
              {currentOption.option4 && (
          <>
            <input type="radio" name="option" id="" value={currentOption.option4} id="" onChange={(e) => {
                     setanswer(e.target.value)
            }} />
            <label>{currentOption.option4}</label>
          </>
        )}
             {currentOption.option5 && (
          <>
                   <input type="radio" name="option" value={currentOption.option5} id="" onChange={(e) => {
                     setanswer(e.target.value)
            }} />
            <label>{currentOption.option5}</label>
          </>
        )}
      </div>
             <button onClick={nextQuestion}>Next Question</button>
             </form>
  </div>
  );          
};

export default QuizCard;