/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import about from './about.md';
import s from './Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const Action = () => {
  const [state,setState] = useState({
    speed:0
  }) 
  let current_speed=Math.random() * 2;
  const currentspeed = () => {
    // setState({
    //   ...state,
    //   speed:current_speed
    // })
   alert('? Current Speed is '+current_speed)
  }
  
  const cureenspeedhandler = (e) => {
    currentspeed();
  }
  
  const increasespeed = () => {
    let increase_speed=current_speed + 1/10;
    // setState({
    //   ...state,
    //   speed:increase_speed
    // })
    alert('The Incre?ased Speed is '+increase_speed);
  }

  const increasedspeedhandler = (e) => {
    increasespeed();
  }
  
  const decreasespeed = () => {
    let decrease_speed = current_speed - 1/10;
    // setState({
    //   ...state,
    //   speed:decrease_speed
    // })
    alert('The Decreased speed is '+decrease_speed)
  }

  const decreasedspeedhandler = (e) => {
    decreasespeed();
  }
  return {
    chunks: ['about'],
    title: about.title,
    component: (
      
      <Layout>
       
          <div className={s.btn_grp}>
            <h2>Speed Calculator </h2>
              <button onClick={cureenspeedhandler}>Current Speed</button>
              <button onClick={increasedspeedhandler}>Increase Speed</button>
              <button onClick={decreasedspeedhandler}>Decrease Speed</button>
          </div>
          <div>
    <h1>Speed </h1>
          </div>
         
      </Layout>
    ),
  };
}




export default Action;
