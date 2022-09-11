import { Link } from "react-router-dom"
import TheQuiz from "./TheQuiz"

const StartPage = () => {
  return (
    <div className='start--page'>
        <div className='start--page--texts'>
            <h1 className='start--page--title'>Quizzical</h1>
            <p className='start--page--descr'>Some description if needed</p>
        </div>
        <Link to='/theQuiz'><button className='start--page--btn'>Start Quiz</button></Link>
    </div>
  )
}

export default StartPage