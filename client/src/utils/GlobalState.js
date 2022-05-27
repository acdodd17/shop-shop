import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    // state is most up-to-date version of global state object
    // dispatch is method executed to update state; action obj passed in as argument
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [], 
        currentCategory: ''
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
}; 

export { StoreProvider, useStoreContext };