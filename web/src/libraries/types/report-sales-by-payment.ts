import { Machine } from "./searchingarea";

export interface ReportSalesByPaymentByType {
    paymentType: string;
    totalQuantity: number;
    totalTransaction: number;
    reportSalesByPaymentByProvinces: ReportSalesByPaymentByProvince[];
}

export interface ReportSalesByPaymentByProvince {
    province: string;
    totalQuantity: number;
    totalTransaction: number;
    reportSalesByPaymentByDistricts: ReportSalesByPaymentByDistrict[];
}

export interface ReportSalesByPaymentByDistrict {
    district: string
    totalQuantity: number;
    totalTransaction: number;
    reportSalesByPaymentDetails: ReportSalesByPaymentDetails[];
}

export interface ReportSalesByPaymentDetails {
    machineId: string;
    machine: Machine;
    totalQuantity: number;
    totalTransaction: number;
}
