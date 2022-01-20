import ErrorResponse from "../Responses/ErrorResponse";
import {Response} from "express";
import ErrorResponseBody from "../Responses/ErrorResponseBody";
import PositiveResponseBody from "../Responses/PositiveResponseBody";
import ResponseWithDataBody from "../Responses/ResponseWithDataBody";
import {StatusCodes} from "http-status-codes";
import ResponseReturner from "../Responses/Response";

class ModelAdditionalMethods{
    model:any
    res:Response
    constructor(model:any,res:Response) {
        this.model = model
        this.res = res
    }


    async exists_or_create(date_for_filter:object,date_for_create:object){
        try{
            if(await this.model.exists(date_for_filter)){
                return ResponseReturner(ErrorResponseBody(`data with this ${Object.keys(date_for_filter)} exists`),StatusCodes.BAD_REQUEST)
            }
            else{
                let data = await this.model.create(date_for_create)
                return ResponseReturner(ResponseWithDataBody(data))
            }
        }
        catch (e:any){
            return ResponseReturner(ErrorResponseBody(e.message),StatusCodes.BAD_REQUEST)
        }
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
    async findWithSelect(query:object,selected_fields:string){
        let data = await this.model.find(query).select(selected_fields)
        return ResponseReturner(ResponseWithDataBody(data))
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
                return ResponseReturner(ErrorResponseBody(`No product according to search fields:${Object.keys(query)}`))
            }
            else{
                return ResponseReturner(ResponseWithDataBody(data))
            }
        }
        catch (e:any) {
            return ResponseReturner(ErrorResponseBody(e.message))
        }
    }


    async findOneWithPopulationAndSelect(query:object,populated:string,selected:string){
        try{
            let data:any = await this.model.findOne(query).populate(populated).select(selected)
            if(!data){
                return ResponseReturner(ErrorResponseBody(`Nothing found according to search fields:${Object.keys(query)}`),StatusCodes.BAD_REQUEST)
            }
            else{
                return ResponseReturner(ResponseWithDataBody(data))
            }
        }
        catch (e:any) {
            return ResponseReturner(ErrorResponseBody(e.message),StatusCodes.BAD_REQUEST)
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
                return  ResponseReturner(ResponseWithDataBody(await this.model.create(data_for_create)))
            }
            else{
                return ResponseReturner(ResponseWithDataBody(updated))
            }
        }
        catch (e:any) {
            return ResponseReturner(ErrorResponseBody(e.message),StatusCodes.BAD_REQUEST)
        }
    }


    async deleteOne(data_for_filter:object) {
        try{
            let data = await this.model.findOneAndDelete(data_for_filter)
            if (!data)
                return ResponseReturner(ErrorResponseBody(
                    `no user with this ${Object.keys(data_for_filter)}`),
                    StatusCodes.BAD_REQUEST
                )
            else
                return ResponseReturner(PositiveResponseBody("Deleted"))
        }
        catch (e:any){
            return ResponseReturner(ErrorResponseBody(e.message),StatusCodes.BAD_REQUEST,)
        }
    }

}
export default ModelAdditionalMethods