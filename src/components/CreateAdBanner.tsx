import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner(){
    return(
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8">
           <div className="bg-[#2A2634] px-6 py-6 rounded-md">
            <strong className="text-white text-base font-black text-center block">Não encontrou seu duo?</strong>
            <Dialog.Trigger className="text-zinc-400 text-xs hover:bg-[#35303e] rounded flex items-center gap-3 mt-4 ">
                <MagnifyingGlassPlus size={24} />
                Publique um anúncio para encontrar novos players!
            </Dialog.Trigger>
        </div>
    </div>
  )
}