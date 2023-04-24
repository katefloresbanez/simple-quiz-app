import { useState } from 'react'
import { Box } from 'grommet'
import QuizItems from './QuizItems'

const QuizPage = ({ questions }) => {
    const [activeQuestion, setActiveQuestion] = useState(0)

    const handleScore = (diffuculty) => {
        switch(diffuculty) {
            case 'hard': return 5;
            case 'medium': return 3;
            default: return 1;
        }
    }

    return (
        <Box display='flex' justifyContent='center' textAlign='center' alignContent='center'>
            {questions.map((item, index) =>
            <QuizItems
                key={index}
                question={`${item.question}`}
                active={activeQuestion === index}
                incorrect_answers={item.incorrect_answers}
                correct_answer={item.correct_answer}
                nextQuestion={() => setActiveQuestion(index + 1)}
                category={item.category}
                score={handleScore(item.diffuculty)}
            />)}
        </Box>
    )
}

export default QuizPage
