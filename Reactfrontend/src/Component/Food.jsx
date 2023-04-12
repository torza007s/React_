import React, { useState } from 'react'
import { data } from '../Data/Data'
const Food = () => {
   
    const [Foods,setFood] = useState(data)
    const filterType = (category) =>{
        setFood(
            data.filter((item)=>{
                return item.category === category
            })
        )
    };
    const filterPrice= (price) =>{
        setFood(
            data.filter((item)=>{
                return item.price === price
            })
        )
    };
    
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>
            <div>
                {/* filter Row */}
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div>
                        <p className='font-bold'>Filter Type</p>
                        <div className='flex justify-between flex-wrap'>
                            <button onClick={()=>setFood(data)}className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                            <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                        </div>
                    </div>
                </div>
                {/* filter Price */}
                <div>
                    <p>Filter Price</p>
                    <div>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>&</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>&&</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>&&&</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>&&&&</button>

                    </div>
                </div>
{/* Display foods */}
<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
{Foods.map((item,index)=>(
    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
        <img src={item.image} alt={item.name} 
        className='w-full h-[200px] object-cover rounded-t-lg'/>

        <div className='flex justify-between px-2 py-4'>
            <p >{item.name}</p>
            <p>
                <span className='bg-orange-500 text-white p-1 rounded-lg'>{item.price}</span>
            </p>
        </div>
    </div>
))}
</div>

            </div>
        </div>
    )
}

export default Food

