import React from "react";
import { useState,useEffect } from "react";
import { FaSpinner } from "react-icons/fa"; 


const InterviewData = () => {

  const [interviewdata, setInterviewData] = useState([]);
  const [search,setSearch]=useState("")
  const [isFetching, setIsFetching] = useState(false); 


  useEffect(() => {
    async function fetchForms() {
      try {
      setIsFetching(true); // Set isFetching to true when fetching data

        const response = await fetch('https://interview-backend-p341.onrender.com/interviewdata');
        const data = await response.json();
        setInterviewData(data);
      } catch (error) {
        console.error(error);
      }finally {
        setIsFetching(false); // Set isFetching back to false after data is fetched
      }
    }

    fetchForms();
  }, []);


  return (
    <>
      <section className=" py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center justify-between">
                <h2 className="text-blueGray-700 text-3xl font-bold">
                  Interview Experiences
                </h2>
                <p className="m-4">At InterviewInsights, we understand the importance of sharing first-hand interview experiences. Our platform serves as a bridge between job seekers and employers, providing an open, transparent, and supportive space for individuals to share their interview journeys.</p>
                <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" onChange={(e)=>setSearch(e.target.value)} class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black/80 focus:outline-none" placeholder="Search for company..." aria-label="Search" aria-describedby="button-addon3"/>
      
    </div>
  </div>
</div>

{
  isFetching?(
    <FaSpinner className="animate-spin mx-auto text-5xl" />
  ):(
    <>
    {interviewdata
  .filter((info) => {
    const searchTerm = search.toLowerCase();
    if (searchTerm === '') return true; // Show all data if search is empty
    return (
      info.company.toLowerCase().includes(searchTerm) ||
      info.jobTitle.toLowerCase().includes(searchTerm) ||
      info.name.toLowerCase().includes(searchTerm) ||
      info.collegeName.toLowerCase().includes(searchTerm)
    );
  })
  .map((info, index) => (
    <div key={index} className="text-left p-2 ">
      <h3 className="bg-[#f6f7ff] font-semibold p-2 text-xl">{info.company} Interview Rounds and Process</h3>
      <h4 className="font-semibold p-2 text-xxl">{info.jobTitle} Interview Questions</h4>
      <p className="pl-2 pt-0 text-sm">{info.name}</p>
      <p className="text-right text-sm p-1">{info.collegeName}</p>

      {info.round1 && (
        <div className="flex">
          <div className="bg-[#ebf0f6] h-11 rounded-sm p-1 text-[#97a0be] text-xs">
            <span className=" text-sm">01</span> <br /> Round
          </div>
          <div className="p-2 mt-[-16px] flex flex-col">
            <h4 className="text-base font-semibold m-2">{info.round1Name}</h4>
            <p className="m-2">{info.round1}</p>
          </div>
        </div>
      )}

      {info.round2 && (
        <div className="flex">
          <div className="bg-[#ebf0f6] h-11 rounded-sm p-1 text-[#97a0be] text-xs">
            <span className=" text-sm">02</span> <br /> Round
          </div>
          <div className="p-2 mt-[-16px] flex flex-col">
            <h4 className="text-base font-semibold m-2">{info.round2Name}</h4>
            <p className="m-2">{info.round2}</p>
          </div>
        </div>
      )}

      {info.round3 && (
        <div className="flex">
          <div className="bg-[#ebf0f6] h-11 rounded-sm p-1 text-[#97a0be] text-xs">
            <span className=" text-sm">03</span> <br /> Round
          </div>
          <div className="p-2 mt-[-16px] flex flex-col">
            <h4 className="text-base font-semibold m-2">{info.round3Name}</h4>
            <p className="m-2">{info.round3}</p>
          </div>
        </div>
      )}

      {info.round4 && (
        <div className="flex">
          <div className="bg-[#ebf0f6] h-11 rounded-sm p-1 text-[#97a0be] text-xs">
            <span className=" text-sm">04</span> <br /> Round
          </div>
          <div className="p-2 mt-[-16px] flex flex-col">
            <h4 className="text-base font-semibold m-2">{info.round4Name}</h4>
            <p className="m-2">{info.round4}</p>
          </div>
        </div>
      )}

      {info.round5 && (
        <div className="flex">
          <div className="bg-[#ebf0f6] h-11 rounded-sm p-1 text-[#97a0be] text-xs">
            <span className=" text-sm">05</span> <br /> Round
          </div>
          <div className="p-2 mt-[-16px] flex flex-col">
            <h4 className="text-base font-semibold m-2">{info.round5Name}</h4>
            <p className="m-2">{info.round5}</p>
          </div>
        </div>
      )}
    </div>
  ))
}

    </>
  )
}

                
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default InterviewData;
