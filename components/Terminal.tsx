"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

const COMMANDS = {
  help: "Available commands: bio, projects, resume, clear, exit",
  bio: "User: Shreyash Agrawal. Role: Software Engineer. Location: Mathura, India. Status: Active.",
  projects: "Analyzing stored project data... [Smart Hostel Hub, eSeva India]. Scroll down for full schematics.",
  resume: "Resume protocols identified. Decoding... Use the dedicated RESUME section below for download.",
  clear: "CLEAR_BUFFER",
  exit: "EXIT_TERMINAL"
};

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>(["SYSTEM BOOT SUCCESSFUL.", "TYPE 'HELP' FOR COMMANDS."]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();

    if (!cmd) return;

    let response = COMMANDS[cmd as keyof typeof COMMANDS] || `ERR: COMMAND '${cmd.toUpperCase()}' NOT RECOGNIZED.`;

    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd === "exit") {
      setIsOpen(false);
    } else if (cmd === "projects") {
      setHistory(prev => [...prev, `> ${input}`, response]);
      window.location.hash = "projects";
    } else if (cmd === "resume") {
      setHistory(prev => [...prev, `> ${input}`, response]);
      window.location.hash = "resume";
    } else {
      setHistory(prev => [...prev, `> ${input}`, response]);
    }

    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-[60] bg-accent-metal p-4 rounded-full shadow-[0_0_20px_rgba(183,28,28,0.5)] border border-white/20"
        >
          <TerminalIcon className="w-6 h-6 text-white" />
        </motion.button>
      )}

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[70] w-[90vw] md:w-[450px] h-[350px] bg-black/90 border border-white/10 backdrop-blur-xl flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-neutral-carbon/20 border-b border-white/5 p-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-accent-metal" />
                <span className="font-heading text-[10px] text-white/60 tracking-widest">SYSTEM_TERMINAL_V1.0</span>
              </div>
              <div className="flex gap-2">
                <Minus className="w-3 h-3 text-white/20" />
                <Square className="w-3 h-3 text-white/20" />
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-3 h-3 text-white/60 hover:text-accent-metal transition-colors" />
                </button>
              </div>
            </div>

            {/* Output */}
            <div
              ref={scrollRef}
              className="flex-1 p-4 font-heading text-[11px] tracking-wider space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10"
            >
              {history.map((line, i) => (
                <div key={i} className={line.startsWith('>') ? 'text-white' : 'text-accent-metal/80'}>
                  {line}
                </div>
              ))}
              <div className="h-4" />
            </div>

            {/* Input */}
            <form onSubmit={handleCommand} className="p-4 bg-white/2 border-t border-white/5 flex gap-2 items-center">
              <span className="text-accent-metal font-bold">$</span>
              <input
                autoFocus
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none text-white font-heading text-[11px] tracking-widest flex-1 uppercase"
                placeholder="TYPE COMMAND..."
              />
            </form>

            {/* Retro scanline effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
