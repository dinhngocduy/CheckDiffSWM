import { CheckboxInput } from "libraries/components/checkbox-input/checkbox-input"

import './report-sales-by-product-filter.scss';
import { MultiDatePicker } from "libraries/components/multi-date-picker/multi-date-picker";
import moment from "moment";
import { useEffect, useState } from "react";
import { AvailableProvinces } from "libraries/components/available-province/available-provinces";

export const ReportSalesByProductFilter = (props: any) => {

    const {
        availableProvinces,
        searchingAreas, setSearchingAreas,
        productIds, setProductIds, productData,
        machineIds, setMachineIds, machineData,
        fromDate, setFromDate,
        toDate, setToDate,
        getListReportSalesByProductByProvinces
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
        <div className="report-sales-filter report-by-product">
            <CheckboxInput
            options={productData.map((p:any) => ({
                value: p.id,
                label: p.name
            }))}    
            placeholder="Sản phẩm"
            values = {productIds}
            setValues = {setProductIds}/>
            <CheckboxInput
            options={machineData.map((p:any) => ({
                value: p.machine.id,
                label: p.machine.referenceName
            }))}    
            isDisabled={searchingAreas.length > 0}
            placeholder="Mã máy"
            values = {machineIds}
            setValues = {setMachineIds}/>
            <AvailableProvinces
            data={availableProvinces}
            values={searchingAreas}
            setValues={setSearchingAreas}
            isDisabled={machineIds.length > 0}
            />
            <MultiDatePicker {...{date, setDate}}/>
            <div className={((productIds.length === 0) ? "disabled " : "") +  "search-btn"}
            onClick={getListReportSalesByProductByProvinces}>
                <p>Tìm kiếm</p>
            </div>

        </div>

    )
}
