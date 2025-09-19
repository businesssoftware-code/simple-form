export const dynamic = "force-dynamic";

import React, { Suspense } from 'react';

import MainPage from './main-page';
import LoadingComponent from '@/app/components/loading-component';
import { notFound } from 'next/navigation';


const AsyncDashboardHamperPage = async() => {

  try{

    const [data] = await Promise.all([

      fetch(process.env.NEXT_PUBLIC_API_BASE_POINT+`/enquiry`, {
        cache: 'no-store',
      }),
  
    ]);
  
    const responseData = await data.json();

 
  
    return <MainPage 

    data={
        responseData?.map((el:{
            id:number,
            name:string,
            contactNumber:string,
            email:string,
            companyName:string,
            address:string,
            products:[
                {
                    productName:string,
                    qty:number,
                    price:number
                }
            ]
        })=>{
            return {
                id:el.id,
                name:el.name,
                contactNo:el.contactNumber,
                email:el.email,
                companyName:el.companyName,
                companyAddress: el?.address,
                product: el?.products?.[0]?.productName,
                quantity: el?.products?.[0]?.qty,
                price: el?.products?.[0]?.price

            }
        })
    }
    
    />;

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
