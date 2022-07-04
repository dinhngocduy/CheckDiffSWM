import { useEffect, useState } from "react";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";

import {v4 as uuid} from 'uuid';

import './available-provinces.scss';
import { AvailableProvincesProps } from "./available-provinces-props";
import { AvailableProvince, SearchingArea } from "libraries/types/searchingarea";

export const AvailableProvinces = (props: AvailableProvincesProps) => {

    const {
        data,
        values,
        setValues,
        isDisabled
    } = props;

    const [ collapsed, setCollapsed ] = useState(false);

    const [ searchInput, setSearchInput ] = useState<string>("");

    
    const handleClickProvince = (province: AvailableProvince) => {
        if(ifCheckedProvince(province)) {
            setValues(values.filter((searchingArea: SearchingArea) => {
                return searchingArea.province !== province.name;
            }))
        } else {
            let neededAddSearchingArea: SearchingArea[] = [];
            province.availableDistricts.forEach(async (district) => {
                if(getSearchingArea(province.name, district) === null) {
                    neededAddSearchingArea.push({province: province.name, district: district});
                }
            })
            setValues([...values, ...neededAddSearchingArea]);
        }
    }

    const handleClickDistrict = (province: string, district: string) => {
        let searchingArea = getSearchingArea(province, district);
        if(searchingArea != null) {
            let index = values.indexOf(searchingArea);
            setValues(values.filter((_: any, i: any) => {
                return i !== index;
            }))
        } else {
            setValues([...values, {province: province, district: district}]);
        }
    }

    const getSearchingArea = (province: string, district: string): SearchingArea | null => {
        return values.find(o => o.province === province && o.district === district) || null;
    }

    const ifCheckedProvince = (province: AvailableProvince): boolean => {
        let totalChildDistrict: number = values.filter(o => o.province === province.name).length;
        return totalChildDistrict === province.availableDistricts.length;
    }

    if(data.length === 0) {
        return <div></div>
    }

    return (
        <div className={(isDisabled ? "disabled " : "") + "available-provinces-ctn"} onMouseLeave={() => {setCollapsed(false)}}>
            <div className="header-ctn">
                 <div className="header" onClick={() => {setCollapsed(!collapsed)}} >
                    <div className="label-ctx">Khu vực ({values.length})</div>
                    <div className="arrow-down"></div>
                </div>

            </div>
            <div className={((collapsed) ? "collaped " : "") + "dropdown-list"}>
                <div className="search-box">
                <input 
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Nhập để tìm kiếm"
                />
                </div>
                <ul>
                {data.filter((province:AvailableProvince) => province.availableDistricts.filter((district: string) => district.toLowerCase().includes(searchInput.toLowerCase())).length > 0).map((province: AvailableProvince) => {
                    return (
                        <li key={uuid()}>
                            <div onClick={() => {handleClickProvince(province)}}>
                            <p>{province.name}</p>
                            <input
                            type="checkbox"
                            readOnly
                            onClick={() => {handleClickProvince(province)}}
                            checked={ifCheckedProvince(province)}/>
                            </div>
                            <ul>
                            {province.availableDistricts.filter((district:string) => district.toLowerCase().includes(searchInput.toLowerCase()))
                            .map((availableDistrict: string) => {
                                return (
                                    <li key={uuid()} onClick={() => {handleClickDistrict(province.name ,availableDistrict)}}>
                                        <p>{availableDistrict}</p>
                                        <input
                                        type="checkbox"
                                        value={availableDistrict}
                                        checked={getSearchingArea(province.name, availableDistrict) != null}
                                        readOnly
                                        />
                                    </li>
                                )
                            })}
                            </ul>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )

} 
