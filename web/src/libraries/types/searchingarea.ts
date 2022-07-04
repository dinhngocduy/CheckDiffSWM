import { IMachine, IMachineModel } from "./machine";
import { IProduct } from "./product";

export interface SearchingArea {
    province: string;
    district: string;
}

export interface AvailableProvince {
    name: string;
    availableDistricts: string[];
}

export interface ListReportByMachineDetails {
    province: string;
    data: ReportByMachineDetails[];
}

export interface ReportByMachineDetails {
    machineId: string;
    machine: Machine;
    totalQuantity: number;
    totalTransaction: number;
    totalCashAmount: number;
    totalMomoAmount: number;
    totalATMAmount: number;
    reportByProductDetails: ReportByProductDetails[];
}

export interface ReportByProductDetails {
    productId: string;
    product: IProduct;
    totalQuantity: number;
    totalTransaction: number;
    totalCashAmount: number;
    totalMomoAmount: number;
    totalATMAmount: number;
}


export interface Machine {
    id: string;
    modelId: string;
    referenceName: string;
    serialNumber: string;
    description: string;
    amountInMachine: number;
    contingencyRowIndex: number;
    type: number;
    active: boolean;
    numberOfCash: number;
    province: string;
    district: string;
    village: string;
    ward: string;
    address: string;
    modelInfo: IMachineModel;
    identifyCode: string
}

export interface ReportByPaymentDetailsByType {
    paymentType: number;
    reportByPaymentDetailsByProvinces: ReportByPaymentDetailsByProvince[]; 
}

export interface ReportByPaymentDetailsByProvince {
    province: string;
    totalQuantity: number;
    totalTransaction: number;
    reportByPaymentDetailsByDistricts: ReportByPaymentDetailsByDistrict[];
}

export interface ReportByPaymentDetailsByDistrict {
    district: string;
    totalQuantity: number;
    totalTransaction: number;
    reportByPaymentDetails: ReportByPaymentDetails[];
}

export interface ReportByPaymentDetails {
    machine: Machine;
    totalQuantity: number;
    totalTransaction: number;
}
