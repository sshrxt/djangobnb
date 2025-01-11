import React from "react";
import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
import ConversationDetail from "@/app/components/inbox/ConversationDetail";


const ConversationPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <ConversationDetail /> 
    </main>
  )
}

export default ConversationPage