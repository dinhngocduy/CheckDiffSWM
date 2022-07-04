import { useState, useEffect } from "react";
import { ReportAdapter } from "vending-core/model-report/report.adapter";
import { ReportPaymentProps } from "./report-payment.props";

export const ReportPaymentAdapter = (props: ReportPaymentProps) => {
  const { time } = props;
  const { getReportOverViewByPaymentType } = ReportAdapter();
  const [reportData, setReportData] = useState<any[]>([]);
  const [dataOption, setDataOption] = useState<number>(0);

  useEffect(() => {
    getReportOverViewPaymentType();
  }, [time]);

  const getReportOverViewPaymentType = async () => {
    const data = {
      startDate: time[0]?.format("yyyy-MM-DD"),
      endDate: time[1]?.format("yyyy-MM-DD"),
    };

    console.log("REPORT 7: ", data);
    const result = await getReportOverViewByPaymentType(data);
    console.log("REPORT 7: ", result);
    if (result) {
      result.sort((a: any, b: any) => {
        if (a.paymentType < b.paymentType) {
          return -1;
        }
        if (a.paymentType > b.paymentType) {
          return 1;
        }
        return 0;
      });
      setReportData(result);
    }
  };

  const onChangeOption = () => {
    if (dataOption === 0) {
      setDataOption(1);
    } else {
      setDataOption(0);
    }
  };

  return {
    reportData,
    onChangeOption,
    dataOption,
  };
};
