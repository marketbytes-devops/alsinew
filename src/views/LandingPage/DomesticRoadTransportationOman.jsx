'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faTruck,
    faRoute,
    faCogs,
    faCheckCircle,
    faChevronDown,
    faChevronUp,
    faMapMarkerAlt,
    faWarehouse,
    faShip,
    faIndustry,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import heroImg from "../../assets/images/Landing/domestic_oman/hero.webp";
import salalahImg from "../../assets/images/Landing/domestic_oman/muscat_salalah.webp";
import industrialImg from "../../assets/images/Landing/domestic_oman/industrial_ports.webp";

import DomesticRoadTransportationOmanData from "./DomesticRoadTransportationOmanData.js";

const iconMap = {
    "truck": faTruck,
    "route": faRoute,
    "cogs": faCogs,
    "warehouse": faWarehouse,
    "ship": faShip,
    "industry": faIndustry
};

const DomesticRoadTransportationOman = () => {
    const {
        meta,
        hero,
        reliableFreight,
        solutions,
        acrossOman,
        muscatToSalalah,
        industrialAndPorts,
        howToArrange,
        whyChoose,
        faq,
        ctaSection
    } = DomesticRoadTransportationOmanData;

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
                {/* Soft natural white-to-transparent gradient: preserves 100% natural truck and landscape colors while ensuring high text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30 md:from-white md:via-white/80 md:to-transparent" />

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16 md:py-20 flex flex-col justify-center min-h-[380px] md:min-h-[460px]">
                    <div className="max-w-2xl bg-white/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 sm:p-0 rounded-2xl">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#125194] bg-blue-50/90 uppercase mb-3 backdrop-blur-sm border border-blue-200/80 shadow-sm">
                            <FontAwesomeIcon icon={faTruck} className="text-[#009adb]" /> {hero.badge}
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
                            <a
                                href="/contact-us"
                                className="border-2 border-[#125194] text-[#125194] hover:bg-[#125194] hover:text-white px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm"
                            >
                                Speak With Our Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Reliable Domestic Road Freight Services in Oman (H2) */}
            <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-5">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 border border-blue-100">
                            Nationwide Transport Logistics
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                            {reliableFreight.title}
                        </h2>
                        <div
                            className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4 text-left sm:text-center"
                            dangerouslySetInnerHTML={{ __html: reliableFreight.description }}
                        />
                        <div className="pt-4 flex flex-wrap justify-center gap-3">
                            {reliableFreight.badges.map((badge, idx) => (
                                <span
                                    key={idx}
                                    className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-sm"
                                >
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#009adb]" />
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Domestic Road Transportation Solutions (H2) */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-3">
                            Tailored Capabilities
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {solutions.title}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            {solutions.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#125194] group-hover:bg-[#125194] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-2xl shadow-sm border border-blue-100">
                                            <FontAwesomeIcon icon={iconMap[item.icon] || faTruck} />
                                        </div>
                                        <span className="text-xs font-bold text-[#125194] uppercase tracking-wider bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100">
                                            {item.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#125194] transition-colors mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Domestic Road Transportation Services Across Oman (H2) */}
            <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 mb-3 border border-blue-100">
                            Key Commercial Centers
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {acrossOman.title}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            {acrossOman.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {acrossOman.locations.map((loc, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-[#125194] bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200/50">
                                            {loc.tag}
                                        </span>
                                        <span className="text-sm font-extrabold text-slate-400">
                                            {loc.code}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#125194] transition-colors">
                                        {loc.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                        {loc.description}
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-[#125194]">
                                    <span>Inland Fleet Available</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Domestic Road Transportation Services from Muscat to Salalah (H2) - Split Showcase */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70">
                                North-South Freight Corridor
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {muscatToSalalah.title}
                            </h2>
                            <div
                                className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4"
                                dangerouslySetInnerHTML={{ __html: muscatToSalalah.description }}
                            />
                            <div className="space-y-3 pt-2">
                                {muscatToSalalah.routeHighlights.map((hl, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#009adb] mt-1 flex-shrink-0" />
                                        <span>{hl}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-2">
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="bg-[#125194] text-white px-7 py-3 rounded-full font-bold text-sm sm:text-base shadow-md hover:bg-[#009adb] hover:shadow-lg transition-all duration-300"
                                >
                                    Inquire Muscat-Salalah Rates
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                <img
                                    src={salalahImg?.src || salalahImg}
                                    alt={muscatToSalalah.title}
                                    className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Inland Freight for Industrial Areas & Ports in Oman (H2s) */}
            <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
                                <img
                                    src={industrialImg?.src || industrialImg}
                                    alt="Inland Freight Transportation for Industrial Areas and Ports in Oman"
                                    className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                            {/* Industrial Areas */}
                            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#125194] text-white flex items-center justify-center text-lg shadow-sm flex-shrink-0">
                                        <FontAwesomeIcon icon={faIndustry} />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
                                        {industrialAndPorts.industrial.title}
                                    </h2>
                                </div>
                                <div
                                    className="text-gray-700 text-sm sm:text-base leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: industrialAndPorts.industrial.description }}
                                />
                            </div>

                            {/* Ports & Project Sites */}
                            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#125194] text-white flex items-center justify-center text-lg shadow-sm flex-shrink-0">
                                        <FontAwesomeIcon icon={faShip} />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
                                        {industrialAndPorts.ports.title}
                                    </h2>
                                </div>
                                <div
                                    className="text-gray-700 text-sm sm:text-base leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: industrialAndPorts.ports.description }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. How to Arrange Domestic Road Freight in Oman (H2) */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-3">
                            Step-by-Step Flow
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {howToArrange.title}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            {howToArrange.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {howToArrange.steps.map((st, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-[#125194] text-white flex items-center justify-center font-extrabold text-sm mb-4 shadow">
                                        {st.number}
                                    </div>
                                    <h4 className="text-base font-bold text-slate-800 mb-2 leading-snug">
                                        {st.title}
                                    </h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                        {st.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Why Choose ALSI Global for Domestic Road Transportation in Oman? (H2) */}
            <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 mb-3 border border-blue-100">
                            Oman Logistics Partner
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {whyChoose.title}
                        </h2>
                        <div
                            className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4"
                            dangerouslySetInnerHTML={{ __html: whyChoose.description }}
                        />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                        {whyChoose.stats.map((st, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200/80 shadow-sm">
                                <div className="text-3xl sm:text-4xl font-extrabold text-[#125194] mb-1">
                                    {st.value}
                                </div>
                                <div className="text-sm font-bold text-slate-800 mb-1">
                                    {st.label}
                                </div>
                                <div className="text-xs text-slate-500">
                                    {st.desc}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Features checklist */}
                    <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {whyChoose.features.map((feat, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 flex-shrink-0 text-base" />
                                    <span className="text-slate-700 text-sm sm:text-base font-medium">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Frequently Asked Questions (H2) */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-3">
                            Common Questions
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
                                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-colors"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                                    >
                                        <h3 className="text-base sm:text-lg font-bold text-slate-800">
                                            {f.question}
                                        </h3>
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-[#125194] flex items-center justify-center flex-shrink-0 text-sm">
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
                                                <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
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

            {/* 10. Request Domestic Road Transportation Services in Oman (H2) - CTA Banner */}
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

export default DomesticRoadTransportationOman;
