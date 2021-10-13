export default class sortord{
    public array: { length: any; };
    /**
     * New Sortord bubbling
     */
    
    bubbling():void{
        const { length } = this.array;
        for(let i = 0; i < length ; i++){
            for(let j = 0; j < length-1-i; j++){
                // if(this.parmasFn(this.array[j],this.array[j+1]) === compar.BlGGER_THAN){
                //     this.swap(this.array,j,j+1)
                // }
            }
        }
    }
}