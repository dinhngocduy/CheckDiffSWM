import "./report-stack-bar-chart.scss";
import { HorizontalBar } from "react-chartjs-2";
import { ReportStackBarChartProps } from "./report-stack-bar-chart.props";
import { ReportStackBarChartAdapter } from "./report-stack-bar-chart.adapter";
import convertToCurrency from "libraries/utils/convert-to-currency";

export const ReportStackBarChart = (props: ReportStackBarChartProps) => {
  const { labels, reportData } = ReportStackBarChartAdapter(props);

  // const labels = ["Hà Nội", "Hà Nội", "Hà Nội", "Hà Nội", "Hà Nội"];

  const data = {
    labels,
    datasets: [
      // {
      //   label: "Sản phẩm",
      //   backgroundColor: "#F7BA1E",
      //   data: [12, 5, 6, 20, 10],
      //   borderColor: "white",
      //   borderWidth: 0,
      //   axis: "y-axis-1",
      // },
      {
        label: "Doanh thu",
        backgroundColor: "#165DFF",
        data: reportData.map((item) => {
          return item.amount;
        }),
        borderColor: "white",
        borderWidth: 0,
        axis: "y-axis-1",
      },
      // {
      //   label: "Sản phẩm",
      //   backgroundColor: "#0FC6C2",
      //   data: reportData.map((item) => {
      //     return item.total * 10000;
      //   }),
      //   borderColor: "white",
      //   borderWidth: 0,
      //   axis: "y-axis-2",
      // },
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
          console.log("CHART 3 : ", tooltipItem, data);
          if (tooltipItem.datasetIndex === 0) {
            return (
              "Doanh thu: " + convertToCurrency(tooltipItem.xLabel + "VND")
            );
          }
          return "Sản phẩm: " + tooltipItem.xLabel / 10000;
        },
      },
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          display: true,
          gridLines: {
            display: false,
          },
        },

        // {
        //   stacked: false,
        //   position: "bottom",
        //   type: "linear",
        //   id: "y-axis-1",
        //   // ticks: {
        //   //   beginAtZero: true,
        //   //   callback: function (tick: any, index: any, ticks: any) {
        //   //     return convertToCurrency(tick + "");
        //   //   },
        //   // },
        // },
        // {
        //   stacked: false,
        //   position: "top",
        //   type: "linear",
        //   id: "y-axis-2",
        //   ticks: {
        //     beginAtZero: true,
        //   },
        //   gridLines: {
        //     display: false,
        //   },
        //   //   scaleLabel: {
        //   //     display: true,
        //   //     labelString: "Doanh thu",
        //   //     fontSize: 13,
        //   //   },
        // },
      ],
      yAxes: [
        {
          stacked: true,
          position: "left",
          barPercentage: 0.4,
        },
      ],
    },
  };

  return (
    <>
      <div className="report-stack-bar-chart-ctn">
        <div className="report-stack-bar-chart-header">
          <span className="report-stack-bar-chart-title">
            Thống kê doanh thu theo khu vực
          </span>
        </div>
        <div className="report-stack-bar-chart-body">
          <HorizontalBar
            data={data}
            options={options}
            height={130}
          />
        </div>
      </div>
    </>
  );
};
