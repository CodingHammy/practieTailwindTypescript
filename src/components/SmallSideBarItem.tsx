import { ElementType } from 'react';
import { buttonStyles } from './Button';
import { twMerge } from 'tailwind-merge';

type SmallSideBarItemsProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

export default function SmallSideBarItem({
  Icon,
  title,
  url,
}: SmallSideBarItemsProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        'py-4 px-1 ml-3 flex flex-col rounded-lg items-center gap-1',
      )}
    >
      <Icon className='w-6 h-6' />
      <div className='text-sm'>{title}</div>
    </a>
  );
}
