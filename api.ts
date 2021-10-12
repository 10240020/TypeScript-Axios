import Axios from "./axios";
export default class Api {
     /**
     * getApi
     */
    // New Get
    public async getApi() {
        await new Promise(async () => {
            await Axios.get(Axios).then(async (Response: any) => {
                if(Response.code == 200){
                    return Response.data;
                }
            })
        })
    }

    // New Post
    /**
     * PostApi
     */
    public async PostApi(params){
        await new Promise(async ()=>{
            await Axios.post(Axios,JSON.stringify({...params})).then(async (Response:any)=>{
                if(Response.code == 200){
                    try {
                        return Response.data;
                    } catch (error) {
                        new Error(error)
                    }
                }else if(Response.code == 0){
                    Promise.resolve(new Error('Error UpData'))
                }
            })
        })
    }   
}
