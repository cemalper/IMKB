import {useReducer, useEffect} from 'react';
import {stockDetailRequest} from '../api/stocksApi';

const initialState = {data: null, error: null, loading: true};

export const useStockDetail = id => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
      try {
        dispatch({type: 'request'});
        const response = await stockDetailRequest(id);
        dispatch({type: 'success', data: response});
      } catch (ex) {
        dispatch({type: 'failure', error: ex.message});
      }
    })();
  }, [id]);

  return state;
};

function reducer(state, action) {
  switch (action.type) {
    case 'request':
      return {data: null, error: null, loading: true};
    case 'success':
      return {data: action.data, error: null, loading: false};
    case 'failure':
      return {data: null, error: action.error, loading: false};
    default:
      throw new Error();
  }
}

export default useStockDetail;
