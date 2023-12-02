import Image from 'next/image'

export default function Navbar() {
  return (
    <header className='flex items-center w-full px-6 h-16 shadow-md'>
      <nav className='flex items-center m-auto w-[min(100%,1400px)]'>
        <div className='w-full'>Logo</div>
        <div className='flex items-center gap-3'>
          <a href='/about' className='p-2'>
            About
          </a>
          <a href='/projects' className='p-2'>
            Projects
          </a>
        </div>
      </nav>
    </header>
  )
}
