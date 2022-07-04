import { URL_PATHS } from "../common/networking/url-paths";
import { fetch, post, postForm, put } from "../common/networking/api-helper";

import axios from 'axios';

const ReportServices = (() => {
  let instance: any;

  function init() {
    return {
        getListMachine: (data: any) => {
            return fetch(URL_PATHS.REPORT, data, true);
        },

        getReportSalesOverall: (data: any) => {
            return post(URL_PATHS.REPORT_SALES_OVERALL, data, true);
        },

        getReportByProductDetails: (data: any) => {
            return post(URL_PATHS.REPORT_SALES_PRODUCT_DETAILS, data, true);
        },

        getReportByMachineDetails: (data: any) => {
            return post(URL_PATHS.REPORT_SALES_MACHINE_DETAILS, data, true);
        },

        getReportByPaymentDetails: (data: any) => {
            return post(URL_PATHS.REPORT_SALES_PAYMENT_DETAILS, data, true);
        },

        getAllReport: () => {
            return fetch(URL_PATHS.OVERALL, null, true);
        },

        getRevenueManagement: (data: any) => {
            return fetch(URL_PATHS.REVENUE_MANAGEMENT, data, true);
        },

        getReportOverViewByMachine: (data: any) => {
            return fetch(URL_PATHS.REPORT_OVER_VIEW_BY_MACHINE, data, true);
        },

        getReportOverViewByProvince: (data: any) => {
            return fetch(URL_PATHS.REPORT_OVER_VIEW_BY_PROVINCE, data, true);
        },

        getReportOverViewByProductCode: (data: any) => {
            return fetch(URL_PATHS.REPORT_OVER_VIEW_BY_PRODUCT_CODE, data, true);
        },

        getReportOverViewByTopMachine: (data: any) => {
            return fetch(URL_PATHS.REPORT_OVER_VIEW_BY_TOP_MACHINE, data, true);
        },

        getReportOverViewByPaymentType: (data: any) => {
            return fetch(URL_PATHS.REPORT_OVER_VIEW_BY_PAYMENT, data, true);
        },
    };
  }

  return {
      getInstance: () => {
          if (!instance) instance = init();
          return instance;
      },
  };
})();

export default ReportServices;
