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

function Inputs(props: { data: number[], handleChange: Function }) {
    const [inputs, setInputs] = useState<any[]>([(<></>)]);
    useEffect(() => {
        setInputs(() => {
            let list: any[] = props.data.map((value, index) => (
                <FormControl w="176">
                    <FormLabel>Numero {index + 1}</FormLabel>
                    <NumberInput key={index} id={index.toString()} name={index.toString()} variant='filled' color='black' defaultValue={value} onChange={valueOnChange => props.handleChange(valueOnChange, index)} min={1}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
            ));
            return list
        })
    }, [props.data])
    return (
        <>
            {inputs}
        </>
    )
}

export default Inputs