'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, faShip, faPlane, faTruck, faCheckCircle, faChevronDown, faChevronUp, 
    faTools, faCogs, faBoxes, faTruckLoading, faFileAlt, faWeightHanging, 
    faMapMarkerAlt, faCalendarCheck, faDolly, faClipboardCheck, faShieldAlt, 
    faTrailer, faGlobe, faCubes, faStamp, faComments, faArrowRight, faAnchor, faCheck
} from '@fortawesome/free-solid-svg-icons';
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/oil_gas/oil_gas_hero.webp";
import cargoImg from "../../assets/images/Landing/oil_gas/oil_gas_cargo.webp";
import customsImg from "../../assets/images/Landing/oil_gas/oil_gas_customs.webp";

import OilGasLogisticsServicesOmanData from "./OilGasLogisticsServicesOmanData.js";

const iconMap = {
    "cogs": faCogs,
    "tools": faTools,
    "boxes": faBoxes,
    "truck-loading": faTruckLoading,
    "file-alt": faFileAlt,
    "weight-hanging": faWeightHanging,
    "map-marker-alt": faMapMarkerAlt,
    "calendar-check": faCalendarCheck,
    "dolly": faDolly,
    "clipboard-check": faClipboardCheck,
    "shield-alt": faShieldAlt,
    "plane": faPlane,
    "ship": faShip,
    "truck": faTruck,
    "trailer": faTrailer,
    "globe": faGlobe,
    "cubes": faCubes,
    "stamp": faStamp,
    "comments": faComments
};

const OilGasLogisticsServicesOman = () => {
    const {
        meta, hero, whatToMove, energyCargoSupport, cargoChecklist, 
        freightOptions, customsDoc, process, whyWork, supplyChainMatrix, 
        faq, ctaSection
    } = OilGasLogisticsServicesOmanData;

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
                    aria-label="Industrial heavy-duty oil and gas equipment cargo transport across Oman desert energy project site"
                />
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 sm:py-40 flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight !text-white">{hero.title}</h1>
                        <p className="text-lg sm:text-xl font-medium text-blue-50 mb-4">{hero.description}</p>
                        {hero.paragraphs.map((p, idx) => (
                            <p key={idx} className="text-base sm:text-lg text-blue-100 mb-8 max-w-3xl">{p}</p>
                        ))}
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-8 py-3.5 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            {hero.ctaLabel}
                        </button>
                    </div>
                </div>
            </section>

            {/* What do you need to move? Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4">{whatToMove.title}</h2>
                        <p className="text-gray-600 text-base sm:text-lg">{whatToMove.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {whatToMove.categories.map((cat, idx) => (
                            <div 
                                key={idx}
                                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#009adb] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#009adb] flex items-center justify-center mb-5 text-xl">
                                        <FontAwesomeIcon icon={iconMap[cat.icon] || faCogs} />
                                    </div>
                                    <div className="text-xl font-bold text-gray-900 mb-3">{cat.title}</div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="inline-flex items-center gap-2 bg-[#125194] text-white px-7 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#009adb] transition-colors shadow-sm"
                        >
                            <span>Discuss Your Cargo Category</span>
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Logistics Support for Energy-Sector Cargo Section - Redesigned without image */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4 leading-tight">{energyCargoSupport.title}</h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{energyCargoSupport.description}</p>
                    </div>
                    
                    <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mb-8">
                        <div className="text-base sm:text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#009adb]"></span>
                            <span>Oil and gas logistics support may include:</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {energyCargoSupport.servicesList.map((service, idx) => (
                                <div 
                                    key={idx} 
                                    className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200/70 hover:border-[#009adb] hover:shadow-sm transition-all"
                                >
                                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#009adb] flex items-center justify-center shrink-0 mt-0.5">
                                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                                    </div>
                                    <span className="text-gray-800 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: service }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="inline-flex items-center gap-2 bg-[#125194] text-white px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-[#009adb] transition-colors shadow-sm"
                        >
                            <span>Discuss Shipment Scope</span>
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Oilfield Logistics Planned Around Your Cargo Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-6 leading-tight">{cargoChecklist.title}</h2>
                            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">{cargoChecklist.description}</p>
                            <div className="text-base font-bold text-gray-900 mb-4">{cargoChecklist.subtitle}</div>

                            <div className="space-y-3 mb-6">
                                {cargoChecklist.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-[#009adb] flex items-center justify-center shrink-0 text-sm">
                                            <FontAwesomeIcon icon={iconMap[item.icon] || faClipboardCheck} />
                                        </div>
                                        <span className="text-gray-800 text-sm sm:text-base font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                                <img 
                                    src={cargoImg?.src || cargoImg} 
                                    alt="Heavy oilfield equipment, drilling valves, and industrial pipes staging in Oman" 
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-4 bg-white border-t border-slate-100">
                                    <p className="text-xs text-gray-600 text-center font-medium">Oilfield industrial equipment staging & heavy crane lift logistics in Oman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Freight Forwarding and Transportation Options Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4">{freightOptions.title}</h2>
                        <p className="text-gray-700 text-base sm:text-lg">{freightOptions.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                        {freightOptions.options.map((opt, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 hover:border-[#009adb] transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-100/60 text-[#125194] flex items-center justify-center text-xl">
                                        <FontAwesomeIcon icon={iconMap[opt.icon] || faTruck} />
                                    </div>
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#009adb] border border-blue-200">{opt.tag}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{opt.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: opt.desc }} />
                            </div>
                        ))}
                    </div>

                    {/* Refined Shipment Movement Route (Fixed Typography & Design) */}
                    <div className="bg-gradient-to-r from-blue-50/80 to-slate-100/80 border border-blue-100 rounded-2xl p-6 sm:p-10">
                        <div className="text-lg sm:text-xl font-bold text-[#125194] text-center mb-8 tracking-wide">
                            {freightOptions.routeDiagram.title}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                            {freightOptions.routeDiagram.steps.map((st, idx) => (
                                <div 
                                    key={idx} 
                                    className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center relative"
                                >
                                    <span className="w-8 h-8 rounded-full bg-[#125194] text-white font-bold text-xs flex items-center justify-center mb-3.5 shadow-sm">
                                        {st.step}
                                    </span>
                                    <div className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 leading-snug">
                                        {st.label}
                                    </div>
                                    <p className="text-xs text-gray-500 font-normal leading-relaxed">
                                        {st.desc}
                                    </p>
                                    {idx < freightOptions.routeDiagram.steps.length - 1 && (
                                        <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-blue-50 border border-blue-200 text-[#125194] items-center justify-center shadow-sm text-xs">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="inline-flex items-center gap-2 bg-[#125194] text-white px-7 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#009adb] transition-colors shadow-sm"
                            >
                                <span>Get Freight Rates for Your Route</span>
                                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customs and Shipment Documentation Section - Split Layout with Customs Image */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                                <img 
                                    src={customsImg?.src || customsImg} 
                                    alt="Organized customs clearance terminal and industrial cargo staging yard in Oman" 
                                    className="w-full h-[440px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#009adb] text-white text-xs font-semibold rounded-full w-fit mb-2">
                                        <FontAwesomeIcon icon={faShieldAlt} className="text-xs" />
                                        <span>Customs Staging & Cargo Clearance</span>
                                    </div>
                                    <p className="text-xs text-blue-100">Organized staging and document verification for energy cargo consignments in Oman.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4 leading-tight">{customsDoc.title}</h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">{customsDoc.description}</p>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
                                <div className="text-base font-bold text-gray-900 mb-4">Documents commonly requested during freight planning may include:</div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    {customsDoc.documents.map((doc, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#009adb] shrink-0 text-sm" />
                                            <span className="text-gray-800 text-sm font-medium">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 bg-blue-50/70 border border-blue-200/70 rounded-xl text-xs sm:text-sm text-gray-700 mb-6">
                                <p dangerouslySetInnerHTML={{ __html: customsDoc.alsiRole }} />
                            </div>

                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="inline-flex items-center gap-2 bg-[#125194] text-white px-7 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#009adb] transition-colors shadow-sm"
                            >
                                <span>Review Customs Requirements</span>
                                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Our Oil & Gas Logistics Process Works Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4">{process.title}</h2>
                        <p className="text-gray-600 text-base sm:text-lg">{process.description}</p>
                    </div>

                    {/* Desktop Horizontal / Mobile Vertical Process Flow */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {process.steps.map((st, idx) => (
                            <div key={idx} className="relative flex flex-col bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#009adb] transition-all duration-300">
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

            {/* Why Work with ALSI Global? Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4">{whyWork.title}</h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{whyWork.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {whyWork.highlights.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#009adb] flex items-center justify-center text-xl mb-4">
                                    <FontAwesomeIcon icon={iconMap[item.icon] || faCheckCircle} />
                                </div>
                                <div className="text-lg font-bold text-gray-900 mb-2">{item.title}</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto p-5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-gray-600 mb-8">
                        <p>{whyWork.cautionNote}</p>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="inline-flex items-center gap-2 bg-[#125194] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#009adb] transition-colors shadow-sm"
                        >
                            <span>Talk to an Energy Logistics Specialist</span>
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Oil & Gas Supply Chain Solutions for Different Requirements Section */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] mb-4">{supplyChainMatrix.title}</h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{supplyChainMatrix.description}</p>
                    </div>

                    {/* ALSI Assessment Scope */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                        <div className="text-lg font-bold text-gray-900 mb-4">ALSI can assess enquiries involving:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            {supplyChainMatrix.scopeItems.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009adb] shrink-0" />
                                    <span className="text-gray-800 text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm italic pt-3 border-t border-slate-200">{supplyChainMatrix.summary}</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] text-center mb-10">{faq.title}</h2>
                    <div className="space-y-4">
                        {faq.items.map((item, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-5 font-semibold text-gray-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
                                >
                                    <span className="text-base sm:text-lg font-bold">{item.q}</span>
                                    <FontAwesomeIcon
                                        icon={openFaqIndex === index ? faChevronUp : faChevronDown}
                                        className="text-[#009adb] ml-4 shrink-0"
                                    />
                                </button>
                                {openFaqIndex === index && (
                                    <div className="p-5 pt-0 text-gray-600 text-sm sm:text-base border-t border-slate-100 leading-relaxed">
                                        <p>{item.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="py-16 sm:py-20 bg-[#125194] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 !text-white">{ctaSection.title}</h2>
                    <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">{ctaSection.description}</p>
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-white text-[#125194] px-8 py-3.5 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 inline-block"
                    >
                        {ctaSection.buttonText}
                    </button>
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
                            <div className="text-2xl font-bold text-[#125194] mb-2">Request an Oil & Gas Logistics Quote</div>
                            <p className="text-gray-600 text-sm mb-6">Fill out the details below and our energy logistics team will get back to you promptly.</p>
                            <GetQuoteForm onClose={() => setIsPopupOpen(false)} />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default OilGasLogisticsServicesOman;
