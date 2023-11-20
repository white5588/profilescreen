import React from 'react'
import pics from "./assets/person.jpg"
const App = () => {
  return (
 <>
 <div className='w-full h-screen flex bg-slate-200 justify-center items-center  '>

  <div className='w-full h-full flex items-center flex-col'>

<div className='w-full h-[80px] flex bg-[#3cb53c] justify-start items-start cursor-pointer flex-col'>
<div className='text-[white] text-[25px] font-semibold ml-5 mt-5'>Student</div>
<div className='text-[white] text-[15px] ml-5'>Profile</div>

</div>

<div className='w-[80%] h-[450px] bg-white flex justify-center items-center mt-[4%] shadow-sm rounded border  flex-col'>

<div className='w-full h-[200px] flex justify-between items-center '>
  <div className='w-[15%] h-[150px] flex rounded-[50%] bg-[silver]  '>  
  <img src={pics} className='w-full h-full rounded-full '/>
  </div>
  <div className='absolute ml-[17%] mt-[5%] font-bold '>Peter Oti</div>
  
  <div className='px-2 py-1 rounded-sm bg-[#41cc41] mt-2 text-sm text-white cursor-pointer justify-center items-center   text-center mr-5 hover:text-black hover:scale-125 transition-all '>
    View Bottles</div>


</div>

<div className='w-full h-[300px] flex bg-[silver] justify-between items-center '>


  <div className='w-[40%] h-[250px] flex bg-white justify-start items-start flex-col ml-5 rounded shadow-sm border leading-[35px]'>

    <div className='mt-5 text-tl  text-[12px] font-semibold ml-2 flex-col leading-[12px]'>Gender:
    <div className='text-[10px] text-tl '>Male</div>

    </div>

    <div className='mt-5 text-tl  text-[12px] font-semibold ml-2 flex-col leading-[15px] '>Birth Date:
    <div className='text-[10px] text-tl'>11 January 2020</div>
    </div>

    <div className='mt-5 text-tl  text-[12px] font-semibold ml-2 leading-[15px]'>Address:
    <div className='text-[10px] text-tl'>11 Okulaja street off wilmer</div>
    </div>

   

    

  </div>

  <div className='w-[40%] h-[250px] flex bg-white justify-start items-start flex-col mr-5 rounded shadow-sm border '>

  <div className='mt-5 text-tl  text-[12px] font-semibold ml-2'>Date of Entry
  <div className='flex text-tl text-semibold text-[9px]'>11 November 2023</div>
  </div>
<div className='mt-5 text-tl  text-[12px] font-semibold ml-2'>Status
<div className='px-2 py-1 rounded bg-[#41cc41] mt-2 text-white cursor-pointer'>Active</div>
</div>

  </div>

</div>

</div>

    </div>
    </div>
    </>
  )
}

export default App