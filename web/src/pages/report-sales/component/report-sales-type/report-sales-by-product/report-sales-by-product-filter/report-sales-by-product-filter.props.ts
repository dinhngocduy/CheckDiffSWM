import { IProduct } from "libraries/types/product";

export interface ReportSalesByProductFilterProps {
    province: any;
    setProvince?: any;
    provinceData?: any;
    district?: string;
    setDistrict?: any;
    districtData?: any;
    ward?: string;
    setWard?: string;
    wardData?: any;
    productIds?: IProduct[];
    setProductIds?: any;
    productData?: any;
}
