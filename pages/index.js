import Head from 'next/head'
import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from '../components/Button'
import Card from '../components/Card'

function Input({ name, id, placeholder, type = "text" }) {
  return (
    <input className='p-2' type={type} name={name} id={id} placeholder={placeholder}></input>
  )
}

function Index() {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <div className='flex justify-between items-center mt-20 p-3 px-16'>
        <div className='flex-col text-2xl grid gap-y-3'>
          <h1 className='text-4xl'><span className='border-b-4 border-[#FFFF00]'>Taksi</span> mi Arıyorsun? <br></br>Hemen kaydol ve taksini çağır.</h1>
          <Button>Giriş Yap</Button>
          <div className='flex items-center gap-x-6'>
            <img className='cursor-pointer hover:translate-y-4 hover:duration-1000' width={180} src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img>
            <img className='cursor-pointer hover:translate-y-4 hover:duration-1000' width={180} src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"></img>
            <img className='cursor-pointer hover:translate-y-4 hover:duration-1000' width={180} src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"></img>
          </div>
        </div>
        <Card type={"gray"}>
          <div className='p-3 pb-3'>
            <h1 className='text-2xl text-white font-bold mb-3'>Register</h1>
            <div className='flex-col flex justify-center items-center grid gap-y-6'>
              <Input name="name" id="name" placeholder="İsim Soyisim"></Input>
              <Input type={"email"} name="email" id="email" placeholder="Email"></Input>
              <div className='flex items-center'>
                <ReactFlagsSelect
                  fullWidth={false}
                  showSelectedLabel={false}
                  placeholder={"Ülke"}
                  onSelect={code => setSelected(code)}
                  selected={selected}
                  className="bg-white h-10"
                />
                <Input name="phone" id="phone" placeholder="Telefon"></Input>
              </div>
              <Input type={"password"} name="password" id="password" placeholder="Şifre"></Input>
              <Button type="success">Submit</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function InfoHeader() {
  return (
    <div className='flex justify-center items-center'>
    </div>
  )
}

export default function Home() {
  return (
    <div className='grid gap-y-12'>
      <Head>
        <title>YollaBiTaksi</title>
        <meta name="description" content="hızlı ve güvenilir şekilde taksi çağırma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index></Index>
      <InfoHeader></InfoHeader>
    </div>
  )
}
