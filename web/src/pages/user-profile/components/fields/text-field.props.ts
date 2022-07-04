import React, { MutableRefObject } from "react"

export interface TextFieldProps{
    label?: string
    password?: boolean
    inputRef?: MutableRefObject<null>
}