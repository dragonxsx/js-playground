
const user = {
    name: 'Ann',
    active: true,
    cart: [],
    purchases: []
  };
  
  // // Cart feature:
  // // 1. Add items to cart.
  // // 2. Add 3% tax to item in cart
  // // 3. Buy item: cart --> purchases
  // // 4. Empty cart
  // // Bonus:
  // // Accept refunds
  // // Track user history
  
  // function addItem(item) {
  //   user.cart.push(item);
  // }
  
  // function addTax() {
  //   for(let item of user.cart) {
  //     if(!item.isAddedTax) {
  //       item.price = item.price * 1.03;
  //       item.isAddedTax = true;
  //     } 
  //   }
  // }
  
  // function buyItem() {
  //   while(user.cart.length !== 0) {
  //     const item = user.cart.pop();
  //     user.purchases.push(item);
  //   }
  // }
  
  // addItem({name: 'Book1', price: 100});
  // addItem({name: 'Book2', price: 200});
  // addItem({name: 'Book3', price: 300});
  // addTax();
  // buyItem();
  
  // console.log(user);
  
  const compose = (f,g) => (...data) => (f(g(...data)));
  const purchaseItems = (...args) => args.reduce(compose);
  
  const lastUserData = purchaseItems(
    emptyCart,
    buyCartItem,
    addTaxToItem,
    addItemToCart
  )(user, {name: 'Book1', price: 120});
  console.log(lastUserData);
  
  function addItemToCart(user, item) {
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updatedCart});
  }
  
  function addTaxToItem(user) {
    const {cart} = user;
    const taxRate = 1.03;
    const updatedCart = cart.map(item => {
      return {
        ...item,
        price: item.price * taxRate
      }
    });
    return Object.assign({}, user, {cart: updatedCart});
  }
  
  function buyCartItem(user) {
    const {cart} = user;
    return Object.assign({}, user, {purchases: cart});
  }
  
  function emptyCart(user) {
    return Object.assign({}, user, {cart: []});
  }