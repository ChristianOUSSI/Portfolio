/**
 * URLs des projets déployés individuellement sur Vercel.
 * Configurez ces variables d'environnement dans les paramètres Vercel du portfolio.
 */
export const PROJECT_URLS = {
  mobileHub: process.env.NEXT_PUBLIC_MOBILE_HUB_URL || '',
  saasAdmin: process.env.NEXT_PUBLIC_SAAS_ADMIN_URL || '',
  bladeQuest: process.env.NEXT_PUBLIC_BLADE_QUEST_URL || '',
  datadash: process.env.NEXT_PUBLIC_DATADASH_URL || '',
}
