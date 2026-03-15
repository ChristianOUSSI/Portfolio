"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { slugify } from '../utils/slugify';
import MotionSection from './MotionSection';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <MotionSection id={slugify('Contact')} className="py-20 px-4 relative bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 overflow-hidden">
      {/* Soft background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-blue-50/50 dark:bg-blue-800/20 rounded-full blur-3xl" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center relative z-10"
      >
        <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-300">
         Contactez-moi
        </span>
      </motion.h2>

      <div className="max-w-2xl mx-auto relative z-10">
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200 rounded-lg text-sm flex items-center gap-2"
            >
              <span className="text-xl">✓</span>
              <span>Message envoyé avec succès ! Merci de votre intérêt.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative mb-8"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-blue-100 dark:from-blue-800 dark:to-blue-900 opacity-0 group-hover:opacity-20 rounded-xl blur transition duration-300" />
          
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl border border-blue-100 dark:border-blue-800 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all space-y-4 shadow-lg"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Name field */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <label className="block text-sm text-blue-800 dark:text-blue-300 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom..."
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-blue-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-sm text-gray-900 dark:text-blue-100"
              />
            </motion.div>

            {/* Email field */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <label className="block text-sm text-blue-800 dark:text-blue-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="votre.email@exemple.com"
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-blue-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-sm text-gray-900 dark:text-blue-100"
              />
            </motion.div>

            {/* Message field */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <label className="block text-sm text-blue-800 dark:text-blue-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Votre message ici..."
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-blue-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-sm resize-none text-gray-900 dark:text-blue-100"
              />
            </motion.div>

            {/* Submit button */}
            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white font-bold rounded-lg border border-blue-500 dark:border-blue-600 hover:border-blue-400 transition-all flex items-center justify-center gap-2"
            >
              <span>Envoyer le message</span>
              <span>→</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Contact info */}
        <div className="space-y-4 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-gray-900 dark:text-blue-300 mb-6"
          >
            Me contacter directement
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all">
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-400">Téléphones</p>
                <p className="text-sm text-blue-900 dark:text-blue-300 font-medium">+237 691 223 916 • 670 008 202 • 659 845 024</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all">
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-400">Emails</p>
                <p className="text-sm text-blue-900 dark:text-blue-300 font-medium">Christian.oussi01@gmail.com / wassatherese@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all">
              <span className="text-2xl">🌍</span>
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-400">Localisation</p>
                <p className="text-sm text-blue-900 dark:text-blue-300 font-medium">Douala, Cameroun 🇨🇲</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
