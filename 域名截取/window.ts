export default class {
    href: String;
    constructor(href:String) {
        this.href = href;
    }

    // FUNCTION
    GETQUERYURL = (params:String) => {
        const queryWindow = (window.location.search.substring(1)).split('&');
        for(let i = 0; i < queryWindow.length; i++) {
            const query = queryWindow[i].split('=')
            if(query[1] == params) {
                return query[1];
            }
        }
        return ;
    }
}