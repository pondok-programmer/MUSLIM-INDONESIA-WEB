import { PiUserCircleFill, PiMagnifyingGlass, PiCaretDown, PiCalendar, }  from 'react-icons/pi'
import Slider from '@ant-design/react-slick'
import masjidImage from "../../assets/example/masjid.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsArrowDown, BsArrowUp, BsBell, BsBellFill, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { useContext } from 'react'
import { Context } from '../../context/StateContext';
import { Link } from 'react-router-dom';

const Home = () => {

  const date = new Date
  let tanggal = date.toLocaleDateString("id-ID", {weekday:"long", day:"2-digit", month:"long", year:"numeric"})
  let tanggalIslam = date.toLocaleDateString("id-ID-u-ca-islamic", {day:"2-digit", month:"long", year:"numeric"})
  const {masjidSource} = useContext(Context)

  const cards = [
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


  return (
    <div id='home' className="min-h-screen bg-white h-full flex flex-col w-full ">
      <button className='rounded-full p-2 bg-kryptonite fixed bottom-8 left-[50%] z-10 -translate-x-[50%] ' onClick={()=>{window.scrollBy(0, window.innerHeight)}}>
        <BsArrowDown className='text-white text-[26px]'/>
      </button>
      <header>
        <section className='text-white bg-kryptonite '>
          <div className='w-full flex bg-kryptonite justify-center flex-col items-center lg:py-1'>
            <h1 className='sm:text-[23px] lg:text-[25px] font-bold'>{tanggal}</h1>
            <h3 className='text-sari max-sm:text-[14px]'>{tanggalIslam}</h3>
          </div>
          {/* <div className='flex justify-center items-center bg-gradient-to-b from-kryptonite to-white from-[50%] to-[50%] py-3'>
            <div className='w-[72vw] h-[49px] lg:w-[44vw] sm:h-[52px] lg:h-[54px] border flex border-gray-400 rounded-[10rem] overflow-hidden bg-white'>
              <input type="search" name="" id="search-bar" className='flex-1 text-[18px] pl-3 text-black focus-visible:outline-none'/>
              <label htmlFor="search-bar" >
                <PiMagnifyingGlass type='label' className='w-[60px] p-2 text-black text-opacity-50 flex justify-center items-center h-full'/>
              </label>
            </div>
          </div> */}
          <div className='h-[2.3rem]'></div>
        </section>
        <section className='bg-white relative'>
          <div className='w-[80vw] bg-white sm:w-[72vw] h-[40px] absolute -translate-y-[50%] left-[50%] lg:w-[44vw] sm:h-[52px] lg:h-[54px] border flex border-gray-400 rounded-[10rem] overflow-hidden -translate-x-[50%]'>
            <input type="search" name="" id="search-bar" className='flex-1 text-[18px] pl-3 text-black focus-visible:outline-none'/>
            <label htmlFor="search-bar" >
              <PiMagnifyingGlass type='label' className='w-[45px] sm:w-[60px] px-2 sm:p-2 text-black text-opacity-50 flex justify-center items-center h-full'/>
            </label>
          </div>
          <div className='h-[2.3rem]'></div>  
          <div className='w-full flex items-center justify-center sm:justify-end px-4'>
            <ul className='[&_li]:w-auto text-[14px] gap-3 pl-1 lg:text-[15px] flex text-black sm:gap-6'>
              <li className='flex items-center'><Link to={"/masjid"}>Masjid</Link> <PiCaretDown className='px-0.5'/></li>
              <li className='flex items-center'>Restoran <PiCaretDown className='px-0.5'/></li>
              <li className='flex items-center'>TPQ <PiCaretDown className='px-0.5'/></li>
            </ul>
          </div>
        </section>
      </header>
      <main className='h-auto bg-white'>
        <section className='flex items-center h-[90px] sm:h-[120px] lg:h-[160px]'>
          <div className='text-center w-full '>
            <h1 className='lg:text-[26px] sm:text-[125%]'>Assalamualaikum,</h1>
            <h1 className='lg:text-[28px] sm:text-[150%]'>Selamat datang <span className='font-bold'>Rafi Zimran</span></h1>
            <h1 className='lg:text-[28px] sm:text-[150%]'>di <span className='font-bold text-sari'>Muslim</span><span className='font-bold text-kryptonite'>Indonesia</span></h1>
          </div>
        </section> 
        <section className='sm:min-h-[500px]  max-sm:py-3 flex items-center lg:min-h-[350px] py-[3%]'>
          <ul className='w-full h-[80%] flex gap-6 lg:gap-16 sm:gap-8 justify-center items-center flex-wrap'>
            {cards.map((index, y)=>{
              return(
                <li key={y} className='aspect-[4/2.5] relative w-[270px] lg:w-[54vh] lg:max-w-[400px] sm:w-[320px] rounded-xl overflow-hidden'>
                  <img src={index.image} alt="" className='h-full w-full'/>
                  <Link to={"/detail/masjid"} id='images' className='absolute top-0 h-full w-full flex flex-col justify-between text-white opacity-80 [&:hover_div:first-child]:!translate-y-0 [&:hover_div:last-child]:!translate-y-0'>
                    <div className='absolute w-full p-2 h-[32%] duration-500 ease-out from-[-30%] translate-y-[-100%] from-black bg-gradient-to-b'>
                      <h4 className='lg:text-[17px]'>{index.nama}</h4>
                      <h5 className='text-[14px] lg:text-[15px]'>{index.lokasi}</h5>
                    </div>
                    <div className='absolute w-full bottom-0 p-2 flex duration-500 ease-out items-end h-[65%] translate-y-[100%] from-[45%] from-black bg-gradient-to-t'>
                      <span className='max-sm:text-[14px] '>
                        {index.detail}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
        
      </main>
      
    </div>
  )
}

export default Home