import { Query } from "appwrite";
import {  databases } from "../../services/appwriteConfig";
import React, { useState, useEffect } from "react";



const QuizCard = () => {
  const [question, setQuestion] = useState();
  const [option, setOption] = useState();
       // const [userDetails, setUserDetails] = useState();
      
       //  useEffect( () => {
       //        const getData = account.get();
       //        getData.then(
       //               function (response) {
       //                      setUserDetails(response)
       //               },
       //               function (error) {
       //                      console.log(error);
       //               }
       //        )
       // }, [userDetails]);
       //  console.log(userDetails);

       useEffect(() => {
              const getQuestion = databases.listDocuments("6475bc41d08143bd0b2e", "6475bc4f578738f63e3c",);
              getQuestion.then(
                     function (response) { 
                            setQuestion(response.documents);   
                      setOption(response.documents)      
                     }, function (error) {
    console.log(error);
});
       
       }, [])
       
       return (
          <div>
      {question && question.map(item => (
        <div key={item.$id}>
          <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
            <div>
              <p>{item.question}</p>
            </div>
          </div>
          {option && option.map(item => (
            <div key={item.$id}>
              <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                <div>
                  <p>{item.option2}</p>
                  <p>{item.option}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );          
};

export default QuizCard;