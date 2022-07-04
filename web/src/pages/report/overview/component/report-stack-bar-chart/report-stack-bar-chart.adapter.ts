import { useState, useEffect } from "react"
import { ReportAdapter } from "vending-core/model-report/report.adapter"
import { ReportStackBarChartProps } from "./report-stack-bar-chart.props"

export const ReportStackBarChartAdapter = (props: ReportStackBarChartProps) => {

    const {time} = props
    const {getReportOverViewByProvince} = ReportAdapter()
    const [reportData, setReportData] = useState<any[]>([])
    const [labels, setLabels] = useState<string[]>([])


    useEffect(() => {
     getReportOverViewByProvinceData()
    },[time])

    useEffect(() => {

      const newLabel : string[] = [];
      reportData.forEach((e, i) => {
        newLabel.push(e.key)
      })
      console.log("REPORT 3 Label " , newLabel);
      
      setLabels(newLabel)


    },[reportData])

    const getReportOverViewByProvinceData = async () => {

        const data = {
            startDate: time[0]?.format("yyyy-MM-DD"),
            endDate: time[1]?.format("yyyy-MM-DD"),
          }
         
          console.log("REPORT 3: ", data);
          const result = await getReportOverViewByProvince(data);
          console.log("REPORT 3: ", result);
          if(result){
            setReportData(result);
          }

    }



    return {
        labels, reportData
    }

}