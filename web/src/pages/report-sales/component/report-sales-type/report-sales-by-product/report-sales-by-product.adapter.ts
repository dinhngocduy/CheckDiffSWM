import { IHash } from 'libraries/types/hash';
import { AvailableProvince, ListReportByMachineDetails, ReportByMachineDetails, SearchingArea } from 'libraries/types/searchingarea';
import { IOption } from 'libraries/types/type';
import { ConvertLocationJsonToOptionData } from 'libraries/utils/convert-loction-json-to-option-data';
import { useEffect, useState } from 'react';
import { MachineAdapter } from 'vending-core/model-machine/machine.adapter';
import { ProductAdapter } from 'vending-core/model-product/product.adapter';
import { ReportAdapter } from 'vending-core/model-report/report.adapter';
import provinceDataJson from '../../../../../libraries/json/location-data/cities.json';
import districtDataJson from '../../../../../libraries/json/location-data/districts.json';
import wardDataJson from '../../../../../libraries/json/location-data/wards.json';

import {v4 as uuid} from 'uuid';
import { ReportSalesByProductByProvince } from 'libraries/types/report-sales-by-product';

export const ReportSalesByProductAdapter = () => {

    const [ searchingAreas, setSearchingAreas ] = useState<SearchingArea[]>([]);

    const [ restartString, setRestartString] = useState<string>(uuid());

    const { getListProduct } = ProductAdapter();

    const { getReportByProductDetails } = ReportAdapter();

    const { getListMachine, getAvailableProvinces } = MachineAdapter();

    const [ availableProvinces, setAvailableProvinces ] = useState<AvailableProvince[]>([]);

    const [ reportSalesByProductByProvinces, setReportSalesByProductByProvinces] = useState<ReportSalesByProductByProvince[]>([]);

    const [productIds, setProductIds] = useState<string[]>([]);

    const [machineIds, setMachineIds] = useState<string[]>([]);

    const [productData, setProductData] = useState<any>([]);

    const [machineData, setMachineData] = useState<any>([]);

    const [fromDate, setFromDate] = useState<any>([]);

    const [toDate, setToDate] = useState<any>([]);

    useEffect(() => {
        getListProductData();
        getListMachineData();
        getListAvailableProvinces();
    },[])

    const getListAvailableProvinces = () => {
        getAvailableProvinces().then((res:any) => {
            setAvailableProvinces(res);
        })
    }

    const getListProductData = () => {
        const data = {
            page: 0,
            size: 100
        };
        getListProduct(data).then((res:any) => {
            if(res?.data) {
                setProductData(res.data);
            }
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

    const getListReportSalesByProductByProvinces = (input: any) => {
        const data = {
            searchingAreas: searchingAreas,
            productIds: productIds,
            machineIds: machineIds,
            startDate: fromDate,
            endDate: toDate
        }
        getReportByProductDetails(data).then((res: any) => {
            setReportSalesByProductByProvinces(res);
        })
    }

    return {
        availableProvinces,
        searchingAreas, setSearchingAreas,
        productIds, setProductIds, productData,
        machineIds, setMachineIds, machineData,
        restartString,
        fromDate, setFromDate,
        toDate, setToDate,
        reportSalesByProductByProvinces, getListReportSalesByProductByProvinces
    }

}
