import { IProduct } from "./product";
import { Machine } from "./searchingarea";

export interface ReportSalesByProductByProvince {
    province: string;
    totalQuantity: number;
    totalTransaction: number;
    totalCashAmount: number;
    totalMomoAmount: number;
    totalATMAmount: number;
    totalVietQRAmount: number;
    reportSalesByProductByDistricts: ReportSalesByProductByDistrict[];
}

export interface ReportSalesByProductByDistrict {
    district: string;
    totalQuantity: number;
    totalTransaction: number;
    totalCashAmount: number;
    totalMomoAmount: number;
    totalATMAmount: number;
    totalVietQRAmount: number;
    reportSalesByProductByMachines: ReportSalesByProductByMachine[];
}

export interface ReportSalesByProductByMachine {
    machineId: string;
    machine: Machine;
    totalQuantity: number;
    totalTransaction: number;
    totalCashAmount: number;
    totalMomoAmount: number;
    totalATMAmount: number;
    totalVietQRAmount: number;
    reportSalesByProductDetails: ReportSalesByProductDetails[];
}

export interface ReportSalesByProductDetails {
    productId: string;
    product: IProduct;
    totalQuantity: number;
    totalTransaction: number;
    totalCashAmount: number;
    totalMomoAmount: number;
    totalATMAmount: number;
    totalVietQRAmount: number;

}
