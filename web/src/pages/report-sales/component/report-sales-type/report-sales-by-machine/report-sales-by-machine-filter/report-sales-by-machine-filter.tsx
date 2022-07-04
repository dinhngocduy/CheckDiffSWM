import { AvailableProvinces } from "libraries/components/available-province/available-provinces";
import { CheckboxInput } from "libraries/components/checkbox-input/checkbox-input";
import { MultiDatePicker } from "libraries/components/multi-date-picker/multi-date-picker";
import moment from "moment";
import { useEffect, useState } from "react";

export const ReportSalesByMachineFilter = (props: any) => {

    const {
        availableProvinces,
        searchingAreas, setSearchingAreas,
        machineIds, setMachineIds, machineData,
        fromDate, setFromDate,
        toDate, setToDate,
        getListReportSalesByMachineByProvinces
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
        <div className="report-sales-filter report-by-machine">
            <CheckboxInput
            options={machineData.map((m:any) => ({
                value: m.machine.id,
                label: m.machine.referenceName
            }))}    
            placeholder="Tên máy"
            values = {machineIds}
            setValues = {setMachineIds}
            isDisabled = {searchingAreas.length > 0}
            />
            <AvailableProvinces
            data={availableProvinces}
            values={searchingAreas}
            setValues={setSearchingAreas}
            isDisabled = {machineIds.length > 0}
            />
            <MultiDatePicker {...{date, setDate}}/>
            <div className={((searchingAreas.length === 0 && machineIds.length === 0) ? "disabled " : "") +  "search-btn"}
            onClick={getListReportSalesByMachineByProvinces}>
                <p>Tìm kiếm</p>
            </div>
        </div>
    )

}
