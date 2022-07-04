import React, { useImperativeHandle, useState } from 'react';
import { TextFieldProps } from './text-field.props';
import { BsEyeSlash, BsEye} from 'react-icons/bs';
import './fields.scss';

const TextField = React.forwardRef((props: TextFieldProps, ref: any) => {
    const [text, setText] = useState<string>('');
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
    const { label, password, inputRef } = props;

    const handleChange = (e: React.FormEvent) => {
        setText((e.target as HTMLInputElement).value);
    }
    
    useImperativeHandle(ref, () => ({
        returnText: () => text,
        resetText: () => setText('')
    }))

    return (
        <div className='component'>
            <span>{label}</span>
            <div className="field">
                {password? 
                  <>
                    <input
                        ref={inputRef}  
                        className='field__text' 
                        type={visiblePassword? 'text' : 'password'}
                        value={text}
                        onChange={handleChange}
                    />
                    <button 
                        className='field__bt' 
                        onClick={(e: any) => setVisiblePassword(!visiblePassword)}
                    >{visiblePassword? <BsEyeSlash/>: <BsEye/>}</button>
                  </> 
                   : 
                    <input 
                        ref={inputRef}  
                        className='text-field' 
                        value={text}
                        onChange={handleChange}
                    />
                }
            </div>
            
        </div>
    )
})

export default TextField