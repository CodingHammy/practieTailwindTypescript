import {
  Clapperboard,
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
} from 'lucide-react';
import SmallSideBarItem from '../components/SmallSideBarItem';
import LargeSideBarSection from '../components/LargeSideBarSection';
import LargeSideBarItems from '../components/LargeSideBarItems';
import { playlists, subscriptions } from '../data/sidebar';
import { useSidebarContext } from '../contexts/sidebarContext';
import { PageHeaderFirstSection } from './PageHeader';

export default function SideBar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ${
          isLargeOpen ? 'lg:hidden' : 'lg:flex'
        }`}
      >
        <SmallSideBarItem Icon={Home} title='Home' url='/' />
        <SmallSideBarItem Icon={Repeat} title='Shorts' url='/shorts' />
        <SmallSideBarItem
          Icon={Clapperboard}
          title='Subscriptions'
          url='/subscriptions'
        />
        <SmallSideBarItem Icon={Library} title='Library' url='/library' />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className='lg:hidden fixed inset-0 z-[98] bg-secondary-dark opacity-50'
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col lg:flex gap-2 px-2  ${
          isLargeOpen ? 'lg:flex' : 'lg:hidden'
        } ${isSmallOpen ? 'flex z-[99] bg-white max-h-screen' : 'hidden'}`}
      >
        <div className='lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white'>
          <PageHeaderFirstSection />
        </div>
        <LargeSideBarSection>
          <LargeSideBarItems isActive Icon={Home} title='Home' url='/' />
          <LargeSideBarItems
            Icon={Clapperboard}
            title='Subscriptions'
            url='/subscriptions'
          />
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection visableItemCount={5}>
          <LargeSideBarItems Icon={Library} title='Library' url='/library' />
          <LargeSideBarItems Icon={History} title='History' url='/history' />
          <LargeSideBarItems
            Icon={PlaySquare}
            title='Your Videos'
            url='/your-videos'
          />
          <LargeSideBarItems
            Icon={Clock}
            title='Watch Later'
            url='/playlist?list=WL'
          />
          {playlists.map(playlist => (
            <LargeSideBarItems
              key={playlist.id}
              Icon={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection title='Subscriptions' visableItemCount={7}>
          {subscriptions.map(subs => (
            <LargeSideBarItems
              key={subs.id}
              Icon={subs.imgUrl}
              title={subs.channelName}
              url={`/@${subs.id}`}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection title='Explore'>
          <LargeSideBarItems Icon={Flame} title='Trending' url='/trending' />
          <LargeSideBarItems
            Icon={ShoppingBag}
            title='Shopping'
            url='/shopping'
          />
          <LargeSideBarItems Icon={Music2} title='Music' url='/music' />
          <LargeSideBarItems Icon={Film} title='Movies & TV' url='/movies-tv' />
          <LargeSideBarItems Icon={Radio} title='Live' url='/live' />
          <LargeSideBarItems Icon={Gamepad2} title='Gaming' url='/gaming' />
          <LargeSideBarItems Icon={Newspaper} title='News' url='/news' />
          <LargeSideBarItems Icon={Trophy} title='Sports' url='/sports' />
          <LargeSideBarItems
            Icon={Lightbulb}
            title='Learning'
            url='/learning'
          />
          <LargeSideBarItems
            Icon={Shirt}
            title='Fashion & Beauty'
            url='/fashion-beauty'
          />
          <LargeSideBarItems Icon={Podcast} title='Podcasts' url='/podcasts' />
        </LargeSideBarSection>
      </aside>
    </>
  );
}
