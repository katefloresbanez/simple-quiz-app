import { useState } from 'react'
import { Button, Card } from 'grommet'

const QuizItems = ({ question, correct_answer, incorrect_answers, nextQuestion, active, category, score }) => {
    const [isCorrectAnswer, setCorrectAnswer] = useState()
    const options = [...incorrect_answers, correct_answer].sort()
    const showNextQuestion = typeof isCorrectAnswer === 'boolean'

    const onClickAnswer = (answer) => {
        if (answer === correct_answer) {
            setCorrectAnswer(true)
           return console.log('correct_answer')
        }
        setCorrectAnswer(false)
        return console.log('incorrect_answer')
    }

    return (
        <Card padding='2rem' width="80%" margin='auto' style={{ display: active ? 'flex' : 'none', transition: 'width 1s fade-out'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <h3>{category}</h3>
                <h3>{score}</h3>
            </div>
            <h1 dangerouslySetInnerHTML={{__html: question}} style={{lineHeight: '3rem'}}/>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem'}}>
                {
                    options.map(answer => <Button key={answer} primary textAlign="center" width='300px' disabled={showNextQuestion} onClick={() => onClickAnswer(answer)} label={answer} />)
                }
            </div>
            {showNextQuestion && <Button secondary textAlign="center" width='300px' onClick={nextQuestion} label='Next Question' /> }
        </Card>
    )
}

export default QuizItems
