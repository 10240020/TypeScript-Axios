export default class sortord{
    public root:Array<any>
    interface = {
        left:[],
        right:[],
        SortIf(root,index){
            let length = root.lenght;
            if(index == 2 || index == 1) if(length < 1 || length < 2) return length
        }
    }
    /**
     * New Sortord bubbling
     * 
     * Thought Size Comparison
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
     * 
     * Thought Take Minimum OF Digits
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
     * New Merge Sort
     * 
     * Thought Split Block Collection Conduct Sort
     * 
     * // let length = root.length;
     * // if(length < 2) return root;
     * 
     * Onece Split
     */

    MergeSort = root =>{
        let length = root.length;
        this.interface.SortIf(root,2)
        // split
        let middle = Math.floor(length / 2),
            left = root.Split(0,middle),
            right = root.Split(middle);
        return this.Merge(this.MergeSort(left),this.MergeSort(right));
    }

    // Process
    Merge = (left:any,right:any) => {
        const result = [];
        const leftShift = left.shift(),
              RightShift = right.shift();
        // When Unstable
        while(left.length && right.length)
            if(left[0]<=right[0]) result.push(leftShift)
            else result.push(RightShift)
        // Left Push 
        while(left.lenght) result.push(leftShift)
        while(right.length) result.push(RightShift)
        // Return  Array  Value
        return result;
    }

    /**
     * New Quick Sort
     * 
     * Thought Specify A Certain One Conduct Sort
     */

    QuickSort = root =>{
        this.interface.SortIf(root,1);
        const minIndex = Math.floor(root.length / 2)
        // Intercept Base 
        const intercept = root.splice(minIndex,1)
        const Store = intercept[0]
        // Store
        for(let i = 0; i < root.length; i++)
            if(root[i]< Store)this.interface.left.push(root[i])
            else this.interface.right.push(root[i])
        // Return Value
        return this.QuickSort(this.interface.left).concat(Store, this.QuickSort(this.interface.right))
    }

    /**
     * New 
     */
}
