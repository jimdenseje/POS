<script setup>
import { ref, onMounted } from 'vue'
import HeaderMenu from '@/components/HeaderMenu.vue';

// lifecycle hooks
onMounted(() => {
  items.value.sort(compareNumberOfSoldItems);
  basketSum.value = 0;
});

let id = 0

const basketSum = ref();
const basketItems = ref([]);

const items = ref([
  { id: id++, name: 'Apple', inStock: 20, sold: 57, price: 3, imageUrl: "https://thefreshandnatural.com/wp-content/uploads/2020/05/APPLE-GALA-KG.jpg" },
  { id: id++, name: 'Banana', inStock: 10, sold: 10, price: 5, imageUrl: "https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg" },
  { id: id++, name: 'CocaCola 330ML', inStock: 30, sold: 30, price: 10, imageUrl: "https://unityfood.az/storage/images/g/2476/1280x960/1705860809.jpg" },
  { id: id++, name: 'Cake', inStock: 50, sold: 55, price: 60, imageUrl: "https://stylesweet.com/wp-content/uploads/2022/06/DripBestButterCake_Featured.jpg" },
])

const newItemName = ref('');
const newItemPrice = ref('');
const newItemInStock = ref('');
const newItemImage = ref('');
function addItem() {
  items.value.push({ id: id++, name: newItemName.value, inStock: newItemInStock.value, price: newItemPrice.value, imageUrl: newItemImage.value })
  newItemName.value = ''
  newItemPrice.value = ''
  newItemInStock.value = ''
  newItemImage.value = ''

  items.value.sort(compareNumberOfSoldItems);
}

function removeItem(item) {
  items.value = items.value.filter((t) => t.id !== item.id)
}

function calculateBasketSum() {
  basketSum.value = 0;
  basketItems.value.forEach(element => {
    basketSum.value += element.price * element.qty;
  });
}

function addToBasket(item) {
  let found = false
  basketItems.value.forEach(element => {
    if (element.id === item.id) {
      element.qty++;
      found = true;
      return;
    }
  });
  
  if (!found) {
    item.qty = 1;
    basketItems.value.push(item);
  }

  calculateBasketSum();
}

function toggleBasket() {
  let basket = document.getElementById("basket");
  if (basket.classList.contains("hide")) {
    basket.classList.remove('hide');
  } else {
    basket.classList.add('hide');
  }
}

function removeBasketItem(item) {
  basketItems.value = basketItems.value.filter((t) => t.id !== item.id)
  
  calculateBasketSum();
}

function buyBasketItems() {
  basketItems.value.forEach(basketItem => {
    items.value.forEach(item => {
      if (basketItem.id === item.id) {
        item.sold += basketItem.qty;
        item.inStock -= basketItem.qty;
        return;
      }
    });
  });

  basketItems.value = [];
  items.value.sort(compareNumberOfSoldItems);

  calculateBasketSum();
}

function compareNumberOfSoldItems(a, b) {
  return b.sold - a.sold;
}

</script>

<style>
.item {
  display: flex;
  height: 140px;
  width: 340px;
  background-color: rgba(103, 161, 106, 0.329);
  flex-grow: 1;
}

.item .name {
  color: rgb(255, 255, 255);
}

.item b {
  color: rgb(255, 255, 255);
}

.item img {
  max-width: 140px;
  max-height: 100%;
}

.item div {
  flex-grow: 1;
  padding-left: 10px;
}

.item button {
  display: block;
  margin: 0px;
  margin-bottom: 4px;
  height: 20px;
  background-color: #04aa6d54;
  color: white;
  border: none;
  cursor: pointer;
}

#items {
  margin: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  justify-content: left;
  flex-wrap: wrap;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  display: inline-block;
  border: 4px solid rgba(103, 161, 106, 0.329);
  box-sizing: border-box;
  margin-right: 10px;
  margin-top: 10px;
}

/* Set a style for all buttons */
.add_item button {
  margin: 0px;
  background-color: #04AA6D;
  color: white;
  padding: 5px 7px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

.add_item {
  margin: 10px;
  margin-top: 0px;
}

th, td {
  padding-right: 5px;
}

#basket {
  position: fixed;
  bottom: 50px;
  right: 10px;
  width: 300px;
  background-color: rgba(228, 243, 229, 0.97);
  animation: show 200ms linear;
  animation-fill-mode: forwards;
}

#basket.hide {
  animation: hide 200ms linear;
  animation-fill-mode: forwards;
}

@keyframes show {
    0% {
        display: none;
        opacity: 0;
        right: -200px;
    }
    1% {
        display: block;
    }
    100% {
        display: block;
        opacity: 1;
        right: 10px;
    }
}

@keyframes hide {
    0% {
        display: block;
        opacity: 1;
        right: 10px;
    }
    99% {
        display: block;
    }
    100% {
        display: none;
        opacity: 0;
        right: -200px;
    }
}

#basket_items {
  display: block;
  max-height: 60vh;
  min-height: 200px;
  overflow-y: auto;
  width: 100%;
}

.basket_item {
  display: block;
  border-bottom: 1px solid black;
  width: calc(100% - 20px);
  padding-right: 4px;
  margin: 10px;
}

.basket_item .name {
  color: rgb(0, 0, 0);
}

.basket_item .qty {
  color: rgb(0, 0, 0);
  float: right;
}

.basket_item .price {
  color: rgb(0, 0, 0);
  float: right;
}

.basket_item button {
  float: left;
  margin: 3px;
  background-color: #04aa6d54;
  color: white;
  border: none;
  cursor: pointer;
}

#basket .buy_button {
  position: relative;
  float: left;
  margin: 4px;
  margin-bottom: 8px;
  margin-left: 8px;
  background-color: #04aa6d54;
  color: white;
  border: none;
  cursor: pointer;
  width: calc(100% - 16px);
  height: 30px;
  font-size: 14px;
}

#basket .total {
  color: rgb(0, 0, 0);
  float: right;
  padding: 2px;
  padding-right: 10px;
}

#basket_toggle {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-image: url("kurv.png");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>

<template>
  <HeaderMenu />

  <form class="add_item" @submit.prevent="addItem">
    <input type="text" v-model="newItemName" required placeholder="Produkt Navn">
    <input type="text" v-model="newItemPrice" required placeholder="Pris">
    <input type="text" v-model="newItemInStock" required placeholder="Antal på lager">
    <input type="text" v-model="newItemImage" required placeholder="Image">
    <button>Tilføj Produkt</button>
  </form>

  <div id="items">
    <span class="item" v-for="item in items" :key="item.id">
      <!-- <input type="checkbox" v-model="item.done"> -->
      <!-- <span :class="{ done: item.done }">{{ item.title }}</span> -->
      <!-- <img :src="'https://loremflickr.com/320/240/' + item.name.replace(' ', '+')"> -->
      <img :src="item.imageUrl">
      <div>
        <span class="name">{{ item.name }}</span>
        <br>
        <br>
        <table>
          <tr>
            <td style="min-width: 100px;"><b>Pris</b></td>
            <td>{{ item.price }}kr</td>
          </tr>
          <tr>
            <td><b>På lager</b></td>
            <td>{{ item.inStock }}stk</td>
          </tr>
          <tr>
            <td><b>Solgt</b></td>
            <td> {{ item.sold }}stk</td>
          </tr>
        </table>
      </div>
      <span>
        <button @click="addToBasket(item)">+</button>
        <button @click="removeItem(item)">X</button>
      </span>
    </span>
  </div>

  <div @click="toggleBasket" id="basket_toggle">
  </div>

  <div id="basket">
    <div id="basket_items">
      <span class="basket_item" v-for="basketItem in basketItems" :key="basketItem.id">
        <span class="name">{{ basketItem.name }}</span>
        <button @click="removeBasketItem(basketItem)">X</button>
        <span class="price">{{ basketItem.qty }} * {{ basketItem.price }}kr</span>
      </span>
    </div>
    <span class="total">i alt {{ basketSum }}kr</span>
    <button class="buy_button" @click="buyBasketItems()">Køb</button>
  </div>

</template>