import React, {useState, useRef} from 'react'
import {RootState} from '../redux/store'
import {useSelector} from 'react-redux'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'
import {faBasketShopping}  from '@fortawesome/free-solid-svg-icons'
import {faSquareXmark}  from '@fortawesome/free-solid-svg-icons'
import {faBars}  from '@fortawesome/free-solid-svg-icons'
import '../styles/topnav.css'
import {Link, useNavigate} from 'react-router-dom'
const logo = require("../images/logo.png")

export default function Topnav() {
  const books = useSelector((state:RootState)=>state.books.value)
  const navigate = useNavigate()
  const [search, setSearch] = useState('-100px')
  const [title, setTitle] = useState('')
  const [menu, setMenu] = useState(true)
  const searchBar = React.useRef<HTMLInputElement>(null);

  function searchBooks(e?: string):void{
    if((e==='Enter' || e===undefined) && title!=='' ) {
      setSearch('-100px')
      navigate(`/books/${title.replace(/ /g,'').toLowerCase()}`)
    } else searchBar.current?.focus()
  }

  return (
    <>

    <div id='topBar' className='w-screen top-0'>
    <Link to='/' style={{display: 'inline-block'}}><img id='topBarLogo' src={String(logo)} alt="" width='150px' className='hover:cursor-pointer' /></Link>

    <div id="topBarLinks" className={`text-black font-semibold ${!menu && 'open'}`}>
      <Link onClick={e=>setMenu(true)} to='/new'>NEW</Link>
      <Link onClick={e=>setMenu(true)} to='/bestsellers'>BESTSELLERS</Link>
      <Link onClick={e=>setMenu(true)} to='/favourite'>FAVOURITE</Link>
    <FontAwesomeIcon id='xMark' className='text-red-500 hover:text-red-400 hover:cursor-pointer' icon={faSquareXmark} onClick={e=>setMenu(true)} />
    </div>

  <div id="topBarIcons">
    <Link to='/'>
    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-2xl' icon={ faHouse} />
    </Link>

    <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-2xl' icon={faMagnifyingGlass} 
    onClick={e=>{ searchBar.current?.focus();  setSearch('100px')}} />

    <div id="basket">
    <Link to='/cart'>
      {(books && books.length>0) ?     
      <span id="notification" className='bg-orange-400 rounded-full bottom-0 left-0'></span>
    : <></>}

      <FontAwesomeIcon className='topBarIcons text-black hover:cursor-pointer text-2xl' icon={faBasketShopping} />
    </Link>
    </div>

    <FontAwesomeIcon id='hamburger' className='topBarIcons text-black hover:cursor-pointer text-2xl' icon={faBars} onClick={e=>{setMenu(false); setSearch('-100px')}} />
    </div>
  </div>

    <div id="searchBar" className='rounded-md text-black font-semibold' 
      style={{top: search}}>
      <input id='searchInput' className='rounded-l-sm ' placeholder='type anything' type='text' value={title} ref={searchBar}
      onChange={e=>setTitle(e.target.value)} 
      onKeyDown={e=>searchBooks(e.key)} 
      onBlur={e=>setSearch('-100px')}>
      </input>
      <FontAwesomeIcon id='glass' className=' text-dimgray hover:cursor-pointer text-md md:text-xl' icon={faMagnifyingGlass} 
      onClick={e=>searchBooks()}  />
      
      <div id="shadow"></div>

    </div>

    </>
  )
}
