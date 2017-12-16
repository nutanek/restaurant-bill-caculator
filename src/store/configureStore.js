import { createStore, applyMiddleware } from 'redux'
import rootReducer from './../reducers/index';
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'

export default function configStore(initState) {
    const middlewares = [thunk, apiMiddleware]
    const store = createStore(
        rootReducer,
        initState,
        applyMiddleware(...middlewares)
    )
    
    if (module.hot) {
        module.hot.accept('../reducers', () => {
          store.replaceReducer(rootReducer);
        });
    }
    return store
}