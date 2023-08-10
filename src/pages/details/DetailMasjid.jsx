import React,{useContext, useState, useEffect} from 'react'
import { Context } from '../../context/StateContext'


const DetailMasjid = () => {

  const {masjidImage} = useContext(Context)

  let cards = [
      {
      image:masjidImage,
      nama:"Masjid Istiqlal",
      lokasi:"Jakarta",
      detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
    },
    {
      image:masjidImage,
      nama:"Masjid Istiqlal",
      lokasi:"Jakarta",
      detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
    },
    {
      image:masjidImage,
      nama:"Masjid Istiqlal",
      lokasi:"Jakarta",
      detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis quae dolorum earum asperiores similique sunt porro quam molestiae illum.",
    }
  ]

  const mapper = (x) => {
    return x()
  }
  
  return (
    <div className='min-h-[69vh] lg:min-h-[67.6vh] h-auto bg-gray-400 flex flex-col w-full'>
      <section className=''>
        <figure className='p-3'>
          <img src={masjidImage} alt=""  className='h-full w-full'  />
        </figure>
      </section>
      <section className='p-4 bg-purle-500 text-white'>
        {
          useEffect(() => {
            return () => {  
              cards.map((object)=>{
                for (const key in object) {
                  console.log(object[key]);
                }
              })
            }
          }, [])
        }
        <dl>
          <div>
            <div>
              <dt className='text-[20px] font-bold'>Nama</dt>
            </div>
            <dd>Istiklal</dd>
          </div>
          <div>
            <div>
              <dt className='text-[20px] font-bold'>Pemilik/Pendiri</dt>
            </div>
            <dd>Joko Tinkir</dd>
          </div>
          <div>
            <div>
              <dt className='text-[20px] font-bold'>Lokasi</dt>
            </div>
            <dd>Jakarta</dd>
          </div>
        </dl>
      </section>
      <section>

      </section>
    </div>
  )
}

export default DetailMasjid