import { ENUM_PAGE } from "libraries/enums/page"
import { Route, Switch } from "react-router-dom"
import { ReportSalesHeader } from "./component/report-sales-header/report-sales-header"
import { ReportSalesByMachineScreen } from "./component/report-sales-type/report-sales-by-machine/report-sales-by-machine.screen"
import { ReportSalesByPaymentScreen } from "./component/report-sales-type/report-sales-by-payment/report-sales-by-payment.screen"
import { ReportSalesByProductScreen } from "./component/report-sales-type/report-sales-by-product/report-sales-by-product.screen"

import './report-sales.scss'

export const ReportSalesScreen = () => {

    return (
        <div className="report-sales-ctn">
            <ReportSalesHeader/>
            <Switch>
                <Route path={ENUM_PAGE.REPORT_SALES_BY_PRODUCT} component={ReportSalesByProductScreen}/>
                <Route path={ENUM_PAGE.REPORT_SALES_BY_MACHINE} component={ReportSalesByMachineScreen}/>
                <Route path={ENUM_PAGE.REPORT_SALES_BY_PAYMENT} component={ReportSalesByPaymentScreen}/>
            </Switch>
        </div>
    )

}
