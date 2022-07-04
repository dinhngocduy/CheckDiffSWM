import { ReportSalesFilter } from "./component/report-sales-filter/report-sales-filter";
import { ReportSalesHeader } from "./component/report-sales-header/report-sales-header";
import { ReportSalesTable } from "./component/report-sales-table/report-sales-table";
import { ReportSalesAdapter } from "./report-sales.adapter";

import './report-sales.scss';

export const ReportSalesScreen = () => {

    //const { listProduct,
    //listMachine,
    //fromDate, setFromDate,
    //toDate, setToDate,
    //reportByMachine, getListReportByMachine,
    //selectedMachines,setSelectedMachines,
    //selectedProducts,setSelectedProducts
    //} = ReportSalesAdapter();
    
    return (
        <div className="report-sales-ctn">
            <ReportSalesHeader/>
            <ReportSalesFilter/>
            <ReportSalesTable />
        </div>
    );
};
