import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt='nlw eSports' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu{' '}
        <span className=' text-transparent bg-nlw-gradient bg-clip-text'>
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image1.png' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>
              League of Legends
            </strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image2.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image3.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS GO</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image4.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>
              World of warcraft
            </strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image5.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/image6.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
