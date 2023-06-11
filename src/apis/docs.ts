import instance from "@/apis/base";
import {IDoc, IRes, IResDoc, ITable, IUpdate} from "@/typing/doc";


export const pageQuery = (id:string)=>{
    return instance.get<IRes,IRes>('/doc/pageList',{
        params:{id}
    })
}

//
export const updateDocs = (data : IUpdate)=>{
    return instance.post('/doc/updateDoc',data,{
        headers:{
            "Content-Type":"application/json"
        }
    })
}

// 获取指定的所有文档
export const getAllDocsByUserId = (id :string) =>{
    return instance.get<IRes,IRes>('/doc/getAll',{
        params:{id}
    })
}

// 获取指定的所有文档
export const getAllDocsById = (id :string) =>{
    return instance.get<ITable,ITable>('/doc/getOneDocByDocID',{
        params:{id}
    })
}

export const getOneDocByDocID = (id:string) =>{
    return instance.get<IResDoc,IResDoc>('/doc/getOneDocByDocID',{
        params:{id}
    })
}



