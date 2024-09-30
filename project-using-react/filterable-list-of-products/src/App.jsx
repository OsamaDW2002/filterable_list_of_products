import { useState } from 'react'
import {Header} from "../components/Header.jsx";
import {Button} from "../components/Button.jsx";
import {Card} from "../components/Card.jsx";
import products from "./products.js";
function App() {
    const[filter, setFilter] = useState('all')
    function displayItems(value){
        setFilter(value)
    }
    return (
    <>
        <Header name={'Osama Dweikat'} title={'Filter System'} />
        <ul>
            <li><Button name={'All'} filter={filter} onClick={() => displayItems('all')}/></li>
            <li><Button name={'Electronics'} filter={filter}  onClick={() => displayItems('electronics')}/></li>
            <li><Button name={'Clothing'} filter={filter}  onClick={() => displayItems('clothing')}/></li>
            <li><Button name={'Footwear'} filter={filter}  onClick={() => displayItems('footwear')}/></li>
            <li><Button name={'Home Appliances'} filter={filter}  onClick={() => displayItems('home appliances')}/></li>
        </ul>

        <div className={'cardList'}>
            {
                products.filter(item => item.category.toLowerCase() === filter || filter === 'all').map(data => {
                    return <Card name={data.name} category={data.category} price={data.price} />
            })}
        </div>

    </>
  )
}

export default App
