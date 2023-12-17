import { useEffect, useState } from 'react'

function Inputs(props: { data: number[], handleChange: Function }) {
    const [inputs, setInputs] = useState<any[]>([(<></>)]);
    useEffect(() => {
        setInputs(() => {
            let list: any[] = props.data.map((value, index) => (
                    <div className='input--div'>
                        <label>Number {index + 1}</label>
                        <input type='number' className='input' min="1" key={index} id={index.toString()} value={value} name={index.toString()} onChange={event => props.handleChange(event)} />
                    </div>
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