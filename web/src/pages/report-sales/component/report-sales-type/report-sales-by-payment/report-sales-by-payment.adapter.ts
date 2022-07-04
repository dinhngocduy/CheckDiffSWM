import { PAYMENT_TYPE } from "libraries/enums/payment-type";
import { ReportSalesByPaymentByProvince, ReportSalesByPaymentByType } from "libraries/types/report-sales-by-payment";
import { AvailableProvince, SearchingArea } from "libraries/types/searchingarea";
import { useEffect, useState } from "react";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import { ReportAdapter } from "vending-core/model-report/report.adapter";

export const ReportSalesByPaymentAdapter = () => {

    const { getListMachine, getAvailableProvinces } = MachineAdapter();

    const [ availableProvinces, setAvailableProvinces ] = useState<AvailableProvince[]>([]);

    const [ searchingAreas, setSearchingAreas ] = useState<SearchingArea[]>([]);

    const [ selectingPaymentTypes, setSelectingPaymentTypes] = useState<string[]>([]);

    const { getReportByPaymentDetails } = ReportAdapter();

    const [ reportSalesByPaymentByTypes, setReportSalesByPaymentByTypes] = useState<ReportSalesByPaymentByType[]>([]);
    
    const [machineIds, setMachineIds] = useState<any>([]);

    const [machineData, setMachineData] = useState<any>([]);

    const [fromDate, setFromDate] = useState<any>([]);

    const [toDate, setToDate] = useState<any>([]);

    useEffect(() => {
        getListMachineData();
        getListAvailableProvinces();
    },[])
    
    const getListAvailableProvinces = () => {
        getAvailableProvinces().then((res:any) => {
            setAvailableProvinces(res);
        })
    }

    const getListMachineData = () => {
        const data = {
            page: 0,
            size: 100
        };

        getListMachine(data).then((res: any) => {
            if(res?.data) {
                setMachineData(res.data);
            }
        })
    }

    const getListReportSalesByPaymentByTypes = () => {
        getReportByPaymentDetails({
            machineIds: machineIds,
            paymentTypes: selectingPaymentTypes,
            searchingAreas: searchingAreas,
            startDate: fromDate,
            endDate: toDate
        }).then((res: any) => {
            if(res) {
                setReportSalesByPaymentByTypes(res);
            }
        } )
    }

    return {
        availableProvinces,
        searchingAreas, setSearchingAreas,
        machineIds, setMachineIds, machineData,
        selectingPaymentTypes, setSelectingPaymentTypes,
        fromDate, setFromDate,
        toDate, setToDate,
        reportSalesByPaymentByTypes, getListReportSalesByPaymentByTypes
    }
}
