import { ReportSalesByProductByDistrict, ReportSalesByProductByMachine, ReportSalesByProductByProvince, ReportSalesByProductDetails } from 'libraries/types/report-sales-by-product';
import { Machine, ReportByMachineDetails, ReportByProductDetails } from 'libraries/types/searchingarea';
import convertToCurrency from 'libraries/utils/convert-to-currency';
import formatCurrencyToVnd from 'libraries/utils/format-currency-to-vnd';
import generateSummaryString from 'libraries/utils/generate-summary-string';
import { useEffect, useState } from 'react';
import './report-sales-by-product-item.scss';
import { ReportSalesByProductProps } from './report-sales-by-product-props';

export const ReportSalesByProductItem = (props: ReportSalesByProductProps) => {

    const { 
        reportSalesByProductByProvince
    } = props;

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const [collapsedList, setCollapsedList] = useState<Record<string, boolean>>({});

    const handleExpandInfo = () => {
        setIsCollapsed(!isCollapsed); 
    }

    //const expendProductDetails = (machine: Machine) => {
        //let currentState: boolean = collapsedList[`${machine.id}`];
        //if(currentState === undefined) {
            //getListReportByProductDetails({
                //machineId: machine.id,
                //province: listReportByMachineDetails.province
            //})
            //currentState = false;
        //} 
        //setCollapsedList({...collapsedList, [`${machine.id}`]: !currentState})
    //}

    return (
        <div className={((isCollapsed) ? "collapsed " : "") + "report-sales-item report-by-product"}>
            <div className="header" onClick={handleExpandInfo}>
                <p>{reportSalesByProductByProvince.province}</p>
                <p className="excel-export"><span/>Xuất excel</p>
            </div>
            <div className="content">
            <table>
                <thead>
                    <tr className="header-row">
                        <th style={{textAlign:"center", width:"50px"}}>STT</th>
                        <th style={{width: "250px"}}>Tên sản phẩm</th>
                        <th>Mã sản phẩm</th>
                        <th>Nhóm sản phẩm</th>
                        <th style={{width: "100px"}}>Số lượng</th>
                        <th>Tiền mặt</th>
                        <th>Momo</th>
                        <th>Thẻ ngân hàng</th>
                        <th>QR Code</th>
                        <th>Tổng số tiền giao dịch</th>
                    </tr>
                </thead>
                <tbody>
                {reportSalesByProductByProvince.reportSalesByProductByDistricts.map((reportSalesByProductByDistrict : ReportSalesByProductByDistrict) => {
                return (
                <>
                    <tr>
                        <th colSpan={4}>{reportSalesByProductByDistrict.district}</th>
                        <th>{reportSalesByProductByDistrict.totalQuantity}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByDistrict.totalCashAmount)}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByDistrict.totalMomoAmount)}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByDistrict.totalATMAmount)}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByDistrict.totalVietQRAmount)}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByDistrict.totalTransaction)}</th>
                    </tr>       
               {reportSalesByProductByDistrict.reportSalesByProductByMachines.map((reportSalesByProductByMachine : ReportSalesByProductByMachine) => {
               return (
               <>
                    <tr>
                        <th colSpan={4}>{reportSalesByProductByMachine.machine.referenceName}</th>
                        <th>{reportSalesByProductByMachine.totalQuantity}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByMachine.totalCashAmount)}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByMachine.totalMomoAmount)}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByMachine.totalATMAmount)}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByMachine.totalVietQRAmount)}</th>
                        <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductByMachine.totalTransaction)}</th>
                    </tr>
               {reportSalesByProductByMachine.reportSalesByProductDetails.map((reportSalesByProductDetails : ReportSalesByProductDetails, index: number) => {
               return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{reportSalesByProductDetails.product?.name}</td>
                        <td>{reportSalesByProductDetails.product?.code}</td>
                        <td>{reportSalesByProductDetails.product?.type}</td>
                        <td>{reportSalesByProductDetails.totalQuantity}</td>
                        <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductDetails.totalCashAmount)}</td>
                        <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductDetails.totalMomoAmount)}</td>
                        <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductDetails.totalATMAmount)}</td>
                        <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductDetails.totalVietQRAmount)}</td>
                        <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByProductDetails.totalTransaction)}</td>
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
