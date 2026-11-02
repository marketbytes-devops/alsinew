'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faTruck,
    faGlobe,
    faClipboardCheck,
    faTools,
    faTruckLoading,
    faCheckCircle,
    faChevronDown,
    faChevronUp,
    faShieldAlt,
    faMapMarkerAlt,
    faClock,
    faBuilding,
    faFileContract,
    faPhoneAlt,
    faEnvelope,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/ftl/hero.webp";
import cargoImg from "../../assets/images/Landing/ftl/cargo.webp";
import oilGasImg from "../../assets/images/Landing/ftl/oil_gas.webp";
import constructionImg from "../../assets/images/Landing/ftl/construction.webp";

import FullTruckloadFreightServicesGCCData from "./FullTruckloadFreightServicesGCCData.js";

const iconMap = {
    "truck": faTruck,
    "globe": faGlobe,
    "clipboard-check": faClipboardCheck,
    "tools": faTools,
    "truck-loading": faTruckLoading,
    "shield-alt": faShieldAlt,
    "map-marker-alt": faMapMarkerAlt,
    "clock": faClock,
    "building": faBuilding,
    "file-contract": faFileContract
};

const FullTruckloadFreightServicesGCC = () => {
    const {
        meta,
        hero,
        dedicatedSolutions,
        whatIs,
        solutions,
        gccCoverage,
        industries,
        process,
        whyChoose,
        faq,
        ctaSection
    } = FullTruckloadFreightServicesGCCData;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen font-sans text-slate-800">
            

            {/* 1. Hero Banner - Natural Daylight Picture with Clean White Scrim for Maximum Visual Clarity */}
            <section className="relative w-full overflow-hidden bg-white text-slate-900 border-b border-slate-100">
                <div
                    className="absolute inset-0 bg-cover bg-center md:bg-[center_right]"
                    style={{
                        backgroundImage: `url("${bannerImg?.src || bannerImg}")`,
                    }}
                    role="img"
                    aria-label={hero.imageAlt}
                />
                {/* Soft natural white-to-transparent gradient: preserves 100% natural truck and desert colors while ensuring high text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30 md:from-white md:via-white/80 md:to-transparent" />

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16 md:py-20 flex flex-col justify-center min-h-[380px] md:min-h-[460px]">
                    <div className="max-w-2xl bg-white/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 sm:p-0 rounded-2xl">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#125194] bg-blue-50/90 uppercase mb-3 backdrop-blur-sm border border-blue-200/80 shadow-sm">
                            <FontAwesomeIcon icon={faTruck} className="text-[#009adb]" /> GCC Road Transportation Network
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

            {/* 2. Dedicated Road Freight Solutions for GCC Businesses */}
            <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 border border-blue-100">
                                Reliable GCC Freight
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {dedicatedSolutions.title}
                            </h2>
                            <div
                                className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4"
                                dangerouslySetInnerHTML={{ __html: dedicatedSolutions.description }}
                            />
                            <div className="pt-2 flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-700">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#125194]" /> Commercial Cargo
                                </span>
                                <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-700">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#125194]" /> Industrial Supplies
                                </span>
                                <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-700">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#125194]" /> Construction Materials
                                </span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                                <img
                                    src={cargoImg?.src || cargoImg}
                                    alt={dedicatedSolutions.title}
                                    className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What Are Full Truckload Freight Services? */}
            <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-3">
                            Understanding FTL Logistics
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {whatIs.title}
                        </h2>
                        <div
                            className="text-gray-700 text-base sm:text-lg leading-relaxed text-left sm:text-center space-y-4"
                            dangerouslySetInnerHTML={{ __html: whatIs.description }}
                        />
                    </div>

                    {/* Comparison Cards: FTL vs LTL */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
                        {/* FTL Card */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-[#125194] shadow-lg relative flex flex-col justify-between">
                            <div>
                                <span className="bg-[#125194] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                                    Recommended for Full Loads
                                </span>
                                <h3 className="text-2xl font-bold text-[#125194] mb-1">
                                    {whatIs.comparison.ftl.title}
                                </h3>
                                <p className="text-sm font-medium text-slate-500 mb-6">
                                    {whatIs.comparison.ftl.subtitle}
                                </p>
                                <ul className="space-y-3.5">
                                    {whatIs.comparison.ftl.points.map((pt, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 flex-shrink-0" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* LTL Card */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                                    Shared Consolidations
                                </span>
                                <h3 className="text-2xl font-bold text-slate-700 mb-1">
                                    {whatIs.comparison.ltl.title}
                                </h3>
                                <p className="text-sm font-medium text-slate-400 mb-6">
                                    {whatIs.comparison.ltl.subtitle}
                                </p>
                                <ul className="space-y-3.5">
                                    {whatIs.comparison.ltl.points.map((pt, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                                            <span className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Full Truckload Transportation Solutions */}
            <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 mb-3 border border-blue-100">
                            Service Capabilities
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {solutions.title}
                        </h2>
                        <p
                            className="text-gray-600 text-base sm:text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: solutions.description }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-white text-[#125194] group-hover:bg-[#125194] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-2xl mb-6 shadow-sm border border-slate-100">
                                        <FontAwesomeIcon icon={iconMap[item.icon] || faTruck} />
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

            {/* 5. Full Truckload Freight Services Across the GCC */}
            <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-3">
                            Regional Reach
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {gccCoverage.title}
                        </h2>
                        <p
                            className="text-gray-600 text-base sm:text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: gccCoverage.description }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {gccCoverage.regions.map((region, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-[#125194] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                            {region.badge}
                                        </span>
                                        <span className="text-xl font-bold text-slate-400">
                                            {region.flag}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#125194] transition-colors">
                                        {region.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6"
                                        dangerouslySetInnerHTML={{ __html: region.description }}
                                    />
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#125194]">
                                    <span>Route Feasibility Assessment Available</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FTL Freight Services for Oil and Gas and Construction Industries */}
            <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 mb-3 border border-blue-100">
                            Industry Sectors
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight mb-4">
                            {industries.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {industries.items.map((sec, idx) => {
                            const industryImg = idx === 0 ? oilGasImg : constructionImg;
                            return (
                                <div
                                    key={idx}
                                    className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                                        <img
                                            src={industryImg?.src || industryImg}
                                            alt={sec.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[#125194] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow border border-blue-100">
                                            {sec.badge}
                                        </span>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-xl bg-[#125194] text-white flex items-center justify-center text-lg shadow-md flex-shrink-0">
                                                    <FontAwesomeIcon icon={iconMap[sec.icon] || faTools} />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-800 leading-snug">
                                                    {sec.title}
                                                </h3>
                                            </div>
                                            <div
                                                className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 space-y-3"
                                                dangerouslySetInnerHTML={{ __html: sec.description }}
                                            />
                                        </div>
                                        <div className="bg-white rounded-xl p-4 border border-slate-200/70 space-y-2 mt-auto">
                                            <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                                Key Coordination Priorities:
                                            </p>
                                            {sec.highlights.map((item, hIdx) => (
                                                <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 text-xs flex-shrink-0" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 7. How Our FTL Transportation Process Works */}
            <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-3">
                            Step-by-Step Flow
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

                    <div className="mt-10 p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-center max-w-2xl mx-auto">
                        <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
                            {process.closing}
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. Why Choose ALSI Global for GCC Road Freight? */}
            <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-50 mb-3 border border-blue-100">
                            Regional Leadership
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
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#125194] mt-1 flex-shrink-0" />
                                    <span className="text-sm sm:text-base text-slate-700 font-medium">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Frequently Asked Questions */}
            <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#125194] bg-blue-100/70 mb-3">
                            Common Inquiries
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
                                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <h3 className="text-base sm:text-lg font-bold text-slate-800">
                                            {f.question}
                                        </h3>
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                                            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-xs" />
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

            {/* 10. Request Full Truckload Freight Services in the GCC (CTA Banner) */}
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

export default FullTruckloadFreightServicesGCC;
