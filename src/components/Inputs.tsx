import { useEffect, useState } from 'react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';

function Inputs(props: { quantity: number, handleChange: Function }) {
    const [inputs, setInputs] = useState([(<></>)]);
    useEffect(() => {
        setInputs(() => {
            let list: any[] = [];
            for (let index = 0; index < props.quantity; index++) {
                list.push((
                    <FormControl w="176">
                        <FormLabel>Numero {index + 1}</FormLabel>
                        <NumberInput key={index} id={index.toString()} name={index.toString()} variant='filled' color='black' defaultValue={1} onChange={value => props.handleChange(value, index)} min={1}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                ))
            }
            return list
        })
    }, [props.quantity])
    return (
        <>
            {inputs}
        </>
    )
}

export default Inputs