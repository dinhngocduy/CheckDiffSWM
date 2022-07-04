import { ReportSalesByProductBody } from "./report-sales-by-product-body/report-sales-by-product-body";
import { ReportSalesByProductFilter } from "./report-sales-by-product-filter/report-sales-by-product-filter";
import { ReportSalesByProductAdapter } from "./report-sales-by-product.adapter";

export const ReportSalesByProductScreen = () => {

    const {
        availableProvinces,
        restartString,
        searchingAreas, setSearchingAreas,
        productIds, setProductIds, productData,
        machineIds, setMachineIds, machineData, 
        fromDate, setFromDate,
        toDate, setToDate,
        reportSalesByProductByProvinces, getListReportSalesByProductByProvinces
    } =  ReportSalesByProductAdapter();

    return (
        <>
        <ReportSalesByProductFilter 
            {...{
            availableProvinces,
            searchingAreas, setSearchingAreas,
            productIds, setProductIds, productData,
            machineIds, setMachineIds, machineData,
            fromDate, setFromDate,
            toDate, setToDate,
            getListReportSalesByProductByProvinces
           }}
        />
        <ReportSalesByProductBody
            {...{
            availableProvinces,
            restartString,
            reportSalesByProductByProvinces
            }}
        />
        </>
    )
}
