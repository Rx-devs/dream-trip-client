import React from "react";
import Navigation from "../../../../Shared/Navigation/Navigation";

const BlogDetails = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap">
                    <div class="relative w-3/4 mx-auto bg-white overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-80 lg:aspect-w-1 lg:aspect-h-1 rounded-lg">
                        <img class="w-full h-full object-center object-cover" src="https://i.ibb.co/9TBv5HQ/antibes-drone-panorama-cote-dazur-french-riviera-road-trip.jpg" alt="" />
                    </div>
                    <div class="p-12 md:w-full flex flex-col">
                        <div class="flex justify-between">
                            <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
                            <span class="title-font font-medium text-gray-900">Location: France</span>
                        </div>
                        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 text-left">Roof party normcore before they sold out, cornhole vape</h2>
                        <p class="leading-relaxed mb-6 text-left">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
                        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <div class="text-gray-900 inline-flex items-center">Travel Cost: $300
                            </div>
                            <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                        </div>
                        <div class="flex w-100 justify-between items-center">
                            <div class="inline-flex items-center">
                                <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span class="flex-grow flex flex-col pl-4">
                                    <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                                    <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                </span>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-semibold title-font text-gray-700">Date: 12 Jun 2019</span>
                                <span class="mt-1 text-gray-500 text-sm">Time: 4 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
            
export default BlogDetails;
