import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import logo from '../assets/Logo.png';
import Button from '../components/Button';
import { useState } from 'react';

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? 'hidden' : 'flex'
        }`}
      >
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
        <a href='/'>
          <img className='h-6' src={logo} alt='logo' />
        </a>
      </div>
      <form
        className={` gap-4 flex-grow justify-center ${
          showFullWidthSearch ? 'flex' : 'hidden md:flex'
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type='button'
            size='icon'
            variant='ghost'
            className='flex-shrink-0'
          >
            <ArrowLeft />
          </Button>
        )}
        <div className='flex flex-grow max-w-[600px]'>
          <input
            type='search'
            placeholder='search'
            className='py-1 px-4 text-lg w-full rounded-l-full border-secondary-border shadow-inner shadow-secondary border focus:border-blue-500 outline-none '
          />
          <Button className='py-2 px-4 border border-l-0 border-secondary-border rounded-r-full'>
            <Search />
          </Button>
        </div>
        <Button type='button' size='icon' className='flex-shrink-0'>
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? 'hidden' : 'flex'
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          className='md:hidden'
          size='icon'
          variant='ghost'
        >
          <Search />
        </Button>
        <Button className='md:hidden' size='icon' variant='ghost'>
          <Mic />
        </Button>
        <Button size='icon' variant='ghost'>
          <Upload />
        </Button>
        <Button size='icon' variant='ghost'>
          <Bell />
        </Button>
        <Button size='icon' variant='ghost'>
          <User />
        </Button>
      </div>
    </div>
  );
}
