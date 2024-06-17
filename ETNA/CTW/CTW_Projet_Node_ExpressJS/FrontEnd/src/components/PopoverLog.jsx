import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'

export default function PopoverLog () {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <div className="flex gap-8">
        <Popover>
          <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
            Solutions
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom"
              className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 [--anchor-gap:var(--spacing-5)]"
            >
              <div className="p-3">
                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="/profil">
                  <p className="font-semibold text-white">Mon Profil</p>               
                </a>
              </div>
              <div className="p-3">
                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Deconnexion</p>
                </a>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>
      </div>
    </div>
  )
}