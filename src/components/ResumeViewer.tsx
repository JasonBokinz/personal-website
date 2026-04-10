"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Desktop Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[61] hidden md:flex items-center justify-center p-8"
          >
            <div className="relative w-full max-w-4xl h-[85vh] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <h3 className="text-white font-medium text-lg">Resume</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/Jason_Bokinz_Resume_2026.pdf"
                    download
                    className="text-sm font-medium px-4 py-1.5 rounded-full border border-light-blue/50 text-light-blue hover:bg-light-blue hover:text-black transition-all duration-300"
                  >
                    Download
                  </a>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
                    aria-label="Close"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* PDF Embed */}
              <div className="flex-1 bg-gray-100">
                <iframe
                  src="/Jason_Bokinz_Resume_2026.pdf"
                  className="w-full h-full"
                  title="Jason Bokinz Resume"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-[61] md:hidden"
          >
            <div className="bg-gray-900 rounded-t-2xl overflow-hidden border-t border-gray-800 shadow-2xl flex flex-col" style={{ height: "90vh" }}>
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-gray-600" />
              </div>
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800">
                <h3 className="text-white font-medium">Resume</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/Jason_Bokinz_Resume_2026.pdf"
                    download
                    className="text-sm font-medium px-4 py-1.5 rounded-full border border-light-blue/50 text-light-blue hover:bg-light-blue hover:text-black transition-all duration-300"
                  >
                    Download
                  </a>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
                    aria-label="Close"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* PDF Embed */}
              <div className="flex-1 bg-gray-100 overflow-auto">
                <iframe
                  src="/Jason_Bokinz_Resume_2026.pdf"
                  className="w-full h-full"
                  title="Jason Bokinz Resume"
                  style={{ minHeight: "100%" }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
