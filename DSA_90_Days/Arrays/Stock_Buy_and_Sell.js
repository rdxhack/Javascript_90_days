// Given an array prices[] representing stock prices, find the maximum total profit that ,
// can be earned by buying and selling the stock any number of times.

// Note: We can only sell a stock which we have bought earlier and we cannot hold multiple stocks on any day.


const stock_buy_sell = (arr) => {
    let profit = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            profit += arr[i] - arr[i - 1];
        }
    }

    return profit;
}

const arr = [100, 180, 260, 310, 40, 535, 695];
let arr1=[4,2];
console.log("buy profits", stock_buy_sell(arr));
console.log("buy profits", stock_buy_sell(arr1));

// Stock Buy and Sell - At most k Transactions Allowed

function maxProfit(k, prices) {
    const n = prices.length;
    if (n === 0) return 0;

    if (k >= Math.floor(n / 2)) {
        let profit = 0;
        for (let i = 1; i < n; i++) {
            profit += Math.max(0, prices[i] - prices[i - 1]);
        }
        console.log("profits");
        return profit;
    }

    let prev = new Array(n).fill(0);

    for (let t = 1; t <= k; t++) {
        let curr = new Array(n).fill(0);
        let maxDiff = -prices[0];

        for (let i = 1; i < n; i++) {
            curr[i] = Math.max(curr[i - 1], prices[i] + maxDiff);
            maxDiff = Math.max(maxDiff, prev[i] - prices[i]);
        }

        prev = curr;
    }

    return prev[n - 1];
}
const arr3 = [10, 22, 5, 80];
const k=6;

console.log("maxProfit",maxProfit(k,arr))

var maxProfit2 = function(prices) {
    let n = prices.length;
    let result = 0 ;
    for(let i=0 ;i<n ;i++){
        if(prices[i]>prices[i-1])
        result  += prices[i]-prices[i-1];
    }
    return result ;
};

console.log("maxProfit2",maxProfit2(arr))


const stocks=(arr)=>{
    let n= arr.length;
    let Profits =0;
    for(let i=0;i<n;i++){
        if(arr[i]>arr[i-1]){Profits+=arr[i]-arr[i-1]}
    }
    return Profits;
}

console.log("stocks",stocks(arr))