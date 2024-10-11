// The Best Time to Buy and Sell Stock problem is a common algorithmic challenge that involves
// finding the maximum profit you can achieve by buying and selling a single share of stock.
// Given a list of daily stock prices, the goal is to determine the best time to buy and sell the stock to maximize profit.

// Problem Statement:
// You are given an array where each element represents the price of the stock on a particular day.
// You want to determine the maximum profit you can achieve by buying on one day and selling on another day
// (with the condition that you must buy before you sell).

// Input/Output:
// Input: An array of integers representing stock prices, where each index corresponds to a day.
// Output: A single integer representing the maximum profit. If no profit can be made, return 0.
// Example:
// Input:
// Prices: [7, 1, 5, 3, 6, 4]
// Output: 5 (You buy at price 1 on day 2 and sell at price 6 on day 5 for a profit of 6 - 1 = 5)

function maxProfit(pricesList){
    let profit = 0
    let minPrice = pricesList[0]
    for(let i=0; i<=pricesList.length; i++){
        if(minPrice > pricesList[i]){
            minPrice =  pricesList[i]
        }
        if((pricesList[i] - minPrice) > profit){
            profit = (pricesList[i] - minPrice)
        }
    }
    return profit
}

let stockPrices = [7, 1, 5, 3, 6, 4]

let res= maxProfit(stockPrices)
console.log(res) // 5