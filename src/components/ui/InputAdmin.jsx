import React, {useState} from 'react'

const InputAdmin = ({label, functionModifier, value}) => {
  const [pilihanKategori, setPilihanKategori] = useState(["Masjid", "Restoran" ,"TPQ"])
  const [placeHolder, setPlaceHolder] = useState(true)

  if (label.toLowerCase().includes("kategori")) {
    return (
      <div className='relative'>
          <label className="font-bold">{label}</label>
          <select className='shadow-black/70 w-full shadow-[inset_0_1px_4px_0] py-[5px] px-1 rounded-[10px] flex-1'
          onFocus={(e)=>{setPlaceHolder(false)}}>
            {placeHolder && <option value="">Pilih Kategori</option>}
            <option value="Masjid">Masjid</option>
            <option value="Restoran">Restoran</option>
            <option value="TPQ">TPQ</option>
          </select>
          <div className='absolute bottom-0'>
            {/* {pilihanKategori.map(()=>{
              return(
                <div className=''>

                </div>
              )
            })} */}
          </div>
      </div>
    )
  } else {
      return (
      <div>
          <label className="font-bold">{label}</label>
          <input defaultValue={value} type="text" className="rounded-md flex-1"
          onChange={(e)=>{functionModifier(e.currentTarget.value)}}/>
      </div>
      )

  }
}

export default InputAdmin