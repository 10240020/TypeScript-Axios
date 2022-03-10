export default class {
    href: String;
    constructor(href:String) {
        this.href = href;
    }

    // FUNCTION
    GETQUERYURL = (params:String) => {
        var query = window.location.search.substring(1)
        var newWindow = query.split('&');
        for(let i = 0; i < newWindow.length; i++){
            console.log(newWindow)
            const pair = newWindow[i].split('=');
            if(pair[0] == params){
                return pair[1];
            }
        }
        return false;
    }
}