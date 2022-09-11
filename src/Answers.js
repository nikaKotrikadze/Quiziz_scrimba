import React from 'react'

const Answers = (props) => {
    const styles={
        backgroundColor:props.isHeld?'#D6DBF5':'',
        border:props.isHeld?'none':''
    }
  return (
    <div onClick={props.handleClick}>
        <div className='answers--div' style={styles}>
            <p className='answer-p'>{props.value}</p>
        </div>
    </div>
  )
}

export default Answers