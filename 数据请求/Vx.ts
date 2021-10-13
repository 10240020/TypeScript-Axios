export default class state{
    public state: any;
    static headers: Record<string, string>;
    static RequsetMode: Record<string, string>;
    static state: any;
    public stateToken(){
        return localStorage.getItem("token");
    }
    /**
     * Local User Information
     */
    readonly params:{
        userName,
        userPassword
    }
    public Information(){
        return localStorage.getItem(JSON.stringify(this.params));
    }
    /**
     * Request Mode
     */
    public RequsetMode(){
        return state.headers = {
            'Content-type':'application/x-www-from-urlencoded'
        }
    }
}