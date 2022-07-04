import { ReportSalesByPaymentBody } from "./report-sales-by-payment-body/report-sales-by-payment-body";
import { ReportSalesByPaymentFilter } from "./report-sales-by-payment-filter/report-sales-by-payment-filter";
import { ReportSalesByPaymentAdapter } from "./report-sales-by-payment.adapter";

export const ReportSalesByPaymentScreen = () => {

    const {
        availableProvinces,
        searchingAreas, setSearchingAreas,
        machineIds, setMachineIds, machineData,
        selectingPaymentTypes, setSelectingPaymentTypes,
        fromDate, setFromDate,
        toDate, setToDate,
        reportSalesByPaymentByTypes, getListReportSalesByPaymentByTypes
    } =  ReportSalesByPaymentAdapter();

    return (
        <>
        <ReportSalesByPaymentFilter 
            {...{
            availableProvinces,
            searchingAreas, setSearchingAreas,
            selectingPaymentTypes, setSelectingPaymentTypes,
            machineIds, setMachineIds, machineData,
            fromDate, setFromDate,
            toDate, setToDate,
            getListReportSalesByPaymentByTypes
           }}
        />
        <ReportSalesByPaymentBody
            {...{
            reportSalesByPaymentByTypes
            }}
        />
        </>

    )
}
