import React from "react";
import Image from "next/image";
import notebook from "@/app/public/image/notebook.jpg"
export default function Home(){
  return(
    <div className="container">
   
    <div className="content">
      <h1>Welcome to My Notebook</h1>
      <p>This is a world of Wonders of Notebook.</p>
    </div>
    <div>
      <Image src={notebook} alt="Notebook" width={700} height={600} />
    </div>
  </div>

  )
}