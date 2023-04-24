import { useState } from 'react'
import { Button, Box } from 'grommet'

const QuizItems = ({ question, correct_answer, incorrect_answers, handleNextQuestion, active, category, score, handleCorrectAnswer }) => {
    const [isCorrectAnswer, setCorrectAnswer] = useState()
    const options = [...incorrect_answers, correct_answer].sort()
    const showNextQuestion = typeof isCorrectAnswer === 'boolean'

    const onClickAnswer = (answer) => {
        if (answer === correct_answer) {
            setCorrectAnswer(true)
            handleCorrectAnswer()
        }
        setCorrectAnswer(false)
    }

    return (
        <Box padding='2rem' width="80%" margin='auto' style={{ display: active ? 'flex' : 'none', transition: 'width 1s fade-out'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <h3>{category}</h3>
                <h3>for {score} point(s)</h3>
            </div>
            <h1 dangerouslySetInnerHTML={{__html: question}} style={{ lineHeight: '3rem', wordBreak: 'break-all' }}/>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem'}}>
                {
                    options.map(answer => <Button key={answer} primary textAlign="center" width='300px' disabled={showNextQuestion} onClick={() => onClickAnswer(answer)} label={answer} />)
                }
            </div>
            { showNextQuestion && <h3>The answer is: {correct_answer}</h3>}
            { showNextQuestion && <Button secondary textAlign="center" width='300px' onClick={handleNextQuestion} label='Next Question' /> }
        </Box>
    )
}

export default QuizItems
