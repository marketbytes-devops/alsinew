'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faShip,
    faCar,
    faCogs,
    faTruck,
    faCheckCircle,
    faChevronDown,
    faChevronUp,
    faAnchor,
    faShieldAlt,
    faRoute,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import heroImg from "../../assets/images/Landing/roro_oman/hero.webp";
import omanToUaeImg from "../../assets/images/Landing/roro_oman/oman_to_uae.webp";
import soharDuqmImg from "../../assets/images/Landing/roro_oman/sohar_duqm.webp";

import RoRoShippingServicesOmanData from "./RoRoShippingServicesOmanData.js";

const iconMap = {
    "ship": faShip,
    "car": faCar,
    "cogs": faCogs,
    "truck": faTruck,
    "anchor": faAnchor,
    "route": faRoute
};

const RoRoShippingServicesOman = () => {
    const {
        meta,
        hero,
        whatIs,
        services,
        ports,
        omanToUae,
        process,
        whyChoose,
        faq,
        ctaSection
    } = RoRoShippingServicesOmanData;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen font-sans text-slate-800">
            

            {/* 1. Hero Banner - Natural Daylight Picture with Soft Clean Scrim for Optimal Contrast */}
            <section className="relative w-full overflow-hidden bg-white text-slate-900 border-b border-slate-100">
                <div
                    className="absolute inset-0 bg-cover bg-center md:bg-[center_right]"
                    style={{
                        backgroundImage: `url("${heroImg?.src || heroImg}")`,
                    }}
                    role="img"
                    aria-label={hero.imageAlt}
                />
                {/* Soft natural white-to-transparent gradient preserving true maritime vessel colors while ensuring high text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30 md:from-white md:via-white/80 md:to-transparent" />

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16 md:py-20 flex flex-col justify-center min-h-[380px] md:min-h-[460px]">
                    <div className="max-w-2xl bg-white/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 sm:p-0 rounded-2xl">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#125194] bg-blue-50/90 uppercase mb-3 backdrop-blur-sm border border-blue-200/80 shadow-sm">
                            <FontAwesomeIcon icon={faShip} className="text-[#009adb]" /> {hero.badge}
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-[#125194] drop-shadow-sm">
                            {hero.title}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-slate-700 mb-6 max-w-2xl leading-relaxed">
                            {hero.description}
                        </p>
                        <div className="flex flex-wrap gap-3.5 items-center">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="bg-[#125194] text-white px-7 py-3 rounded-full font-bold text-sm sm:text-base shadow-lg hover:bg-[#009adb] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {hero.ctaLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. What Are Roll-On/Roll-Off Shipping Services? (H2) */}
            <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Left Column: Definition & Anchor Tag */}
                        <div className="lg:col-span-6 space-y-5">
                            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 border border-blue-100">
                                Maritime Transport Methodology
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {whatIs.title}
                            </h2>
                            <div
                                className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4"
                                dangerouslySetInnerHTML={{ __html: whatIs.description }}
                            />
                        </div>

                        {/* Right Column: Types of Cargo Suitable for RORO Shipping (H3) */}
                        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
                            <div className="border-b border-slate-200 pb-4">
                                <span className="text-xs font-bold text-[#125194] uppercase tracking-wider">
                                    Cargo Suitability
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mt-1">
                                    {whatIs.suitableCargo.title}
                                </h3>
                                <p className="text-sm text-slate-500 mt-1">
                                    {whatIs.suitableCargo.subtitle}
                                </p>
                            </div>
                            <ul className="space-y-3">
                                {whatIs.suitableCargo.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#009adb] mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-3 border-t border-slate-200">
                                <p className="text-xs sm:text-sm text-slate-500 italic bg-white p-3 rounded-xl border border-slate-200/70">
                                    {whatIs.suitableCargo.note}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our RORO Freight Services in Oman (H2) */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-3">
                            Comprehensive Solutions
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {services.title}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            {services.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.items.map((srv, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#125194] group-hover:bg-[#125194] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-2xl shadow-sm border border-blue-100">
                                            <FontAwesomeIcon icon={iconMap[srv.icon] || faShip} />
                                        </div>
                                        <span className="text-xs font-bold text-[#125194] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                            {srv.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#125194] transition-colors mb-4">
                                        {srv.title}
                                    </h3>
                                    <div
                                        className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-3"
                                        dangerouslySetInnerHTML={{ __html: srv.description }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. RORO Shipping Services in Sohar and Duqm, Oman (H2) - Split Section with Image */}
            <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 border border-blue-100">
                                Oman Port Hubs
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {ports.title}
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                {ports.description}
                            </p>

                            <div className="space-y-4 pt-2">
                                {ports.facilities.map((fac, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold uppercase tracking-wider text-[#125194] bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200/50">
                                                {fac.badge}
                                            </span>
                                            <span className="text-xs font-medium text-slate-400">
                                                {fac.tag}
                                            </span>
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                                            {fac.title}
                                        </h3>
                                        <div
                                            className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-2"
                                            dangerouslySetInnerHTML={{ __html: fac.description }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                <img
                                    src={soharDuqmImg?.src || soharDuqmImg}
                                    alt="RORO Shipping Services in Sohar and Duqm Oman port vehicle carrier vessel"
                                    className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. RORO Shipping from Oman to the UAE (H2) - Split Section with Heavy Equipment Image */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                <img
                                    src={omanToUaeImg?.src || omanToUaeImg}
                                    alt="RORO Shipping from Oman to the UAE vehicle carrier vessel"
                                    className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70">
                                Cross-Border Maritime Corridor
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {omanToUae.title}
                            </h2>
                            <div
                                className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4"
                                dangerouslySetInnerHTML={{ __html: omanToUae.description }}
                            />
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                    {omanToUae.considerationsTitle}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {omanToUae.considerations.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-[#009adb] text-xs mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-100">
                                    {omanToUae.closing}
                                </p>
                            </div>
                            <div className="pt-2">
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="bg-[#125194] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-md hover:bg-[#009adb] hover:shadow-lg transition-all duration-300"
                                >
                                    {omanToUae.ctaLabel}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. How Does the RORO Shipping Process Work? (H2) */}
            <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 mb-3 border border-blue-100">
                            Clear Operational Sequence
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {process.title}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            {process.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {process.steps.map((st, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-[#125194] text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow">
                                        {st.number}
                                    </div>
                                    <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">
                                        {st.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                        {st.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Why Plan Your RORO Shipment with ALSI Global? (H2) */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-4">
                            Regional Maritime Expertise
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-6">
                            {whyChoose.title}
                        </h2>
                        <div
                            className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4 text-left sm:text-center max-w-3xl mx-auto"
                            dangerouslySetInnerHTML={{ __html: whyChoose.description }}
                        />
                    </div>
                </div>
            </section>

            {/* 8. Frequently Asked Questions About RORO Shipping in Oman (H2) */}
            <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 mb-3 border border-blue-100">
                            Clear Answers
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                            {faq.title}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faq.faqs.map((f, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-colors"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/60 transition-colors"
                                    >
                                        <h3 className="text-base sm:text-lg font-bold text-slate-800">
                                            {f.question}
                                        </h3>
                                        <div className="w-8 h-8 rounded-full bg-white text-[#125194] flex items-center justify-center flex-shrink-0 text-sm shadow-sm border border-slate-200">
                                            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/70">
                                                    {f.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 9. Enquire About RORO Shipping Services in Oman (H2) - CTA Banner */}
            <section className="py-16 sm:py-20 bg-[#125194] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white">
                        {ctaSection.title}
                    </h2>
                    <div
                        className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: ctaSection.description }}
                    />
                    <div className="pt-2 flex justify-center items-center">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {ctaSection.ctaLabel}
                        </button>
                    </div>
                </div>
            </section>

            {/* Quote Modal Popup */}
            <AnimatePresence>
                {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsPopupOpen(false)}
                        />
                        <div className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto z-50 bg-transparent">
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-200 transition duration-300 border-2 border-white rounded-full w-7 h-7 flex items-center justify-center z-10"
                                onClick={() => setIsPopupOpen(false)}
                                aria-label="Close modal"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-xs" />
                            </button>
                            <GetQuoteForm formTitle="Enquire Now" closeModal={() => setIsPopupOpen(false)} />
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RoRoShippingServicesOman;
