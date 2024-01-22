import { useScrollPosition } from '../hooks/useScrollPosition';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  
  function changeSidebar(){
    const burger1 = document.querySelector('.burger1');
    const burger2 = document.querySelector('.burger2');
    const sidebar = document.querySelector('.sidebar');
    
    burger1.classList.toggle('change')
    burger2.classList.toggle('change')
    sidebar.classList.toggle('change')
  }

  function classNames(...classes){
    return classes.filter(Boolean).join(' ');
  }
  
  const scrollPosition = useScrollPosition();

  const location = useLocation();
  
  return (   
    <>
      <nav id="nav" className={classNames(
        scrollPosition < 100 && location.pathname === '/' ? 'text-white ' : 'bg-white text-black shadow',
        'w-full fixed top-0 z-30 transition'
      )}>
        <div className="flex flex-row justify-between px-10 lg:px-20 py-5">
          {/* logo */}
          <NavLink to="" className={classNames(
              scrollPosition < 100 && location.pathname === '/' ? 'text-black text-5xl font-extrabold tracking-wide drop-shadow-lg shadow-black' : 'hidden'
          )}>
            <h1>SUMBERJO</h1>
          </NavLink>
          <NavLink to="" className={classNames(
              scrollPosition >= 100 && location.pathname === '/' ? 'text-black text-5xl font-extrabold tracking-wide drop-shadow-lg shadow-black' : 'hidden'
          )}> 
            <h1>SUMBERJO</h1>
          </NavLink>
          <NavLink to="" className={classNames(
              location.pathname !== '/' ? 'text-black text-5xl font-extrabold tracking-wide drop-shadow-lg shadow-black' : 'hidden'
          )}>
            <h1>SUMBERJO</h1>
          </NavLink>

          {/* burger btn */}
          <div onClick={changeSidebar} className={classNames(
            scrollPosition < 100 && location.pathname === '/' ? '' : 'hidden',
            'burger1 lg:hidden z-50'
          )}>
            <div className="bar1 bg-white"></div>
            <div className="bar2 bg-white"></div>
            <div className="bar3 bg-white"></div>
          </div>

          <div onClick={changeSidebar} className={classNames(
            scrollPosition >= 100 && location.pathname === '/' ? '' : 'hidden',
            'burger2 lg:hidden z-50'
          )}>
            <div className="bar1 bg-blue1"></div>
            <div className="bar2 bg-blue1"></div>
            <div className="bar3 bg-blue1"></div>
          </div>

          <div onClick={changeSidebar} className={classNames(
            location.pathname !== '/' ? '' : 'hidden',
            'burger2 lg:hidden z-50'
          )}>
            <div className="bar1 bg-blue1"></div>
            <div className="bar2 bg-blue1"></div>
            <div className="bar3 bg-blue1"></div>
          </div>
          
          {/* sidebar mobile */}
          <ul className="sidebar lg:hidden bg-white text-black shadow fixed flex flex-col justify-start items top-0 bottom-0 -right-80 w-80 z-30 px-5 font-bold hover:text-blue" id="navUl">
            <li className="py-4 mt-20"><NavLink to="" className="mr-5">Beranda</NavLink></li>
            <li className="py-4"><NavLink to="blog" className="mr-5">Blog</NavLink></li>
            <li className="py-4"><a href="https://linktr.ee/tedi.temandisabilitas" className="bg-blue1 text-white rounded-full py-2 px-5" rel="noreferrer" target="_blank">Unduh Versi Beta</a></li>
          </ul>

          {/* responsive < pc */}
          <ul className="hidden lg:flex items-center">
            <li><NavLink to="" className={classNames(
              location.pathname === '/' ? 'font-bold' : 'font-normal',
              'mr-5'
            )}>Beranda</NavLink></li>
            <li><NavLink to="blog" className={classNames(
              location.pathname === '/blog' ? 'font-bold' : 'font-normal',
              'mr-5'
            )}>Blog</NavLink></li>
            {/* <li><a href="https://linktr.ee/tedi.temandisabilitas" className={classNames(
              scrollPosition < 100 ? 'bg-white text-blue1' : 'bg-blue1 text-white',
              'rounded p-2 transition'
            )}>Unduh Versi Beta</a></li> */}
            <li><a href="https://wa.me/082138316616?text=Halo Ibu Dukuh Sumberjo, saya ingin menanyakan tentang..."  className="rounded p-2 transition bg-blue3 text-blue1" rel="noreferrer" target="_blank">
              Hubungi Kami
            </a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;