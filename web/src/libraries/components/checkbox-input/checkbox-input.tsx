import { useEffect, useState } from "react";
import { CheckboxInputProps } from "./checkbox-input-props";

import './checkbox-input.scss';

import {v4 as uuid} from 'uuid';

export const CheckboxInput = (props: CheckboxInputProps) => {

    const {
        placeholder,
        options,
        values,
        setValues,
        isDisabled
    } = props;

    const [collaped, setCollaped] = useState<boolean>(false);

    const [searchInput, setSearchInput] = useState<string>("");

    const handleClickValue = (target: any) => {
        const index = values.indexOf(target.value);
        if(index >= 0) {
            setValues(values.filter((_: any, i: any) => {
                return i !== index;
            }));
        } else {
            setValues([...values, target.value]);
        }
    }

    const handleSearchInput = (e: any) => {
        setSearchInput(e.target.value);
    }

    const ifContainSearchInput = (source:string) => {
        if(source == null) {
            return false;
        }

        if(searchInput?.length === 0) {
            return true;
        }
        
        return source.indexOf(searchInput) >= 0;
    }

    const ifValuesContainTarget = (target:any) => {
        return values.indexOf(target.value) >= 0;
    }

    const selectAll = () => {
        if(values.length === options.length) {
            setValues([]);
        } else {
            setValues(options.map(o => o.value));
        }

    }

    return (
        <div className={(isDisabled ? "is-disabled " : "") +"checkbox-input-ctn"} onMouseLeave={() => {setCollaped(false)}}>
            <div className="header-ctn">
                <div className="header" onClick={() => {setCollaped(!collaped)}} >
                    <div className="label-ctx">{placeholder} ({values.length})</div>
                    <div className="arrow-down"></div>
                </div>
            </div>
            <div className={((collaped) ? "collaped " : "") + "dropdown-list"}>
                <div className="search-box"> 
                    <input 
                    type="text" 
                    placeholder="Nhập để tìm kiếm" 
                    value={searchInput}
                    onChange={handleSearchInput}    
                    />
                </div>
                <ul>
                    <li onClick={selectAll}>
                        Chọn tất cả 
                        <input
                        type="checkbox"
                        checked={values.length === options.length}
                        />
                    </li>
                 {options?.filter((o) => ifContainSearchInput(o.label))
                    .map(o => {
                    return (
                        <li key={uuid()} onClick={() => {handleClickValue(o)}}>
                            <p>{o.label}</p>
                            <input 
                            type="checkbox" 
                            value={o.value}
                            checked= {ifValuesContainTarget(o)}
                            readOnly/>
                        </li>
                    )
                 })
                 }
                 </ul>
            </div>
        </div>
    )
}
