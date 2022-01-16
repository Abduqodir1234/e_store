import ErrorResponse from "../Responses/ErrorResponse";
import {Response} from "express";

class ModelAdditionalMethods{
    model:any
    res:Response
    constructor(model:any,res:Response) {
        this.model = model
        this.res = res
    }

    async create(data:object){
        try{
            await this.model.create(data)
        }
        catch (e:any) {
            ErrorResponse(this.res,e.message)
        }
    }


    async find(query:object){
        let data = await this.model.find(query)
        return data
    }
    async findWithSelectAndPopulation(query:object,selected_fields:string,populated_fields:string){
        let data = await this.model.find(query).select(selected_fields).populate(populated_fields)
        return data
    }
    async findWithPopulation(query:object,populated_field:string){
        let data = await this.model.find(query).populate(populated_field)
        console.log(data)
        return data
    }
    async findWithPaginationAndSelectPopulation(query:object,page:number,limit:number,selected:string,populated:string){
        try{
            let data:any = await this.model.find(query).skip((page-1)*limit).limit(page*limit).select(selected).populate(populated)
            return data
        }
        catch (e:any){
            ErrorResponse(this.res,e.message)
        }
    }

    //Find one without returning error respone if there is no product
    async findOne2(query:object){
        let data:any = await this.model.findOne(query)
        return data
    }

    async findOneAndUpdate(data_for_filter:object,data_for_update:object){
        try{
            return await this.model.findOneAndUpdate(data_for_filter,data_for_update)
        }
        catch (e:any) {
                ErrorResponse(this.res,e.message)
        }
    }
    async findOne(query:object){
        try{
            let data:any = await this.model.findOne(query)
            if(!data){
                ErrorResponse(this.res,`No product according to search fields:${Object.keys(query)}`)
            }
            else{
                return data
            }
        }
        catch (e:any) {
            ErrorResponse(this.res,e.message)
        }
    }
    async findOneWithPopulationAndSelect(query:object,populated:string,selected:string){
        try{
            let data:any = await this.model.findOne(query).populate(populated).select(selected)
            if(!data){
                ErrorResponse(this.res,`No product according to search fields:${Object.keys(query)}`)
            }
            else{
                return data
            }
        }
        catch (e:any) {
            ErrorResponse(this.res,e.message)
        }
    }
    async get_or_create(query_for_search:object,query_for_create:object){
        let data = await this.model.findOne(query_for_search)
        if(!data){
            return await this.model.create(query_for_create)
        }
        else{
            return data
        }
    }
    async update_or_create(data_for_get:object,data_for_update:object,data_for_create:object){
        try{
            let updated = await this.model.findOneAndUpdate(data_for_get,data_for_update)
            if(!updated){
                return  await this.model.create(data_for_create)
            }
            else{
                return updated
            }
        }
        catch (e:any) {
            ErrorResponse(this.res,e.message)
        }
    }
}
export default ModelAdditionalMethods