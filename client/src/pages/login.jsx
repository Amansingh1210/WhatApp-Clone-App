import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {FcGoogle} from 'react-icons/fc'

function login() {
  const router = useRouter();
  const handleLogin = async ()=>{
    const provider = new GoogleAuthProvider()
    const {user:{displayName: name , email , photoUrl : profileImage}} = await signInWithPopup(firebaseAuth,provider);
    console.log(email);
    try {
      if(email){
        const {data} = await axios.post(CHECK_USER_ROUTE,{email});
        console.log(data);
        if(!data.status){
          router.push('/onboarding')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2">
        <Image src="/whatsapp.gif" priority alt="Whatsapp"height={300} width={300} />
        <span className="text-7xl text-white">Whatsapp</span>
      </div>
      <button className="flex items-center justify-center gap-7  bg-search-input-container-background p-5 rounded-lg" onClick={handleLogin}>
        <FcGoogle className="text-4xl"/>
        <span className="text-white text-2xl">Login to google</span>
      </button>
    </div>
  );
}

export default login;
