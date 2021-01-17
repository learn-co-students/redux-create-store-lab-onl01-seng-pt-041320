// write your createStore function here

function createStore(reducer) {
  let state;
 
  function getState() {
    return state;
  };

  // * `dispatch` should take in an action, update the state using the reducer, and call the render function.
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
 
 
  return {
    dispatch,
    getState
  };
};

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

let store = createStore(candyReducer) // createStore takes the reducer as an argument
// store.dispatch({ type: '@@INIT' });
// let button = document.getElementById('button');
 
// button.addEventListener('click', () => {
  store.dispatch({ type: 'ADD_CANDY' });
// });
// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.