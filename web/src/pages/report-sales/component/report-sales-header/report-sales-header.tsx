import { NavLink } from "react-router-dom"
import { ReportSalesHeaderItem } from "./report-sales-header-item/report-sales-header-item"

import './report-sales-header.scss';

export const ReportSalesHeader = () => {
    return (
        <div className="report-sales-header">
            <NavLink to="/report/sales/machines" activeClassName="active">
                <ReportSalesHeaderItem name="Báo cáo theo máy"/>
            </NavLink>
            <NavLink to="/report/sales/products" activeClassName="active">
                <ReportSalesHeaderItem name="Báo cáo theo sản phẩm"/>
            </NavLink>
            <NavLink to="/report/sales/payments" activeClassName="active">
                <ReportSalesHeaderItem name="Báo cáo theo hình thức thanh toán"/>
            </NavLink>
        </div>
    )
}
