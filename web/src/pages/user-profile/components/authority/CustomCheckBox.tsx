import React, { useImperativeHandle, useState } from 'react';
import { CheckBoxProps } from './authority.props';
import { BsCircle, BsCheckCircleFill } from 'react-icons/bs';

const CustomCheckBox = React.forwardRef((props: CheckBoxProps, ref: any) => {

    const {label, checkRef} = props;
    const [checked, setChecked] = useState<boolean>(false);
    const handleIconClick = (e: any) => {
        setChecked(!checked);
    } 

    useImperativeHandle(ref, () => ({
        returnChecked: () => checked,
        resetChecked: () => setChecked(false)
    }))

    return (
        <div>
            <button ref={checkRef} className='check-bt' onClick={handleIconClick} id={label}>
                {checked? <BsCheckCircleFill color='#0A9BE1' size='20px'/> : <BsCircle size='20px'/>}
            </button>
            <span>{label}</span>
        </div>
    )
})

export default CustomCheckBox