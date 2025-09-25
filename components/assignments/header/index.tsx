"use client"
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import logo from "@/public/logos/severance-dev-logo.png"

import { headerLinks } from '@/constants/header'
import { BellDot } from 'lucide-react'
import avatarPlaceholder from "@/public/placeholder-user.jpg"
import { Avatar, AvatarImage } from '@/components/ui/avatar'
const AssignmentHeader = () => {
  const pathname = usePathname()
  return (
    //main wrapper
    <div className="flex h-[50px] w-full items-center justify-center border-b-[1px] border-solid border-border-tertiary dark:border-border-tertiary">
        {/* content wrapper */}
        <div className=' flex gap-6 items-center w-3/5 justify-between'>
            {/* logo and pages section */}
            <div className='flex items-center gap-6'>
                {/* logo  */}
                <Image src={logo} alt='logo' height={10} width={10} className=' h-12 w-12' />

                {/* pages */}
                <div className=' flex gap-4'>
                    {
                        headerLinks.map((page,idx)=>{
                            const isActive = pathname === page.link
                            const isUpcoming = page.upcoming
                            if (isUpcoming) {
                                return (
                                    <span key={idx}
                                    className='font-light text-muted-foreground cursor-not-allowed'
                                    title='Coming soon'>{page.label}</span>
                                )
                            }
                            return (
                                <a key={idx}
                                className={`font-light ${isActive ? 'text-primary drop-shadow-[0_0_0.3px_currentColor]' : 'text-foreground'}`}
                                href={page.link}>{page.label}</a>
                            )
                        })
                    }
                </div>
            </div>

            {/* profile stuff */}
            <div className=' flex items-center justify-center gap-5'>
                <BellDot size={20}/>
                <Image src={avatarPlaceholder} alt='' className=' h-7 w-7 rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default AssignmentHeader