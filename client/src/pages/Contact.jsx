import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import MyPic from '../assets/MyPic.png';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const revealRef = useReveal();

    return (
        <section ref={revealRef} className="w-full relative z-10 text-white min-h-screen flex flex-col pt-12">
            {/* Top Grid: Form and Image */}
            <div className="max-w-[1400px] w-full mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 flex-grow">
                {/* Left: Form Side */}
                <div className="flex flex-col pr-0 lg:pr-16 lg:border-r border-white/10 pt-8 pb-16">
                    <h1 className="reveal text-[10vw] md:text-[5vw] font-bold uppercase leading-[0.8] tracking-tight mb-6">
                        RING A BELL!
                    </h1>
                    <p className="text-[#a1a1aa] text-sm md:text-base font-medium leading-relaxed max-w-sm mb-12">
                        Reach out and let's create something amazing together. Let's achieve greatness.
                    </p>

                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-6">
                        FILL THIS FORM OUT
                    </h3>

                    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Name*" 
                            className="w-full bg-[#111111] border border-white/5 rounded-xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors"
                        />
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email*" 
                            className="w-full bg-[#111111] border border-white/5 rounded-xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors"
                        />
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Message*" 
                            rows={6}
                            className="w-full bg-[#111111] border border-white/5 rounded-xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                        ></textarea>
                        
                        {status.message && (
                            <div className={`p-3 rounded-lg text-xs font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                {status.message}
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="btn-custom btn-filled w-full font-bold text-xs uppercase tracking-[0.1em] py-4 rounded-xl mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Submit Now'}</span>
                        </button>
                    </form>
                </div>

                {/* Right: Image Side */}
                <div className="flex items-center justify-center p-0 lg:p-12 pb-16">
                    <div className="w-full h-full min-h-[400px] md:min-h-[500px] lg:max-h-[800px] rounded-2xl overflow-hidden">
                        <img
                            src={MyPic}
                            alt="Contact Kanishk"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>

            {/* Custom Contact Footer (Attached to bottom) */}
            <div className="w-full border-t border-white/10 pt-16 pb-8 overflow-hidden mt-auto">
                <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
                    {/* FOLLOW ME */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">FOLLOW ME</h4>
                        <a href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] hover:text-white/50 transition-colors">INSTAGRAM ↗</a>
                        <a href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] hover:text-white/50 transition-colors">LINKEDIN ↗</a>
                        <a href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] hover:text-white/50 transition-colors">GITHUB ↗</a>
                    </div>
                    {/* CURRENT LOCATION */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">CURRENT LOCATION</h4>
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] leading-loose">
                            BASED IN INDIA,<br />MEERUT, UTTAR PRADESH
                        </p>
                    </div>
                    {/* PHONE */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">PHONE</h4>
                        <div className="flex gap-4">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] text-white/50">IND</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em]">+91 98765 43210</span>
                        </div>
                    </div>
                    {/* EMAIL ME */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">EMAIL ME</h4>
                        <a href="mailto:contact@kanishk.com" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] hover:text-white/50 transition-colors">HELLO@KANISHK.DEV</a>
                        <a href="mailto:work@kanishk.com" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] hover:text-white/50 transition-colors">WORK@KANISHK.DEV</a>
                    </div>
                </div>

                {/* Massive Name */}
                <div className="w-full overflow-hidden flex justify-center items-center mb-8 border-t border-white/10 pt-16">
                    <h1 className="text-[22vw] font-black uppercase leading-none tracking-tighter w-full text-center select-none" style={{ transform: 'scaleY(1.1)' }}>
                        KANISHK
                    </h1>
                </div>

                {/* Footer Bottom Bar */}
                <div className="flex justify-between items-center px-8 pt-6 border-t border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                    <div>©2026 KANISHK KUMAR</div>
                    <button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer uppercase font-bold tracking-[0.15em]">
                        BACK TO TOP
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;