export interface Iaction {
    tittle?: string
    description?: string
    type: 'toggle'
}

export interface Itypes {
    tittle?: string
    description?: string
    type: 'list' | 'input' | 'time' | 'notifications' | 'toggle' | Iaction[]
   
}

export interface IDropdown {
    
    colapse?: boolean
    tittle: string
    description: string
    types: Itypes[]
    check?: boolean
    tittleCheck?: string
  
}