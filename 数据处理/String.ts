/**
 * Public Instance
 */

class ToString {
    interface = {

    }
   /**
    * Longest String
    */
    longest = (params:String) =>{
        let last = new Array();
        for(let i = 0; i < params.length; i++){
            last[i] = -1;
        }
        let n = params.length;
        let end = 0;
        let start = 0;
        for(let i = 0; i < n; i++){
            let index = params.charAt(i);
            start = Math.max(start,last[index]-1);
            end = Math.max(end,i-start+1)
        }
        return end;
    }

    /**
     * 
     */
    
}