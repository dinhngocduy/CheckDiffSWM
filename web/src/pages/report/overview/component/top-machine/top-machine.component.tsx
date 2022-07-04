import {
  BarChartIcon,
  MachineOffIcon,
  MachineOnIcon,
} from "libraries/icons/icon";
import convertToCurrency from "libraries/utils/convert-to-currency";
import { TopMachineAdapter } from "./top-machine.adapter";
import { TopMachineProps } from "./top-machine.props";
import "./top-machine.scss";
export const TopMachineComponent = (props: TopMachineProps) => {
  const { reportData } = TopMachineAdapter(props);
  const { overView } = props;

  const item = (element: any) => {
    return (
      <>
        <div className="item-machine-ctn" key={element?.key}>
          <div className="item-machine-icon-ctn">
            {element?.machine?.active ? <MachineOnIcon /> : <MachineOffIcon />}
          </div>
          <div className="item-machine-cell" style={{ flex: 2 }}>
            <span className="item-machine-label" style={{ fontWeight: 700 }}>
              {element?.machine?.referenceName}
            </span>
            <span className="item-machine-value">
              {element?.machine?.province}
            </span>
          </div>
          <div className="item-machine-cell" style={{ flex: 1.5 }}>
            <span className="item-machine-label">SL Bán được</span>
            <span className="item-machine-value">
              {element?.total}
            </span>
          </div>
          <div className="item-machine-cell" style={{ flex: 1.5 }}>
            <span className="item-machine-label">Hàng trong máy</span>
            <span className="item-machine-value">
              {element?.machine?.remain}
            </span>
          </div>
          <div className="item-machine-cell" style={{ flex: 2 }}>
            <span className="item-machine-label">Tổng doanh thu</span>
            <span className="item-machine-value">
              {convertToCurrency((element?.amount || 0) + "") + "VND"}
            </span>
          </div>
          <div
            style={{
              flex: 1,
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginTop: 5, fontSize: 14 }}>
              {" "}
              {((element?.amount / overView?.revenue) * 100).toFixed(1)} %
            </span>
            <BarChartIcon />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="top-machine-ctn">
        <div className="top-machine-header">
          <span className="container-title">
            Top máy bán hàng bán chạy nhất
          </span>
        </div>
        <div className="top-machine-body">
          {reportData.map((element, index) => item(element))}
        </div>
      </div>
    </>
  );
};
