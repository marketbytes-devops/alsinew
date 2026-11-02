'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faCar, faCogs, faTools, faTruck, faShip, faFileContract, 
    faCheckCircle, faChevronDown, faChevronUp, faWarehouse, faRoute, 
    faStamp, faShieldAlt, faArrowRight, faCalendarCheck, faMapMarkerAlt, 
    faClipboardCheck, faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/automotive/automotive_hero.webp";
import vehiclesImg from "../../assets/images/Landing/automotive/automotive_vehicles.webp";
import roroShipImg from "../../assets/images/Landing/automotive/automotive_roro_ship.webp";

import AutomotiveLogisticsServicesOmanData from "./AutomotiveLogisticsServicesOmanData.js";

const iconMap = {
    "car": faCar,
    "cogs": faCogs,
    "tools": faTools,
    "truck": faTruck,
    "ship": faShip,
    "file-contract": faFileContract,
    "warehouse": faWarehouse,
    "route": faRoute,
    "stamp": faStamp,
    "calendar-check": faCalendarCheck,
    "map-marker-alt": faMapMarkerAlt,
    "clipboard-check": faClipboardCheck
};

const AutomotiveLogisticsServicesOman = () => {
    const {
        meta, hero, cargoTypes, vehicleServices, freightOptions, 
        quoteInfo, process, supplyChain, whyAlsi, faq, requestQuote
    } = AutomotiveLogisticsServicesOmanData;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            

            {/* Banner / Hero Section */}
            <section className="relative w-full overflow-hidden bg-[#125194] text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8)), url("${bannerImg?.src || bannerImg}")`,
                    }}
                    role="img"
                    aria-label={hero.imageAlt}
                />
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 sm:py-40 flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight !text-white">{hero.title}</h1>
                        <p className="text-lg sm:text-xl font-medium text-blue-50 mb-8 max-w-3xl leading-relaxed">{hero.description}</p>
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-8 py-3.5 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            {hero.ctaLabel}
                        </button>
                    </div>
                </div>
            </section>

            {/* Logistics for Vehicles and Automotive Cargo Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4 leading-tight">{cargoTypes.title}</h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{cargoTypes.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cargoTypes.cards.map((card, idx) => (
                            <div 
                                key={idx}
                                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#009adb] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#009adb] flex items-center justify-center mb-6 text-2xl">
                                        <FontAwesomeIcon icon={iconMap[card.icon] || faCar} />
                                    </div>
                                    <div className="text-xl font-bold text-gray-900 mb-3">{card.title}</div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Transportation Services in Oman - Split Showcase with Image */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6 leading-tight">{vehicleServices.title}</h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">{vehicleServices.description}</p>

                            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                                <div className="text-base sm:text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#009adb]"></span>
                                    <span>{vehicleServices.checklistTitle}</span>
                                </div>
                                <div className="space-y-3.5">
                                    {vehicleServices.checklistItems.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200/70 shadow-2xs">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#009adb] mt-1 shrink-0 text-sm" />
                                            <span className="text-gray-800 text-sm sm:text-base font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                                <img 
                                    src={vehiclesImg?.src || vehiclesImg} 
                                    alt="Clean transport-ready vehicles parked in an organized automotive staging yard in Oman" 
                                    className="w-full h-[430px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#009adb] text-white text-xs font-semibold rounded-full w-fit mb-2">
                                        <FontAwesomeIcon icon={faShieldAlt} className="text-xs" />
                                        <span>Automotive Logistics Staging</span>
                                    </div>
                                    <p className="text-xs text-blue-100">Careful staging, vehicle inspection, and fleet preparation prior to dispatch across Oman and the GCC.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Automotive Freight and Transport Options Section - Split Showcase with Image */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4 leading-tight">{freightOptions.title}</h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{freightOptions.description}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            {freightOptions.modes.map((mode, idx) => (
                                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-[#009adb] shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-11 h-11 rounded-xl bg-blue-100/60 text-[#125194] flex items-center justify-center text-lg">
                                            <FontAwesomeIcon icon={iconMap[mode.icon] || faTruck} />
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#009adb] border border-blue-200">{mode.tag}</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{mode.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: mode.desc }} />
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                                <img 
                                    src={roroShipImg?.src || roroShipImg} 
                                    alt="Large ocean RoRo car carrier vessel at port berth in Oman loading passenger vehicles via stern ramp" 
                                    className="w-full h-[480px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#009adb] text-white text-xs font-semibold rounded-full w-fit mb-2">
                                        <FontAwesomeIcon icon={faShip} className="text-xs" />
                                        <span>RoRo Port Berthing & Direct Loading</span>
                                    </div>
                                    <p className="text-xs text-blue-100">Dedicated vehicle shipping and ocean RoRo operations connecting Oman ports with regional and global destinations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Information Needed for a Vehicle Quote Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4 leading-tight">{quoteInfo.title}</h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{quoteInfo.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        {quoteInfo.details.map((item, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 shadow-2xs hover:border-[#009adb] transition-all">
                                <div className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009adb] text-sm" />
                                    <span>{item.label}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="inline-flex items-center gap-2 bg-[#125194] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#009adb] transition-colors shadow-sm"
                        >
                            <span>Submit Shipment Details</span>
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </button>
                    </div>
                </div>
            </section>

            {/* How the Automotive Logistics Process Works Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4 leading-tight">{process.title}</h2>
                        <p className="text-gray-600 text-base sm:text-lg">{process.description}</p>
                    </div>

                    {/* Desktop Horizontal / Mobile Vertical Process Flow (No Button per Instructions) */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {process.steps.map((st, idx) => (
                            <div key={idx} className="relative flex flex-col bg-white border border-slate-200 rounded-xl p-5 hover:border-[#009adb] shadow-2xs transition-all duration-300">
                                <div className="w-10 h-10 rounded-full bg-[#125194] text-white flex items-center justify-center font-bold text-sm mb-4">
                                    {st.number}
                                </div>
                                <div className="text-base font-bold text-gray-900 mb-2">{st.title}</div>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{st.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Automotive Supply Chain Support Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4 leading-tight">{supplyChain.title}</h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{supplyChain.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {supplyChain.pillars.map((pillar, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-[#009adb] shadow-2xs transition-all">
                                <div className="w-12 h-12 rounded-xl bg-blue-100/60 text-[#125194] flex items-center justify-center text-xl mb-5">
                                    <FontAwesomeIcon icon={iconMap[pillar.icon] || faWarehouse} />
                                </div>
                                <div className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Consider ALSI Global? Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4 leading-tight">{whyAlsi.title}</h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{whyAlsi.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {whyAlsi.highlights.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#009adb] flex items-center justify-center text-xl mb-4">
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </div>
                                <div className="text-lg font-bold text-gray-900 mb-2">{item.title}</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] text-center mb-10 leading-tight">{faq.title}</h2>
                    <div className="space-y-4">
                        {faq.items.map((item, index) => (
                            <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-5 font-semibold text-gray-900 flex justify-between items-center hover:bg-slate-100/60 transition-colors"
                                >
                                    <span className="text-base sm:text-lg font-bold">{item.q}</span>
                                    <FontAwesomeIcon
                                        icon={openFaqIndex === index ? faChevronUp : faChevronDown}
                                        className="text-[#009adb] ml-4 shrink-0"
                                    />
                                </button>
                                {openFaqIndex === index && (
                                    <div className="p-5 pt-0 text-gray-600 text-sm sm:text-base border-t border-slate-200/60 leading-relaxed bg-white">
                                        <p>{item.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Request an Automotive Logistics Quote Section / Bottom CTA */}
            <section className="py-16 sm:py-20 bg-[#125194] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 !text-white leading-tight">{requestQuote.title}</h2>
                    <p 
                        className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed" 
                        dangerouslySetInnerHTML={{ __html: requestQuote.description }} 
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="w-full sm:w-auto bg-white text-[#125194] px-8 py-3.5 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
                        >
                            {requestQuote.ctaLabel}
                        </button>
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FontAwesomeIcon icon={faPhoneAlt} className="text-sm" />
                            <span>{requestQuote.secondaryCtaLabel}</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal Popup for Request Quote */}
            <AnimatePresence>
                {isPopupOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors p-2"
                                aria-label="Close form"
                            >
                                <FontAwesomeIcon icon={faTimes} size="lg" />
                            </button>
                            <div className="text-2xl font-bold text-[#125194] mb-2">Request an Automotive Quote</div>
                            <p className="text-gray-600 text-sm mb-6">Fill out your vehicle or cargo requirements below and our automotive logistics team will contact you promptly.</p>
                            <GetQuoteForm onClose={() => setIsPopupOpen(false)} />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AutomotiveLogisticsServicesOman;
