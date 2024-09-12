import { Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import logo from '../assets/Logo.png';
import Button from '../components/Button';

export default function PageHeader() {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
      <div className='flex gap-4 items-center flex-shrink-0'>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
        <a href='/'>
          <img className='h-6' src={logo} alt='logo' />
        </a>
      </div>
      <form className='flex gap-4 flex-grow justify-center'>
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
      <div className='flex flex-shrink-0 md:gap-2'>
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
