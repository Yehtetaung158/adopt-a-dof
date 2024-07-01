import React from 'react'
import PetCard from '../component/PetCard'
import BlogCard from '../component/BlogCard';
import Form from '../component/Form';
import Foolter from '../component/Foolter';
import useCatListFetch from '../hook/useCatList';
// import formimg from ""

const HomePage = () => {
    const [data,isError,isLoading]=useCatListFetch(4);
    const cardData={data,isError,isLoading}
    console.log(cardData)
  return (
    <div>
        <div className='bg-cat-hero bg-cover bg-right h-screen relative'>
            <div className='h-full'>
                <div className=' absolute inset-0 flex flex-col left-6 top-1/3'>
                <div className=' flex flex-col gap-4'>
                <h1 className=' font-playwrite font-bold text-4xl text-white'>Adopt a New Friend</h1>
                <p className='font-playwrite text-white'>every pet deserve a change</p>
                </div>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <h1 className=' font-roboto font-bold text-3xl my-2 mx-4'>Pets</h1>
            {/* <PetCard data={data}/> */}
            <PetCard cardData={cardData}  isHome={true}/>
        </div>
        <div>
        <h1 className=' font-roboto font-bold text-3xl my-2 mx-4'>Blogs</h1>
            <BlogCard/>
        </div>
        <div className=' bg-formimg bg-cover bg-right relative mt-4  bg-gray-400 bg-opacity-25'>
            <Form/>
        </div>
        <>
            <Foolter/>
        </>
    </div>
  )
}

export default HomePage