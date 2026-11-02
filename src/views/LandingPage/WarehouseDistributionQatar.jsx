'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlane, faFileContract, faShip, faWarehouse, faTruckLoading, faBox, faClock, faClipboardList, faShippingFast, faGlobe, faNetworkWired, faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/warehouse/warehouse-interior-with-forklifts-shelving (1).webp";
import professionalImg from "../../assets/images/Landing/warehouse/workers-organizing-boxes-warehouse.webp";
import industriesImg from "../../assets/images/Landing/warehouse/opened-ingredient.webp";
import whyChooseImg from "../../assets/images/Landing/commonimages/Comprehensive Cargo Shipping.webp";

import WarehouseDistributionQatarData from "./WarehouseDistributionQatarData.js";

const iconMap = {
    "plane": faPlane,
    "file-contract": faFileContract,
    "ship": faShip,
    "warehouse": faWarehouse,
    "truck-loading": faTruckLoading,
    "box": faBox,
    "clock": faClock,
    "clipboard-list": faClipboardList,
    "shipping-fast": faShippingFast,
    "globe": faGlobe,
    "network-wired": faNetworkWired
};

const WarehouseDistributionQatar = () => {
    const {
        meta,
        hero,
        whatIs,
        services,
        warehousingDistribution,
        process,
        benefits,
        whyChoose,
        industries,
        faq,
        requestQuote
    } = WarehouseDistributionQatarData;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            

            {/* Custom Banner Section with Intro */}
            <section className="relative w-full overflow-hidden bg-[#125194] text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("${bannerImg?.src || bannerImg}")`,
                    }}
                    role="img"
                    aria-label={hero.imageAlt}
                />
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-32 flex flex-col items-center justify-center text-center min-h-[400px] md:min-h-[500px]">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-6 max-w-4xl">{hero.title}</h1>
                    <div className="space-y-4 max-w-4xl">
                        <p className="text-lg sm:text-xl font-medium text-blue-50">
                            {hero.description}
                        </p>
                        {hero.paragraphs.slice(0, 1).map((p, idx) => (
                            <p key={idx} className="text-base sm:text-lg text-blue-100" dangerouslySetInnerHTML={{ __html: p }} />
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            Get a Quote
                        </button>
                        <a
                            href="/contact-us"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-[#125194] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            Talk to Our Team
                        </a>
                    </div>
                </div>
            </section>

            {/* What Is */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {whatIs.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: whatIs.description }} />
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: whatIs.closing }} />
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-[#125194] mb-4">Support Activities Checklist</h3>
                            <ul className="space-y-4">
                                {whatIs.checklist.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold mt-1">✓</span>
                                        <span className="text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-6">
                            {services.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: services.description }} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.cards.map((card, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <div className="w-16 h-16 bg-[#125194] text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                                    <FontAwesomeIcon icon={iconMap[card.icon] || faWarehouse} />
                                </div>
                                <h3 className="text-xl font-bold text-[#125194] mb-4">{card.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: card.description }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warehousing Distribution */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Centered heading + description above the columns */}
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-6">
                            {warehousingDistribution.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: warehousingDistribution.description }} />
                    </div>

                    {/* Two-column: cards list + image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="space-y-4 flex flex-col justify-center">
                            {warehousingDistribution.cards.map((card, idx) => (
                                <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 flex-shrink-0 bg-blue-50 text-[#125194] rounded-full flex items-center justify-center text-xl">
                                        <FontAwesomeIcon icon={iconMap[card.icon] || faWarehouse} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#125194] mb-2">{card.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: card.description }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-full w-full min-h-[400px]">
                            <img
                                src={professionalImg?.src || professionalImg}
                                alt="Warehousing and Distribution Services Qatar"
                                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">
                            {process.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {process.description}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 relative">
                        {process.steps.map((step, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-6 text-center shadow-sm border border-slate-100 relative group hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                                <div className="w-16 h-16 bg-[#125194] text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 relative">
                                    {idx + 1}
                                </div>
                                <h4 className="text-lg font-bold text-[#125194] mb-3">
                                    {step.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                                
                                {/* Right Arrows for XL screens (4 columns) */}
                                {idx < process.steps.length - 1 && (
                                    <div className="hidden xl:block absolute top-14 -right-6 text-[#125194] text-2xl z-0 opacity-50 transform -translate-y-1/2">
                                        {(idx + 1) % 4 !== 0 && <FontAwesomeIcon icon={faArrowRight} />}
                                    </div>
                                )}
                                {/* Right Arrows for LG screens (3 columns) */}
                                {idx < process.steps.length - 1 && (
                                    <div className="hidden lg:block xl:hidden absolute top-14 -right-5 text-[#125194] text-2xl z-0 opacity-50 transform -translate-y-1/2">
                                        {(idx + 1) % 3 !== 0 && <FontAwesomeIcon icon={faArrowRight} />}
                                    </div>
                                )}
                                {/* Right Arrows for MD screens (2 columns) */}
                                {idx < process.steps.length - 1 && (
                                    <div className="hidden md:block lg:hidden absolute top-14 -right-5 text-[#125194] text-2xl z-0 opacity-50 transform -translate-y-1/2">
                                        {(idx + 1) % 2 !== 0 && <FontAwesomeIcon icon={faArrowRight} />}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-gray-700 font-medium text-base sm:text-lg bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
                            {process.closing}
                        </p>
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-[#125194] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            Request a Storage Plan
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-12 sm:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">
                            {benefits.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {benefits.description}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {benefits.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow text-left">
                                <h3 className="text-lg font-bold text-[#125194] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="text-gray-700 text-center text-base mt-10 max-w-4xl mx-auto italic text-slate-500">
                        {benefits.closing}
                    </p>
                </div>
            </section>

            {/* Why Choose ALSI Global */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {whyChoose.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: whyChoose.description }} />
                            
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center shadow-sm">
                                    <h4 className="text-3xl font-bold text-[#125194] mb-1">15+</h4>
                                    <p className="text-gray-600 text-sm font-medium">Years Experience</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center shadow-sm">
                                    <h4 className="text-3xl font-bold text-[#125194] mb-1">9,000+</h4>
                                    <p className="text-gray-600 text-sm font-medium">Monthly Declarations</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center relative">
                            <img
                                src={whyChooseImg?.src || whyChooseImg}
                                alt={whyChoose.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Industries */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="relative h-full w-full min-h-[400px] order-2 lg:order-1">
                            <img
                                src={industriesImg?.src || industriesImg}
                                alt={industries.imageAlt}
                                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-6 text-justify md:text-left order-1 lg:order-2 flex flex-col justify-center">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {industries.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {industries.description}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                {industries.list.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                        <span className="text-green-500 font-bold mt-1">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4 italic text-slate-500">
                                {industries.closing}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194]">
                            {faq.title}
                        </h2>
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                        {faq.faqs.map((faqItem, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                                >
                                    <h3 className="text-base sm:text-lg font-bold text-[#125194] pr-4">
                                        {faqItem.question}
                                    </h3>
                                    <div className="flex-shrink-0">
                                        <motion.div
                                            animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#125194]"
                                        >
                                            ↓
                                        </motion.div>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-slate-50 pt-4">
                                                {faqItem.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Request a Quote Footer Banner */}
            <section className="py-12 sm:py-16 bg-[#125194]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="text-white space-y-4 w-full max-w-3xl text-center mx-auto">
                            <h2 className="text-2xl sm:text-4xl font-bold">
                                {requestQuote.title}
                            </h2>
                            <p className="text-blue-100 text-base sm:text-lg">
                                {requestQuote.description}
                            </p>
                            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <a href={`mailto:${requestQuote.email}`} className="flex items-center gap-2 text-white hover:text-blue-200">
                                    <span className="font-bold">Email:</span> {requestQuote.email}
                                </a>
                                <span className="hidden sm:inline text-blue-300">|</span>
                                <div className="flex items-center gap-2 text-white">
                                    <span className="font-bold">Qatar:</span> {requestQuote.phone}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="w-full sm:w-auto bg-white text-[#125194] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
                            >
                                Request a Warehouse Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Form Popup */}
            <AnimatePresence>
                {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed inset-0 backdrop-brightness-50" onClick={() => setIsPopupOpen(false)}></div>
                        <div className="relative rounded-xl shadow-lg w-full max-w-md mx-auto z-50 bg-transparent">
                            <button
                                className="absolute top-4 right-4 text-gray-100 hover:text-gray-200 transition duration-300 border-[3px] border-gray-100 hover:border-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
                                onClick={() => setIsPopupOpen(false)}
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-sm" />
                            </button>
                            <GetQuoteForm formTitle="Enquire Now" closeModal={() => setIsPopupOpen(false)} />
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WarehouseDistributionQatar;
