import React from "react"
import Image from "next/image"
import ContactButton from "@/app/components/ContactButton"
import PropertyList from "@/app/components/properties/PropertyList"

const MyReservationPage = () => {
    return (
      <main className="max-w-[1500px] mx-auto px-6 pb-6"> 
        <h1 className="my-6 text-2xl">My Reservations</h1>

        <div className="space-y-4">
            <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-400 rounded-xl">
                <div className="col-span-1">
                    <div className="relative overflow-hidden aspect-square rounded-xl">
                        <Image 
                            fill
                            src="/beach_1.jpg"
                            className="hover:scale-110 object-cover transition h-full w-full"
                            alt="Beach House"
                        />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <h2 className="mb-4 text-xl"> Property Name</h2>
                    <p className="mb-2"><strong>Check in Date:</strong> 14/2/2024</p>
                    <p className="mb-2"><strong>Check Out Date:</strong> 24/2/2024</p>

                    <p className="mb-2"><strong>Number of Nights: </strong> 3 </p>
                    <p className="mb-2"><strong>Total Price: </strong>$200 </p>

                    <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                        Go to property
                    </div>

                </div>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-400 rounded-xl">
                <div className="col-span-1">
                    <div className="relative overflow-hidden aspect-square rounded-xl">
                        <Image 
                            fill
                            src="/beach_1.jpg"
                            className="hover:scale-110 object-cover transition h-full w-full"
                            alt="Beach House"
                        />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <h2 className="mb-4 text-xl"> Property Name</h2>
                    <p className="mb-2"><strong>Check in Date:</strong> 14/2/2024</p>
                    <p className="mb-2"><strong>Check Out Date:</strong> 24/2/2024</p>

                    <p className="mb-2"><strong>Number of Nights: </strong> 3 </p>
                    <p className="mb-2"><strong>Total Price: </strong>$200 </p>

                    <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                        Go to property
                    </div>

                </div>
            </div>
        </div>
      </main>
    )
}

export default MyReservationPage