"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { slugify } from '../utils/slugify';
import MotionSection from './MotionSection';
import { PROJECT_URLS } from '../lib/projectUrls';

// Chaque projet ici est une aventure – de mes idées folles à du code réel !
const projects = [
  {
    title: 'Mobile Hub',
    icon: '🔧',
    description: 'Mon premier pas dans les apps mobiles : gestion de contacts et tâches avec React. Inspiré par mon besoin d\'organiser mes sessions de gaming et d\'écriture.',
    stack: ['React', 'Firebase', 'Tailwind'],
    image: '/projects/mobile-hub.png',
    link: PROJECT_URLS.mobileHub,
    github: '#'
  },
  {
    title: 'SaaS Admin',
    icon: '⚙️',
    description: "Dashboard pour gérer des utilisateurs en SaaS. J'ai adoré implémenter le CRUD et la pagination ça m'a rappelé d'organiser mes collections de mangas !",
    stack: ['Next.js 15', 'Python', 'REST API'],
    image: '/projects/saas-admin.png',
    link: PROJECT_URLS.saasAdmin,
    github: '#'
  },
  {
    title: 'Blade Quest Prototype',
    icon: '⚔️',
    description: 'Prototype de jeu 2D né de mes nuits passées sur Zelda et PACMAN. HTML5 Canvas m\'a permis de créer un petit monde où combattre et collecter est le seul but car oui c\'est mon rêve de game dev en action !',
    stack: ['HTML5 Canvas', 'JavaScript'],
    image: '/projects/blade-quest.png',
    link: PROJECT_URLS.bladeQuest,
    github: '#'
  },
  {
    title: 'DataDash',
    icon: '📊',
    description: 'Dashboard analytique inspiré de Power AMC. J\'ai appris Python pour l\'API backend et adoré jouer avec les graphiques comme analyser les stats de mes parties de jeu !',
    stack: ['Python', 'React', 'Recharts'],
    image: '/projects/datadash.png',
    link: PROJECT_URLS.datadash,
    github: '#'
  }
];

export default function Projects() {
  return (
    <MotionSection id={slugify('Projets')} className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating tech dots */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400/20 rounded-full" />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-blue-500/30 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-300/15 rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400/20 rounded-full" />
        
        {/* Subtle circuit lines */}
        <div className="absolute top-10 left-1/2 w-px h-20 bg-gradient-to-b from-blue-400/20 to-transparent" />
        <div className="absolute bottom-10 right-1/4 w-px h-16 bg-gradient-to-t from-blue-400/15 to-transparent" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Soft background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-50/50 dark:bg-blue-800/20 rounded-full blur-3xl" />
      </div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center relative z-10"
      >
        <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-300">
          Mes Projets
        </span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-blue-200 dark:from-blue-700 dark:to-blue-800 opacity-0 group-hover:opacity-25 rounded-xl blur transition duration-300" />
            
            <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-100 dark:border-blue-800 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all shadow-lg">
              {/* Image container with overlay */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="w-full h-48 overflow-hidden relative"
              >
                <Image 
                  src={proj.image} 
                  alt={proj.title} 
                  width={600} 
                  height={300} 
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {proj.icon && <span className="text-2xl">{proj.icon}</span>}
                  <motion.h3 
                    className="font-bold text-xl mb-2 text-gray-900 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.1 }}
                  >
                    {proj.title}
                  </motion.h3>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{proj.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map((s, i) => (
                    <motion.span 
                      key={s} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + (i * 0.05) }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-full text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-all"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-blue-800">
                  {proj.link ? (
                    <motion.a 
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ouvrir le projet dans un nouvel onglet"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium flex items-center gap-1 btn-hover"
                      whileHover={{ x: 4 }}
                    >
                      Voir le projet →
                    </motion.a>
                  ) : (
                    <span className="text-gray-500 text-sm" title="Lien non configuré - voir les instructions de déploiement">
                      Lien à configurer (voir .env.example)
                    </span>
                  )}
                  <motion.a 
                    href={proj.github}
                    title="Voir le code source sur GitHub"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium flex items-center gap-1 btn-hover"
                    whileHover={{ x: 4 }}
                  >
                    GitHub →
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
