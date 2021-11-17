export default class Arithmetic {
    /**
     *  Recursion Binary Tree
     */
    public newMap:any;
    public TreeNode: any;
    public SumofNumbers:any;
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

    /**
     * Typescript Sum Of Tow Numbers
     */
    SumOfNumbers = (l1:any,l2:any) => {
        const root = new this.SumofNumbers(0);
        let cursor = root;
        let carray =  0;
        while (l1 != null || l2 != null || cursor != null) {
            const sumVal = ((l1 != null ? l1.next() : null) + (l2 != null ? l2.next() :0) + carray);
            carray = sumVal / 10
            const sumNode = new this.SumofNumbers(sumVal % 10); 
            cursor = sumNode;
            if(l1 != null) l1.next();
            if(l2 != null) l2.next();
        }
        return root.next();
    }

    /**
     * Reverse Number
     */
    Reverse = x =>{
        let rev = 0;
        while(x !== null || x !== 0){
            if(rev < Math.pow(-2,31) || rev > Math.pow(2,31)-1){
                return 0;
            }
            const digit = x % 10;
            x /= 10;
            rev = rev * 10 + digit;
        }
        return rev;
    }
}
