import { MultiDatePicker } from "libraries/components/multi-date-picker/multi-date-picker";
import moment from "moment";
import { useEffect, useState } from "react";
import { ReportCardViewComponent } from "./component/report-cardview/report-cardview.component";
import "./report-overview.scss";
import { TopProductComponent } from "./component/top-product/top-product.component";
import { TopMachineComponent } from "./component/top-machine/top-machine.component";
import { PlusCircleGreen, PlusIcon } from "libraries/icons/icon";
import { ReportMultiTypeChart } from "./component/report-multi-type-chart/report-multi-type-chart.component";
import { ReportStackBarChart } from "./component/report-stack-bar-chart/report-stack-bar-chart.component";
import { ProductStatisticsComponent } from "pages/dashboard/components/product-statistics/product-statistics.component";
import { ReportAdapter } from "vending-core/model-report/report.adapter";
import convertToCurrency from "libraries/utils/convert-to-currency";
import { ReportPaymentComponent } from "./component/report-payment/report-payment.component";
import { useHistory } from "react-router";

export const ReportOverView = () => {
  const history = useHistory();
  const { getRevenueManagement } = ReportAdapter();

  const [date, setDate] = useState<any>([
    moment().subtract(1, "days"),
    moment(),
  ]);

  const [timeFilter, setTimeFilter] = useState<any>([
    moment().subtract(1, "days"),
    moment(),
  ]);

  const [overView, setOverView] = useState<any>();

  useEffect(() => {
    getDataRevenueManagement();
  }, [timeFilter]);

  const gotoReportMachineDetail = () => {
    history.push("/report/sales/machines");
  };

  const gotoReportProductDetail = () => {
    history.push("/report/sales/products");
  };

  const getDataRevenueManagement = async () => {
    const data = {
      startDate: date[0].format("yyyy-MM-DD"),
      endDate: date[1].format("yyyy-MM-DD"),
    };

    console.log("REPORT 1: ", data);

    const result = await getRevenueManagement(data);
    if (result) {
      setOverView(result);
    }

    console.log("REPORT 1: ", result);
  };

  const onSearch = () => {
    setTimeFilter(date);
  };

  return (
    <>
      <div className="report-overview-ctn">
        <div>
          <div className="report-overview-header-ctn">
            <MultiDatePicker date={date} setDate={setDate} />
            <div className="search-report-btn" onClick={onSearch}>
              <span className="search-btn-text">Tìm kiếm</span>
            </div>
            <div className="add-report-btn">
              <PlusCircleGreen />
              <span className="btn-text">Thêm báo cáo</span>
            </div>
          </div>
        </div>
        <div className="report-overview-card-view-ctn">
          <ReportCardViewComponent
            title="TỔNG DOANH THU"
            value={convertToCurrency((overView?.revenue || 0) + "VND")}
            onClick={gotoReportMachineDetail}
          />
          <ReportCardViewComponent
            title="SẢN PHẨM BÁN ĐƯỢC"
            value={overView?.saleTotal || 0}
            onClick={gotoReportProductDetail}
          />
        </div>
        <div className="report-overview-row-ctn">
          <div style={{ flex: 4, marginRight: 20 }}>
            <ReportMultiTypeChart time={timeFilter} />
          </div>
          <div style={{ flex: 3 }}>
            <ReportStackBarChart time={timeFilter} />
          </div>
        </div>
        <div className="report-overview-row-ctn">
          <div style={{ flex: 1, marginRight: 20 }}>
            <TopProductComponent time={timeFilter} />
          </div>
          <div style={{ flex: 1 }}>
            <TopMachineComponent time={timeFilter} overView={overView} />
          </div>
        </div>
        <div className="report-overview-row-ctn">
          <div style={{ flex: 3, marginRight: 20 }}>
            <ReportPaymentComponent time={timeFilter} />
          </div>
          <div style={{ flex: 4 }}>{/* <ProductStatisticsComponent /> */}</div>
        </div>
      </div>
       
    </>
  );
};
