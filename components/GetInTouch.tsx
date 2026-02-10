"use client";

import { getInTouchData } from "@/data/transformerData";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Info } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="py-24 px-6 md:px-12 bg-base-dark relative overflow-hidden">
      {/* Cinematic background scanline */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl tracking-[0.3em] text-white mb-4 border-l-4 border-accent-metal pl-6">
            {getInTouchData.title}
          </h2>
          <p className="font-body text-lg text-white/60 tracking-wider">
            System contact protocols and location data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactCard
              icon={<Mail className="w-5 h-5" />}
              label="EMAIL"
              value={getInTouchData.email}
              delay={0.1}
              href={`mailto:${getInTouchData.email}`}
            />
            <ContactCard
              icon={<Phone className="w-5 h-5" />}
              label="PHONE"
              value={getInTouchData.phone}
              delay={0.2}
              href={`tel:${getInTouchData.phone}`}
            />
            <ContactCard
              icon={<MapPin className="w-5 h-5" />}
              label="LOCATION"
              value={getInTouchData.location}
              delay={0.3}
            />
            <ContactCard
              icon={<Info className="w-5 h-5" />}
              label="PREFERRED METHOD"
              value={getInTouchData.preferredMethod}
              delay={0.4}
            />
          </div>

          {/* Quick Response Info Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-neutral-carbon/5 border border-white/5 p-8 backdrop-blur-md overflow-hidden group"
          >
            {/* Corner focus accent */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent-metal" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent-metal/10 border border-accent-metal/20">
                <Clock className="w-6 h-6 text-accent-metal" />
              </div>
              <div>
                <span className="block font-heading text-[10px] text-accent-metal tracking-widest uppercase">RESPONSE STATUS</span>
                <span className="block font-heading text-lg text-white tracking-widest">{getInTouchData.responseStatus}</span>
              </div>
            </div>

            <p className="font-body text-white/50 leading-relaxed italic border-l-2 border-white/10 pl-6 py-2">
              "{getInTouchData.quickResponse}"
            </p>

            {/* Subtle decorative grid in bg */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          </motion.div>
        </div>

        {/* System Footer Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <span className="font-heading text-[10px] text-white/10 tracking-[1em]">SYSTEM: ONLINE</span>
          <span className="font-heading text-[10px] text-white/10 tracking-[0.5em]">© 2026 SHREYASH AGRAWAL</span>
          <span className="font-heading text-[10px] text-white/10 tracking-[1em]">PORTFOLIO_V2.0</span>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, delay, href }: { icon: React.ReactNode, label: string, value: string, delay: number, href?: string }) {
  const CardContent = (
    <div className="relative bg-neutral-carbon/5 border border-white/5 p-6 md:p-8 hover:border-accent-metal/30 transition-all group overflow-hidden h-full">
      <div className="flex items-start gap-4 h-full">
        <div className="text-accent-metal/40 group-hover:text-accent-metal transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <span className="block font-heading text-[10px] text-white/20 tracking-[0.3em] mb-2 uppercase group-hover:text-white/40 transition-colors">
            {label}
          </span>
          <span className="block font-body text-base md:text-lg text-white/80 group-hover:text-white transition-colors break-all">
            {value}
          </span>
        </div>
      </div>
      {/* Bottom scanning bar */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-metal group-hover:w-full transition-all duration-700" />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      {href ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block h-full">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
}
