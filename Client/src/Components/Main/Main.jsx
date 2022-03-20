import React from 'react'
import '../../css/Main/Main.css'
import data from '../../data.json';
import Products from '../Products/Products';
import Filter from '../Filter/Filter';

function Main(props) {
  return (
    <div className='main'>
    <Products data={props.data}/>
    <Filter props={props}/>
    </div>
  )
}

export default Main