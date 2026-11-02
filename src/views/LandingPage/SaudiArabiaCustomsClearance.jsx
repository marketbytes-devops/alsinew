'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faFileSignature, faSyncAlt, faCertificate, faBarcode, faAnchor,
    faClipboardList, faCheckCircle, faLaptop, faHandshake, faTruckLoading,
    faGasPump, faHardHat, faUtensils, faPills, faShoppingCart, faIndustry,
    faChevronDown, faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/saudi_customs/hero.webp";
import portsImg from "../../assets/images/Landing/saudi_customs/ports.webp";

import SaudiArabiaCustomsClearanceData from "./SaudiArabiaCustomsClearanceData.js";

const iconMap = {
    "file-signature": faFileSignature,
    "sync-alt": faSyncAlt,
    "certificate": faCertificate,
    "barcode": faBarcode,
    "anchor": faAnchor,
    "clipboard-list": faClipboardList,
    "check-circle": faCheckCircle,
    "laptop": faLaptop,
    "handshake": faHandshake,
    "truck-loading": faTruckLoading,
    "gas-pump": faGasPump,
    "hard-hat": faHardHat,
    "utensils": faUtensils,
    "pills": faPills,
    "shopping-cart": faShoppingCart,
    "industry": faIndustry
};

const SaudiArabiaCustomsClearance = () => {
    const {
        meta,
        hero,
        challenges,
        approach,
        locations,
        industries,
        comparison,
        faq,
        requestQuote
    } = SaudiArabiaCustomsClearanceData;

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
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("${bannerImg?.src || bannerImg}")`,
                    }}
                    role="img"
                    aria-label={hero.imageAlt}
                />
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-32 flex flex-col justify-center min-h-[400px] md:min-h-[500px]">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-6">{hero.title}</h1>
                        <p className="text-lg sm:text-xl font-medium text-blue-50 mb-8">
                            {hero.description}
                        </p>
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            {hero.ctaLabel}
                        </button>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-12 sm:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{challenges.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: challenges.description }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {challenges.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-blue-50 text-[#125194] rounded-full flex items-center justify-center text-2xl mb-6">
                                    <FontAwesomeIcon icon={iconMap[item.icon]} />
                                </div>
                                <h3 className="text-xl font-bold text-[#125194] mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6">{approach.title}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{approach.description}</p>
                    </div>
                    <div className="space-y-6 max-w-5xl mx-auto">
                        {approach.steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row gap-6 items-start bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="w-12 h-12 flex-shrink-0 bg-[#125194] text-white rounded-full flex items-center justify-center text-xl">
                                    <FontAwesomeIcon icon={iconMap[step.icon]} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#125194] mb-2">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-[#125194] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300"
                        >
                            Discuss Your Approach
                        </button>
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
                            <ul className="space-y-4">
                                {locations.places.map((place, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <FontAwesomeIcon icon={faAnchor} className="text-[#125194]" />
                                        <span className="text-gray-700 font-medium">{place}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-full w-full min-h-[400px]">
                            <img src={portsImg?.src || portsImg} alt="Saudi Arabia Ports" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100" />
                        </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.cards.map((card, idx) => (
                            <div key={idx} className="flex items-start space-x-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <div className="text-[#125194] text-3xl mt-1">
                                    <FontAwesomeIcon icon={iconMap[card.icon]} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">{card.title}</h3>
                                    <p className="text-gray-600 text-sm">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-[#125194] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300"
                        >
                            Get Industry Solutions
                        </button>
                    </div>
                </div>
            </section>

            {/* Comparison Table Section */}
            {/* <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194]">{comparison.title}</h2>
                    </div>
                    <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-200 bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#125194] text-white">
                                    <th className="p-4 sm:p-6 text-lg font-semibold w-1/4">Task</th>
                                    <th className="p-4 sm:p-6 text-lg font-semibold w-1/3 border-l border-blue-800">DIY Approach</th>
                                    <th className="p-4 sm:p-6 text-lg font-semibold w-5/12 border-l border-blue-800">With ALSI Global</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {comparison.rows.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 sm:p-6 font-bold text-gray-800">{row.task}</td>
                                        <td className="p-4 sm:p-6 text-gray-600 border-l border-slate-200">{row.diy}</td>
                                        <td className="p-4 sm:p-6 text-[#125194] font-medium border-l border-slate-200 bg-blue-50/30">{row.alsi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section> */}

            {/* FAQs */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] text-center mb-10">
                        {faq.title}
                    </h2>
                    <div className="space-y-4">
                        {faq.items.map((item, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-sm">
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
                                            <div className="px-6 pb-4 text-gray-600 border-t border-slate-200 pt-4 bg-white">
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

            {/* CTA */}
            <section className="py-12 sm:py-20 bg-[#125194] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-6">{requestQuote.title}</h2>
                    <p className="text-lg text-blue-100 mb-10" dangerouslySetInnerHTML={{ __html: requestQuote.description }} />
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-white text-[#125194] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        {requestQuote.ctaLabel}
                    </button>
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
                                <h3 className="text-2xl font-bold text-[#125194] mb-2">Get Customs Clearance Support</h3>
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

export default SaudiArabiaCustomsClearance;
