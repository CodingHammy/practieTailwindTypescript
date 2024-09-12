import PageHeader from './layouts/PageHeader';
import CategoryPills from './components/CategoryPills';
import VideoGridItem from './components/VideoGridItem';
import { categories, videos } from './data/home';
import { useState } from 'react';

function App() {
  const [selectedCatergory, setSelectedCatergory] = useState(categories[0]);
  return (
    <div className='max-h-screen bg-white flex flex-col'>
      <PageHeader />
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
        <div>sidebar holder</div>
        <div className='overflow-x-hidden px-8 pb-4'>
          <div className='sticky top-0 bg-white z-10 pb-4'>
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCatergory}
              onSelect={setSelectedCatergory}
            />
          </div>
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {videos.map(video => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
