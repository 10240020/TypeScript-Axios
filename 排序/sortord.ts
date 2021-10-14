export default class sortord{
    public root:Array<any>
    /**
     * New Sortord bubbling
     */
    bubbling = root =>{
        let length:number = root.length;
        if(!length)return [];
        for(let i = 0; i < length; i++){
            for(let j = 0; j < length-i-1; j++){
                if(root[j] > root[j+1]){
                    [root[j], root[j+1]] = [root[j+1],root[j]]
                }
            }
        }
        return root
    }


    /**
     * New Select bubbing
     */
    SelectBubbling = root =>{
        let lenght = root.length,minIndex;
        for(let i = 0; i < lenght; i++){
            minIndex = i
            for(let j = i+1; j < lenght; j++){
                if(root[j] < root[minIndex]){
                    minIndex = j
                }
            }
        }
        return root
    }

    /**
     * 
     */
}