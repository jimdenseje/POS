const stock = {};
let stockList = [];
let nextItemId = 1;

stock.add = function (name, price, stockCount = 0) {
    let item = {};
    item.id = nextItemId;
    item.name = name;
    item.price = price;
    item.stockCount = stockCount;

    item.remove = function () {
        stock.removeById(item.id);
        item = undefined;
    }

    stockList.push(item);
    nextItemId++;

    console.log(stockList);
    return item;
}

stock.list = function() {
    return stockList;
    //return JSON.parse(JSON.stringify(stockList)); //Deep Clone
}

stock.removeById = function (id) {
    stockList = stockList.filter((value)=>value.id != id);
    console.log(stockList);
}

export { stock };