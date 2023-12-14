import Inputs from './components/Inputs'
import Graph from './components/Graph'
import { Box, Heading, Flex, Stack, Button, Grid } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState<number[]>([1]);
  const [numbersToGraph, setNumbersToGraph] = useState<number[]>([]);

  function onClickLess() {
    if (formData.length > 1) {
      const values = [...formData]
      values.pop()
      setFormData(values)
    }
  }

  function onClickMore() {
    if (formData.length < 10) {
      const values = [...formData]
      values.push(1)
      setFormData(values)
    }
  }

  function handleChange(value: number, index: number) {
    setFormData((preState) => {
      preState[index] = value
      return preState
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNumbersToGraph(formData)
  }

  return (
    <Box>
      <Box bg='#007bff' w='100%' p={4} color='white' mb={3}>
        <Heading textAlign="center" my={5}>Collatz Conjeture Graphing</Heading>
        <form onSubmit={handleSubmit}>
          <Flex flexDir="column" gap={3} alignItems="center">
            <Grid my={3} gap={4} maxWidth='50%' templateColumns='repeat(5, 1fr)' justifyContent="center" alignItems="center" minHeight="160">
              <Inputs data={formData} handleChange={handleChange} />
            </Grid>
            <Stack spacing={4} direction='row' align='center'>
              <Button colorScheme='red' size='md' onClick={onClickLess}>
                Less Numbers
              </Button>
              <Button colorScheme='green' size='md' onClick={onClickMore}>
                More Numbers
              </Button>
              <Button colorScheme='whatsapp' size='md' type='submit'>
                Graph
              </Button>
            </Stack>
          </Flex>
        </form>
      </Box>
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        <Graph numbersToGraph={numbersToGraph} />
      </Flex>
    </Box>
  )
}

export default App
