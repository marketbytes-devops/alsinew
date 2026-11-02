'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faClock, faHeadset, faCertificate, faClipboardCheck, 
    faShieldHalved, faNetworkWired, faFileSignature, faRoute, 
    faBoxOpen, faShip, faFileContract, faTruck, faShieldAlt, 
    faGavel, faGears, faFlask, faGasPump, faIndustry, faPills, 
    faCarBattery, faPaintRoller, faGlobe, faCheckCircle, faExclamationTriangle,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/dangerous_goods/hero.webp";
import professionalImg from "../../assets/images/Landing/dangerous_goods/what_is.webp";
import whyChooseImg from "../../assets/images/Landing/commonimages/Comprehensive Cargo Shipping.webp";

import DangerousGoodsCargoQatarData from "./DangerousGoodsCargoQatarData.js";

const iconMap = {
    "clock": faClock,
    "headset": faHeadset,
    "certificate": faCertificate,
    "clipboard-check": faClipboardCheck,
    "shield-halved": faShieldHalved,
    "network-wired": faNetworkWired,
    "file-signature": faFileSignature,
    "route": faRoute,
    "box-open": faBoxOpen,
    "ship": faShip,
    "file-contract": faFileContract,
    "truck": faTruck,
    "shield-check": faShieldAlt,
    "gavel": faGavel,
    "gears": faGears,
    "flask": faFlask,
    "gas-pump": faGasPump,
    "industry": faIndustry,
    "pills": faPills,
    "car-battery": faCarBattery,
    "paint-roller": faPaintRoller,
    "globe": faGlobe
};

const DangerousGoodsCargoQatar = () => {
    const {
        meta,
        hero,
        stats,
        whatIs,
        capabilities,
        workflow,
        whyChoose,
        approach,
        sectors,
        faq,
        requestQuote
    } = DangerousGoodsCargoQatarData;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
            

            {/* Custom Banner Section with Intro */}
            <section className="relative w-full overflow-hidden bg-[#125194] text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("${bannerImg?.src || bannerImg}")`,
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
                        {hero.paragraphs.slice(0, 1).map((p, idx) => (
                            <p key={idx} className="text-base sm:text-lg text-blue-100" dangerouslySetInnerHTML={{ __html: p }} />
                        ))}
                    </div>
                    <div className="mt-10 flex justify-center gap-4 flex-wrap">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            {hero.ctaLabel}
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white relative -mt-10 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.items.map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">

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
                            
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#125194]">
                                <h3 className="text-lg font-bold text-[#125194] mb-3">{whatIs.introList}</h3>
                                <ul className="space-y-3">
                                    {whatIs.checklist.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-700">
                                            <span className="text-green-500 font-bold mt-1">✓</span>
                                            <span className="text-base font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
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

            {/* Capabilities */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-6">
                            {capabilities.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {capabilities.description}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {capabilities.pillars.map((pillar, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center md:text-left flex flex-col items-center md:items-start">
                                <div className="w-16 h-16 bg-[#125194] text-white rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg">
                                    <FontAwesomeIcon icon={iconMap[pillar.icon]} />
                                </div>
                                <h3 className="text-xl font-bold text-[#125194] mb-4">{pillar.title}</h3>
                                <ul className="space-y-3">
                                    {pillar.points.map((point, pIdx) => (
                                        <li key={pIdx} className="text-gray-600 text-base leading-relaxed flex items-start space-x-2 text-left">
                                            <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                                            <span dangerouslySetInnerHTML={{ __html: point }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-6">
                            {workflow.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: workflow.description }} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-4 relative">
                        {workflow.steps.map((step, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100 relative group hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                                <div className="w-14 h-14 bg-[#125194] text-white rounded-full flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 relative">
                                    <FontAwesomeIcon icon={iconMap[step.icon]} />
                                </div>
                                <h4 className="text-base font-bold text-[#125194] mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    {step.description}
                                </p>
                                
                                {idx < workflow.steps.length - 1 && (
                                    <div className="hidden xl:block absolute top-12 -right-5 text-[#125194] text-xl z-0 opacity-40 transform -translate-y-1/2">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <div className="bg-blue-50 border border-blue-200 text-[#125194] px-6 py-4 rounded-xl shadow-sm text-base font-medium">
                            {workflow.regulatoryNote}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-6">
                            {whyChoose.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {whyChoose.description}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChoose.groups.map((group, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-white text-[#125194] rounded-full flex items-center justify-center text-2xl shadow-sm border border-slate-200">
                                        <FontAwesomeIcon icon={iconMap[group.icon]} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#125194]">{group.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {group.items.map((item, iIdx) => (
                                        <li key={iIdx} className="flex items-start space-x-3">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-gray-700 text-base italic text-slate-500">
                            {whyChoose.closing}
                        </p>
                    </div>
                </div>
            </section>

            {/* ALSI Approach */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {approach.title}
                            </h2>
                            <div className="flex items-center gap-4 py-4">
                                <div className="bg-blue-50 text-[#125194] px-4 py-2 rounded-lg border border-blue-100 font-bold">WCA</div>
                                <div className="bg-blue-50 text-[#125194] px-4 py-2 rounded-lg border border-blue-100 font-bold">FIATA</div>
                                <div className="bg-blue-50 text-[#125194] px-4 py-2 rounded-lg border border-blue-100 font-bold">ISO 9001:2015</div>
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: approach.description }} />
                            
                            <div className="mt-8 pt-4">
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="bg-[#125194] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300"
                                >
                                    {approach.ctaLabel}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center relative">
                            <img
                                src={whyChooseImg?.src || whyChooseImg}
                                alt={approach.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-6">
                            {sectors.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                            {sectors.description}
                        </p>
                    </div>

                    {/* Top Row: Industry Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {sectors.list.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">

                                <span className="text-gray-800 font-medium text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>
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
                    
                    <div className="max-w-4xl mx-auto space-y-4 mb-8">
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

export default DangerousGoodsCargoQatar;
