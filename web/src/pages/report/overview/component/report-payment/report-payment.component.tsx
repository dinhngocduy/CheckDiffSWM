import { Pie } from "react-chartjs-2";
import { ReportPaymentAdapter } from "./report-payment.adapter";
import { ReportPaymentProps } from "./report-payment.props";
import "./report-payment.scss";
import convertToCurrency from "../../../../../libraries/utils/convert-to-currency";

export const ReportPaymentComponent = (props: ReportPaymentProps) => {
  const { reportData, dataOption, onChangeOption } =
    ReportPaymentAdapter(props);

  const chartColors = ["#0FC6C2", "#FF4C54", "#165DFF", "#F7BA1E"];

  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Tiền mặt", "MOMO", "VietQR", "Thẻ ngân hàng"],
    datasets: [
      {
        data: reportData.map((element) => {
          if (dataOption === 0) {
            return element.amount;
          } else {
            return element.total;
          }
        }),
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
      },
    ],
  };
  const pieOptions = {
    legend: {
      display: true,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem: any, data: any) {
          console.log("CHART TOOLTIP 4 : ", tooltipItem, data);
          if (dataOption === 0) {
            return (
              "Doanh thu: " +
              convertToCurrency(
                data?.datasets[0]?.data[tooltipItem.index] + ""
              ) +
              " VND"
            );
          } else {
            return "Số sản phẩm: " + data?.datasets[0]?.data[tooltipItem.index];
          }
        },
      },
    },
  };

  return (
    <>
      <div className="report-ov-payment-ctn">
        <div className="report-ov-payment-header">
          <span className="report-ov-payment-title">Thống kê phương thức thanh toán</span>
        </div>
        <div className="report-ov-payment-body">
          <div style={{ flex: 1 }}>
            <Pie data={data} options={pieOptions} height={90} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="report-ov-payment-option">
              <span
                className="option-text"
                onClick={onChangeOption}
                style={{
                  fontWeight: dataOption === 0 ? 700 : 400,
                  color: dataOption === 0 ? "#FF4C54" : "#000",
                }}
              >
                Doanh thu
              </span>
              <span
                className="option-text"
                onClick={onChangeOption}
                style={{
                  fontWeight: dataOption === 1 ? 700 : 400,
                  color: dataOption === 1 ? "#FF4C54" : "#000",
                }}
              >
                Sản phẩm
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
