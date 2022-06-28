/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
import context from './Context';
import { updatingContext } from './Context';

const State = props => {
  const [isLoading, setLoading] = useState(false);
  const toggleLoading=(val)=>{
    setLoading(val)
  }

  return (
    
        <updatingContext.Provider value={toggleLoading}>
        <context.Provider value={isLoading}>
        {props.children}
        </context.Provider>
        </updatingContext.Provider>
    
  );
};
export default State;