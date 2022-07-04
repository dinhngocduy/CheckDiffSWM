import { ReportSalesByPaymentByType } from "libraries/types/report-sales-by-payment";
import { ReportSalesByPaymentItem } from "./report-sales-by-payment-item/report-sales-by-payment-item";

export const ReportSalesByPaymentBody = (props: any) => {
    
    const {
        reportSalesByPaymentByTypes
    } = props;

    return (
        <div className="report-sales-body report-by-payment">
        {reportSalesByPaymentByTypes.map((reportSalesByPaymentByType: ReportSalesByPaymentByType) => {
            return (
                <ReportSalesByPaymentItem
                {...{
                reportSalesByPaymentByType
                }}
                />
            )
        })

        }
        </div> 
    )

} 
