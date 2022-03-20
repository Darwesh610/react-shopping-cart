import React from 'react'
import '../../css/Filter/Filter.css'

function Filter(props) {
  const { data , handleSize , size , sort , handleSort } = props.props;
  return (
    <div className='filter'>
        <h2 className='filter-title' >Filter</h2>
        <div className="num-of-products my-1 text-center h5"> Number of Products {data.length} </div>
        <div className="filter-by-size my-5 mx-2">
          <span>Order: </span>
        <select value={sort} className="form-select" onChange={handleSort}>
        <option value='Latest'>Latest</option>
        <option value='Heighest'>Heighest</option>
        <option value='Lowest'>Lowest</option>
        </select>
        </div>
        <div className="filter-by-size my-5 mx-2">
        <span>Filter: </span>
        <select value={size} className="form-select" onChange={handleSize}>
        <option value='All' >All</option>
        <option value='XS'>XS</option>
        <option value='S'>S</option>
        <option value='M'>M</option>
        <option value='L'>L</option>
        <option value='XL'>XL</option>
        <option value='XXL'>XXL</option>
        </select>
        </div>
    </div>
  )
}

export default Filter