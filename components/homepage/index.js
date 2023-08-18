import Link from 'next/link';
import React from 'react'

const allImages = {
    imgUrl:
      "https://cdn.dhakapost.com/media/imgAll/BG/2023August/pension-20230817134156.jpg",
    imgUrl2:
      "https://c0.wallpaperflare.com/preview/57/497/73/movie-reel-projector-film-thumbnail.jpg",
    imgUrl3:
      "https://media.istockphoto.com/id/1207316492/vector/print.jpg?s=612x612&w=0&k=20&c=m1Ezv7Fef-aq8CEp9UptA069TZNgGOJNb2VbQnsZpA0=",
    imgUrl4:
      "https://media.istockphoto.com/id/1293456007/photo/silhouetted-view-of-attractive-young-couple-boy-and-girl-embracing-spending-time-together.jpg?s=612x612&w=0&k=20&c=o-HUSx27qbt4iz2O-GgJUPaZeqSXjprBg6oNiTfoWyM=",
    imgUrl5:
      "https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g=",
  };

function Homepage() {
    const renderData = (
        <div>
        {/* Banner Image */}
        <img src={allImages.imgUrl} className="w-full object-fill h-96 overflow-hidden"/>
        
        {/* Service Section Start */}
        <section className="text-gray-600 body-font bg-white">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                    Pension Wise
                </h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                    Planning for Your Dream Retirement
                </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* Pension Service Item Start */}
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1em" viewBox="0 0 384 512"><path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z"/></svg>
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">
                                Apply for pension
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">
                            Applying for pension is the foundation of your financial security in retirement. Your future self will thank you for applying for pension today.
                            </p>
                            <Link href={"/pension-form"} className="mt-3 text-indigo-500 inline-flex items-center">
                            Apply Now
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            </Link>
                        </div>
                        </div>
                    </div>
                    {/* Pension Service Item End */}

                    {/* Information Service Item Start */}
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1em" viewBox="0 0 192 512"><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">
                                Pension Informtion
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">
                            Your retirement dreams start with accurate and up-to-date pension information. From basics to advanced strategies, our pension information covers it all.
                            </p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* Information Service Item End */}

                    {/* Contact Service Item Start */}
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">
                                Contact Us
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">
                            Got questions? We've got answers. Contact us for assistance. Your satisfaction is our priority. Contact us with your concerns.
                            </p>
                            <Link href={"/contact"} className="mt-3 text-indigo-500 inline-flex items-center">
                            Contact Here
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            </Link>
                        </div>
                        </div>
                    </div>
                    {/* Contact Service Item End */}
                </div>
            </div>
        </section>
        {/* Service Section End */} 

        {/* Officer Profile Start */}
        <section className="text-gray-600 body-font bg-white">
            <div className="container px-5 py-16 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                Officers
                </h1>
                <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                    >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                    </svg>
                    <p className="leading-relaxed mb-6">
                        Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
                        neutra before they sold out fixie 90's microdosing. Tacos pinterest
                        fanny pack venmo, post-ironic heirloom try-hard pabst authentic
                        iceland.
                    </p>
                    <a className="inline-flex items-center">
                        <img
                        alt="testimonial"
                        src="https://dummyimage.com/106x106"
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                            Holden Caulfield
                        </span>
                        <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                        </span>
                    </a>
                    </div>
                </div>
                <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                    >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                    </svg>
                    <p className="leading-relaxed mb-6">
                        Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
                        neutra before they sold out fixie 90's microdosing. Tacos pinterest
                        fanny pack venmo, post-ironic heirloom try-hard pabst authentic
                        iceland.
                    </p>
                    <a className="inline-flex items-center">
                        <img
                        alt="testimonial"
                        src="https://dummyimage.com/107x107"
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                            Alper Kamu
                        </span>
                        <span className="text-gray-500 text-sm">DESIGNER</span>
                        </span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/* Officer Profile End */}

        {/* Contact Section Start */}
        <section className="text-gray-600 bg-white body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    frameBorder={0}
                    title="map"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                />
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                        ADDRESS
                    </h2>
                    <p className="mt-1">
                        Photo booth tattooed prism, portland taiyaki hoodie neutra
                        typewriter
                    </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                        EMAIL
                    </h2>
                    <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                        PHONE
                    </h2>
                    <p className="leading-relaxed">123-456-7890</p>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                    Feedback
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                    Post-ironic portland shabby chic echo park, banjo fashion axe
                </p>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                    />
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Send
                </button>
                <p className="text-xs text-gray-500 mt-3">
                    Chicharrones blog helvetica normcore iceland tousled brook viral
                    artisan.
                </p>
                </div>
            </div>
        </section>
        {/* Contact Section End */}
    </div>
    )
    return renderData;
}

export default Homepage
