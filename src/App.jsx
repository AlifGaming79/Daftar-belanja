const groceryItems = [
	{
		id: 1,
		name: 'Kopi bubuk',
		quantity: 1,
		checked: true,
	},
	{
		id: 2,
		name: 'Nasi goreng',
		quantity: 5,
		checked: false,
	},
	{
		id: 3,
		name: 'Krupuk',
		quantity: 5,
		checked: false,
	},
]

import React, { useState } from 'react';
import Header from './components/Header.jsx'
import Formu from './components/Form.jsx'
import GroceryList from './components/GroceryList.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
	const [items, setItems] = useState(groceryItems)

	function handleAddItem(item) {
		setItems([...items, item])
	}
	
  return (
    <div className="app">
    <Header />
    <Formu onAddItem={handleAddItem}/>
    <GroceryList items={items}/>
    <Footer />
  </div>
  )
}
