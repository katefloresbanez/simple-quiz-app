import { useState } from 'react'
import { Box, Button } from 'grommet'
import QuizItems from './QuizItems'

const QuizPage = ({ questions, currentScore, handleUpdateScore, handleLoadMoreQuestions, handleEndQuiz }) => {
    const [activeQuestion, setActiveQuestion] = useState(0)

    const handleScore = (difficulty) => {
        switch(difficulty) {
            case 'hard': return 5;
            case 'medium': return 3;
            default: return 1;
        }
    }

    const handleCorrectAnswer = (difficulty) => {
        handleUpdateScore(currentScore + handleScore(difficulty))
    }

    const onClickLoadMore = () => {
        handleLoadMoreQuestions()
        setActiveQuestion(0)
    }

    const ResultsPage = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', gap: '1rem', padding: '1rem'}}>
                <h1>Your total score is: {currentScore}!</h1>
                <h3>but you can still load more questions or go back to home page</h3>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                    <Button secondary textAlign="center" width='300px' onClick={handleEndQuiz} label='End Quiz' />
                    <Button primary textAlign="center" width='300px' onClick={onClickLoadMore} label='Load More Questions!' />
                </div>
            </div>
        )
    }

    if (activeQuestion === questions.length) {
        return <ResultsPage />
    }

    return (
        <Box display='flex' justifyContent='center' textAlign='center' alignContent='center'>
            <div style={{ margin: 'auto' }}>
                your score: {currentScore}
            </div>
            {questions.map((item, index) =>
            <QuizItems
                key={index}
                question={`${item.question}`}
                active={activeQuestion === index}
                incorrect_answers={item.incorrect_answers}
                correct_answer={item.correct_answer}
                handleNextQuestion={() => setActiveQuestion(index + 1)}
                category={item.category}
                score={handleScore(item.difficulty)}
                handleCorrectAnswer={() => handleCorrectAnswer(item.difficulty)}
            />)}
            
        </Box>
    )
}

export default QuizPage
