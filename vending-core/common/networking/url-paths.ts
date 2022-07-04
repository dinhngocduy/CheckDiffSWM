export const URL_PATHS = {
  // Machine
  MACHINE_MODEL: "api/machine/machine_model",
  MACHINE: "api/machine/",
  MACHINE_SEND_HEARTHBEAT: "api/machine/sendHearthbeat",
  ASSIGNMENT_MACHINE: "api/machine_assignment",
  COUNT_MACHINE: "api/machine/status",

  // statistical
  STATISTICAL_PRODUCT: "api/order/dashboard/totalOrder",
  STATISTIAL_PAYMENT: "api/order/dashboard/totalAmount",

  // PRODUCT
  PRODUCT: "api/machine/product",

  // BANNER 
  BANNER: "api/machine/banner",
  GET_BANNER_BY_MACHINE_ID: '/api/machine/banner/findByMachineId',

  // ORDER
  ORDER: "management/api/order",
  TEMPORARY_ORDER: "management/api/order/getTemporary",

  // TASK
  TASK: "management/api/task",
  TASK_DETAIL: "management/api/task/view_detail",

  // MACHINE PRODUCT MAP
  PRODUCT_MAP: "api/machine/machine_product_map",

  // REPORT
  REPORT: "api/report/report",
  REPORT_SALES_OVERALL: "api/order-ephemeral/report/sales/overall",
  REPORT_SALES_PRODUCT_DETAILS: "api/order-ephemeral/report/sales/product",
  REPORT_SALES_MACHINE_DETAILS: "api/order-ephemeral/report/sales/machine",
  REPORT_SALES_PAYMENT_DETAILS: "api/order-ephemeral/report/sales/payment",

  OVERALL: "api/report/report/overall",
  REVENUE_MANAGEMENT: "api/order-ephemeral/dashboard/revenueManagement",
  REPORT_OVER_VIEW_BY_MACHINE:"api/order-ephemeral/dashboard/revenueGroupMachine",
  REPORT_OVER_VIEW_BY_PROVINCE:"api/order-ephemeral/dashboard/revenueGroupProvince",
  REPORT_OVER_VIEW_BY_PRODUCT_CODE:"api/order-ephemeral/dashboard/revenueTopProduct",
  REPORT_OVER_VIEW_BY_TOP_MACHINE:"api/order-ephemeral/dashboard/revenueTopMachine",
  REPORT_OVER_VIEW_BY_PAYMENT:"api/order-ephemeral/dashboard/ringPaymentType",

  // UPLOAD FILE
  UPLOAD_FILE: "files/image",
  GET_FILE_LOG: "files/log",

  // SENSOR 
  SENSOR: 'api/machine/sensor',

  // NOTIFICATION
  NOTIFICATION: 'api/notification/notification',

  // OTHER
  AVAILABLE_PROVINCES: "api/machine/availableProvince",
  READ_NOTIFICATION: 'api/notification/notification/read',
  COUNT_NOTIFICATION: 'api/notification/notification/overall',
  TEMPERATURE_OVERHEAT: 'api/sensor/issue/sovle/temperature_overheat'
};
