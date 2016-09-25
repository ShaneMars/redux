// reducer
// function counter(state,action){
//     switch (action.type){
//         case 'INCREASE':
//          return state + 1;
//         case 'DECREASE':
//          return state - 1;
//          default:
//          return state;
//     }   
// }
// console.log('current:0')
// console.log("trigger:INCREASE");
// console.log(counter(0,{
//     type:'INCREASE'
// }));

// console.log('current:2')
// console.log("trigger:DECREASE");
// console.log(counter(2,{
//     type:'DECREASE'
// }));









import {createStore} from 'redux';

//创建reducer 如何改变state
const counter = (state=0,action) => {
    switch (action.type){
        case 'INCREASE':
         return state + 1;
        case 'DECREASE':
         return state - 1;
         default:
         return state;
    }   
}


// console.log('current state:',store.getState());
// console.log('dispatch INCREASE')
// store.dispatch({
//     type:'INCREASE'
// })
// console.log('current state:',store.getState());

// console.log('dispatch DECREASE')
// store.dispatch({
//     type:'DECREASE'
// })
// console.log('current state:',store.getState());

// 自己创建的createStore
// const createStore = (reducer) =>{
//     let state;
//     let list = [];
//     const getState = () => {
//         return state;
//     }

//     const dispatch = (action) => {
//         state = reducer(state,action)
//         list.forEach((fn) =>{
//             fn();
//         })
//     }
//     const subscribe = (fn) => {
//         list.push(fn)
//         return () =>{
//             list = list.filter(cb => cb != fn)
//         }
//     }
//     return {
//         getState,
//         subscribe,
//         dispatch
//     }
// }

//创建store对象
const store = createStore(counter);

// action.type初始化 触发counter(action)
// store.dispatch({
//     type:'INIT'
// })

//添加事件
document.addEventListener('click',()=>{

    store.dispatch({
        type:'INCREASE',
    })

    unsubscribe();
})






const render = () => {
    document.getElementsByTagName('body')[0].innerHTML = '<h1>' + store.getState() + '</h1>'
}
// 每次state改变 执行render一遍
const unsubscribe = store.subscribe(render);

render();


