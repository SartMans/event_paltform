import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import NaveItems from './NaveItems'
import { Separator } from '../ui/separator'

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image 
                src='/assets/icons/menu.svg'
                alt='menu'
                width={24}
                height={24}
                className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6 bg-white'>
                <Image 
                    src='/assets/images/logo.svg'
                    alt='logo'
                    width={128}
                    height={38}
                    className='cursor-pointer' />
                    <Separator/>
               <NaveItems/>
            </SheetContent>
        </Sheet>
    </nav>
  )
}
export default MobileNav