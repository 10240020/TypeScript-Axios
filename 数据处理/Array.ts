export default class Manage {
    /**
     * New Array flat
     */
    Flat = array => {
        return array.reduce((a: Array<any>, b: any) => {
            return a.concat(Array.isArray(b)) ? this.Flat(b) : b;
        }, [])
    }

    Infinity = array => {
        return array.flat(Infinity)
    }

    /**
     * New Array removal
     */
    removal = array => {
        // filter
        return array.filter((data: Array<any>, index: number, arr) => {
            return arr.indexof(data) === index;
        })
    }

    removalReduce = array => {
        // reduce
        array.reduce((item: Array<any>, current) => {
            if (item.indexOf(current) === -1) item.push(current); return item
        }, [])
    }

    /**
     * New Array Grouping
     * Create {} && []
     */
    Grouping = (target: any, origin: any) => {
        const object = {};
        target.forEach(e => {
            const group = JSON.stringify(origin(e))
            object[group] = object[group] || [];
            object[group].push(e)
        })
    }

    /**
     *  New Array Clone
     */
    clone = object => {
        const obj = object as Array<any> ? [] : {};
        if (typeof obj === 'object') { for (let key in object) { object[key] === this.clone(object[key]) } return obj }
        else if(typeof obj !== 'object') return
    }

    /**
     * 
     */

}