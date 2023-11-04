import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to Next App
        <ul className='flex flex-column justify-center p-10'>
          {/* Link tag in next js readies/renders all paths at built time, thus enforcing server side rendering */}
          <li><Link href = {'/about'}>About</Link></li>
          {/* <li><a href="./about">About</a></li> */}
          <li><Link href = {'/contact'}>Contact Us</Link></li>
          {/* <li><a href="./contact">Contact Us</a></li> */}
        </ul>
      </h1>
    </div>
  )
}
