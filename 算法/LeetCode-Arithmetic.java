    /**
     * JAVA Algorithm Greedy Mode
     */
     public int maxProfit(int[] prices) {
        if (prices == null || prices.length < 2)
            return 0;
        int total = 0, index = 0, length = prices.length;
        while (index < length) {
            //如果股票下跌就一直找，直到找到股票开始上涨为止
            while (index < length - 1 && prices[index] >= prices[index + 1])
                index++;
            //股票上涨开始的值，也就是这段时间上涨的最小值
            int min = prices[index];
            //一直找到股票上涨的最大值为止
            while (index < length - 1 && prices[index] <= prices[index + 1])
                index++;
            //计算这段上涨时间的差值，然后累加
            total += prices[index++] - min;
        }
        return total;
    }

    /**
     * JAVA Sum Of Tow Numbers
     * 两数之和
     */
    public int ListNode addTwoNumbers(listNode l1, listNode l2){
        listNode root  = new ListNode(0);
        listNode cursor = root;
        int carry = 0;
        while(l1 != null || l2 != null || cursor != null){
            int sumVal = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carry;
            carry = sumVal / 10;
            listNode sumNode = new ListNode(sumVal % 10);
            cursor = sumNode;
            if(l1 != null) l1 = l1.next;
            if(l2 != null) l2 = l2.next;
        }
        return root.next;
        
    }

    /**
     * JAVA Longest String
     * 无重复字符串的最长子串
     */
    public int lenghtOflongestSubstring(String s){
        int[] last = new int[128];
        for(int i = 0; i < 128; i++){
            last[i] = -1;
        }
        int n = s.length;
        int res = 0;
        int start = 0;
        for(int i = 0; i < n; i++){
            int index = s.charAt(i);
            satrt = Math.max(start, last[index]-1);
            res = Math.max(res,i-start+1);
            last[index] = i;
        }
        return res;
    }

    /**
     * JAVA Reverse Numbers
     * 逆转
     */
    public int reverse(int x) {
        int rev = 0;
        while( x !== 0){
            if(rev < Integer.MAX_VALUE / 10 || rev > Integer.MIN_VALUE / 10){
                return 0;
            }
            int digit = x % 10;
            x /= 10;
            rev = rev * 10 + digit;
        }
        return rev;
    }

    /**
     * JAVA Binary search
     * 二分查找
     */
    public int search(int [] nums,target){
        int left = 0,right = nums.length - 1;
        while(left <= right){
            // 中心指针
            int mid = left + (right-left) / 2;
            // 指针对判
            if(nums[mid] == target){
                return mid;
            }else if(nums[mid] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return -1;
    }

    /**
     * JAVA isBadVersion
     * 二分查找--错误版本
     */
    public int firstBadVersion(int n){
        int left = 0, right = n;
        int left1 = 1;
        while(left <right) {
            // 中心针
            int mid = left + (right-left) / 2;
            // 移位
            int mid2 = left1 + (right-left1)>>1);
            if(isBadVersion(mid)){
                right = mid;
            }else{
                left = mid + 1;
            }
        }
        return left;
    }

    /**
     * JAVA Search Insert Position
     * 搜索插入位置
     */
    public int searchInsertPosition(int [] nums,taget){
        int left = 0, right = nums.length - 1;
        while(left <= right){
            int mid = left + ((right-left) >> 1);
            if(target <= nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return left;
    }
    

    /**
     * JAVA Double needle
     * 双指针--双针
     * 删除排序数组的重复项
     */
    public int Doublened(int [] nums) {
        // 边界判断
        if(nums == null; || nums.length == 0) return 0;
        // 重复数字计算
        int left = 0;
        for(let right = 1; right < nums.length; k++){
            if(nums[left] != nums[right]){
                // 当左参数不等于右参数那么右针往前移动
                nums[++left] = nums[right];
            }
        }
        return ++left;
    }

    /**
     * JAVA Double needle
     * 双指针--双针
     * 删除排序数组的重复项
     */
    public int Doubleneedle(int [] nums){
        if(nums != null){
            int left = 0;
            for(int right = 0; right < nums.length; right++){
                if(nums[left] == nums[right]){
                    nums[left] = nums[right];
                }else{
                    nums[++left] = nums[right];
                }
            }
            return ++left;
        }else{
            return 0;
        }
    }

    /**
     * JAVA Double needle
     * 双指针--双针
     * 有序数组的苹方
     */
    public int Doubleneedle(int [] nums){00
        int n = nums.length;
        int[] ans = new int[n];
        for (int i = 0, j = n - 1, pos = n - 1; i <= j;) {
            if (nums[i] * nums[i] > nums[j] * nums[j]) {
                ans[pos] = nums[i] * nums[i];
                ++i;
            } else {
                ans[pos] = nums[j] * nums[j];
                --j;
            }
            --pos;
        }
        return ans;
    }
    /**
     * JAVA Double needle
     * 双指针--双针
     * 删除链表倒数第N个节点
     */
    public ListNode removeNthFromEnd(ListNode head,int n){
        ListNode dummy = new ListNode(0,head);
        ListNode first = head;
        ListNode seaced = dummy;
        for(let k = 1; k < n; ++k){
            first = first.next;
        }
        while(first !== null){
            first = first.next;
            seaced = seaced.next;
        }
        seaced.next = seaced.next.next;
        ListNode ans = dummy.next;
        return ans;
    }
    /**
     * JAVA Double needle
     * 计算链表长度
     * 删除链表倒数第N个节点
     */
    public ListNode removeNthFromEnd(ListNode head,int n){
        ListNode dummy = new ListNode(0,head);
        int length = getLength(head);
        ListNode cur = dummy;
        for(let i = 1; i < length - n + 1; ++i){
            cur = cur.next;
        }
        cur.next = cur.next.next;
        ListNode ans = dummy.next;
        return ans;
    }
    public int getLength(ListNode head){
        int length = 0;
        while(head !== null){
            ++length;
            head = head.next;
        }
        return length;
    }
    /**
     * JAVA Double needle
     * 顺序合并
     * 合并多个链表
     */
    public ListNode mergeKLists(ListNode [] lists){
        ListNode ans = null;
        for(int i ==0;i <lists.length;++i){
            ans = mergeTwoLists(ans,lists[i]);
        }
        return ans;
    }
    public ListNode mergeTwoLists(ListNode a,ListNode b){
        if(a == null || b == null){
            return a != null ? a : b;
        }
        ListNode head = new ListNode(0);
        ListNode tail = head,aPtr = a,bPtr = b;
        while(aPtr != null && bPtr != null){
            if(aPtr.val < bPtr.val){
                tail.next = aPtr;
                aPtr = aPtr.next;
            }else{
                tail.netx = bPtr;
                bPtr = bPtr.next;
            }
            tail = tail.next;
        }
        tail.next = (aPtr != null ? aPtr : bPtr);
        return head.next;
    }
    /**
     * JAVA Double needle
     * 分治合并
     * 合并多个链表
     */
    public ListNode mergeKLists(ListNode[] lists){
        return merge(lists,0,lists.length - 1);
    }

    public ListNode merge(ListNode[] lists,int l,int r){
        if(l == r){
            return lists[l];
        }
        if(l > r){
            return null;
        }
        int mid = (l + r) >> 1;
        return mergeTwoLists(merge(lists,l,mid),merge(lists,mid + 1,r))
    }

    public ListNode mergeTwoLists(ListNode a,ListNode b){
        if(a == null || b == null){
            return a !== null ? a : b;
        }
        ListNode head = new ListNode(0);
        ListNode tail = head,aPtr = a,bPtr = b;
        while(aPtr != null && bPtr != null){
            if(aPtr.val < bPtr.val){
                tail.next = aPtr;
                aPtr = aPtr.next;
            }else{
                tail.next = bPtr;
                bPtr = bPtr.next;
            }
            tail = tail.next;
        }
        tail.next = (aPtr != null ? aPtr : bPtr);
        return head.next;
    }
    /**
     * JAVA Double needle
     * 使用优先队列合并
     * 合并多个链表
     */
    class status implements Comparable<status>{
        int val;
        ListNode ptr;
        status(int val,ListNode ptr){
            this.val = val;
            this.ptr = ptr;
        }
        public int CompareTo(status status2){
            return this.val - status2.val;
        }
    }
    PriortyQueue<status> queue = new PriortyQueue<status>();
    public ListNode mergeKLists(ListNode[] lists){
        for(ListNode Node: lists){
            if(Node != null){
                queue.offer(new status(node.val,node));
            }
        }
        ListNode head = new ListNode(0);
        ListNode tail = head;
        while(!queue.isEmpty()){
            status f = queue.poll();
            tail.next = f.ptr;
            tail = tail.next;
            if(f.ptr.next != null){
                queue.offer(new status(f.ptr.next.val,f.ptr.next));
            }
        }
        return head.next;
    }