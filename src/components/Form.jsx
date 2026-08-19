import React, { useState } from 'react';
export default function Formu() {

		const [quantity, setQuantity] = useState(1)
		

		const [name, setName] = useState('')
		function handleSubmit(e) {
			e.preventDefault()
		}
	

		const quantityNum = [...Array(50)].map((_, i) => (
          <option value={i + 1} key={i + 1}>
						{i + 1}
					</option>
		))

		return (
			<form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
					{quantityNum}
        </select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <button>Tambah</button>
    </form>
		)
	}