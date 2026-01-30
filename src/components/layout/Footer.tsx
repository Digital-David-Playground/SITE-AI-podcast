'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';
import { Container } from '@/components/ui';
import { useLanguage } from '@/lib/i18n';

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'Email', href: 'mailto:hello@example.com', icon: Mail },
];

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    podcast: [
      { name: t.footer.allEpisodes, href: '/episodes' },
      { name: t.footer.latestEpisode, href: '/episodes' },
      { name: t.footer.topics, href: '/episodes' },
    ],
    hosts: [
      { name: t.footer.meetHosts, href: '/hosts' },
      { name: 'Christian Culver', href: '/hosts/christian-culver' },
      { name: 'Hubert Corr', href: '/hosts/hubert-corr' },
      { name: 'Stefan Rühle', href: '/hosts/stefan-ruehle' },
    ],
    company: [
      { name: t.footer.about, href: '/about' },
      { name: t.footer.liveEvents, href: '/live' },
      { name: t.footer.subscribe, href: '/subscribe' },
    ],
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <Container size="lg" className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">TL</span>
              </div>
              <span className="text-white font-semibold">Tech Leaders</span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-zinc-500 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Podcast Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t.footer.podcast}</h3>
            <ul className="space-y-3">
              {footerLinks.podcast.map((link) => (
                <li key={link.href + link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosts Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t.footer.hosts}</h3>
            <ul className="space-y-3">
              {footerLinks.hosts.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t.footer.more}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-500 text-center">
            &copy; {new Date().getFullYear()} Tech Leaders Unplugged. {t.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
