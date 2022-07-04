import { DatePicker } from 'antd';
import axios from 'axios';
import { CheckboxInput } from 'libraries/components/checkbox-input/checkbox-input';
import { MultiDatePicker } from 'libraries/components/multi-date-picker/multi-date-picker';
import { SelectLocationComponent } from 'libraries/components/select-location/select-location-component';
import { IOption } from 'libraries/types/type';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import './report-sales-filter.scss';

export const ReportSalesFilter = (props: any) => {

    const {listProduct,
    listMachine,
    getListReportByMachine,
    fromDate, setFromDate,
    toDate, setToDate,
    selectedMachines,setSelectedMachines,
    selectedProducts,setSelectedProducts
    } = props;

    const [date, setDate] = useState<any>([
        moment().subtract(1, "days"),
        moment()
    ])

    useEffect(() => {
        if(!date) {
            return;
        }
        setFromDate(date[0].format("yyyy-MM-DD HH:mm:ss"));
        setToDate(date[1].format("yyyy-MM-DD HH:mm:ss"));
    }, [date])

    return (
        <div className="report-sales-filter">
            <CheckboxInput
                options={listMachine.map((m:any) => ({
                    value: m.machine.id,
                    label: m.machine.referenceName
                }))}
                placeholder="Tên máy"
                values = {selectedMachines}
                setValues = {setSelectedMachines}
            />

            <CheckboxInput
                options={listProduct.map((p:any) => ({
                    value: p.id,
                    label: p.name
                }))}
                placeholder="Sản phẩm"
                values = {selectedProducts}
                setValues = {setSelectedProducts}
            />
   
            <MultiDatePicker {...{date, setDate}}/>

            <div className="search-btn" onClick={getListReportByMachine}>
                <p>Search</p>
            </div>
        </div>
    );
};
