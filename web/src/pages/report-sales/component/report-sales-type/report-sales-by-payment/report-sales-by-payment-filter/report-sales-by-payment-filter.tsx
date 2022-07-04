import { CheckboxInput } from "libraries/components/checkbox-input/checkbox-input"

import './report-sales-by-payment-filter.scss';
import { MultiDatePicker } from "libraries/components/multi-date-picker/multi-date-picker";
import moment from "moment";
import { useEffect, useState } from "react";
import { AvailableProvinces } from "libraries/components/available-province/available-provinces";

import paymentTypes from "../../../../../../libraries/json/payment-type.json";

export const ReportSalesByPaymentFilter = (props: any) => {

    const {
        availableProvinces,
        searchingAreas, setSearchingAreas,
        machineIds, setMachineIds, machineData,
        selectingPaymentTypes, setSelectingPaymentTypes,
        fromDate, setFromDate,
        toDate, setToDate,
        getListReportSalesByPaymentByTypes
    } = props;

    const [date, setDate] = useState<any>([
        moment().subtract(1, "days"),
        moment()
    ]);

    useEffect(() => {
        if(!date) {
            return;
        }
        setFromDate(date[0].format("yyyy-MM-DD"));
        setToDate(date[1].format("yyyy-MM-DD"));
    }, [date])


    return (
        <div className="report-sales-filter report-by-payment">
            <CheckboxInput
            options={paymentTypes.map((payment:any) => ({
                value: payment.value,
                label: payment.label
            }))}    
            placeholder="Hình thức thanh toán"
            values = {selectingPaymentTypes}
            setValues = {setSelectingPaymentTypes}
            />
            <CheckboxInput
            options={machineData.map((m:any) => ({
                value: m.machine.id,
                label: m.machine.referenceName
            }))}    
            placeholder="Tên máy"
            values = {machineIds}
            setValues = {setMachineIds}
            isDisabled = {(searchingAreas.length > 0)}
            />
            <AvailableProvinces
            data={availableProvinces}
            values={searchingAreas}
            setValues={setSearchingAreas}
            isDisabled={machineIds.length > 0}
            />
            <MultiDatePicker {...{date, setDate}}/>
            <div className={((selectingPaymentTypes.length === 0) ? "disabled " : "") +  "search-btn"}
            onClick={getListReportSalesByPaymentByTypes}>
                <p>Search</p>
            </div>

        </div>

    )
}
