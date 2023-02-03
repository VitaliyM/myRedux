import './main.css';
import Counter from './myApp/Counter';

function App() {
  return (
    <div>
        <Counter />      
    </div>
  );
}

// SUMMARY
// Create a Redux store with configureStore
// configureStore accepts a reducer function as a named argument
// configureStore automatically sets up the store with good default settings
// Provide the Redux store to the React application components
// Put a React-Redux <Provider> component around your <App />
// Pass the Redux store as <Provider store={store}>
// Create a Redux "slice" reducer with createSlice
// Call createSlice with a string name, an initial state, and named reducer functions
// Reducer functions may "mutate" the state using Immer
// Export the generated slice reducer and action creators
// Use the React-Redux useSelector/useDispatch hooks in React components
// Read data from the store with the useSelector hook
// Get the dispatch function with the useDispatch hook, and dispatch actions as needed



export default App;
