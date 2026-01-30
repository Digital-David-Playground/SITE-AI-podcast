'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
import { Container, Button, Badge, Card, CopyLinkButton } from '@/components/ui';
import { WistiaPlayer } from '@/components/wistia';
import { ChapterNav, EpisodeCard } from '@/components/episodes';
import { formatDuration, formatDate } from '@/lib/utils';
import { useLanguage, useLocalized } from '@/lib/i18n';
import type { Episode, Host, Topic } from '@/lib/types';

interface EpisodeDetailClientProps {
  episode: Episode;
  episodeHosts: Host[];
  episodeTopics: Topic[];
  relatedEpisodes: Episode[];
  allHosts: Host[];
  allTopics: Topic[];
}

export function EpisodeDetailClient({
  episode,
  episodeHosts,
  episodeTopics,
  relatedEpisodes,
  allHosts,
  allTopics,
}: EpisodeDetailClientProps) {
  const { t, locale } = useLanguage();
  const localize = useLocalized();
  const [episodeUrl, setEpisodeUrl] = useState(`https://techleadersunplugged.com/episodes/${episode.slug}`);

  useEffect(() => {
    // Use actual URL when running in browser
    setEpisodeUrl(window.location.href);
  }, []);

  const localizedTitle = localize(episode.title);
  const localizedDescription = localize(episode.description);

  // Localize chapter titles
  const localizedChapters = episode.chapters?.map((ch) => ({
    ...ch,
    title: localize(ch.title),
  }));

  return (
    <div className="pt-20 md:pt-24 pb-24">
      <Container size="lg">
        {/* Back link */}
        <Link
          href="/episodes"
          className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.episode.backToEpisodes}
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Video player */}
            <div className="relative aspect-video bg-zinc-900 rounded-xl overflow-hidden mb-8">
              <WistiaPlayer videoId={episode.wistiaId} className="w-full h-full" />
            </div>

            {/* Episode info */}
            <div className="mb-8">
              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {episodeTopics.map((topic) => (
                  <Link key={topic.id} href={`/episodes?topic=${topic.slug}`}>
                    <Badge variant="primary">{localize(topic.name)}</Badge>
                  </Link>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {localizedTitle}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(episode.publishedAt, locale)}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {formatDuration(episode.duration)}
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-lg leading-relaxed">
                {localizedDescription}
              </p>
            </div>

            {/* Hosts section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t.episode.featuring}
              </h2>
              <div className="flex flex-wrap gap-4">
                {episodeHosts.map((host) => (
                  <Link key={host.id} href={`/hosts/${host.slug}`}>
                    <Card className="flex items-center p-4 gap-4" hover>
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                        <Image
                          src={host.image}
                          alt={host.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-white">{host.name}</div>
                        <div className="text-sm text-zinc-400">
                          {localize(host.title)}, {host.companies[0].name}
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Share section */}
            <div className="border-t border-zinc-800 pt-8">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                {t.episode.shareEpisode}
              </h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(episodeUrl)}&title=${encodeURIComponent(localizedTitle)}&summary=${encodeURIComponent(localizedDescription.slice(0, 256))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    {t.common.linkedin}
                  </Button>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(episodeUrl)}&text=${encodeURIComponent(localizedTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Twitter className="w-4 h-4 mr-2" />
                    {t.common.twitter}
                  </Button>
                </a>
                <CopyLinkButton
                  url={episodeUrl}
                  label={t.episode.copyLink}
                  copiedLabel={t.episode.copied}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Chapters */}
            {localizedChapters && localizedChapters.length > 0 && (
              <ChapterNav
                chapters={localizedChapters.map((ch) => ({
                  title: ch.title,
                  timestamp: ch.timestamp,
                }))}
                title={t.episode.chapters}
              />
            )}

            {/* Related episodes */}
            {relatedEpisodes.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  {t.episode.relatedEpisodes}
                </h2>
                <div className="space-y-4">
                  {relatedEpisodes.map((ep) => (
                    <EpisodeCard
                      key={ep.id}
                      episode={ep}
                      hosts={allHosts}
                      topics={allTopics}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
