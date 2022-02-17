import Image from 'next/image';
import Link from 'next/link'

import '../styles/globals.css'

function Button({ children }) {
  return (
    <>
      <span className="flex h-11 justify-center items-center p-2 border-2 border-[#b3aa11] rounded-2xl text-center w-28 cursor-pointer hover:bg-[#b3aa11]">
        {children}
      </span>
    </>
  )
}

function Navbar() {
  const routers = [
    { name: "Home", path: "/" },
    { name: "Getting a  Taxi", path: "/" },
    { name: "Become a Driver", path: "/" },
    { name: "Mobile App", path: "/" },
    { name: "Contact Us", path: "/" }
  ];

  return (
    <div className='flex justify-between items-center p-3 px-6'>
      <div>
        <h1 className='text-2xl'><code>T A X I</code></h1>
      </div>

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-x-8">
          {routers.map(r => {
            return <Link href={r.path}><h1 className='hover:text-[#fcee06]	 hover:border-b-2 hover:border-[#fcee06] text-sm cursor-pointer'>{r.name}</h1></Link>
          })}
        </div>

        <div className='flex items-center pl-20 gap-x-3'>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <hr class="border-[#444040]"></hr>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
