import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'alaina portoghese',
  description:
    '',
  href: 'https://port-ar.github.io',
  author: 'Alaina Portoghese',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/about',
    label: 'about',
  },
  // {
  //   href: '/experience',
  //   label: 'experience',
  // },
  {
    href: '/blog',
    label: 'sample works',
  }, 
  {
    href: '/contact',
    label: 'contact',
  }, 
]

export const SOCIAL_LINKS: SocialLink[] = [
  // {
  //   href: 'https://github.com/jktrn',
  //   label: 'GitHub',
  // },
  // {
  //   href: 'https://twitter.com/enscry',
  //   label: 'Twitter',
  // },
  {
    href: 'https://www.linkedin.com/in/alaina-portoghese/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:porto023@umn.edu',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
