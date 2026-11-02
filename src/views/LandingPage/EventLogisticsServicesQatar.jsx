'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faUsers, faStore, faVideo, faClipboardList, faPlaneDeparture, 
    faPassport, faTruckLoading, faUndo, faPlane, faShip, faTruck, faHandsHelping,
    faCheck, faArrowUp, faWineGlass, faLevelUpAlt, faSnowflake, faArrowRight,
    faChevronDown, faChevronUp, faBuilding, faCalendarCheck, faBoxOpen
} from '@fortawesome/free-solid-svg-icons';
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/event_logistics/hero.webp";
import exhibitionImg from "../../assets/images/Landing/event_logistics/exhibition_hall.webp";
import cargoCareImg from "../../assets/images/Landing/event_logistics/cargo_handling.webp";

import EventLogisticsServicesQatarData from "./EventLogisticsServicesQatarData.js";

const iconMap = {
    "users": faUsers,
    "store": faStore,
    "video": faVideo,
    "clipboard-list": faClipboardList,
    "plane-departure": faPlaneDeparture,
    "passport": faPassport,
    "truck-loading": faTruckLoading,
    "undo": faUndo,
    "plane": faPlane,
    "ship": faShip,
    "truck": faTruck,
    "hands-helping": faHandsHelping,
    "arrow-up": faArrowUp,
    "wine-glass": faWineGlass,
    "level-up-alt": faLevelUpAlt,
    "snowflake": faSnowflake
};

const EventLogisticsServicesQatar = () => {
    const {
        meta, hero, audience, workflow, exhibition, transportation, 
        cargoCare, forwarding, trust, industries, faq, requestQuote
    } = EventLogisticsServicesQatarData;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [activeTab, setActiveTab] = useState(industries.tabs[0].id);

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
                        <p className="text-lg sm:text-xl font-medium text-blue-50 mb-8 line-clamp-4" dangerouslySetInnerHTML={{ __html: hero.description }} />
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            {hero.ctaLabel}
                        </button>
                    </div>
                </div>
            </section>

            {/* Audience Logistics Built Around Schedule Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{audience.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{audience.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {audience.cards.map((card, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors"></div>
                                <FontAwesomeIcon icon={iconMap[card.icon]} className="text-[#125194] text-4xl mb-6" />
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{card.label}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-bold text-red-500 uppercase tracking-wider mb-1">Challenge</p>
                                        <p className="text-gray-600 text-sm">{card.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-green-600 uppercase tracking-wider mb-1">Solution</p>
                                        <p className="text-gray-600 text-sm">{card.solution}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h4 className="text-xl font-bold text-[#125194] mb-6 text-center">Our Support Covers</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {audience.services.map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-3 text-gray-700">
                                    <FontAwesomeIcon icon={faCheck} className="text-[#009adb] mt-1" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center text-gray-600 italic font-medium">{audience.conclusion}</p>
                    </div>
                </div>
            </section>

            {/* Workflow Timeline Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] text-center mb-16">{workflow.title}</h2>
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2"></div>
                        
                        <div className="space-y-12">
                            {workflow.stages.map((stage, idx) => (
                                <div key={idx} className={`relative flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className="w-full lg:w-1/2 px-8 lg:px-16 mb-8 lg:mb-0">
                                        <div className={`bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm ${idx % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">{stage.title}</h3>
                                            <p className="text-gray-600">{stage.description}</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-8 lg:left-1/2 w-16 h-16 bg-[#125194] text-white rounded-full flex items-center justify-center text-2xl border-4 border-white shadow-md -translate-x-1/2 z-10">
                                        <FontAwesomeIcon icon={iconMap[stage.icon]} />
                                    </div>
                                    <div className="w-full lg:w-1/2 px-8 lg:px-16"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Exhibition Split Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="relative h-full w-full min-h-[400px]">
                            <img src={exhibitionImg?.src || exhibitionImg} alt="Exhibition Hall Setup" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{exhibition.title}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">{exhibition.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {exhibition.list.map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                                        <FontAwesomeIcon icon={faBoxOpen} className="text-[#009adb] mt-1" />
                                        <span className="text-sm font-medium text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-700 bg-blue-50 p-4 rounded-xl border-l-4 border-[#125194]" dangerouslySetInnerHTML={{ __html: exhibition.conclusion }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Transportation Modes */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{transportation.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{transportation.description}</p>
                    </div>
                    
                    {/* Modes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {transportation.modes.map((mode, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                <FontAwesomeIcon icon={iconMap[mode.icon]} className="text-[#009adb] text-3xl mb-4" />
                                <h3 className="text-lg font-bold text-gray-800 mb-3">{mode.title}</h3>
                                <p className="text-gray-600 text-sm">{mode.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cargo Care Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-12">
                        <div className="order-2 lg:order-1 flex flex-col justify-center">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{cargoCare.title}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">{cargoCare.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {cargoCare.principles.map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#125194]">
                                            <FontAwesomeIcon icon={faCheck} className="text-sm" />
                                        </div>
                                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-gray-700 italic border-l-4 border-[#009adb] pl-4" dangerouslySetInnerHTML={{ __html: cargoCare.conclusion }} />
                        </div>
                        <div className="order-1 lg:order-2 relative h-full w-full min-h-[400px]">
                            <img src={cargoCareImg?.src || cargoCareImg} alt="Event Cargo Care" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Freight Forwarding Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{forwarding.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{forwarding.description}</p>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-[#125194] mb-6 flex items-center"><FontAwesomeIcon icon={faClipboardList} className="mr-3" /> Document Checklist</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {forwarding.checklist.map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-3 text-gray-700">
                                    <FontAwesomeIcon icon={faCheck} className="text-[#009adb] mt-1" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 bg-white p-4 rounded-lg border border-slate-200 text-sm font-medium">{forwarding.conclusion}</p>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-8">{trust.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed text-left" dangerouslySetInnerHTML={{ __html: trust.description }} />
                    </div>
                </div>
            </section>

            {/* Tabbed Industry Layout */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{industries.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{industries.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {industries.tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-colors ${
                                    activeTab === tab.id 
                                    ? 'bg-[#125194] text-white shadow-md' 
                                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl text-center max-w-3xl mx-auto border border-slate-200 shadow-sm min-h-[120px] flex items-center justify-center">
                        <p className="text-xl text-gray-800 font-medium">
                            {industries.tabs.find(t => t.id === activeTab)?.content}
                        </p>
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

            {/* CTA Banner */}
            <section className="py-12 sm:py-20 bg-[#125194] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-6">{requestQuote.title}</h2>
                    <p className="text-lg text-blue-100 mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: requestQuote.description }} />
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
                        >
                            {requestQuote.ctaLabel1}
                        </button>
                        <a 
                            href="tel:+97444362149" 
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-[#125194] hover:-translate-y-1 transition-all duration-300"
                        >
                            {requestQuote.ctaLabel2}
                        </a>
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
                                <h3 className="text-2xl font-bold text-[#125194] mb-2">Event Enquiry</h3>
                                <p className="text-gray-600 mb-6">Fill out the details below and our agency team will get back to you shortly.</p>
                                <GetQuoteForm />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EventLogisticsServicesQatar;
