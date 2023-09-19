import React, { MouseEventHandler } from "react"

export type  ExpanyContextProvider = {
        children: React.ReactNode
}

export interface IColapse {
    colapse: boolean
    setColapse:  React.Dispatch<React.SetStateAction<boolean>>
    handleColapseOpen: MouseEventHandler<HTMLDivElement> | undefined
    handleColapseClose: MouseEventHandler<HTMLDivElement> | undefined
}

