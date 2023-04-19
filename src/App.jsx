import { useState } from 'react'
import { Box, Button, Card, Heading, Paragraph } from 'grommet'

function App() {
  const [startQuiz, setStartQuiz] = useState(false)

  return (
       <Box flex direction='column' justifyContent='center' alignItems='center'>
          <Card paddding='3rem' margin='3rem'>
            <Heading> Simple Quiz App </Heading>
            <Paragraph>
              answer the 5 questions in multiple choice format and gain points!
            </Paragraph>
            <Button primary label='Start Quiz!' onClick={() => setStartQuiz(true)}/>
          </Card>
      </Box>
  )
}

export default App
