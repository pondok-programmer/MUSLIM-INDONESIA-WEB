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

  const events = ["Kajian", "Event", "TPQ"]


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

const kajian = [
  {
    image:masjidImage,
    person:"kholid basalamah",
    date: Date(20203,7,3).substring(0,16)
  },
  {
    image:masjidImage,
    person:"kholid basalamah",
    date: Date(20203,7,3).substring(0,16)
  },
  {
    image:masjidImage,
    person:"kholid basalamah",
    date: Date(20203,7,3).substring(0,16)
  },
  {
    image:masjidImage,
    person:"kholid basalamah",
    date: Date(20203,7,3).substring(0,16)
  },
]

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  accessibility: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        accessibility: true,
        arrows: false,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        accessibility: true,
        adaptiveHeight: true,
        // variableWidth: true,
        arrows: false,
      }
    },
  ],
};

const {masjidSource} = useContext(Context)

  return (
    <div id='home' className="min-h-screen h-full flex flex-col w-full ">
      <button className='rounded-full p-2 bg-kryptonite fixed bottom-8 left-[50%] z-10 -translate-x-[50%] ' onClick={()=>{window.scrollBy(0, window.innerHeight)}}>
        <BsArrowDown className='text-white text-[26px]'/>
      </button>
      <header >
        <section className='text-white bg-kryptonite '>
          <div className='w-full flex bg-kryptonite justify-center flex-col items-center lg:py-1'>
            <h1 className='sm:text-[23px] lg:text-[25px] font-bold'>Rabu, 26 Juli 2023</h1>
            <h3 className='text-sari max-sm:text-[14px]'>8 Muharam 1445 H</h3>
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
      <main className='h-auto '>
        <section className='flex items-center sm:h-[15vh] lg:h-[22vh]'>
          <div className='text-center w-full '>
            <h1 className='lg:text-[26px] sm:text-[125%]'>Assalamualaikum,</h1>
            <h1 className='lg:text-[28px] sm:text-[150%]'>Selamat datang <span className='font-bold'>Rafi Zimran</span></h1>
            <h1 className='lg:text-[28px] sm:text-[150%]'>di <span className='font-bold text-sari'>Muslim</span><span className='font-bold text-kryptonite'>Indonesia</span></h1>
          </div>
        </section>
        <section className='min-h-[49vh] sm:pt-[2vh] sm:pb-[12vh]'>
          <div className='w-full h-[80%] flex gap-6 lg:gap-16 sm:gap-8 justify-center items-center flex-wrap'>
            {cards.map((index, y)=>{
              console.log(index.image);
              return(
                <div key={y} className='aspect-[4/2.5] w-[270px] lg:w-[380px] sm:w-[320px] rounded-xl '>
                  <Link to={"/detail/masjid"}>
                    <img src={index.image} alt="" className='h-full w-full'/>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
        <section id='event' className='min-h-screen flex flex-col max-sm:justify-center'>
          {events.map((acara, index)=>{
            return(
              <div key={index} className='w-full'>
                <h1 className='font-bold text-[19px] sm:text-[23px] text-left w-full px-5'>{acara}</h1>
                <div className='bg-black bg-opacity-30 sm:[&_.slick-track]: lg:[&_.slick-track]:gap-3'>
                  <Slider {...settings}>
                    {
                      kajian.map((element, index)=>{
                        return(
                          <div key={index} className={`h-[23vh] max-sm:!py-0.5 !px-[1vw] text-[13px] sm:text-[1.5vw] lg:text-[15px] !flex flex-col !rounded-md overflow-hidden items-end justify-end my-1`}>
                            <div className='flex-1 w-full h-12 flex justify-center overflow-hidden '>
                              <img src={masjidImage} alt="" className='w-full h-full'/>
                            </div>
                            <div className='bg-zinc-300 flex justify-between items-center p-[1vw] w-full sm:text-[1.3vw] h-[19%] text-ellipsis'>
                                <p className='text-ellipsis overflow-hidden whitespace-nowrap'>{element.person}</p>
                              <div className='flex items-center w-1/2'>
                                <PiCalendar className=' mx-[0.4vw] text-lime-700'/>
                                <p className='text-ellipsis overflow-hidden whitespace-nowrap'> {element.date}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </Slider>
                </div>
              </div>
            )
          })}
        </section>
        <section id='about' className='sm:h-[160vh] lg:h-[154vh] flex flex-col items-center justify-start text-center '>
          <article className=' sm:h-[20vh] p-3.5 lg:h-[24vh] flex flex-col '>
            <h1 className='text-[24px] sm:text-[27px] sm:h-[36%] lg:text-[38px] text-kryptonite font-bold'>About Us</h1>
            <p className='flex-1 lg:py-[2%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed praesentium odit nemo accusantium, odio a?</p>  
          </article>
          <article className='p-3.5 sm:h-[22vh] lg:h-[24vh] flex flex-col bg-zinc-200'>
            <h2 className='text-[23px] sm:text-[24px] lg:text-[33px] text-kryptonite'>Motivasi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos animi dicta blanditiis aspernatur impedit reiciendis a sit. Atque nemo, perspiciatis dolorum id animi dolorem eveniet hic adipisci quas. Officia dicta optio cupiditate odit dolorum omnis sequi modi, architecto, tempore placeat ipsum quis maiores commodi porro nobis voluptatum adipisci recusandae!</p>
          </article>
          <div className='p-10 sm:min-h-[54vh] lg:min-h-[33vh] w-full flex max-sm:flex-col max-sm:gap-10 sm:py-9 sm:gap-[2vw] px-12 sm:justify-around lg:justify-evenly lg:px-8 '>
            {
              [...Array(2)].map((x, index)=>{
                return(
                  // <section className='flex-col sm:aspect-[4/4.7] sm:h-[43vh] lg:max-w-[43vw] bg-red-600 lg:aspect-[3/1] flex lg:flex-row'>
                  <section key={index} className='flex-col rounded-md sm:aspect-[4/4.7] sm:max-h-[42vh] sm:max-w-[44vw] lg:max-h-[35vh] lg:max-w-[44vw] lg:w-full overflow-hidden flex lg:flex-row'>
                    <div className='flex-1 overflow-hidden'>
                      <img src={masjidImage} alt="" className='h-full w-full object-cover'/>
                    </div>
                    <article className='p-3 h-[90%] sm:max-h-[55%] sm:p-4 sm:w-full lg:w-[40%] lg:max-h-none lg:h-full flex flex-col bg-zinc-200 '>
                      <h2 className='text-kryptonite text-[18px] sm:text-[20px] lg:text-[20px] flex items-center justify-center h-[30%]'>Visi</h2>
                      <p className='flex-1 max-lg:text-[15px] lg:text-[2.2vh]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat culpa consequatur incidunt autem quas ducimus illo in ex nemo.</p>
                    </article>
                  </section>
                )
              })
            }
            {/* <section className='h-[29vh] aspect-[2.5/1] flex'>
              <div className='flex-1'>
                <img src={masjidImage} alt="" className='h-full'/>
              </div>
              <article className='w-[40%] flex flex-col bg-zinc-200 rounded-md'>
                <h2 className='text-kryptonite text-[20px] flex items-center justify-center h-[30%]'>Visi</h2>
                <p className='flex-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat culpa consequatur incidunt autem quas ducimus illo in ex nemo.</p>
              </article>
            </section> */}
          </div>
          <article className='flex flex-col p-3.5 items-center justify-center text-center lg:h-[30vh]'>
            <h3 className='text-kryptonite text-[24px] sm:text-[25px]'>Prinsip</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquid at quas sint libero maxime. Dolores numquam aliquam non exercitationem ut similique natus accusantium dolorem pariatur sit, deserunt in dolore fuga? Voluptatem pariatur at amet, fuga esse soluta voluptates eligendi?</p>
          </article>
        </section>
      </main>
      
    </div>
  )
}

export default Home