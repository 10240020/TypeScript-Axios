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