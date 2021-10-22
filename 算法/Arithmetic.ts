export default class Arithmetic {
    /**
     *  Recursion Binary Tree
     */
    public newMap:any;
    public TreeNode: any
    buildTree = (ready:any,order:any)  =>{
        // Each Value Of Subscript
        this.newMap = new Map();
        for(let i = 0; i < order.length; i++){
            this.newMap.set(order[i],i)
        }
        return Sorting(0,0,order.length-1);
        // Sorting Three Individual Value Of Function
        async function Sorting(root:any,left:number,right:number):Promise<void>{
            if(left>right)return null;
            // Get It Ready Value
            const GetIt = this.newMap.get(ready[root])
            // Create Root Node
            let Node = new this.TreeNode(ready[root])
            // Recursion Left Node 
            Node.left = Sorting(root+1,left,GetIt-1)
            // Recursion Right Node
            Node.right = Sorting(root+GetIt-left-1,GetIt+1,right)
            // Retrun Value
            return Node
        }
    }

    /**
     * Stock Algorithm
     */
     Algorithm = (arr=[],root:any)=>{
        if(root.length < 0 || root == null) return 0;
        // initialization
        arr = root.length;
        // Hold And Did not Hold
        let onld = -root[0],
            noonld = 0;
        for(let i = 0; i < root.length; i++){
            onld = Math.max(onld,onld+root[i])
            noonld = Math.max(noonld,noonld - root[i])
        }
        return noonld
    }

    /**
     * Stock Algorithm Greedy Mode
     */

    Greedy = (arr = [],root:any)=>{
        if(root == null || root.length < 2) return 0;
        let array = arr,
            total = array[0],
            index = array[0],
            length = array[root.lenght];
        while(index < length){
            // Fall To Rise 
            while(index < length - 1 && root[index] >= root[index+1]) index ++;
            // Get The Minimum
            let min = root[index]
            // 
            while(index < length - 1 && root[index] <= root[index+1]) index ++;
            total += root[index++] - min
        }
        return total
    }
}
