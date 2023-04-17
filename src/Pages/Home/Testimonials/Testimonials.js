import React from 'react';

const Testimonials = () => {
    return (
        <div>
            
        <div class="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
            <div class="mb-14 xl:mb-0">
                <h1 class="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10   text-gray-800 dark:text-white  pr-16 lg:pr-0">What our patients says</h1>
                <button class="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Share your story</button>
            </div> 
    
            <div role="list" aria-label="Testimonials" class="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start">
                <div role="listitem" class="bg-white dark:bg-gray-800  shadow rounded p-4 xl:p-8">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                    <div class="pl-4 pt-4 flex items-start justify-between">
                        <div class="mr-6">
                            <p class="xl:text-xl xl:leading-loose text-gray-600 dark:text-gray-200  ">This website has a bunch of amazing components which improves my design</p>
                            <p class="mt-4 text-base font-semibold leading-none text-gray-800 dark:text-white ">Anna Smith</p>
                        </div>
                        <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-1.png" alt="Display Avatar of Anna Smith" role="img" />
                    </div>
                </div>
    
                <div role="listitem" class="bg-white dark:bg-gray-800  shadow rounded p-4 xl:p-8">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                    <div class="pl-4 pt-4 flex items-start justify-between">
                        <div class="mr-6">
                            <p class="xl:text-xl xl:leading-loose text-gray-600 dark:text-gray-200  ">This website has a bunch of amazing components which improves my design</p>
                            <p class="mt-4 text-base font-semibold leading-none text-gray-800 dark:text-white ">Dany John</p>
                        </div>
                        <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png" alt="Display avatar of Dany John" role="img" />
                    </div>
                </div>
                <div role="listitem" class="bg-white dark:bg-gray-800  shadow rounded p-4 xl:p-8">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                    <div class="pl-4 pt-4 flex items-start justify-between">
                        <div class="mr-6">
                            <p class="xl:text-xl xl:leading-loose text-gray-600 dark:text-gray-200  ">This website has a bunch of amazing components which improves my design</p>
                            <p class="mt-4 text-base font-semibold leading-none text-gray-800 dark:text-white  dark:text-white ">Mike Blake</p>
                        </div>
                        <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png" alt="Display Avatar of Mike Blake" role="img" />
                    </div>
                </div>
                <button class="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Read success stories</button>
            </div>
        </div>
    
        </div>
    );
};

export default Testimonials;