import { useEffect, useState } from "react";
import { ReportAdapter } from "vending-core/model-report/report.adapter";
import { TopMachineProps } from "./top-machine.props";

export const TopMachineAdapter = (props: TopMachineProps) => {
  const { time } = props;
  const { getReportOverViewByTopMachine } = ReportAdapter();
  const [reportData, setReportData] = useState<any[]>([]);

  useEffect(() => {
    getReportOverViewTopMachineData();
  }, [time]);

  const getReportOverViewTopMachineData = async () => {
    const data = {
      startDate: time[0]?.format("yyyy-MM-DD"),
      endDate: time[1]?.format("yyyy-MM-DD"),
    };

    console.log("REPORT 5: ", data);
    const result = await getReportOverViewByTopMachine(data);
    console.log("REPORT 5: ", result);
    if (result) {
      setReportData(result);
    }
  };

  return {
    reportData,
  };
};
