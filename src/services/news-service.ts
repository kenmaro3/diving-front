import api from "../http";
import {INews} from "../types/news-type";
import {AxiosResponse} from "axios";

export default class NewsService{
    static async createNews(picture: any, title?: string, content?: string){
            const formData = new FormData()
            formData.append('title', title ? title : "")
            formData.append('content', content ? content : "")
            formData.append("picture", picture)

        return api.post<INews>('/news/create', formData)
    }

    static async getAll(): Promise<AxiosResponse<INews[]>>{
        return api.get<INews[]>('/news')
    }

    static async getLatests(num: number): Promise<AxiosResponse<INews[]>>{
        return api.get<INews[]>(`/news/latest/${num}`)
    }

    static async getById(news_id: number): Promise<AxiosResponse<INews>>{
        return api.get<INews>(`/news/${news_id}`)
    }

    static async deleteById(news_id: number): Promise<void>{
        api.delete<INews>(`/news/spot/${news_id}`)
    }

}