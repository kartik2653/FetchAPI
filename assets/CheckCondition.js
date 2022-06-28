/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import context from './Context/Context';
import Progress from './screens/loading';
import MainScreen from './screens/mainScreen';
const Screen = ()=>{
    const status = useContext(context);
    return (
        status === true ? <Progress/> : <MainScreen/>
    );
};
export default Screen;
