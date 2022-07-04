import convertToCurrency from "libraries/utils/convert-to-currency";
import "./report-multi-type-chart.scss";
import { Bar } from "react-chartjs-2";
import { ReportMultiTypeChartProps } from "./report-multi-type-chart.props";
import { ReportMultiTypeChartAdapter } from "./report-multi-type-chart.adapter";

export const ReportMultiTypeChart = (props: ReportMultiTypeChartProps) => {
  const { labels, reportData } = ReportMultiTypeChartAdapter(props);

  // const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const data = {
    labels,
    datasets: [
      // {
      //   type: "line",
      //   label: "Doanh Thu",
      //   borderColor: "#F7BA1E",
      //   borderWidth: 2,
      //   fill: false,
      //   data: reportData.map((item) => {
      //     return item.amount
      //   }),
      //   tension: 0,
      //   spanGaps: true,
      //   pointBackgroundColor: "#fff",
      //   yAxisID: "y-axis-1",
      // },
      {
        type: "bar",
        label: "Doanh Thu",
        backgroundColor: "#0FC6C2",
        data: reportData.map((item) => {
          return item.amount;
        }),
        borderColor: "white",
        borderWidth: 0,
        yAxisID: "y-axis-1",
      },
      {
        type: "bar",
        label: "Sản Phẩm",
        backgroundColor: "#165DFF",
        data: reportData.map((item) => {
          return item.total;
        }),
        tension: 0,
        borderColor: "white",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
      position: "bottom",
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem: any, data: any) {
          console.log("DATA CHART : ", tooltipItem);
          if (tooltipItem.datasetIndex === 0) {
            return (
              "Doanh thu: " + convertToCurrency(tooltipItem.yLabel + "VND")
            );
          }
          return "Sản phẩm: " + tooltipItem.yLabel;
        },
      },
    },
    scales: {
      xAxes: [
        {
          stacked: false,
          gridLines: {
            display: false,
          },
          barPercentage: 0.9,
          categoryPercentage: 0.5,
        },
      ],
      yAxes: [
        {
          stacked: false,
          position: "left",
          type: "linear",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true,
            callback: function (tick: any, index: any, ticks: any) {
              return convertToCurrency(tick + "");
            },
          },
          //   scaleLabel: {
          //     display: true,
          //     labelString: "Doanh thu",
          //     fontSize: 13,
          //   },
        },
        {
          stacked: false,
          position: "right",
          type: "linear",
          id: "y-axis-2",
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
          //   scaleLabel: {
          //     display: true,
          //     labelString: "Doanh thu",
          //     fontSize: 13,
          //   },
        },
      ],
    },
  };

  return (
    <>
      <div className="report-multi-chart-ctn">
        <div className="report-multi-chart-header">
          <span className="report-multi-chart-title">
            Thống kê doanh thu theo máy
          </span>
        </div>
        <div className="report-multi-chart-body">
          <Bar
            type="bar"
            data={data}
            options={options}
            height={95}
            width={300}
          />
        </div>
      </div>
    </>
  );
};
