'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Banner from "../../components/UiComponents/Banner";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/ProjectCargoQatar/Project Cargo Services in Qatar.webp";
import professionalImg from "../../assets/images/Landing/ProjectCargoQatar/Professional Project Cargo Solutions in Qatar.webp";
import industriesImg from "../../assets/images/Landing/ProjectCargoQatar/Industries That Require Project Cargo Services in Qatar.webp";
import transportImg from "../../assets/images/Landing/ProjectCargoQatar/Project Cargo Transportation Solutions.webp";
import whyChooseImg from "../../assets/images/Landing/ProjectCargoQatar/Why Choose ALSI Global for Project Cargo Services in Qatar.webp";

import ProjectCargoQatarData from "./ProjectCargoQatarData.js";

const ProjectCargoQatar = () => {
    const {
        meta,
        hero,
        professionalSolutions,
        whatIsProjectCargo,
        industries,
        typesWeHandle,
        transportationSolutions,
        planningAndCustoms,
        process,
        whyChoose,
        requestQuote,
        faq
    } = ProjectCargoQatarData;

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

            {/* Professional Solutions */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {professionalSolutions.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: professionalSolutions.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1">
                                {professionalSolutions.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: professionalSolutions.closing }} />
                        </div>
                        <div className="flex items-center justify-center order-1 lg:order-2">
                            <img
                                src={professionalImg?.src || professionalImg}
                                alt={professionalSolutions.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Project Cargo & Types We Handle */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* What Is Project Cargo */}
                        <div className="space-y-6 text-justify md:text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194] leading-tight">
                                {whatIsProjectCargo.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: whatIsProjectCargo.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1 mt-4">
                                {whatIsProjectCargo.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-6" dangerouslySetInnerHTML={{ __html: whatIsProjectCargo.closing }} />
                        </div>
                        {/* Types We Handle */}
                        <div className="space-y-6 text-justify md:text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194] leading-tight">
                                {typesWeHandle.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: typesWeHandle.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1 mt-4">
                                {typesWeHandle.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-6" dangerouslySetInnerHTML={{ __html: typesWeHandle.closing }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={industriesImg?.src || industriesImg}
                                alt={industries.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {industries.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {industries.description}
                            </p>
                            <div className="space-y-6 mt-6">
                                {industries.sections.map((section, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <h3 className="text-lg font-bold text-[#125194]">{section.title}</h3>
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{section.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transportation Solutions */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {transportationSolutions.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {transportationSolutions.description}
                            </p>
                            <div className="space-y-6 mt-6">
                                {transportationSolutions.sections.map((section, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <h3 className="text-lg font-bold text-[#125194]">{section.title}</h3>
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center order-1 lg:order-2">
                            <img
                                src={transportImg?.src || transportImg}
                                alt={transportationSolutions.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Planning and Customs */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Planning */}
                        <div className="space-y-6 text-justify md:text-left bg-white p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194] leading-tight">
                                {planningAndCustoms.planning.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: planningAndCustoms.planning.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1 mt-4">
                                {planningAndCustoms.planning.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-6" dangerouslySetInnerHTML={{ __html: planningAndCustoms.planning.closing }} />
                        </div>
                        {/* Customs */}
                        <div className="space-y-6 text-justify md:text-left bg-white p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194] leading-tight">
                                {planningAndCustoms.customs.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: planningAndCustoms.customs.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1 mt-4">
                                {planningAndCustoms.customs.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-6" dangerouslySetInnerHTML={{ __html: planningAndCustoms.customs.closing }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194]">
                            {process.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -z-10 transform -translate-y-1/2"></div>
                        {process.steps.map((step, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-6 sm:p-8 text-center shadow-md border border-slate-100 relative group hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 mx-auto bg-[#125194] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {idx + 1}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#125194] mb-3 sm:mb-4">
                                    {step.title.replace(/^\d+\.\s*/, '')}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose ALSI */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={whyChooseImg?.src || whyChooseImg}
                                alt={whyChoose.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {whyChoose.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: whyChoose.description }} />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1">
                                {whyChoose.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4" dangerouslySetInnerHTML={{ __html: whyChoose.closing }} />
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
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-none lg:grid-flow-col lg:grid-rows-4 lg:auto-cols-fr gap-4 lg:gap-x-12 text-blue-100 text-left w-fit mx-auto">
                                {requestQuote.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                        <span className="text-white font-bold">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
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

export default ProjectCargoQatar;
