import { useEffect, useState } from "react";
import { ReportAdapter } from "vending-core/model-report/report.adapter";
import { TopProductProps } from "./top-product.props";

export const TopProductAdapter = (props : TopProductProps) => {
    const {time} = props
    const {getReportOverViewByProductCode } = ReportAdapter()
    const [reportData , setReportData ] = useState<any[]>([])
    const [option, setOption] = useState<number>(0)


    useEffect(() =>{
        getReportOverViewTopProduct()
    },[time])

    

    const getReportOverViewTopProduct = async () => {
        const data = {
            startDate: time[0]?.format("yyyy-MM-DD"),
            endDate: time[1]?.format("yyyy-MM-DD"),
          }
         
          console.log("REPORT 4: ", data);
          const result = await getReportOverViewByProductCode(data);
          console.log("REPORT 4: ", result);
          if(result){
            setReportData(result)
          }
         
    }

    return {
        reportData,
        option,
        setOption
    }
    
}