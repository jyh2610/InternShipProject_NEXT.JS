import Image from "next/image";
import { useEffect } from 'react';

export default function Home() {
  // 카카오 sdk 초기화
  useEffect(()=>{
    init({apiKey:'YOUR_KAKAO_CLIENT_ID'})
  },[])
  return (
   <div>
    
   </div>
  );
}
