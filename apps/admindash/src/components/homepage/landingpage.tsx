
export default function LandingPage(){
    return(
<>
<section className="px-2 py-32 bg-white md:px-0 -mt-24 dark:text-gray-100 dark:bg-[#222030]">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-3xl font-extrabold tracking-tight  sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="dark:text-gray-100 block">Ehrsystems</span>
            <span className="block text-blue-gray-100 xl:inline">ELEVATE YOUR PRACTICE</span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Effortlessly manage your medical practice with ehrsystems. Our intuitive HIPAA Compliant platform is tailored to enhance your workflow, ensuring you spend more time on patient care and less on administration.</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="/auth" className="flex items-center w-full px-6 py-3 mb-3 text-lg dark:bg-gray-100 dark:text-[#222030]  bg-[#222030] rounded-md sm:mb-0 dark:hover:bg-gray-300   hover:bg-[#222030]/50 sm:w-auto">
              GetStarted
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="/auth" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
             Contact us
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="/landing.webp"/>
          </div>
      </div>
    </div>
  </div>
</section>


<section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24 dark:bg-[#222030]/75">
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">


        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "/>
        </div>

        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl dark:text-gray-200">
            Centralized Records:
            </h2>
            <p className="pt-4 dark:text-gray-100 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            Access and update electronic health records seamlessly across providers and locations   
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Effortless Organization
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Real-Time Updates.
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Collaborative Documentation
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> User-Friendly Interface
                </li>
            </ul>
        </div>
      
    </div>
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

       
        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 dark:text-gray-100 lg:text-3xl md:text-2xl">
            Smart Scheduling
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 dark:text-gray-100  text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Optimize your calendar for efficient appointments.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Automated Appointment Booking: 
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Real-Time Availability
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Appointment Reminders
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Customizable Time Blocks
                </li>
            </ul>
        </div>

        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://cdn.devdojo.com/images/december2020/settings.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
        </div>
    </div>
</section>


<section className="py-20 bg-gray-50 dark:bg-[#222030]">
  <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Lab Process Streamlining</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Accelerate and simplify laboratory procedures.</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              <span className="font-medium text-gray-500">Integrated Lab Requests</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              <span className="font-medium text-gray-500">Electronic Results</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <span className="font-medium text-gray-500">Automated Alerts</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image"/></div>
    </div>
  </div>
</section>



<section id="pricing" className="box-border dark:bg-[#222030]/75 py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
    <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900">
            <h2 className="box-border m-0 text-3xl font-semibold leading-tight dark:text-gray-100 tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                Pricing Options
            </h2>
            <p className="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
                We've got a plan for practices of any size
            </p>
        </div>
        <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
            <div className="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                    Basic
                </h3>
                <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                    The basic plan is a good fit for small facilities
                </p>
                <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                    <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                        $19
                    </p>
                    <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                        per user <span className="block">per month</span>
                    </p>
                </div>

                <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-[#222030] no-underline bg-transparent border border-b-2 border-[#222030] rounded-md cursor-pointer hover:bg-[#222030] hover:border-[#222030] hover:text-white sm:text-base sm:mt-8 md:text-lg">
                    Select Plan
                </button>
            </div>
            <div className="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                    Plus
                </h3>
                <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                    The plus plan is a good fit for medium-size to larger facilities
                </p>
                <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                    <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                        $39
                    </p>
                    <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                        per user <span className="block">per month</span>
                    </p>
                </div>
                <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-[#222030] no-underline bg-transparent border border-b-2 border-[#222030] rounded-md cursor-pointer hover:bg-[#222030] hover:border-[#222030] hover:text-white sm:text-base sm:mt-8 md:text-lg">
                    Select Plan
                </button>
            </div>
            <div className="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                    Pro
                </h3>
                <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                    The pro plan is a good fit for larger and enterprise facilities.
                </p>
                <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                    <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                        $59
                    </p>
                    <p className="box-border my-0 ml-4 mr-0 text-xs text-center border-0 border-gray-200">
                        per user <span className="block">per month</span>
                    </p>
                </div>
                <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-[#222030] no-underline bg-transparent border border-b-2 border-[#222030] rounded-md cursor-pointer hover:bg-[#222030] hover:border-[#222030] hover:text-white sm:text-base sm:mt-8 md:text-lg">
                    Select Plan
                </button>
            </div>
        </div>
    </div>
</section>


<section className="bg-white dark:bg-[#222030]">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">

            <div className="px-5 py-2">
                <a href="#pricing" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Pricing
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Terms
                </a>
            </div>
        </nav>
        
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 ettechent, Inc. All rights reserved.
        </p>
    </div>
</section>
</>
    )
}