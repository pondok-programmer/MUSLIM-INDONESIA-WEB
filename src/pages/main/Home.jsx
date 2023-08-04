import { PiUserCircleFill, PiMagnifyingGlass, PiCaretDown, PiCalendar, }  from 'react-icons/pi'
import Slider from '@ant-design/react-slick'
import masjidImage from "../../assets/example/masjid.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsArrowDown, BsArrowUp, BsBell, BsBellFill, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { useContext } from 'react'
import { Context } from '../../context/StateContext';

const Home = () => {

  var simple = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          slidesToScroll: 1
        }
      }
    ]
  };

  const events = ["Kajian", "Event", "Lomba"]

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
        variableWidth: true,
        accessibility: true,
        arrows: true,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        accessibility: true,
        arrows: true,
        variableWidth: true,
      }
    },
  ],
};
const {masjidSource} = useContext(Context)

  return (
    <div className="min-h-screen h-auto flex flex-col w-full">
      <button className='rounded-full p-2 bg-kryptonite fixed bottom-8 left-[50%] z-10 -translate-x-[50%]'>
        <BsArrowDown className='text-white text-[26px]'/>
      </button>
      <header>
        <section className='text-white '>
          <div className='w-full flex bg-kryptonite justify-center flex-col items-center py-1'>
            <h1 className='text-[25px] font-bold'>Rabu, 26 Juli 2023</h1>
            <h3 className='text-sari'>8 Muharam 1445 H</h3>
          </div>
          <div className='flex justify-center items-center bg-gradient-to-b from-kryptonite to-white from-[50%] to-[50%] py-3'>
            <div className='w-[44vw] h-[54px] border flex border-gray-400 rounded-[10rem] overflow-hidden bg-white'>
              <input type="search" name="" id="" className='flex-1 text-[18px] pl-3 text-black focus-visible:outline-none'/>
              <PiMagnifyingGlass className='w-[60px] p-2 text-black text-opacity-50 flex justify-center items-center h-full'/>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
            <ul className='[&_li]:w-auto text-[15px] flex text-black gap-6'>
              <li className='flex items-center'>Masjid <PiCaretDown className='px-0.5'/></li>
              <li className='flex items-center'>Restoran <PiCaretDown className='px-0.5'/></li>
              <li className='flex items-center'>TPQ <PiCaretDown className='px-0.5'/></li>
            </ul>
          </div>
        </section>
      </header>
      <main className='h-auto'>
        <section className='flex h-[22vh] justify-center items-center '>
          <div className='text-center'>
            <h1 className='text-[26px]'>Assalamualaikum,</h1>
            <h1 className='text-[28px]'>Selamat datang <span className='font-bold'>Rafi Zimran</span></h1>
            <h1 className='text-[28px]'>di <span className='font-bold text-sari'>Muslim</span><span className='font-bold text-kryptonite'>Indonesia</span></h1>
          </div>
        </section>
        <section className='h-[49vh] '>
          <div className='w-full h-[80%] flex gap-16 justify-center items-center'>
            {cards.map((index)=>{
              console.log(index.image);
              return(
                <div className='aspect-[4/2.5] w-[380px] rounded-xl '>
                  <img src={index.image} alt="" className='h-full w-full'/>
                </div>
              )
            })}
          </div>
        </section>
        <section className='h-screen flex flex-col '>
          {events.map((acara)=>{
            return(
              <div className='w-full '>
                <h1 className='font-bold text-[23px] text-left w-full px-5'>{acara}</h1>
                <div className='bg-black bg-opacity-30'>
                  <Slider {...settings}>
                    {
                      kajian.map((index)=>{
                        return(
                          <div className='!h-[24vh] text-[15px] !flex flex-col rounded-md overflow-hidden items-end justify-end my-1 '>
                            <div className='flex-1 w-full h-12 flex justify-center overflow-hidden '>
                              <img src={masjidImage} alt="" className='w-full h-full'/>
                            </div>
                            <div className='bg-zinc-300 flex justify-between items-center p-2.5 w-full h-[19%]'>
                              <p>{index.person}</p>
                              <div className='flex items-center'>
                                <PiCalendar className='mx-2 text-lime-700'/>
                                <p> {index.date}</p>
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
        <section className='h-[154vh] flex flex-col items-center justify-start text-center'>
          <article className='h-[25vh] flex flex-col'>
            <h1 className='text-[40px] text-kryptonite py-2 font-bold'>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed praesentium odit nemo accusantium, odio a?</p>  
          </article>
          <article className='h-[24vh] flex flex-col bg-zinc-200'>
            <h2 className='text-[34px] text-kryptonite'>Motivasi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos animi dicta blanditiis aspernatur impedit reiciendis a sit. Atque nemo, perspiciatis dolorum id animi dolorem eveniet hic adipisci quas. Officia dicta optio cupiditate odit dolorum omnis sequi modi, architecto, tempore placeat ipsum quis maiores commodi porro nobis voluptatum adipisci recusandae!</p>
          </article>
          <div className='h-[33vh] w-full flex p-10 justify-between '>
            <div className='h-[29vh] aspect-[2.5/1] flex'>
              <div className='flex-1'>
                <img src={masjidImage} alt="" className='h-full'/>
              </div>
              <article className='w-[40%] flex flex-col bg-zinc-200 rounded-md'>
                <h2 className='text-kryptonite text-[20px] flex items-center justify-center h-[30%]'>Visi</h2>
                <p className='flex-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat culpa consequatur incidunt autem quas ducimus illo in ex nemo.</p>
              </article>
            </div>
            <div className='h-[29vh] aspect-[2.5/1] flex'>
              <div className='flex-1'>
                <img src={masjidImage} alt="" className='h-full'/>
              </div>
              <article className='w-[40%] flex flex-col bg-zinc-200 rounded-md'>
                <h2 className='text-kryptonite text-[20px] flex items-center justify-center h-[30%]'>Visi</h2>
                <p className='flex-1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat culpa consequatur incidunt autem quas ducimus illo in ex nemo.</p>
              </article>
            </div>
          </div>
          <article className='flex flex-col items-center justify-center text-center h-[30vh]'>
            <h3 className='text-kryptonite text-[25px]'>Prinsip</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquid at quas sint libero maxime. Dolores numquam aliquam non exercitationem ut similique natus accusantium dolorem pariatur sit, deserunt in dolore fuga? Voluptatem pariatur at amet, fuga esse soluta voluptates eligendi?</p>
          </article>
        </section>
      </main>
      <footer className='h-[calc(33vh-4rem)] flex flex-col justify-between items-center w-full bg-kryptonite'>
        <div className='w-full flex justify-center items-center from-white to-kryptonite from-[50%] to-[50%] bg-gradient-to-b'>
          <button className='bg-yellow-500 rounded-full border-kryptonite border-4 ' onClick={()=>{scrollTo(top)}}><BsArrowUp className='text-[35px] text-lime-700 p-1'/></button>
        </div>
        <div className='relative w-full flex-1'>
          <div className='absolute top-0 text-white right-8 w-auto h-auto text-center'>
            <h2>CONTACT</h2>
            <ul className='flex justify-center gap-3 [&_li]:text-[18px]'>
              <li>
                <a href=""><BsInstagram/></a>
              </li>
              <li>
                <a href=""><BsWhatsapp/></a>
              </li>
              <li>
                <a href=""><BsFacebook/></a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-white py-2'>
          <h6 className='text-[14px]'>&copy Copyright Muslim Indonesia 2023</h6>
        </div>
      </footer>
    </div>
  )
}

export default Home