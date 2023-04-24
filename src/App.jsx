import { useEffect, useState } from 'react'
import { Box, Button, Card, Heading, Paragraph, Spinner } from 'grommet'
import QuizPage from './components/QuizPage'

function App() {
    const [startQuiz, setStartQuiz] = useState(false)
    const [questions, setQuestions] = useState([])
    const [playerScore, setPlayerScore] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const fetchQuestions = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('https://opentdb.com/api.php?amount=3')
            const data = await response.json()
            setQuestions(data.results)
        } catch (e) {
            // fail gracefully
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    const handleEndQuiz = () => {
        setStartQuiz(false)
        setPlayerScore(0)
    }

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', height: '50vh', textAlign: 'center', margin: 'auto'}}>
                <Spinner size='large'/>
            </div>
        )
    }

  return (
       <Box flex direction='column' justifyContent='center'>
           {startQuiz ?
               <QuizPage
                    questions={questions}
                    currentScore={playerScore}
                    handleUpdateScore={(newScore) => setPlayerScore(newScore)}
                    handleLoadMoreQuestions={fetchQuestions}
                    handleEndQuiz={handleEndQuiz}
                />
               :
               <Card paddding='3rem' margin='3rem'>
                  <Heading> Simple Quiz App </Heading>
                  <Paragraph>
                    answer the 3 questions in multiple choice format and gain points!
                  </Paragraph>
                  <Button primary label='Start!' onClick={() => setStartQuiz(true)}/>
                </Card>
           }
      </Box>
  )
}

export default App
