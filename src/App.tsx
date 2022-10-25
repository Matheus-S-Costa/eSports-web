import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
import axios from 'axios';
import "./styles/main.css";
//importacoes pertinentes (axios, react, radix, css)


import logoImg from "./assets/logo.svg";
import { CreateAdModal } from './components/CreateAdModal';
//importacoes de logo e anuncio
interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}


function App() {
  const [games, setGames] = useState<Game[]>([])


  useEffect(() => {
    axios('http://localhost:4444/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 img w-96 h-96">
      <img src={logoImg} alt="" />

      <h1 className="text-4xl text-center text-white font-black mt-12">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
      {games.map(game => {
        return (
          <GameBanner
           key={game.id}
           bannerUrl={game.bannerUrl}
           title={game.title} 
           adsCount={game._count.ads} />
        )
      })}

      </div>

      <Dialog.Root>
          <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
      
    </div>
  )
}

export default App
