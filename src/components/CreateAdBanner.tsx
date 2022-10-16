import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner(){
    return(
        <div className="pt-1 bg-nlw-gradient rounded-lg mt-8 w-[900px] h-[500px]">
           <div className="bg-[#2A2634] px-6 py-6 rounded-md">
            <strong className="text-white text-base font-black text-center block">Não encontrou seu duo?</strong>
            <Dialog.Trigger className="text-zinc-400 text-xs hover:bg-[#35303e] rounded flex w-[700px] items-center ml-auto mr-auto gap-3 mt-4 justify-center">
                <MagnifyingGlassPlus size={24} />
                Publique um anúncio para encontrar novos players!
            </Dialog.Trigger>
        </div>
    </div>
  )
}