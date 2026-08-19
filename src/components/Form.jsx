import React, { useState } from 'react';
export default function Formu() {

		const [name, setName] = useState('')

		function handleSubmit(e) {
			e.preventDefault()
			alert(name)
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
        <select>
					{quantityNum}
        </select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <button>Tambah</button>
    </form>
		)
	}