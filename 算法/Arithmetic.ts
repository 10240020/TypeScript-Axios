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
}
