import api from "../http";
import {IRating} from "../types/rating-type";
import {AxiosResponse} from "axios";
import {IUser} from "../types/user-type";
import {ILike} from "../types/like-type";

export default class RatingService{
    static async createRating(user_id: number, spot_id: number, water_info: string, animal_info: string, activity_info: string,
        water_rating: number, animal_rating: number, activity_rating: number, other_info: string
        ){
        return api.post<IRating>('/ratings/create', {user_id, spot_id, water_info, animal_info, activity_info,
            water_rating, animal_rating, activity_rating, other_info
        })
    }
    
    static async updateRating(picture: any, rating_id: string, title: string, text: string, user_id: number, description: string){
        const formData = new FormData()
        formData.append('picture', picture)
        formData.append('rating_id', rating_id)
        formData.append('title', title)
        formData.append('text', text)
        formData.append('description', description)
        formData.append('user_id', user_id.toString())
        return api.post<IRating>('/ratings/update', formData)
    }

    static async getAll(): Promise<AxiosResponse<IRating[]>>{
        return api.get<IRating[]>('/ratings')
    }

    static async getLatests(num: number): Promise<AxiosResponse<IRating[]>>{
        return api.get<IRating[]>(`/ratings/latest/${num}`)
    }

    static async getById(rating_id: number): Promise<AxiosResponse<IRating>>{
        return api.get<IRating>(`/ratings/rating/${rating_id}`)
    }

    static async getBySpotId(spot_id: number): Promise<AxiosResponse<IRating[]>>{
        return api.get<IRating[]>(`/ratings/spot/${spot_id}`)
    }
    
    static async deleteById(rating_id: number): Promise<void>{
        api.delete<IRating>(`/ratings/rating/${rating_id}`)
    }

    static async getTodayRatings(quantity: number): Promise<AxiosResponse<IRating[]>>{
        return api.get<IRating[]>(`/ratings/today?quantity=${quantity}`)
    }
    
    static async likeRating(user_id: number, rating_id: number): Promise<AxiosResponse<ILike>>{
        return api.post<ILike>('/likes', {user_id, rating_id})
    }

    static updateRatingsById(user: IUser, ratings: IRating[]): IRating[]{
        return ratings.map(rating => {
            if(rating.user.id === user.id){
                rating.user = user
                return rating
            }
            return rating
        })
    }

}