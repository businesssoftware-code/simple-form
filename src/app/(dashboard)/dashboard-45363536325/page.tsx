
export const dynamic = "force-dynamic";

import React, { Suspense } from 'react';

import { notFound } from 'next/navigation';
// import MainPage from './main-page';
import LoadingComponent from '@/app/components/loading-component';



const AsyncDashboardHamperPage = async() => {

   console.log(process.env.NEXT_PUBLIC_API_BASE_POINT+`/enquiry`, "ldskhifghf");
  try{

    const [data] = await Promise.all([

      fetch(process.env.NEXT_PUBLIC_API_BASE_POINT+`/enquiry`, {
        cache: 'no-store',
      }),
  
    ]);
  
    const responseData = await data.json();


    if(responseData?.status!==200){

      return notFound();

    }


  
 
   console.log("response",responseData.data);
  
    return null;

  }
  catch(err){
    console.log(err);
    notFound();
  }


 
};

export default function Page() {
  return (

      <Suspense fallback={<LoadingComponent/>}>

        <AsyncDashboardHamperPage />

      </Suspense>

  );
}
