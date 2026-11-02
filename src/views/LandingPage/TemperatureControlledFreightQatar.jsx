'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faPlane, faFileContract, faShip, faWarehouse, faTruckLoading, 
    faBox, faClock, faClipboardList, faShippingFast, faGlobe, faNetworkWired, 
    faArrowDown, faArrowRight, faHeadset, faCertificate, faSnowflake, 
    faTruckFast, faThermometerHalf, faMapLocationDot, faClipboardCheck, 
    faTemperatureArrowDown, faSatelliteDish, faPeopleCarryBox, faCheckCircle,
    faUtensils, faAppleWhole, faPills, faVial, faFlask, faStore
} from '@fortawesome/free-solid-svg-icons';
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/temperature/hero.webp";
import professionalImg from "../../assets/images/Landing/temperature/what_is.webp";
import shippingServicesImg from "../../assets/images/Landing/temperature/services.webp";
import whyChooseImg from "../../assets/images/Landing/commonimages/Comprehensive Cargo Shipping.webp";

import TemperatureControlledFreightQatarData from "./TemperatureControlledFreightQatarData.js";

const iconMap = {
    "clock": faClock,
    "headset": faHeadset,
    "certificate": faCertificate,
    "snowflake": faSnowflake,
    "truck-fast": faTruckFast,
    "thermometer-half": faThermometerHalf,
    "map-location-dot": faMapLocationDot,
    "clipboard-check": faClipboardCheck,
    "temperature-arrow-down": faTemperatureArrowDown,
    "satellite-dish": faSatelliteDish,
    "people-carry-box": faPeopleCarryBox
};

const TemperatureControlledFreightQatar = () => {
    const {
        meta,
        hero,
        stats,
        whatIs,
        services,
        shippingServices,
        process,
        benefits,
        whyChoose,
        industries,
        faq,
        requestQuote
    } = TemperatureControlledFreightQatarData;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
            

            {/* Custom Banner Section with Intro */}
            <section className="relative w-full overflow-hidden bg-[#125194] text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("${bannerImg?.src || bannerImg}")`,
                    }}
                    role="img"
                    aria-label={hero.imageAlt}
                />
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-32 flex flex-col items-center justify-center text-center min-h-[400px] md:min-h-[500px]">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-6 max-w-4xl leading-tight drop-shadow-lg">{hero.title}</h1>
                    <div className="space-y-4 max-w-4xl drop-shadow-md">
                        <p className="text-lg sm:text-xl font-medium text-blue-50">
                            {hero.description}
                        </p>
                        {/* {hero.paragraphs.map((p, idx) => (
                            <p key={idx} className="text-base sm:text-lg text-blue-100" dangerouslySetInnerHTML={{ __html: p }} />
                        ))} */}
                    </div>
                    <div className="mt-10 flex justify-center gap-4 flex-wrap">
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

            {/* Stats Section */}
            <section className="py-12 bg-white relative -mt-10 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.items.map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex flex-col items-center text-center">

                                <div className="text-3xl font-bold text-[#125194] mb-2">{stat.value}</div>
                                <div className="text-lg font-bold text-slate-800 mb-2">{stat.label}</div>
                                <p className="text-sm text-slate-600">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Is Section */}
            <section className="py-12 sm:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="space-y-6 text-justify md:text-left flex flex-col justify-center">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {whatIs.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: whatIs.description }} />
                            
                            <ul className="space-y-3 pt-2">
                                {whatIs.checklist.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-700">
                                        <span className="text-green-500 font-bold mt-1">✓</span>
                                        <span className="text-base font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 italic text-slate-500">
                                {whatIs.closing}
                            </p>
                        </div>
                        <div className="relative h-full w-full min-h-[400px]">
                            <img
                                src={professionalImg?.src || professionalImg}
                                alt={whatIs.title}
                                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-6">
                            {services.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {services.description}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.cards.map((card, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">

                                <h3 className="text-xl font-bold text-[#125194] mb-4">{card.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shipping Services */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-6">
                            {shippingServices.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {shippingServices.description}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="space-y-6 flex flex-col justify-center">
                            <div className="space-y-4">
                                {shippingServices.flow.map((step, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 flex-shrink-0 bg-blue-50 text-[#125194] rounded-full flex items-center justify-center text-xl">
                                            <FontAwesomeIcon icon={iconMap[step.icon]} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#125194] mb-2">{step.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full w-full min-h-[400px]">
                            <img
                                src={shippingServicesImg?.src || shippingServicesImg}
                                alt={shippingServices.title}
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
                                
                                {idx < process.steps.length - 1 && (
                                    <div className="hidden xl:block absolute top-14 -right-6 text-[#125194] text-2xl z-0 opacity-50 transform -translate-y-1/2">
                                        {(idx + 1) % 4 !== 0 && <FontAwesomeIcon icon={faArrowRight} />}
                                    </div>
                                )}
                                {idx < process.steps.length - 1 && (
                                    <div className="hidden lg:block xl:hidden absolute top-14 -right-5 text-[#125194] text-2xl z-0 opacity-50 transform -translate-y-1/2">
                                        {(idx + 1) % 3 !== 0 && <FontAwesomeIcon icon={faArrowRight} />}
                                    </div>
                                )}
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
                            {process.ctaLabel}
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-12 sm:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">
                            {benefits.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: benefits.description }} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-[#125194] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center max-w-3xl mx-auto">
                        <p className="text-gray-700 text-base mt-6 italic text-slate-500">
                            {benefits.closing}
                        </p>
                    </div>
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
                            
                            <div className="mt-8">
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="bg-[#125194] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300"
                                >
                                    Get Your Cold Chain Quote Now
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center relative">
                            <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
                            <img
                                src={whyChooseImg?.src || whyChooseImg}
                                alt={whyChoose.imageAlt}
                                className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-3">
                            Sectors We Support
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {industries.title}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            {industries.description}
                        </p>
                    </div>

                    {/* Modern 4x2 Responsive Industry Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.list.map((item, idx) => {
                            const industryIcons = [
                                faUtensils,
                                faAppleWhole,
                                faPills,
                                faVial,
                                faFlask,
                                faStore,
                                faShip,
                                faGlobe
                            ];
                            const icon = industryIcons[idx % industryIcons.length];

                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#125194] group-hover:bg-[#125194] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-xl mb-4 shadow-sm">
                                            <FontAwesomeIcon icon={icon} />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-[#125194] transition-colors leading-snug">
                                            {item}
                                        </h3>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-[#125194] transition-colors">
                                        <span>Temperature Monitored</span>
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#125194]" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Use Case Callout Banner */}
                    {industries.closing && (
                        <div className="mt-12 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#125194] text-white flex-shrink-0 flex items-center justify-center text-xl shadow-md">
                                    <FontAwesomeIcon icon={faSnowflake} />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-[#125194] mb-1">
                                        Practical End-to-End Execution
                                    </h4>
                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                        {industries.closing}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="flex-shrink-0 bg-[#125194] text-white px-6 py-3 rounded-full font-semibold text-sm shadow hover:bg-blue-800 hover:shadow-md transition-all duration-300 whitespace-nowrap"
                            >
                                Request Industry Quote
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">
                            {faq.title}
                        </h2>
                    </div>
                    
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faq.faqs.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 hover:border-blue-300 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                >
                                    <span className="font-bold text-[#125194] text-lg pr-4">{item.question}</span>
                                    <motion.div
                                        animate={{ rotate: openFaq === idx ? 45 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-blue-500 flex-shrink-0"
                                    >
                                        <FontAwesomeIcon icon={faTimes} className="text-xl" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-slate-100 pt-3">
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

            {/* Request Quote Banner */}
            {/* Request Quote Banner */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#125194] leading-tight">
                            {requestQuote.title}
                        </h2>
                        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                            {requestQuote.description}
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="bg-[#125194] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                            >
                                {requestQuote.ctaLabel}
                            </button>

                        </div>
                    </div>
                </div>
            </section>

            {/* Popup Form */}
            <AnimatePresence>
                {isPopupOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden relative max-h-[90vh] flex flex-col"
                        >
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-gray-800 transition-colors z-10 p-2 bg-white/80 rounded-full backdrop-blur-sm"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-xl sm:text-2xl" />
                            </button>
                            
                            <div className="overflow-y-auto flex-1 p-0">
                                <GetQuoteForm />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TemperatureControlledFreightQatar;
