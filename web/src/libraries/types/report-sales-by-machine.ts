import { Machine } from "./searchingarea";

export interface ReportSalesByMachineByProvince {
    province: string;
    totalQuantity: number;
    totalTransaction: number;
    totalCashAmount: number;
    totalMomoAmount: number;
    totalATMAmount: number;
    totalVietQRAmount: number;
    reportSalesByMachineByDistricts: ReportSalesByMachineByDistrict[];
}

export interface ReportSalesByMachineByDistrict {
    district: string;
    totalQuantity: number;
    totalTransaction: number;
    totalCashAmount: number;
    totalMomoAmount: number;
    totalATMAmount: number;
    totalVietQRAmount: number;
    reportSalesByMachineDetails: ReportSalesByMachineDetails[];
}

export interface ReportSalesByMachineDetails {
    machineId: string;
    machine: Machine;
    totalQuantity: number;
    totalTransaction: number;
    totalCashAmount: number;
    totalMomoAmount: number;
    totalATMAmount: number;
    totalVietQRAmount: number;
}
