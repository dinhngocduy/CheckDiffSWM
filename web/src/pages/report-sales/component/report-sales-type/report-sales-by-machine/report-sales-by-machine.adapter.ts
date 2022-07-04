import { useEffect, useState } from "react";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";

import { ReportAdapter } from "vending-core/model-report/report.adapter";
import { AvailableProvince, SearchingArea } from "libraries/types/searchingarea";
import { ReportSalesByMachineByProvince } from "libraries/types/report-sales-by-machine";

export const ReportSalesByMachineAdapter = () => {

    const [ searchingAreas, setSearchingAreas ] = useState<SearchingArea[]>([]);

    const { getListMachine, getAvailableProvinces } = MachineAdapter();

    const { getReportByMachineDetails } = ReportAdapter();

    const [ availableProvinces, setAvailableProvinces ] = useState<AvailableProvince[]>([]);

    const [reportSalesByMachineByProvinces, setReportSalesByMachineByProvinces] = useState<ReportSalesByMachineByProvince[]>([]);

    const [ machineIds, setMachineIds ] = useState<any>([]);

    const [machineData, setMachineData] = useState<any>([]);

    const [fromDate, setFromDate] = useState<any>([]);

    const [toDate, setToDate] = useState<any>([]);

    useEffect(() => {
        getListMachineData();
        getListAvailableProvinces();
    }, [])

    const getListAvailableProvinces = () => {
        getAvailableProvinces().then((res:any) => {
            setAvailableProvinces(res);
        })
    }

    const getListReportSalesByMachineByProvinces = (input: any) => {
        const data = {
            searchingAreas: searchingAreas,
            machineIds: machineIds,
            startDate: fromDate,
            endDate: toDate
        }

        getReportByMachineDetails(data).then((res: any) => {
            setReportSalesByMachineByProvinces(res);
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

    return {
        availableProvinces,
        searchingAreas, setSearchingAreas,
        machineIds, setMachineIds, machineData,
        fromDate, setFromDate,
        toDate, setToDate,
        reportSalesByMachineByProvinces, getListReportSalesByMachineByProvinces,
    }
}

