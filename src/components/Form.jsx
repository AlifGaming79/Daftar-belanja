export default function Formu() {

		const quantityNum = [...Array(50)].map((_, i) => (
          <option value={i + 1} key={i + 1}>
						{i + 1}
					</option>
		))

		return (
			<form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select>
					{quantityNum}
        </select>
        <input type="text" placeholder="nama barang..." />
      </div>
      <button>Tambah</button>
    </form>
		)
	}