import React from 'react';
import teamOne from '../../../../assests/team-1.jpg';
import teamTwo from '../../../../assests/team-2.jpg';
import teamThree from '../../../../assests/team-3.jpg';
import teamFour from '../../../../assests/team-4.jpg';

const SpecialistCard = () => {
    return (
        <div>
             <section class="container mx-auto p-10 md:p-20 grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-x-3 transform duration-500">
        <article class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
            <div class="max-h-140 overflow-hidden">
                <img class="w-full h-auto" src={teamOne}
                    alt="" />
            </div>
            <div class="p-7 ">
                <h1 class="text-2xl font-semibold text-gray-700">Glenn Arredondo</h1>
                <p class="text-xl font-light leading-relaxed mt-5">Family Physicians </p>
            </div>
        </article>
        <article class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
            <div class="max-h-140 overflow-hidden">
                <img class="w-full h-auto" src={teamTwo}
                    alt="" />
            </div>
            <div class="p-7 my-auto pb-12 ">
                <h1 class="text-2xl font-semibold text-gray-700">Dorthy Winters</h1>
                <p class="text-xl font-light leading-relaxed mt-5">Gastroenterologists</p>
            </div>
        </article>
        <article class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer ">
            <div class="max-h-140 overflow-hidden">
                <img class="w-full h-auto" src={teamThree}
                    alt="" />
            </div>
            <div class="p-7 my-auto pb-12 ">
                <h1 class="text-2xl font-semibold text-gray-700">Christopher Perreault </h1>
                <p class="text-xl font-light leading-relaxed mt-5">Medicine Specialists</p>
            </div>
        </article>
        <article class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer ">
            <div class="max-h-140 overflow-hidden">
                <img class="w-full h-auto" src={teamFour}
                    alt="" />
            </div>
            <div class="p-7 my-auto pb-12 ">
                <h1 class="text-2xl font-semibold text-gray-700">Linda Flores </h1>
                <p class="text-xl font-light leading-relaxed mt-5">Gynecologists </p>
            </div>
        </article>
    </section>

        </div>
    );
};

export default SpecialistCard;