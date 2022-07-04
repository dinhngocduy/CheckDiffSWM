import convertToCurrency from "libraries/utils/convert-to-currency";
import { TopProductAdapter } from "./top-product.adapter";
import { TopProductProps } from "./top-product.props";
import "./top-product.scss";

export const TopProductComponent = (props: TopProductProps) => {
  const { reportData, option, setOption } = TopProductAdapter(props);

  const item = (element: any, index: number) => {
    return (
      <div className="item-product-ctn" key={element.key}>
        <div className="item-product-cell" style={{ flex: 0.2 }}>
          <span className="item-product-label">{index + 1}</span>
        </div>
        <img
          alt=""
          src={
            "https://app.smartvendingmachines.net/files/image/" +
            element?.product?.imageDetail
          }
          className="item-product-image"
        />
        <span className="item-product-name" style={{ flex: 2 }}>
          {element?.product?.name}
        </span>
        <div className="item-product-cell" style={{ flex: 1 }}>
          <span className="item-product-label">Giá bán</span>
          <span className="item-product-value">
            {convertToCurrency((element?.product?.standardPrice || 0) + "") +
              "VND"}
          </span>
        </div>
        <div className="item-product-cell" style={{ flex: 2 }}>
          <span className="item-product-label">Số lượng bán được</span>
          <span className="item-product-value">{element?.total}</span>
        </div>
        <div className="item-product-cell" style={{ flex: 2 }}>
          <span className="item-product-label">Tổng doanh thu</span>
          <span className="item-product-value">
            {convertToCurrency(element?.amount + "" + "VND")}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="top-product-ctn">
        <div className="top-product-header">
          <span className="container-title">Thống kê mặt hàng</span>
        </div>
        <div className="option-product-ctn">
          <div
            className={`option-product-item ${option === 0 ? "active" : ""}`}
            onClick={() => {
              setOption(0);
            }}
          >
            <span>Top bán chạy</span>
          </div>
          <div
            className={`option-product-item ${option === 1 ? "active" : ""}`}
            onClick={() => {
              setOption(1);
            }}
          >
            <span>Top bán kém</span>
          </div>
        </div>
        <div className="top-product-body">
          {reportData.map((element, index) => item(element, index))}
        </div>
      </div>
    </>
  );
};
