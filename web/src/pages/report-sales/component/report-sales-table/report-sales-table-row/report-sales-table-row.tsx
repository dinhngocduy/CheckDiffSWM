import formatCurrencyToVnd from 'libraries/utils/format-currency-to-vnd';
import { useState } from 'react';
import { Table } from 'reactstrap';
import './report-sales-table-row.scss';

export const ReportSalesTableRow = (props: any) => {
    const { data } = props;

    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className={((isCollapsed) ? "collapsed " : "") + "report-sales-item"}>
            <div className="header"
            onClick={() => {setIsCollapsed(!isCollapsed)}}>
                <p>{data.machine.referenceName}</p>
                <p className="excel-export"><span/>Xuất excel</p>
            </div>


            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Mã sản phẩm</th>
                        <th>Tổng lượt giao dịch</th>
                        <th>Giao dịch tiền mặt</th>
                        <th>Giao dịch ví điện tử</th>
                        <th>Giao dịch quẹt thẻ</th>
                    </tr>
                </thead>
                <tbody>
                    {data.details.map((detail:any, index: any) => {
                        return <tr>
                            <th style={{ textAlign: "center", width: "3%" }}>{index+1}</th>
                            <th>
                                <img src={"https://app.smartvendingmachines.net/files/image/" + (detail.product.imageDetail)}
                                alt={detail.product.imageDetail}/> 
                                {detail.product.name}
                            </th>
                            <th>{detail.product.code}</th>
                            <th>{detail.totalTransaction}</th>
                            <th>{formatCurrencyToVnd(detail.totalCashAmount)}</th>
                            <th>{formatCurrencyToVnd(detail.totalMomoAmount)}</th>
                            <th>{formatCurrencyToVnd(detail.totalATMAmount)}</th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
