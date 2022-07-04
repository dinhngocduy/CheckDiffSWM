import { useEffect } from "react";
import { ReportSalesByMachineBody } from "./report-sales-by-machine-body/report-sales-by-machine-body"
import { ReportSalesByMachineFilter } from "./report-sales-by-machine-filter/report-sales-by-machine-filter"
import { ReportSalesByMachineAdapter } from "./report-sales-by-machine.adapter"

export const ReportSalesByMachineScreen = () => {

    const {
        availableProvinces,
        searchingAreas, setSearchingAreas,
        machineIds, setMachineIds, machineData,
        fromDate, setFromDate,
        toDate, setToDate,
        reportSalesByMachineByProvinces, getListReportSalesByMachineByProvinces,
    } = ReportSalesByMachineAdapter();

    return (
        <>
            <ReportSalesByMachineFilter
                {...{
                availableProvinces,
                searchingAreas, setSearchingAreas,
                machineIds, setMachineIds, machineData,
                fromDate, setFromDate,
                toDate, setToDate,
                getListReportSalesByMachineByProvinces
                }}
            />
            <ReportSalesByMachineBody
                {...{
                reportSalesByMachineByProvinces
                }}
            />
        </>
    )
}
