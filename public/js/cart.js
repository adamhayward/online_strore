$(document).ready(() => {
    const tableContent = $('#table-content');

    var item;


    var url = window.location.search;
    var itemId;
    if(url.indexOf("?inventory_id=") !== -1) {
        itemId = url.split('=')[1];
        getCart(itemId);
    }else{
        alert("No items currently in the cart");
        getCart();
    }

<<<<<<< HEAD


const getTotal = () => {
  const price1 = $("#price1").html();
  const price2 = $("#price2").html();
  const price3 = $("#price3").html();
=======
     function getCart(item) {
        itemId = item || "";
        if(itemId) {
            itemId = `/?inventory_id=${itemId}`;
        }
        $.get(`/api/cart/${itemId}`, (data) => {
            console.log("Item", item);
            item = data;
            if(!item || !item.lenght) {
                alert("fail");
            }else{
                createCart();
            }
        })
    }
>>>>>>> master

    function createCart() {
        tableContent.empty();
        let itemToCart = [];
        for (let i = 0; i < item.length; i++) {
            itemToCart.push(item[i]);
            createCartRow(itemToCart);
        }
        tableContent.append(itemToCart);
    }

    function createCartRow(item) {
        let newTr = $('<tr>');
        newTr.data("item", item);
        newTr.append(`<td>${item.item}</td>`);
        newTr.append(`<td>${item.price}</td>`);
        return mewTr;
    }


<<<<<<< HEAD
orderNowBtn.on("click", (event) => {
  event.preventDefault();
  location.replace("/orderForm")
});



const thanksMessage = () => {
  
  import { init } from 'ityped'
  
const oneElement = document.querySelector('#one')

init(oneElement, { 
  showCursor: true, 
  strings: ['example', 'text', 'thank', 'for', 'shopping', 'here'], 
  typeSpeed:  100, 
  backSpeed:  50, 
  startDelay: 500, 
  backDelay:  500, 
  loop: true, 
  cursorChar: "|", 
  placeholder: true});

  $(oneElement).html(strings[i]);
};

thanksMessage();
=======
    const totalField = $('#total');
    const orderNowBtn = $("#order-now-btn");
    
    const getTotal = () => {
      const price1 = $("#price1").html();
      const price2 = $("#price2").html();
      const price3 = $("#price3").html();
    
      const price1Num = Number(price1);
      const price2Num = Number(price2);
      const price3Num = Number(price3);
    
      var total = price1Num + price2Num + price3Num;
      console.log(total)
      totalField.text(`$${total}`);
    };
    getTotal();

    orderNowBtn.on("click", (event) => {
        event.preventDefault();
        location.replace("/orderForm")
      });

})


  
>>>>>>> master
