import {useState,useEffect} from 'react'
import {nanoid} from "nanoid"
import Answers from './Answers'

const TheQuiz = () => {
    const [questions,setQuestions] = useState([])
    const [answers,setAnswers] = useState([])

    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
        .then(resp=>resp.json())
        .then(data => setQuestions(data.results.map(object => {
            return {
              ...object,
              isHeld: false
            }
          })))
    },[])

    // console.log(questions)

    const handleClick = (value) =>{
        setQuestions(prev=>prev.map((val)=>{
            return val.correct_answer===value?{...val,isHeld:!val.isHeld}:val
        }))
        console.log(questions.map(val=>val.isHeld))
    }

    console.log(questions)

    const mappedQuests = questions.map((quest)=>{
        let arr=[
            {ans:quest.correct_answer,isHeld:false },
            {ans:quest.incorrect_answers[0],isHeld:false},
            {ans:quest.incorrect_answers[1],isHeld:false},
            {ans:quest.incorrect_answers[2],isHeld:false}
            ]

        arr.sort(() => 0.5 - Math.random());

        return (
            <div className='mappedQuests' key={quest.question}>
                <h2 className='map--quest'>{quest.question}</h2>
                <div className='mappedAnswers' >
                    <div className='answers-div-flex' >
                        {arr.map((val)=>{
                            return (
                                <Answers 
                                handleClick={()=>handleClick(val.ans)}
                                key={val.ans} 
                                value={val.ans} 
                                answers={val.isHeld} 
                                isHeld={val.isHeld}/>
                            )
                        })}
                    </div>
                </div>
                <div className='line'></div>
            </div>
        ) 
    })
  return (
    <div className="The--Quiz">
        <div className='quizzing'>
            {mappedQuests}
       </div>
       <button className='check--ans--btn'>Check answers</button>
    </div>
  )
}

export default TheQuiz