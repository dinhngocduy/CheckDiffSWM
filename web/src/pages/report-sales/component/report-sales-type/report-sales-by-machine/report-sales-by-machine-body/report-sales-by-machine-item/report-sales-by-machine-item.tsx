import { MachineOffIcon, MachineOnIcon } from "libraries/icons/icon";
import { ReportSalesByMachineByDistrict, ReportSalesByMachineDetails } from "libraries/types/report-sales-by-machine";
import formatCurrencyToVnd from "libraries/utils/format-currency-to-vnd";
import { useEffect, useState } from "react";
import { ReportSalesByMachineItemProps } from "./report-sales-by-machine-item.props";

import './report-sales-by-machine-item.scss';

export const ReportSalesByMachineItem = (props:ReportSalesByMachineItemProps) => {
    const { reportSalesByMachineByProvince } = props;

    const [ isCollapsed, setIsCollapsed ] = useState<boolean>(false);

    const handleExpandInfo = () => {
        setIsCollapsed(!isCollapsed); 
    }

    return (
        <div className={((isCollapsed) ? "collapsed " : "") + "report-sales-item report-by-product"}>
            <div className="header" onClick={handleExpandInfo}>
                <p>{reportSalesByMachineByProvince.province}</p>
                <p className="excel-export"><span/>Xuất excel</p>
            </div>
            <div className="content">
            <table>
                <thead>
                    <tr className="header-row">
                        <th>STT</th> 
                        <th>Tên máy</th> 
                        <th>Mã máy</th>
                        <th>Nhóm máy</th>
                        <th>Tổng lượt bán</th>
                        <th>Tiền mặt</th>
                        <th>Momo</th>
                        <th>Thẻ ngân hàng</th>
                        <th>QR Code</th>
                        <th>Tổng số tiền giao dịch</th>
                    </tr>
                </thead>
                <tbody>
                <tr className="province-row">
                    <th colSpan={4}>{reportSalesByMachineByProvince.province}</th>
                    <th style={{textAlign: "center"}}>{reportSalesByMachineByProvince.totalQuantity}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByProvince.totalCashAmount)}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByProvince.totalMomoAmount)}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByProvince.totalATMAmount)}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByProvince.totalVietQRAmount)}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByProvince.totalTransaction)}</th>
                </tr>
                {reportSalesByMachineByProvince.reportSalesByMachineByDistricts.map((reportSalesByMachineByDistrict: ReportSalesByMachineByDistrict) => {
                return (
                <>
                <tr className="district-row">
                    <th></th>
                    <th colSpan={3}>{reportSalesByMachineByDistrict.district}</th>
                    <th style={{textAlign: "center"}}>{reportSalesByMachineByDistrict.totalQuantity}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByDistrict.totalCashAmount)}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByDistrict.totalMomoAmount)}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByDistrict.totalATMAmount)}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByDistrict.totalVietQRAmount)}</th>
                    <th style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineByDistrict.totalTransaction)}</th>
                </tr> 
                {reportSalesByMachineByDistrict.reportSalesByMachineDetails.map((reportSalesByMachineDetails: ReportSalesByMachineDetails, index: number) => {
                return (
                <tr>
                    <td style={{textAlign: "center"}}>{index+1}</td>
                    <td style={{textAlign: "left"}}>
                        <div className="machineInfo">
                            {(reportSalesByMachineDetails.machine.active) ? <MachineOnIcon/>: <MachineOffIcon/>}
                            <a href={"/machine/" + reportSalesByMachineDetails.machine.id}>{reportSalesByMachineDetails.machine.serialNumber}</a>
                            <p>{reportSalesByMachineDetails.machine.referenceName}</p>
                        </div>
                        </td>
                    <td style={{textAlign: "center"}}>{reportSalesByMachineDetails.machine.identifyCode}</td>
                    <td style={{textAlign: "center"}}>{reportSalesByMachineDetails.machine.type}</td>
                    <td style={{textAlign: "center"}}>{reportSalesByMachineDetails.totalQuantity}</td>
                    <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineDetails.totalCashAmount)}</td>
                    <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineDetails.totalMomoAmount)}</td>
                    <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineDetails.totalATMAmount)}</td>
                    <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineDetails.totalVietQRAmount)}</td>
                    <td style={{textAlign: "right"}}>{formatCurrencyToVnd(reportSalesByMachineDetails.totalTransaction)}</td>
                </tr>
                )})}
                </>)
                })}
                </tbody>
            </table>
            </div>
        </div>
    )

}
