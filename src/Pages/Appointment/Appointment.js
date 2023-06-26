import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import intro from '../../assests/intro.jpg'

const Appointment = () => {
    useEffect(() => { });

    function showDropDownMenu_form_layout_wizard3(el) {
        el.target.parentElement.children[1].classList.toggle("hidden");
    }
    function swaptext_form_layout_wizard3(el) {
        const targetText = el.target.innerText;
        document.getElementById(
            "drop-down-content-setter_form_layout_wizard3"
        ).innerText = targetText;
        document.getElementById("drop-down-div").classList.toggle("hidden");
    }
    function showDropDownMenuOne_form_layout_wizard3(el) {
        el.target.parentElement.children[1].classList.toggle("hidden");
    }
    function swaptextone_form_layout_wizard3(el) {
        const targetText = el.target.innerText;
        document.getElementById(
            "drop-down-content-setter-one_form_layout_wizard3"
        ).innerText = targetText;
        document
            .getElementById("drop-down-div-one_form_layout_wizard3")
            .classList.toggle("hidden");
    }
    function showDropDownMenutwo_form_layout_wizard3(el) {
        el.target.parentElement.children[1].classList.toggle("hidden");
    }
    function swaptexttwo_form_layout_wizard3(el) {
        const targetText = el.target.innerHTML;
        document.getElementById(
            "drop-down-content-setter-two_form_layout_wizard3"
        ).innerHTML = targetText;
        document
            .getElementById("drop-down-div-two_form_layout_wizard3")
            .classList.toggle("hidden");
    }

    return (
        <>
            {/* Page intro started  */}
            <div>
                <div className="relative">
                    <div className="relative bg-gray-900">
                        <img
                            className="object-cover w-full h-[60vh]"
                            src={intro}
                            alt="Page Intro"
                        />
                        <div className="absolute inset-0 bg-blue-700 opacity-25"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center bg-white rounded-md px-20 py-3">
                                <h1 className="text-4xl font-bold text-black mb-4 italic">
                                    Appointment
                                </h1>
                                <Link
                                    to="/"
                                    className="inline-block text-black font-bold py-2 px-4 rounded"
                                >
                                    <span className='hover:text-blue-700'>Home</span> - Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page intro ended  */}
            <div className="px-2 py-12 lg:w-[1380px] mx-auto">
                <h1 className="text-center text-3xl font-semibold lg:text-4xl lg:font-bold">Make an appointment</h1>
                <div className="flex flex-no-wrap items-start">
                    <div className="w-full ">
                        <div className="py-4 px-2">
                            <div className="bg-white rounded shadow mt-7 py-7">
                                
                                <div className="block px-6 lg:hidden md:block">
                                    <div className="relative top-1 ">
                                        <div className="relative w-full mt-2 rounded outline-none dropdown-one bg-gray-50">
                                            <button
                                                onClick={showDropDownMenutwo_form_layout_wizard3}
                                                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
                                            >
                                                <span
                                                    className="pr-4 text-sm font-medium text-indigo-700  flex flex-row-reverse	 justify-end gap-x-2 "
                                                    id="drop-down-content-setter-two_form_layout_wizard3"
                                                >
                                                    <div className="flex gap-x-2 ">
                                                        <svg
                                                            className="text-inherit"
                                                            width={18}
                                                            height={18}
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9.24626 6.51211C8.73332 6.46145 8.21726 6.57057 7.76874 6.82454C7.32022 7.07851 6.96116 7.4649 6.74072 7.93082C6.52028 8.39673 6.44924 8.91939 6.53733 9.42724C6.62541 9.9351 6.86832 10.4033 7.23278 10.7678C7.59725 11.1322 8.06546 11.3751 8.57331 11.4632C9.08116 11.5513 9.60382 11.4803 10.0697 11.2598C10.5357 11.0394 10.922 10.6803 11.176 10.2318C11.43 9.78329 11.5391 9.26723 11.4884 8.7543C11.4307 8.17929 11.1759 7.64193 10.7673 7.23329C10.3586 6.82465 9.82127 6.56986 9.24626 6.51211V6.51211ZM15.2658 9C15.2642 9.27174 15.2442 9.54306 15.206 9.81211L16.972 11.1973C17.0489 11.261 17.1008 11.35 17.1183 11.4483C17.1358 11.5466 17.1179 11.648 17.0677 11.7344L15.397 14.625C15.3463 14.7106 15.267 14.7754 15.1731 14.8082C15.0792 14.841 14.9767 14.8396 14.8838 14.8043L13.1299 14.098C13.0331 14.0595 12.9284 14.0456 12.825 14.0576C12.7215 14.0695 12.6227 14.1069 12.5373 14.1664C12.2696 14.3507 11.9883 14.5145 11.6959 14.6562C11.6039 14.7009 11.5244 14.7676 11.4643 14.8503C11.4042 14.933 11.3654 15.0292 11.3513 15.1305L11.0884 17.0012C11.0712 17.1 11.0201 17.1897 10.944 17.255C10.868 17.3204 10.7715 17.3573 10.6713 17.3594H7.32985C7.23124 17.3577 7.13614 17.3224 7.06024 17.2594C6.98433 17.1965 6.93215 17.1095 6.91227 17.0129L6.64978 15.1449C6.63503 15.0426 6.59523 14.9454 6.53389 14.8621C6.47256 14.7789 6.3916 14.712 6.29821 14.6676C6.00611 14.5266 5.72578 14.3624 5.45993 14.1766C5.37481 14.1173 5.27629 14.0802 5.17326 14.0686C5.07022 14.0569 4.9659 14.0711 4.8697 14.1098L3.11618 14.8156C3.02325 14.851 2.92082 14.8525 2.82693 14.8197C2.73303 14.787 2.6537 14.7222 2.6029 14.6367L0.932196 11.7461C0.881967 11.6597 0.864017 11.5583 0.881543 11.46C0.899068 11.3616 0.950932 11.2727 1.0279 11.209L2.52048 10.0371C2.60225 9.9722 2.66652 9.88789 2.70745 9.79185C2.74837 9.6958 2.76467 9.59105 2.75485 9.48711C2.74079 9.32422 2.7322 9.16172 2.7322 8.99883C2.7322 8.83594 2.7404 8.67578 2.75485 8.51641C2.7636 8.4131 2.7465 8.30924 2.70511 8.21418C2.66372 8.11912 2.59933 8.03585 2.51774 7.97187L1.02595 6.8C0.950228 6.73597 0.899457 6.64734 0.88253 6.54964C0.865603 6.45194 0.8836 6.35139 0.933368 6.26562L2.60407 3.375C2.65481 3.28945 2.73412 3.22455 2.82802 3.19175C2.92192 3.15895 3.02438 3.16035 3.11735 3.1957L4.87126 3.90195C4.96798 3.94046 5.07274 3.95438 5.17616 3.94245C5.27958 3.93052 5.37843 3.89311 5.46384 3.83359C5.73151 3.64927 6.01279 3.48552 6.30524 3.34375C6.39719 3.29906 6.47671 3.23242 6.5368 3.14972C6.59689 3.06701 6.63569 2.97078 6.64978 2.86953L6.91267 0.998828C6.92993 0.900032 6.98097 0.810299 7.05707 0.744964C7.13316 0.679629 7.22958 0.642748 7.32985 0.640625H10.6713C10.7699 0.642331 10.865 0.677578 10.9409 0.74056C11.0168 0.803542 11.069 0.8905 11.0888 0.987109L11.3513 2.85508C11.3661 2.95745 11.4059 3.05459 11.4672 3.13787C11.5286 3.22114 11.6095 3.28798 11.7029 3.33242C11.995 3.47342 12.2753 3.63762 12.5412 3.82344C12.6263 3.88266 12.7248 3.91978 12.8279 3.93144C12.9309 3.9431 13.0352 3.92894 13.1314 3.89023L14.8849 3.18438C14.9779 3.14899 15.0803 3.14753 15.1742 3.18026C15.2681 3.21299 15.3474 3.2778 15.3982 3.36328L17.0689 6.25391C17.1191 6.34027 17.1371 6.44165 17.1196 6.54001C17.102 6.63837 17.0502 6.72732 16.9732 6.79102L15.4806 7.96289C15.3985 8.02759 15.3339 8.1118 15.2926 8.20786C15.2513 8.30392 15.2347 8.40878 15.2443 8.51289C15.2572 8.67461 15.2658 8.83711 15.2658 9Z"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <p className="text-base font-medium leading-none text-indigo-700 mt-[1px]">
                                                            General
                                                        </p>
                                                    </div>
                                                </span>
                                                <div className="relative w-5 h-5 bg-indigo-100 rounded">
                                                    <svg
                                                        id="rotate"
                                                        className="absolute inset-x-0 inset-y-0 z-10 mx-auto my-auto cursor-pointer"
                                                        width={10}
                                                        height={6}
                                                        viewBox="0 0 10 6"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M0.5 0.75L5 5.25L9.5 0.75"
                                                            stroke="#4338ca"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                            <div
                                                className="absolute right-0 z-20 hidden w-full px-2 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                                id="drop-down-div-two_form_layout_wizard3"
                                            >
                                                <div className="flex gap-x-2  group ">
                                                    <p
                                                        onClick={swaptexttwo_form_layout_wizard3}
                                                        className="
     
flex flex-row-reverse	 justify-end gap-x-2
 
 w-full   p-3 text-base font-medium leading-none text-gray-600 group-hover:text-indigo-700 mt-[1px] cursor-pointer group-hover:bg-indigo-100 group-hover:font-medium group-hover:text-indigo-700 group-hover:rounded"
                                                    >
                                                        General
                                                        <svg
                                                            className=" group-hover:text-indigo-700"
                                                            onClick={swaptexttwo_form_layout_wizard3}
                                                            width={18}
                                                            height={18}
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9.24626 6.51211C8.73332 6.46145 8.21726 6.57057 7.76874 6.82454C7.32022 7.07851 6.96116 7.4649 6.74072 7.93082C6.52028 8.39673 6.44924 8.91939 6.53733 9.42724C6.62541 9.9351 6.86832 10.4033 7.23278 10.7678C7.59725 11.1322 8.06546 11.3751 8.57331 11.4632C9.08116 11.5513 9.60382 11.4803 10.0697 11.2598C10.5357 11.0394 10.922 10.6803 11.176 10.2318C11.43 9.78329 11.5391 9.26723 11.4884 8.7543C11.4307 8.17929 11.1759 7.64193 10.7673 7.23329C10.3586 6.82465 9.82127 6.56986 9.24626 6.51211V6.51211ZM15.2658 9C15.2642 9.27174 15.2442 9.54306 15.206 9.81211L16.972 11.1973C17.0489 11.261 17.1008 11.35 17.1183 11.4483C17.1358 11.5466 17.1179 11.648 17.0677 11.7344L15.397 14.625C15.3463 14.7106 15.267 14.7754 15.1731 14.8082C15.0792 14.841 14.9767 14.8396 14.8838 14.8043L13.1299 14.098C13.0331 14.0595 12.9284 14.0456 12.825 14.0576C12.7215 14.0695 12.6227 14.1069 12.5373 14.1664C12.2696 14.3507 11.9883 14.5145 11.6959 14.6562C11.6039 14.7009 11.5244 14.7676 11.4643 14.8503C11.4042 14.933 11.3654 15.0292 11.3513 15.1305L11.0884 17.0012C11.0712 17.1 11.0201 17.1897 10.944 17.255C10.868 17.3204 10.7715 17.3573 10.6713 17.3594H7.32985C7.23124 17.3577 7.13614 17.3224 7.06024 17.2594C6.98433 17.1965 6.93215 17.1095 6.91227 17.0129L6.64978 15.1449C6.63503 15.0426 6.59523 14.9454 6.53389 14.8621C6.47256 14.7789 6.3916 14.712 6.29821 14.6676C6.00611 14.5266 5.72578 14.3624 5.45993 14.1766C5.37481 14.1173 5.27629 14.0802 5.17326 14.0686C5.07022 14.0569 4.9659 14.0711 4.8697 14.1098L3.11618 14.8156C3.02325 14.851 2.92082 14.8525 2.82693 14.8197C2.73303 14.787 2.6537 14.7222 2.6029 14.6367L0.932196 11.7461C0.881967 11.6597 0.864017 11.5583 0.881543 11.46C0.899068 11.3616 0.950932 11.2727 1.0279 11.209L2.52048 10.0371C2.60225 9.9722 2.66652 9.88789 2.70745 9.79185C2.74837 9.6958 2.76467 9.59105 2.75485 9.48711C2.74079 9.32422 2.7322 9.16172 2.7322 8.99883C2.7322 8.83594 2.7404 8.67578 2.75485 8.51641C2.7636 8.4131 2.7465 8.30924 2.70511 8.21418C2.66372 8.11912 2.59933 8.03585 2.51774 7.97187L1.02595 6.8C0.950228 6.73597 0.899457 6.64734 0.88253 6.54964C0.865603 6.45194 0.8836 6.35139 0.933368 6.26562L2.60407 3.375C2.65481 3.28945 2.73412 3.22455 2.82802 3.19175C2.92192 3.15895 3.02438 3.16035 3.11735 3.1957L4.87126 3.90195C4.96798 3.94046 5.07274 3.95438 5.17616 3.94245C5.27958 3.93052 5.37843 3.89311 5.46384 3.83359C5.73151 3.64927 6.01279 3.48552 6.30524 3.34375C6.39719 3.29906 6.47671 3.23242 6.5368 3.14972C6.59689 3.06701 6.63569 2.97078 6.64978 2.86953L6.91267 0.998828C6.92993 0.900032 6.98097 0.810299 7.05707 0.744964C7.13316 0.679629 7.22958 0.642748 7.32985 0.640625H10.6713C10.7699 0.642331 10.865 0.677578 10.9409 0.74056C11.0168 0.803542 11.069 0.8905 11.0888 0.987109L11.3513 2.85508C11.3661 2.95745 11.4059 3.05459 11.4672 3.13787C11.5286 3.22114 11.6095 3.28798 11.7029 3.33242C11.995 3.47342 12.2753 3.63762 12.5412 3.82344C12.6263 3.88266 12.7248 3.91978 12.8279 3.93144C12.9309 3.9431 13.0352 3.92894 13.1314 3.89023L14.8849 3.18438C14.9779 3.14899 15.0803 3.14753 15.1742 3.18026C15.2681 3.21299 15.3474 3.2778 15.3982 3.36328L17.0689 6.25391C17.1191 6.34027 17.1371 6.44165 17.1196 6.54001C17.102 6.63837 17.0502 6.72732 16.9732 6.79102L15.4806 7.96289C15.3985 8.02759 15.3339 8.1118 15.2926 8.20786C15.2513 8.30392 15.2347 8.40878 15.2443 8.51289C15.2572 8.67461 15.2658 8.83711 15.2658 9Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div className="flex   gap-x-2 group">
                                                    <p
                                                        onClick={swaptexttwo_form_layout_wizard3}
                                                        className="
  flex flex-row-reverse	 justify-end gap-x-2
  text-base font-medium leading-none text-gray-600 group-hover:text-indigo-700 mt-[1px] cursor-pointer group-hover:bg-indigo-100 group-hover:font-medium group-hover:text-indigo-700 group-hover:rounded w-full p-3"
                                                    >
                                                        Store
                                                        <svg
                                                            className=" group-hover:text-indigo-700"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M17.5 17.5V9.375"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M2.5 9.375V17.5"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M14.9401 1.875H5.05964C4.20847 1.875 3.43972 2.34375 3.10925 3.06484L1.41785 6.75781C0.848315 8.00039 1.79402 9.4082 3.26121 9.45312C3.28725 9.45312 3.31329 9.45312 3.33933 9.45312C4.56589 9.45312 5.56003 8.46953 5.56003 7.41289C5.56003 8.46758 6.55456 9.45312 7.78113 9.45312C9.00769 9.45312 9.99988 8.53984 9.99988 7.41289C9.99988 8.46758 10.994 9.45312 12.2206 9.45312C13.4471 9.45312 14.4417 8.53984 14.4417 7.41289C14.4417 8.53984 15.4358 9.45312 16.6624 9.45312C16.6884 9.45312 16.7138 9.45312 16.7385 9.45312C18.2057 9.40742 19.1514 7.99961 18.5819 6.75781L16.8905 3.06484C16.56 2.34375 15.7913 1.875 14.9401 1.875Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M1.25 18.125H18.75"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M5.3125 11.25H8.4375C8.68614 11.25 8.9246 11.3488 9.10041 11.5246C9.27623 11.7004 9.375 11.9389 9.375 12.1875V15.625H4.375V12.1875C4.375 11.9389 4.47377 11.7004 4.64959 11.5246C4.8254 11.3488 5.06386 11.25 5.3125 11.25Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M11.25 18.125V12.1875C11.25 11.9389 11.3488 11.7004 11.5246 11.5246C11.7004 11.3488 11.9389 11.25 12.1875 11.25H14.6875C14.9361 11.25 15.1746 11.3488 15.3504 11.5246C15.5262 11.7004 15.625 11.9389 15.625 12.1875V18.125"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div className="flex   gap-x-2 group">
                                                    <p
                                                        onClick={swaptexttwo_form_layout_wizard3}
                                                        className="
    flex flex-row-reverse	 justify-end gap-x-2
text-base font-medium leading-none text-gray-600 group-hover:text-indigo-700 mt-[1px] cursor-pointer group-hover:bg-indigo-100 group-hover:font-medium group-hover:text-indigo-700 group-hover:rounded w-full p-3"
                                                    >
                                                        Product
                                                        <svg
                                                            className=" group-hover:text-indigo-700"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div className="flex   gap-x-2 group">
                                                    <p
                                                        onClick={swaptexttwo_form_layout_wizard3}
                                                        className=" flex flex-row-reverse	 justify-end gap-x-2  text-base font-medium leading-none text-gray-600 group-hover:text-indigo-700 mt-[1px] cursor-pointer group-hover:bg-indigo-100 group-hover:font-medium group-hover:text-indigo-700 group-hover:rounded w-full p-3"
                                                    >
                                                        Location
                                                        <svg
                                                            className=" group-hover:text-indigo-700"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M2.07556 7.81027L17.7006 1.8966C17.7569 1.87504 17.8183 1.87026 17.8774 1.88284C17.9364 1.89543 17.9905 1.92483 18.0332 1.96751C18.0758 2.01018 18.1052 2.0643 18.1178 2.12332C18.1304 2.18234 18.1256 2.24375 18.1041 2.30011L12.1904 17.9251C12.1669 17.9845 12.1258 18.0352 12.0726 18.0704C12.0194 18.1057 11.9566 18.1238 11.8928 18.1224C11.829 18.1209 11.7672 18.1 11.7156 18.0623C11.6641 18.0247 11.6253 17.9722 11.6045 17.9118L8.97165 11.4239C8.94096 11.332 8.8893 11.2485 8.82076 11.1799C8.75222 11.1114 8.66868 11.0597 8.57673 11.029L2.08884 8.39855C2.02772 8.37821 1.97438 8.33949 1.93612 8.28767C1.89785 8.23586 1.87653 8.17348 1.87508 8.10909C1.87363 8.04469 1.89211 7.98142 1.92799 7.92793C1.96388 7.87444 2.01542 7.83334 2.07556 7.81027V7.81027Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M17.9688 2.03125L8.86719 11.1328"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </p>
                                                </div>
                                                <div className="flex   gap-x-2 group">
                                                    <p
                                                        onClick={swaptexttwo_form_layout_wizard3}
                                                        className=" flex flex-row-reverse	 justify-end gap-x-2 text-base font-medium leading-none text-gray-600 group-hover:text-indigo-700 mt-[1px] cursor-pointer group-hover:bg-indigo-100 group-hover:font-medium group-hover:text-indigo-700 group-hover:rounded w-full p-3"
                                                    >
                                                        Customer
                                                        <svg
                                                            className=" group-hover:text-indigo-700"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.7035 6.5625C15.5891 8.15117 14.4106 9.375 13.1254 9.375C11.8403 9.375 10.6598 8.15156 10.5473 6.5625C10.4301 4.90977 11.5774 3.75 13.1254 3.75C14.6735 3.75 15.8207 4.93984 15.7035 6.5625Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M13.1248 11.875C10.5791 11.875 8.1311 13.1395 7.51781 15.602C7.43656 15.9277 7.64086 16.25 7.97563 16.25H18.2745C18.6092 16.25 18.8123 15.9277 18.7323 15.602C18.119 13.1 15.6709 11.875 13.1248 11.875Z"
                                                                stroke="Currentcolor"
                                                                strokeMiterlimit={10}
                                                            />
                                                            <path
                                                                d="M7.81116 7.26328C7.71975 8.53203 6.76741 9.53125 5.74085 9.53125C4.71429 9.53125 3.76038 8.53242 3.67054 7.26328C3.57718 5.94336 4.50413 5 5.74085 5C6.97757 5 7.90452 5.96758 7.81116 7.26328Z"
                                                                stroke="Currentcolor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M8.04726 11.9531C7.34218 11.6301 6.56562 11.5059 5.74257 11.5059C3.71132 11.5059 1.75429 12.5156 1.26405 14.4824C1.1996 14.7426 1.36288 15 1.63007 15H6.01601"
                                                                stroke="Currentcolor"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                            />
                                                        </svg>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                                {/* end */}
                                <div className="mt-10 px-7">
                                    <p className="text-xl font-semibold leading-tight text-gray-800">
                                        Patient Information
                                    </p>
                                    <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Appointment Date
                                            </p>
                                            <input type='date' className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Patient Name
                                            </p>
                                            <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Phone Number
                                            </p>
                                            <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Date of Birth
                                            </p>
                                            <input type='date' className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Choose Doctor Name
                                            </p>
                                            <div className="relative top-1">
                                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                                    <button
                                                        onClick={showDropDownMenuOne_form_layout_wizard3}
                                                        className="relative flex items-center justify-between w-full px-5 py-4 "
                                                    >
                                                        <span
                                                            className="pr-4 text-sm font-medium text-gray-600"
                                                            id="drop-down-content-setter-one_form_layout_wizard3"
                                                        >
                                                            Ben Allen
                                                        </span>
                                                        <svg
                                                            id="rotate1"
                                                            className="absolute z-10 cursor-pointer right-5"
                                                            width={10}
                                                            height={6}
                                                            viewBox="0 0 10 6"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M0.5 0.75L5 5.25L9.5 0.75"
                                                                stroke="#4B5563"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                                        id="drop-down-div-one_form_layout_wizard3"
                                                    >
                                                        <a href="javascript:void(0)" className="hover">
                                                            <p
                                                                className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                                                                onClick={swaptextone_form_layout_wizard3}
                                                            >
                                                                Sandip Kumar
                                                            </p>
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            <p
                                                                className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                                                                onClick={swaptextone_form_layout_wizard3}
                                                            >
                                                                Layout Horizontal
                                                            </p>
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            <p
                                                                className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                                                                onClick={swaptextone_form_layout_wizard3}
                                                            >
                                                                Layout Primary
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end */}
                                            
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Choose Appointment Type
                                            </p>
                                            <div className="relative top-1">
                                                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                                                    <button
                                                        onClick={showDropDownMenuOne_form_layout_wizard3}
                                                        className="relative flex items-center justify-between w-full px-5 py-4 "
                                                    >
                                                        <span
                                                            className="pr-4 text-sm font-medium text-gray-600"
                                                            id="drop-down-content-setter-one_form_layout_wizard3"
                                                        >
                                                            Physical
                                                        </span>
                                                        <svg
                                                            id="rotate1"
                                                            className="absolute z-10 cursor-pointer right-5"
                                                            width={10}
                                                            height={6}
                                                            viewBox="0 0 10 6"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M0.5 0.75L5 5.25L9.5 0.75"
                                                                stroke="#4B5563"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                                                        id="drop-down-div-one_form_layout_wizard3"
                                                    >
                                                        <a href="javascript:void(0)" className="hover">
                                                            <p
                                                                className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                                                                onClick={swaptextone_form_layout_wizard3}
                                                            >
                                                                Online
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end */}
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 border-gray-300 mt-2 px-7">
                                    <p className="text-base font-semibold leading-4 text-gray-800">
                                        Appointment Note
                                    </p>
                                    <div className="mt-2 border border-gray-300 rounded">
                                        <textarea
                                            className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                                            placeholder="Start typing here .."
                                            defaultValue={" "}
                                        />
                                    </div>
                                </div>
                                <hr className="h-[1px] bg-gray-100 my-14" />
                                <div className='text-center'>
                                    <input type='submit' value='Make appointment' className="bg-indigo-700  rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[944px] w-full ">
                                        
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Appointment;