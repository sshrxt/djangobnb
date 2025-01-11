"use client"

import React from 'react'
import Modal from './Modal'
import { useState } from 'react'
import useSignupModal from '@/app/hooks/useSignupModal'
import CustomButton from '../forms/CustomButton'

const SignupModal = () => {

    const SignUpModal = useSignupModal()

    const content = (
        <>
        <form action="" className='space-y-4'>
            <input placeholder="Your e-mail address"type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            <input placeholder="Reapeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">The error message</div>
            <CustomButton 
                label ="Submit"
                onClick={() => console.log("Submit on click")}
            />
        </form>

        </>
    )



    return (
        <Modal
            isOpen={SignUpModal.isOpen}
            close={SignUpModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal
