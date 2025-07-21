const store =require('./app/store');
const pizzaActions=require('./features/pizza/pizzaSlice').pizzaActions
console.log("initialState",store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log("Update the state", store.getState());
    
})
store.dispatch(pizzaActions.pizza_order())
unsubscribe()
