'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Linkedin, Globe } from 'lucide-react';
import { Card } from '@/components/ui';
import { useLanguage, useLocalized } from '@/lib/i18n';
import type { Host } from '@/lib/types';

interface HostCardProps {
  host: Host;
}

export function HostCard({ host }: HostCardProps) {
  const { t } = useLanguage();
  const localize = useLocalized();

  return (
    <Link href={`/hosts/${host.slug}`}>
      <Card className="group h-full">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-10" />
          <Image
            src={host.image}
            alt={host.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            {/* Company logos */}
            <div className="flex items-center space-x-2 mb-3">
              {host.companies.map((company) => (
                <div
                  key={company.name}
                  className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden"
                  title={company.name}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{host.name}</h3>
            <p className="text-sm text-zinc-400 mb-3">
              {localize(host.title)}, {host.companies[0].name}
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-3">
              {host.social.linkedin && (
                <a
                  href={host.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {host.social.website && (
                <a
                  href={host.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-zinc-800">
          <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
            {localize(host.shortBio)}
          </p>
          <div className="flex items-center text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
            <span>{t.common.viewProfile}</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
