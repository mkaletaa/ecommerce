import React, {useEffect} from 'react'
import '../styles/home.css'
import '../styles/books.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faBasketShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faQuoteLeft, faQuoteRight}  from '@fortawesome/free-solid-svg-icons'
import { convertCompilerOptionsFromJson, setConstantValue } from 'typescript'
import {Link} from 'react-router-dom'

export default function Home() {

  useEffect(()=>  {
    window.scrollTo(0, 0);
  },[]);
  
  const bookObj = [{ 
    id: '8exSvgAACAAJ',
    img: 'http://books.google.com/books/content?id=8exSvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Harry Potter and The Chamber of Secrets',
    price: '25$',
    bestseller: false
  },
  {
    id: 'crbWwAEACAAJ',
    img: 'http://books.google.com/books/content?id=crbWwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Animal Liberation',
    price: '25$',
    bestseller: true
  },
  {
    id: '7_H8AwAAQBAJ',
    img: 'http://books.google.com/books/content?id=7_H8AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Superintelligence',
    price: '25$',
    bestseller: false
  },
  {
    id: 'oeAcYb_Gq8cC',
    img: 'http://books.google.com/books/content?id=oeAcYb_Gq8cC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Who Is Bill Gates?',
    price: '28.49$',
    bestseller: false
  },
  {
    id: 'xp5CvgAACAAJ',
    img: 'http://books.google.com/books/content?id=xp5CvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'Meditations',
    price: '25$',
    bestseller: false
  },
  {
    id: 'wpfOoQEACAAJ',
    img: 'http://books.google.com/books/content?id=wpfOoQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: 'World War II',
    price: '25$',
    bestseller: false
  },
  {
    id: 'nc1UAAAAYAAJ',
    img: 'http://books.google.com/books/content?id=nc1UAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "Euclid's elements",
    price: '25$',
    bestseller: true
  },
  {
    id: 'DqLPAAAAMAAJ',
    img: 'http://books.google.com/books/content?id=_NsHAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "The Lord of The Rings",
    price: '25$',
    bestseller: true
  },
  {
    id: 'TsdEzDtSdl4C',
    img: 'http://books.google.com/books/content?id=TsdEzDtSdl4C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7178qY5LVcCWogq4HkIKwIs_95m_IZv1Cu2Ow5jxebDCwPMQHXpcwyj7cKGHtWVfywwvHZhfM_3nFlkFP2EszdEUH5n5d300sotW0I-C0gzGbiwIw3S9Sdv0bj43GhbmuOiCSOo&source=gbs_api',
    title: "The Next 100 Years",
    price: '25$',
    bestseller: true
  },
  {
    id: 'IwgpEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=IwgpEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72-8_UavupCB_qHX-FPstyXhCqU7AKEnlqhJk_Ea6W1oPAiQRWsyelHZYlAgSbHyysVHnAiMZcxLPbwe6moWlNdjTW8-TYPMv1-y8fPayBNdEbF0bIby2c0KoQP6rQCX-Upoe4R&source=gbs_api',
    title: 'To Paradise',
    price: '58.39$',
    new: true,
  },
  {
    id: '0fehDAAAQBAJ',
    img: 'http://books.google.com/books/content?id=0fehDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "The little prince",
    price: '9.33$',
    bestseller: false
  },
  {
    id: '8u9KEAAAQBAJ',
    img: 'http://books.google.com/books/content?id=8u9KEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "The Witcher Volume 6: Witch's Lament",
    price: '25$',
    bestseller: false
  },
]

  return (
    <div className='component' >

    <div id="books" className='w-full bg-black'>
      <p className='text-slate-100 relative' >Welcome to <span className='whitespace-nowrap'>Book Store</span></p>  
      <p className='text-slate-100 relative' >Looking for a book? Book Store is a place for you!</p>  
      <FontAwesomeIcon id='caret' icon={faCaretDown} className='text-slate-100 absolute'/>
      <div id="books1" className='w-full h-full absolute'></div>
      <div id="books2" className='w-full h-full absolute'></div>
    </div>
    
    <div id='homeItems'>
      <div id='recommended'>Recommended by Book Store</div>

     { bookObj.map((a: any, i: any)=>{
        return (
          <Link key={i} to={`/book/${bookObj[i].id}`}><div className="item">
          <img src={bookObj[i].img} alt="" className='bookImg'/>
          {bookObj[i].bestseller ? <div className='bestseller'>bestseller</div> : null}
          {bookObj[i].new ? <div className='new'>new</div> : null}
                  <div className="data">
                    <br />
                    <br />
                    <br />
                    <div className='title'>{bookObj[i].title}</div>
                    <div className='price'>{bookObj[i].price}</div>
                  </div>
            </div></Link>
          )
        })
      }

      <Link to='/books' id='moreBooks'>
        search for more books  <FontAwesomeIcon icon={ faMagnifyingGlass} />
        </Link>
    </div>


    <div id='whyUs' className='mt-0' >     
    
    <p id='whyUsP' className=' text-center mx-auto'>Why should you order your books in Book Store? <br /> Here are 3 reasons:</p>

    <div id="reasons">
      <div>
       <p className=' w-fit mx-auto  text-center'>We offer over 10,000 books of all genres</p>
      
       <img src={require('../images/books.svg').default} alt='mySvgImage' />
       </div>

       <div>
       <p className=' w-fit mx-auto  text-center'>The prices are low, on average you pay 20% <br /> less than with competetive companies</p>
      
       <img src={require('../images/money.svg').default} alt='mySvgImage' />
       </div>

       <div>
       <p className=' w-fit mx-auto  text-center'>We provide a quick delivery
       <br /> (up to 2 business days)</p>
      
       <img src={require('../images/delivery.svg').default} alt='mySvgImage' />
       </div>
    </div>

    </div>

    </div>
  )
}
