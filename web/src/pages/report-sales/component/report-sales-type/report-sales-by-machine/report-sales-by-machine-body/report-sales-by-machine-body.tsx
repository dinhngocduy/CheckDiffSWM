import { ReportSalesByMachineByProvince } from "libraries/types/report-sales-by-machine";
import { ListReportByMachineDetails } from "libraries/types/searchingarea";
import { ReportSalesByMachineItem } from "./report-sales-by-machine-item/report-sales-by-machine-item";

export const ReportSalesByMachineBody = (props: any) => {

    const {
        reportSalesByMachineByProvinces
    } = props;

    return (
        <div className="report-sales-body report-by-machine">
        {reportSalesByMachineByProvinces?.map((reportSalesByMachineByProvince: ReportSalesByMachineByProvince) => {
            return (
                <ReportSalesByMachineItem
                {...{reportSalesByMachineByProvince}}
                />
            )
        })}
        </div>
    )
}
