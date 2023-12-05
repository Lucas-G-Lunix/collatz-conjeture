import Inputs from './components/Inputs'
import Graph from './components/Graph'
import { Box, Heading, Flex, Stack, Button, Grid } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const [inputsQuantity, setInputsQuantity] = useState(1);
  const [formData, setFormData] = useState(Object.fromEntries([...Array(inputsQuantity).keys()].map(k => [k, 1])))
  const [numbersToGraph, setNumbersToGraph] = useState({});

  function onClickLess() {
    if (inputsQuantity > 1) {
      setInputsQuantity(prevState => prevState - 1)
      const newData = formData;
      delete newData[inputsQuantity - 1];
      setFormData(newData);
    }
  }

  function onClickMore() {
    if (inputsQuantity < 10) {
      setInputsQuantity(prevState => prevState + 1)
      const newData = formData;
      newData[inputsQuantity] = 1;
      setFormData(newData);
    }
  }

  function handleChange(value: string, name: number) {
    setFormData(preState => ({
      ...preState,
      [name]: parseInt(value)
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNumbersToGraph(formData);
  }

  return (
    <Box>
      <Box bg='#007bff' w='100%' p={4} color='white' mb={3}>
        <Heading textAlign="center" my={5}>Collatz Conjeture Graphing</Heading>
        <form onSubmit={handleSubmit}>
          <Flex flexDir="column" gap={3} alignItems="center">
            <Grid my={3} gap={4} maxWidth='50%' templateColumns='repeat(5, 1fr)' justifyContent="center" alignItems="center" minHeight="160">
              <Inputs quantity={inputsQuantity} handleChange={handleChange} />
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
