const store =require('./app/store');
const pizzaActions=require('./features/pizza/pizzaSlice').pizzaActions
const burgerActions=require('./features/burger/burgerSlice').burgerActions
console.log("initialState",store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log("Update the state", store.getState());
    
})
store.dispatch(pizzaActions.pizza_order())
store.dispatch(pizzaActions.pizza_order())
store.dispatch(burgerActions.burger_order())
store.dispatch(burgerActions.burger_order())
unsubscribe()
