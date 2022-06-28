import React, {useEffect} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from './store/action-creators/getProductsAction'



function App() {
  const data = useSelector(data => data.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsAction())
  }, [])
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
