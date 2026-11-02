'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faAnchor, faFileSignature, faBoxOpen, faGasPump, faFileInvoiceDollar,
    faCheck, faShip, faIdCard, faHotel, faCogs, faSearch, faCheckDouble, faCalendarCheck,
    faOilCan, faBoxes, faCar, faTools, faShippingFast, faChevronDown, faChevronUp, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/vessel_agency/hero.webp";
import agentImg from "../../assets/images/Landing/vessel_agency/agent.webp";
import mapImg from "../../assets/images/Landing/saudi_customs/ports.webp";
import understandingImg from "../../assets/images/Landing/vessel_agency/understanding.webp";

import GuideVesselAgencySaudiArabiaData from "./GuideVesselAgencySaudiArabiaData.js";

const iconMap = {
    "anchor": faAnchor,
    "file-signature": faFileSignature,
    "box-open": faBoxOpen,
    "gas-pump": faGasPump,
    "file-invoice-dollar": faFileInvoiceDollar,
    "ship": faShip,
    "id-card": faIdCard,
    "hotel": faHotel,
    "cogs": faCogs,
    "search": faSearch,
    "check-double": faCheckDouble,
    "calendar-check": faCalendarCheck,
    "oil-can": faOilCan,
    "boxes": faBoxes,
    "car": faCar,
    "tools": faTools,
    "shipping-fast": faShippingFast
};

const GuideVesselAgencySaudiArabia = () => {
    const {
        meta,
        hero,
        understanding,
        responsibilities,
        regulatory,
        supportFlow,
        locations,
        vesselTypes,
        faq,
        requestQuote
    } = GuideVesselAgencySaudiArabiaData;

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
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-32 flex flex-col justify-center min-h-[400px] md:min-h-[500px]">
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

            {/* Understanding Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{understanding.title}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">{understanding.description}</p>
                            <ul className="space-y-3 mb-6">
                                {understanding.services.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                                        <FontAwesomeIcon icon={faCheck} className="text-[#125194] mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 font-medium italic border-l-4 border-[#125194] pl-4">{understanding.conclusion}</p>
                        </div>
                        <div className="relative h-full w-full min-h-[400px] order-1 lg:order-2">
                            <img src={understandingImg?.src || understandingImg} alt="Understanding Vessel Agency" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsibilities Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194]">{responsibilities.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {responsibilities.items.map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-blue-100 text-[#125194] rounded-full flex items-center justify-center text-2xl mb-6">
                                    <FontAwesomeIcon icon={iconMap[item.icon]} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regulatory Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative h-full min-h-[400px]">
                            <img src={agentImg?.src || agentImg} alt="Vessel Agent" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{regulatory.title}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">{regulatory.description}</p>
                            <ul className="space-y-4 mb-8">
                                {regulatory.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                                        <FontAwesomeIcon icon={faCheckDouble} className="text-[#125194] mt-1" />
                                        <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[#125194] font-medium bg-blue-50 p-4 rounded-lg">{regulatory.conclusion}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Flow Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{supportFlow.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: supportFlow.description }} />
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative border-l-4 border-[#125194] ml-6 sm:ml-8 space-y-8 pb-8">
                            {supportFlow.steps.map((step, idx) => (
                                <div key={idx} className="relative pl-8 sm:pl-12">
                                    <div className="absolute w-12 h-12 bg-[#125194] text-white rounded-full flex items-center justify-center text-xl -left-[26px] top-0 border-4 border-white shadow-sm">
                                        <FontAwesomeIcon icon={iconMap[step.icon]} />
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-600 italic mt-8">{supportFlow.conclusion}</p>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{locations.title}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">{locations.description}</p>
                            <ul className="space-y-3">
                                {locations.places.map((place, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <FontAwesomeIcon icon={faAnchor} className="text-[#125194]" />
                                        <span className="text-gray-700 font-medium">{place}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-full w-full min-h-[400px]">
                            <img src={mapImg?.src || mapImg} alt="Saudi Arabia Ports" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vessel Types Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{vesselTypes.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{vesselTypes.description}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vesselTypes.types.map((type, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-[#125194] text-4xl mb-4">
                                    <FontAwesomeIcon icon={iconMap[type.icon]} />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg mb-3">{type.title}</h3>
                                <p className="text-gray-600 text-sm">{type.description}</p>
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
                    <div className="space-y-4">
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
                                <h3 className="text-2xl font-bold text-[#125194] mb-2">Vessel Enquiry</h3>
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

export default GuideVesselAgencySaudiArabia;
