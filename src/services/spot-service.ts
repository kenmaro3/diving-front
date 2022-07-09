import api from "../http";
import {ISpot} from "../types/spot-type";
import {AxiosResponse} from "axios";
import {ILike} from "../types/like-type";
import { NumericKeys } from "react-hook-form/dist/types/path/common";

export default class SpotService{
    static async createSpot(picture1?: any, picture2?: any, picture3?: any, picture4?: any, picture5?: any, picture6?: any, name?: string, zip?: string, prefecture?: string, address1?: string,
        address2?: string, address3?: string, lat?: string, lng?: string, access?: string, parking?: string, phone?: string, hp?: string, 
        close?: string, open?: string, min_price?: string, rental_price?: string,
        other?: string
        ){
            const formData = new FormData()
            formData.append('picture1', picture1)
            formData.append('picture2', picture2)
            formData.append('picture3', picture3)
            formData.append('picture4', picture4)
            formData.append('picture5', picture5)
            formData.append('picture6', picture6)
            formData.append('name', name ? name : "")
            formData.append('zip', zip ? zip : "")
            formData.append('prefecture', prefecture ? prefecture : "")
            formData.append('address1', address1 ? address1 : "")
            formData.append('address2', address2 ? address2 : "")
            formData.append('address3', address3 ? address3 : "")
            formData.append('lat', lat ? lat.toString(): "")
            formData.append('lng', lng ? lng.toString(): "")
            formData.append('access', access ? access : "")
            formData.append('parking', parking ? parking : "")
            formData.append('phone', phone ? phone : "")
            formData.append('hp', hp ? hp : "")
            formData.append('close', close ? close : "")
            formData.append('open', open ? open : "")
            formData.append('min_price', min_price ? min_price : "")

        return api.post<ISpot>('/spots/create', formData)
    }

    static async updateSpot(spot_id: string, picture1?: any, picture2?: any, picture3?: any, picture4?: any, picture5?: any, picture6?: any, name?: string, zip?: string, prefecture?: string, address1?: string,
        address2?: string, address3?: string, lat?: string, lng?: string, access?: string, parking?: string, phone?: string, hp?: string, 
        close?: string, open?: string, min_price?: string, rental_price?: string,
        other?: string, is_image1_updated?: string, is_image2_updated?: string,is_image3_updated?: string,is_image4_updated?: string,is_image5_updated?: string,is_image6_updated?: string,
        ){
            const formData = new FormData()
            formData.append('picture1', picture1)
            formData.append('picture2', picture2)
            formData.append('picture3', picture3)
            formData.append('picture4', picture4)
            formData.append('picture5', picture5)
            formData.append('picture6', picture6)
            formData.append('spot_id', spot_id ? spot_id : "")
            formData.append('name', name ? name : "")
            formData.append('zip', zip ? zip : "")
            formData.append('prefecture', prefecture ? prefecture : "")
            formData.append('address1', address1 ? address1 : "")
            formData.append('address2', address2 ? address2 : "")
            formData.append('address3', address3 ? address3 : "")
            formData.append('lat', lat ? lat: "")
            formData.append('lng', lng ? lng: "")
            formData.append('access', access ? access : "")
            formData.append('parking', parking ? parking : "")
            formData.append('phone', phone ? phone : "")
            formData.append('hp', hp ? hp : "")
            formData.append('close', close ? close : "")
            formData.append('open', open ? open : "")
            formData.append('min_price', min_price ? min_price : "")
            formData.append('is_image1_updated', is_image1_updated ? is_image1_updated : "false")
            formData.append('is_image2_updated', is_image2_updated ? is_image2_updated : "false")
            formData.append('is_image3_updated', is_image3_updated ? is_image3_updated : "false")
            formData.append('is_image4_updated', is_image4_updated ? is_image4_updated : "false")
            formData.append('is_image5_updated', is_image5_updated ? is_image5_updated : "false")
            formData.append('is_image6_updated', is_image6_updated ? is_image6_updated : "false")
            console.log("here is formdata")
            console.log(lat)
            console.log(lng)


        return api.post<ISpot>('/spots/update', formData)
    }


    static async getAll(): Promise<AxiosResponse<ISpot[]>>{
        return api.get<ISpot[]>('/spots')
    }

    static async getLatests(num: number): Promise<AxiosResponse<ISpot[]>>{
        return api.get<ISpot[]>(`/spots/latest/${num}`)
    }

    static async getById(spot_id: number): Promise<AxiosResponse<ISpot>>{
        return api.get<ISpot>(`/spots/spot/${spot_id}`)
    }
    

    static async getSpotByKeyword(keyword: string): Promise<AxiosResponse<ISpot[]>>{
        return api.get<ISpot[]>(`/spots/keyword/${keyword}`)
    }

    static async deleteById(spot_id: number): Promise<void>{
        api.delete<ISpot>(`/spots/spot/${spot_id}`)
    }

    static async likeSpot(user_id: number, spot_id: number): Promise<AxiosResponse<ILike>>{
        return api.post<ILike>('/likes', {user_id, spot_id})
    }
}