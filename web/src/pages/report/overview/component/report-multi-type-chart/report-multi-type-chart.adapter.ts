import { ReportMultiTypeChartProps } from "./report-multi-type-chart.props";
import {ReportAdapter} from 'vending-core/model-report/report.adapter'
import { useEffect, useState } from 'react';

export const ReportMultiTypeChartAdapter = (props: ReportMultiTypeChartProps) => {

    const {time} = props
    const {getReportOverViewByMachine} = ReportAdapter()
    const [reportData, setReportData] = useState<any[]>([])
    const [labels, setLabels] = useState<string[]>([])


    useEffect(() => {
     getReportOverViewByMachineData()
    },[time])

    useEffect(() => {

      const newLabel : string[] = [];
      reportData.forEach((e, i) => {
        newLabel.push(e.key)
      })
      console.log("REPORT 2 Label " , newLabel);
      
      setLabels(newLabel)


    },[reportData])

    const getReportOverViewByMachineData = async () => {

        const data = {
            startDate: time[0]?.format("yyyy-MM-DD"),
            endDate: time[1]?.format("yyyy-MM-DD"),
          }
         
          console.log("REPORT 2: ", data);
          const result = await getReportOverViewByMachine(data);
          console.log("REPORT 1: ", result);
          if(result){
            setReportData(result);
          }

    }



    return {
        labels, reportData
    }
}