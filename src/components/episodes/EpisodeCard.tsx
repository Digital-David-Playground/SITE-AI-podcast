'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play, Clock } from 'lucide-react';
import { Card, Badge } from '@/components/ui';
import { formatDuration, formatDate } from '@/lib/utils';
import { useLanguage, useLocalized } from '@/lib/i18n';
import type { Episode, Host, Topic } from '@/lib/types';

interface EpisodeCardProps {
  episode: Episode;
  hosts: Host[];
  topics: Topic[];
}

export function EpisodeCard({ episode, hosts, topics }: EpisodeCardProps) {
  const { t, locale } = useLanguage();
  const localize = useLocalized();

  const episodeHosts = hosts.filter((h) => episode.hosts.includes(h.id));
  const episodeTopics = topics.filter((t) => episode.topics.includes(t.slug));

  return (
    <Link href={`/episodes/${episode.slug}`}>
      <Card className="group h-full">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
          <Image
            src={episode.thumbnail}
            alt={localize(episode.title)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
          {/* Duration badge */}
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white flex items-center space-x-1">
            <Clock size={12} />
            <span>{formatDuration(episode.duration)}</span>
          </div>
          {/* Featured badge */}
          {episode.featured && (
            <div className="absolute top-3 left-3">
              <Badge variant="primary">{t.common.featured}</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Topics */}
          <div className="flex flex-wrap gap-2 mb-3">
            {episodeTopics.slice(0, 2).map((topic) => (
              <Badge key={topic.id} variant="default">
                {localize(topic.name)}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-indigo-400 transition-colors">
            {localize(episode.title)}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
            {localize(episode.description)}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Hosts */}
            <div className="flex -space-x-2">
              {episodeHosts.map((host) => (
                <div
                  key={host.id}
                  className="w-8 h-8 rounded-full border-2 border-zinc-900 overflow-hidden bg-zinc-800"
                  title={host.name}
                >
                  <Image
                    src={host.image}
                    alt={host.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Date */}
            <span className="text-xs text-zinc-500">
              {formatDate(episode.publishedAt, locale)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
