'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faShip, faBox, faCheck, faClipboardCheck, faCalendarCheck, 
    faFileAlt, faTruckLoading, faPassport, faEnvelopeOpenText, faMapMarkedAlt, 
    faCheckCircle, faTools, faTruck, faWarehouse, faCarSide, faChevronDown, faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/roro/hero.webp";
import suitableCargoImg from "../../assets/images/Landing/roro/suitable_cargo.webp";
import autoImg from "../../assets/images/Landing/roro/auto.webp";
import constructionImg from "../../assets/images/Landing/roro/construction.webp";
import oilgasImg from "../../assets/images/Landing/roro/oilgas.webp";

import RoRoShippingServicesQatarData from "./RoRoShippingServicesQatarData.js";

const iconMap = {
    "ship": faShip,
    "box": faBox,
    "clipboard-check": faClipboardCheck,
    "calendar-check": faCalendarCheck,
    "file-alt": faFileAlt,
    "truck-loading": faTruckLoading,
    "passport": faPassport,
    "envelope-open-text": faEnvelopeOpenText,
    "map-marked-alt": faMapMarkedAlt,
    "check-circle": faCheckCircle,
    "tools": faTools,
    "truck": faTruck,
    "warehouse": faWarehouse
};

const imageMap = {
    "auto": (autoImg?.src || autoImg),
    "construction": (constructionImg?.src || constructionImg),
    "oilgas": (oilgasImg?.src || oilgasImg)
};

const RoRoShippingServicesQatar = () => {
    const {
        meta, hero, whatIs, comparison, services, process, 
        benefits, industries, faq, requestQuote
    } = RoRoShippingServicesQatarData;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            

            {/* Banner Section */}
            <section className="relative w-full overflow-hidden bg-[#125194] text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("${bannerImg?.src || bannerImg}")`,
                    }}
                    role="img"
                    aria-label={hero.imageAlt}
                />
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 sm:py-40 flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-6">{hero.title}</h1>
                        <p className="text-lg sm:text-xl font-medium text-blue-50 mb-4">{hero.description}</p>
                        {hero.paragraphs.map((p, idx) => (
                            <p key={idx} className="text-base sm:text-lg text-blue-100 mb-8 max-w-3xl">{p}</p>
                        ))}
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            {hero.ctaLabel}
                        </button>
                    </div>
                </div>
            </section>

            {/* What is RoRo Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{whatIs.title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-12" dangerouslySetInnerHTML={{ __html: whatIs.description }} />
                </div>
            </section>

            {/* Suitable Cargo Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="order-2 lg:order-1 flex flex-col justify-center">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{whatIs.listTitle}</h2>
                            <ul className="space-y-4 mb-8">
                                {whatIs.list.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-700">
                                        <FontAwesomeIcon icon={faCheck} className="text-[#009adb] mt-1" />
                                        <span className="text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-600 italic border-l-4 border-[#009adb] pl-4">{whatIs.conclusion}</p>
                        </div>
                        <div className="order-1 lg:order-2 relative h-full w-full min-h-[400px]">
                            <img src={suitableCargoImg?.src || suitableCargoImg} alt="Suitable RoRo Cargo" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{comparison.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{comparison.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {comparison.cards.map((card, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-slate-200">
                                    <div className="w-12 h-12 bg-[#125194] rounded-full flex items-center justify-center text-white text-xl">
                                        <FontAwesomeIcon icon={iconMap[card.icon]} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{card.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {card.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start space-x-3 text-gray-700">
                                            <FontAwesomeIcon icon={faCheck} className="text-[#009adb] mt-1" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-xl text-center max-w-4xl mx-auto border border-blue-100">
                        <p className="text-gray-800 font-medium">{comparison.conclusion}</p>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] text-center mb-12">{services.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
                                <FontAwesomeIcon icon={iconMap[item.icon]} className="text-[#009adb] text-4xl mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Map Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{process.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{process.description}</p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-8 relative">
                        <div className="hidden lg:block absolute left-[39px] top-[40px] bottom-[40px] w-1 bg-blue-100 z-0"></div>
                        {process.steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col lg:flex-row items-start relative z-10">
                                <div className="flex items-center lg:items-start lg:w-32 flex-shrink-0 mb-4 lg:mb-0">
                                    <div className="w-20 h-20 bg-[#125194] rounded-full flex flex-col items-center justify-center text-white font-bold shadow-lg border-4 border-white text-xl">
                                        <span className="text-xs opacity-80 mb-[-4px]">Step</span>
                                        {idx + 1}
                                    </div>
                                    {idx !== process.steps.length - 1 && (
                                        <div className="hidden lg:block w-8 h-1 bg-[#125194] mt-10 ml-4"></div>
                                    )}
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full hover:shadow-md transition-shadow">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <FontAwesomeIcon icon={iconMap[step.icon]} className="text-[#009adb] text-xl" />
                                        <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <p className="text-center mt-12 text-gray-600 font-medium italic bg-blue-50 p-4 rounded-xl max-w-3xl mx-auto">{process.conclusion}</p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6 leading-tight">{benefits.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: benefits.description }} />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {benefits.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center flex flex-col items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-[#009adb] text-3xl mb-4" />
                                <span className="font-bold text-gray-800 text-lg block mb-2">{item.title}</span>
                                <span className="text-gray-600 text-sm">{item.description}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl border-t-4 border-[#009adb] shadow-sm">
                        <p className="text-gray-700 italic">{benefits.conclusion}</p>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{industries.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: industries.description }} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.slides.map((slide, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col">
                                <img src={imageMap[slide.image]} alt={slide.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">{slide.title}</h3>
                                    <p className="text-gray-600 text-sm flex-1">{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] text-center mb-10">
                        {faq.title}
                    </h2>
                    <div className="space-y-4 mb-10">
                        {faq.items.map((item, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                    onClick={() => toggleFaq(idx)}
                                >
                                    <span className="font-bold text-gray-800">{item.question}</span>
                                    <span className="text-[#125194] ml-4 flex-shrink-0">
                                        <FontAwesomeIcon icon={openFaqIndex === idx ? faChevronUp : faChevronDown} />
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-4 text-gray-600 border-t border-slate-200 pt-4 bg-slate-50">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner with Split Layout */}
            <section className="bg-[#125194] text-white overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col justify-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{requestQuote.title}</h2>
                        <p className="text-lg text-blue-100 mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: requestQuote.description }} />
                        <div>
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="bg-white text-[#125194] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 inline-block"
                            >
                                {requestQuote.ctaLabel}
                            </button>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-[#009adb]/20 mix-blend-multiply z-10"></div>
                        <img src={bannerImg?.src || bannerImg} alt="RoRo Shipping" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Quote Popup */}
            <AnimatePresence>
                {isPopupOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setIsPopupOpen(false);
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative my-8"
                        >
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
                                aria-label="Close"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-xl" />
                            </button>
                            <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
                                <h3 className="text-2xl font-bold text-[#125194] mb-2">Request Quote</h3>
                                <p className="text-gray-600 mb-6">Fill out the form below and our team will get back to you shortly.</p>
                                <GetQuoteForm />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RoRoShippingServicesQatar;
