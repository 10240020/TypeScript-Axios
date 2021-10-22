import py from 'pinyin'
export default class SearchComponent{
    /**
     * Vague Search
     */
    message: [] | any | String = [];
    handleSearch = (querySting:String) => {
        const queryStings = querySting.split('');
        this.message = [];
        const string = '(.*?)';
        const messgeString = string + queryStings.join(string) + string
        const regex = new RegExp(messgeString,'i')
        this.message.map(item =>{
            if(regex.test(item)){
                this.message.push(item)
            }
        })
    }

    /**
     * PinYin Search 
     */
    PinYinhandleSearch = (querySting:String) => {
        const queryStings = querySting.split('');
        this.message = [];
        const string = '(.*?)';
        const messgeString = string + queryStings.join(string) + string
        const regex = new RegExp(messgeString,'i')
        this.message.map(item =>{
            const Pinyin = py.map(item.name,{
                style:py.STYLE_NORMAL
            }).flat()
            const pinyinString = Pinyin.join('');
            if(regex.test(pinyinString)){
                this.message.push(item)
            }
        })
    }

    /**
     * Precise Search
     */
    PreciseChangeSearch = (querySting:String) =>{
        this.message = [];
        this.message.map(item =>{
            if(item.name.indexOf(querySting) !== -1){
                this.message.push(item)
            }
        })
    }
}