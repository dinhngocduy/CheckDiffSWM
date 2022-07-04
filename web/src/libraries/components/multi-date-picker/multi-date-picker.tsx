import { CalendarIcon, PickerSeparatorIcon } from "libraries/icons/icon";
import { useEffect, useState } from "react";
import { MultiDatePickerProps } from "./multi-date-picker.props";
import DatePicker from "antd/lib/date-picker";
import "antd/dist/antd.css";
import "./multi-date-picker.scss";
import moment from "moment";
const { RangePicker } = DatePicker;

export const MultiDatePicker = (props: MultiDatePickerProps) => {
  const { date, setDate } = props;

  const onChangeDate = (value: any) => {
    setDate(value);
  };

  return (
    <RangePicker
      format="DD/MM/yyyy"
      value={date}
      onChange={onChangeDate}
      separator={<PickerSeparatorIcon />}
      disabledDate={(current: any) => {
        return current && current.valueOf() > Date.now();
      }}
    />
  );
};
