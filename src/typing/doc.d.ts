export interface IDoc{
    id:string
    title:string
    content:string
    writerId:string
    lastEditTime: Date
    isDelete:boolean
}

export interface ITable{
    code: number
    msg: string
    rows: IDoc[]
    total: number
}
export interface IRes {
    msg: string
    code: number
    data: ITable
}

export interface IUpdate{
    id:string
    content:string
}

export interface IResDoc{
    msg: string
    code: number
    data: IDoc
}
