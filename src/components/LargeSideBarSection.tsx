import { Children, ReactNode, useState } from 'react';
import Button from './Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

type LargeSideBarSectionProps = {
  children: ReactNode;
  title?: string;
  visableItemCount?: number;
};

export default function LargeSideBarSection({
  children,
  title,
  visableItemCount = Number.POSITIVE_INFINITY,
}: LargeSideBarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visableItemCount;
  const visableChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visableItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  return (
    <div>
      {title && <div className='ml-4 mt-2 text-lg mb-1'>{title}</div>}
      {visableChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded(e => !e)}
          variant='ghost'
          className='w-full flex items-center rounded-lg gap-4 p-3'
        >
          <ButtonIcon className='w-6 h-6' />
          <div>{isExpanded ? 'Show Less' : 'Show More'}</div>
        </Button>
      )}
    </div>
  );
}
