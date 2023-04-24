import { useEffect, useState } from 'react'
import { Box, Button, Card, Heading, Paragraph } from 'grommet'
import QuizPage from './components/QuizPage'

function App() {
    const [startQuiz, setStartQuiz] = useState(false)
    const [questions, setQuestions] = useState([])

    const fetchQuestions = async () => {
        const response = await fetch('https://opentdb.com/api.php?amount=3')
        const data = await response.json()
        setQuestions(data.results)
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    console.log('questions', questions)
  return (
       <Box flex direction='column' justifyContent='center' alignItems='center' overflow='hidden'>
           {startQuiz ?
                <QuizPage questions={questions}/>
               :
               <Card paddding='3rem' margin='3rem'>
                  <Heading> Simple Quiz App </Heading>
                  <Paragraph>
                    answer the 3 questions in multiple choice format and gain points!
                  </Paragraph>
                  <Button primary label='Start Quiz!' onClick={() => setStartQuiz(true)}/>
                </Card>
           }
      </Box>
  )
}

export default App
