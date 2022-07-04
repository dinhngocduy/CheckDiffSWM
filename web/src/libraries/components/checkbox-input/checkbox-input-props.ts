import { IOption } from "libraries/types/type";

export interface CheckboxInputProps {
    values: any;
    setValues: any;
    placeholder?: string;
    options: IOption[];
    isDisabled?: boolean;
}
