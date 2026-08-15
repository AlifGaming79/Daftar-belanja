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

import Item from './Items.jsx'

export default function GroceryList() {
	return (
		<>
		<div className="list">
      <ul>
				{groceryItems.map((item) => (
				<Item item={item} key={item.id}/>
				))}
      </ul>
    </div>
    <div className="actions">
      <select>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
		</>
	)
}
