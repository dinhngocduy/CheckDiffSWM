import { ReportSalesByPaymentByDistrict, ReportSalesByPaymentByProvince, ReportSalesByPaymentDetails } from 'libraries/types/report-sales-by-payment';
import { ReportByPaymentDetails, ReportByPaymentDetailsByDistrict, ReportByPaymentDetailsByProvince } from 'libraries/types/searchingarea';
import formatCurrencyToVnd from 'libraries/utils/format-currency-to-vnd';
import { useEffect, useState } from 'react';
import { ReportSalesByPaymentItemProps } from './report-sales-by-payment-item.props';
import './report-sales-by-payment-item.scss';

import paymentTypes from '../../../../../../../libraries/json/payment-type.json';

export const ReportSalesByPaymentItem = (props: ReportSalesByPaymentItemProps) => {

    const {
        reportSalesByPaymentByType
    } = props;
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className={((isCollapsed)? "collapsed ": "") + "report-sales-item report-by-payment"}>
            <div className="header" onClick={() => {setIsCollapsed(!isCollapsed)}}>
                <p>{paymentTypes.find(p => p.value === reportSalesByPaymentByType.paymentType)?.label}</p>
                <p> - {reportSalesByPaymentByType.totalTransaction}</p>
                <p className="excel-export"><span/>Xuất excel</p>
            </div>
            <div className="content">
            <table>
                <thead>
                    <tr className="header-row">
                        <th style={{textAlign:"center", width:"50px"}}>STT</th>
                        <th>Tên máy</th> 
                        <th>Tổng lượt bán</th>
                        <th>Tổng số tiền giao dịch</th>
                    </tr>
                </thead>
                <tbody>
                {reportSalesByPaymentByType.reportSalesByPaymentByProvinces.map((reportSalesByPaymentByProvince: ReportSalesByPaymentByProvince) => {
                    return  (
                        <>
                        <tr className="province-row">
                            <th colSpan={2}>{reportSalesByPaymentByProvince.province}</th>
                            <th>{reportSalesByPaymentByProvince.totalQuantity}</th>
                            <th>{formatCurrencyToVnd(reportSalesByPaymentByProvince.totalTransaction)}</th>
                        </tr>
                        {reportSalesByPaymentByProvince.reportSalesByPaymentByDistricts.map((reportSalesByPaymentByDistrict: ReportSalesByPaymentByDistrict) => {
                        return (
                        <> 
                        <tr>
                            <th className="district-row" colSpan={2}>{reportSalesByPaymentByDistrict.district}</th>
                            <th>{reportSalesByPaymentByDistrict.totalQuantity}</th>
                            <th>{formatCurrencyToVnd(reportSalesByPaymentByDistrict.totalTransaction)}</th>
                        </tr>
                        {reportSalesByPaymentByDistrict.reportSalesByPaymentDetails.map((reportSalesByPaymentDetails : ReportSalesByPaymentDetails) => {
                        return (
                        <tr>
                            <th></th>
                            <th>{reportSalesByPaymentDetails.machine?.referenceName}</th>
                            <th>{reportSalesByPaymentDetails.totalQuantity}</th>
                            <th>{formatCurrencyToVnd(reportSalesByPaymentDetails.totalTransaction)}</th>
                        </tr>
                        )})}
                        </>
                        )})}
                        </>
                    )})}
                </tbody>
                </table>
            </div>
        </div>
    )
}
