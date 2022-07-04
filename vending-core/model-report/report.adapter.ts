import ReportServices from "./report.services";

export const ReportAdapter = () => {
  // get list machine
  const getListMachine = async (data: any) => {
    const listData = await ReportServices.getInstance().getListMachine(data);
    return listData;
  };
  

  const getReportSalesOverall = async (data: any) => {
    const listData = await ReportServices.getInstance().getReportSalesOverall(data);
    return listData;
  };

  const getReportByProductDetails = async (data: any) => {
    const listData = await ReportServices.getInstance().getReportByProductDetails(data);
    return listData;
  }
 
  const getReportByMachineDetails = async (data: any) => {
    const listData = await ReportServices.getInstance().getReportByMachineDetails(data);
    return listData;
  }

  const getReportByPaymentDetails = async (data: any) => {
      const listData = await ReportServices.getInstance().getReportByPaymentDetails(data);
      return listData;
  }

  // get report
  const getReport = async () => {
    const report = await ReportServices.getInstance().getAllReport();
    return report;
  };

  // get revenue Management
  const getRevenueManagement = async (data: any) => {
    const result = await ReportServices.getInstance().getRevenueManagement(
      data
    );
    return result;
  };

  // get report over view by machine
  const getReportOverViewByMachine = async (data: any) => {
    const result =
      await ReportServices.getInstance().getReportOverViewByMachine(data);
    return result;
  };

  // get report over view by province
  const getReportOverViewByProvince = async (data: any) => {
    const result =
      await ReportServices.getInstance().getReportOverViewByProvince(data);
    return result;
  };

  // get report over view by top product
  const getReportOverViewByProductCode = async (data: any) => {
    const result =
      await ReportServices.getInstance().getReportOverViewByProductCode(data);
    return result;
  };

  // get report over view by top machine
  const getReportOverViewByTopMachine = async (data: any) => {
    const result =
      await ReportServices.getInstance().getReportOverViewByTopMachine(data);
    return result;
  };

  // get report over view by payment type
  const getReportOverViewByPaymentType = async (data: any) => {
    const result =
      await ReportServices.getInstance().getReportOverViewByPaymentType(data);
    return result;
  };

  return {
    getListMachine,
    getReportSalesOverall,
    getReportByProductDetails,
    getReportByMachineDetails,
    getReportByPaymentDetails,
    getReport,
    getRevenueManagement,
    getReportOverViewByMachine,
    getReportOverViewByProvince,
    getReportOverViewByProductCode,
    getReportOverViewByTopMachine,
    getReportOverViewByPaymentType
  };
};
