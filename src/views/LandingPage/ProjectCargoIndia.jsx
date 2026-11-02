'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Banner from "../../components/UiComponents/Banner";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/ProjectCargoIndia/Project Cargo Services in India.webp";
import managingComplexImg from "../../assets/images/Landing/ProjectCargoIndia/Managing Complex Project Cargo Across India.webp";
import heavyEquipmentImg from "../../assets/images/Landing/ProjectCargoIndia/Heavy Equipment Transportation for Industrial Projects.webp";
import odcCargoImg from "../../assets/images/Landing/ProjectCargoIndia/ODC and Heavy Lift Cargo Movement.webp";
import portToProjectImg from "../../assets/images/Landing/ProjectCargoIndia/Port-to-Project Site Logistics Solutions.webp";
import renewableEnergyImg from "../../assets/images/Landing/ProjectCargoIndia/Project Cargo Support for Renewable Energy Projects.webp";
import routeSurveysImg from "../../assets/images/Landing/ProjectCargoIndia/Route Surveys and Permit Management.webp";
import endToEndImg from "../../assets/images/Landing/ProjectCargoIndia/End-to-End Project Logistics by ALSI Global.webp";

import ProjectCargoIndiaData from "./ProjectCargoIndiaData.js";

const ProjectCargoIndia = () => {
    const {
        meta,
        hero,
        managingComplex,
        heavyEquipment,
        odcCargo,
        portToProject,
        renewableEnergy,
        routeSurveys,
        challenges,
        endToEnd,
        requestQuote,
        faq
    } = ProjectCargoIndiaData;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            

            {/* Banner Section */}
            <Banner bgImage={bannerImg} title={hero.title} bgImageAlt={hero.title} />

            {/* Intro Section */}
            <section className="py-12 sm:py-16 bg-[#125194]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
                    <div className="space-y-2">
                        {hero.paragraphs.map((p, idx) => (
                            <p key={idx} className="text-blue-50 text-base sm:text-lg leading-relaxed max-w-5xl mx-auto" dangerouslySetInnerHTML={{ __html: p }} />
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center lg:justify-start max-w-5xl mx-auto">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-white text-[#125194] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Managing Complex */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {managingComplex.title}
                            </h2>
                            <div className="space-y-4">
                                {managingComplex.paragraphs.map((p, idx) => (
                                    <p key={idx} className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: p }} />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center order-1 lg:order-2">
                            <img
                                src={managingComplexImg?.src || managingComplexImg}
                                alt={managingComplex.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Heavy Equipment */}
            <section className="py-12 sm:py-20 bg-white border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={heavyEquipmentImg?.src || heavyEquipmentImg}
                                alt={heavyEquipment.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {heavyEquipment.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: heavyEquipment.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1 mt-6">
                                {heavyEquipment.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: heavyEquipment.closing }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ODC Cargo */}
            <section className="py-12 sm:py-20 bg-[#125194] border-t border-b border-[#125194]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-3 text-justify md:text-left text-white">
                        <h2 className="text-2xl sm:text-4xl font-bold text-center text-white leading-tight">
                            {odcCargo.title}
                        </h2>
                        <p className="text-blue-50 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: odcCargo.description }} />
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1 mt-6">
                            {odcCargo.items.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-3 text-blue-50">
                                    <span className="text-white font-bold">✓</span>
                                    <span className="text-sm sm:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-blue-50 text-base sm:text-lg leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: odcCargo.subDescription }} />
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1 mt-6">
                            {odcCargo.subItems.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-3 text-blue-50">
                                    <span className="text-white font-bold">✓</span>
                                    <span className="text-sm sm:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-blue-50 text-base sm:text-lg leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: odcCargo.closing }} />
                    </div>
                </div>
            </section>

            {/* Port to Project */}
            <section className="py-12 sm:py-20 bg-white border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={portToProjectImg?.src || portToProjectImg}
                                alt={portToProject.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {portToProject.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: portToProject.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1 mt-6">
                                {portToProject.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: portToProject.closing }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Renewable Energy */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {renewableEnergy.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: renewableEnergy.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1 mt-6">
                                {renewableEnergy.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: renewableEnergy.closing }} />
                        </div>
                        <div className="flex items-center justify-center order-1 lg:order-2">
                            <img
                                src={renewableEnergyImg?.src || renewableEnergyImg}
                                alt={renewableEnergy.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Route Surveys */}
            <section className="py-12 sm:py-20 bg-white border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={routeSurveysImg?.src || routeSurveysImg}
                                alt={routeSurveys.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-3 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {routeSurveys.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: routeSurveys.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1 mt-4">
                                {routeSurveys.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2" dangerouslySetInnerHTML={{ __html: routeSurveys.closing }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6 text-justify md:text-left">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight text-center mb-8">
                            {challenges.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: challenges.description }} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            {challenges.sections.map((section, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="text-xl font-bold text-[#125194] mb-3">{section.title}</h3>
                                    <p className="text-gray-700 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-8 text-center max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: challenges.closing }} />
                    </div>
                </div>
            </section>

            {/* End to End */}
            <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center lg:order-2">
                            <img
                                src={endToEndImg?.src || endToEndImg}
                                alt={endToEnd.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-6 text-justify md:text-left lg:order-1">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {endToEnd.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: endToEnd.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1">
                                {endToEnd.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: endToEnd.closing }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Request a Quote */}
            <section className="py-12 sm:py-16 bg-[#125194]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center gap-8">
                        <div className="text-white space-y-4 w-full">
                            <h2 className="text-2xl sm:text-4xl font-bold">
                                {requestQuote.title}
                            </h2>
                            <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto">
                                {requestQuote.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-12 text-blue-100 text-left w-fit mx-auto pt-4 pb-4">
                                <ul className="space-y-4">
                                    {requestQuote.items.slice(0, 4).map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-2">
                                            <span className="text-white font-bold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {requestQuote.items.slice(4, 8).map((item, idx) => (
                                        <li key={idx + 4} className="flex items-start space-x-2">
                                            <span className="text-white font-bold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {requestQuote.items.slice(8).map((item, idx) => (
                                        <li key={idx + 8} className="flex items-start space-x-2">
                                            <span className="text-white font-bold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-blue-100 text-base sm:text-lg mt-6 max-w-3xl mx-auto">{requestQuote.closing}</p>
                        </div>
                        <div className="w-full flex justify-center mt-4">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="w-full sm:w-auto bg-white text-[#125194] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-12 sm:py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194]">
                            {faq.title}
                        </h2>
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                        {faq.faqs.map((faqItem, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                                >
                                    <h3 className="text-base sm:text-lg font-bold text-[#125194] pr-4">
                                        {faqItem.question}
                                    </h3>
                                    <div className="flex-shrink-0">
                                        <motion.div
                                            animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#125194]"
                                        >
                                            ↓
                                        </motion.div>
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-slate-50 pt-4">
                                                {faqItem.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Form Popup */}
            <AnimatePresence>
                {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed inset-0 backdrop-brightness-50" onClick={() => setIsPopupOpen(false)}></div>
                        <div className="relative rounded-xl shadow-lg w-full max-w-md mx-auto z-50 bg-transparent">
                            <button
                                className="absolute top-4 right-4 text-gray-100 hover:text-gray-200 transition duration-300 border-[3px] border-gray-100 hover:border-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
                                onClick={() => setIsPopupOpen(false)}
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-sm" />
                            </button>
                            <GetQuoteForm formTitle="Enquire Now" closeModal={() => setIsPopupOpen(false)} />
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectCargoIndia;
