import { ReportSalesByProductByProvince } from "libraries/types/report-sales-by-product";
import { ListReportByMachineDetails } from "libraries/types/searchingarea";
import { useEffect } from "react";
import { ReportSalesByProductItem } from "./report-sales-by-product-item/report-sales-by-product-item";

export const ReportSalesByProductBody = (props: any) => {

    const {
        restartString,
        getListReportByProductDetails,
        reportSalesByProductByProvinces
    } = props;
    
    return (
        <div className="report-sales-body report-by-product">
        {reportSalesByProductByProvinces.map((reportSalesByProductByProvince: ReportSalesByProductByProvince) => {
            return (
                <ReportSalesByProductItem
                    {...{
                    reportSalesByProductByProvince
                    }}
                />
            )
        })}
        </div> 
    )

}
