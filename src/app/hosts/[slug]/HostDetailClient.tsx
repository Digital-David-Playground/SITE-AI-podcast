'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Linkedin, Twitter, Globe, ExternalLink } from 'lucide-react';
import { Container, Button, Badge } from '@/components/ui';
import { CompanyCard } from '@/components/hosts';
import { EpisodeCard } from '@/components/episodes';
import { useLanguage, useLocalized } from '@/lib/i18n';
import type { Host, Episode, Topic } from '@/lib/types';

interface HostDetailClientProps {
  host: Host;
  hostEpisodes: Episode[];
  otherHosts: Host[];
  allHosts: Host[];
  allTopics: Topic[];
}

export function HostDetailClient({
  host,
  hostEpisodes,
  otherHosts,
  allHosts,
  allTopics,
}: HostDetailClientProps) {
  const { t, locale } = useLanguage();
  const localize = useLocalized();

  return (
    <div className="pt-20 md:pt-24 pb-24">
      <Container size="lg">
        {/* Back link */}
        <Link
          href="/hosts"
          className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.host.allHosts}
        </Link>

        {/* Hero section */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {/* Image */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-10" />
              <Image
                src={host.image}
                alt={host.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            {/* Company logos */}
            <div className="flex items-center gap-3 mb-6">
              {host.companies.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center hover:border-zinc-600 transition-colors"
                  title={company.name}
                >
                  <span className="text-lg font-bold text-white">
                    {company.name.charAt(0)}
                  </span>
                </a>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {host.name}
            </h1>
            <p className="text-xl text-zinc-400 mb-6">
              {localize(host.title)}
              {host.companies.length > 0 && (
                <>
                  {locale === 'de' ? ' bei ' : ' at '}
                  {host.companies.map((c, i) => (
                    <span key={c.name}>
                      {i > 0 && (i === host.companies.length - 1 ? (locale === 'de' ? ' & ' : ' & ') : ', ')}
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300"
                      >
                        {c.name}
                      </a>
                    </span>
                  ))}
                </>
              )}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-8">
              {host.social.linkedin && (
                <a
                  href={host.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    {t.common.linkedin}
                  </Button>
                </a>
              )}
              {host.social.twitter && (
                <a
                  href={host.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Twitter className="w-4 h-4 mr-2" />
                    {t.common.twitter}
                  </Button>
                </a>
              )}
              {host.social.website && (
                <a
                  href={host.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Globe className="w-4 h-4 mr-2" />
                    {t.common.website}
                  </Button>
                </a>
              )}
            </div>

            {/* Bio */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-zinc-300 leading-relaxed">{localize(host.bio)}</p>
            </div>
          </div>
        </div>

        {/* Companies section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t.host.companies}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {host.companies.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>
        </div>

        {/* Episodes section */}
        {hostEpisodes.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {t.host.episodesFeaturing} {host.name.split(' ')[0]}
              </h2>
              <Badge>{hostEpisodes.length} {t.host.episodes}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostEpisodes.map((episode) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  hosts={allHosts}
                  topics={allTopics}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other hosts */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">{t.host.otherHosts}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherHosts.map((otherHost) => (
              <Link key={otherHost.id} href={`/hosts/${otherHost.slug}`}>
                <div className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-800">
                    <Image
                      src={otherHost.image}
                      alt={otherHost.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{otherHost.name}</h3>
                    <p className="text-sm text-zinc-400">
                      {localize(otherHost.title)}, {otherHost.companies[0].name}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-zinc-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
