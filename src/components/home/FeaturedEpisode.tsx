'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Clock, ArrowRight } from 'lucide-react';
import { Button, Container, Badge } from '@/components/ui';
import { formatDuration, formatDate } from '@/lib/utils';
import { useLanguage, useLocalized } from '@/lib/i18n';
import type { Episode, Host, Topic } from '@/lib/types';

interface FeaturedEpisodeProps {
  episode: Episode;
  hosts: Host[];
  topics: Topic[];
}

export function FeaturedEpisode({ episode, hosts, topics }: FeaturedEpisodeProps) {
  const { t, locale } = useLanguage();
  const localize = useLocalized();
  const episodeHosts = hosts.filter((h) => episode.hosts.includes(h.id));
  const episodeTopics = topics.filter((t) => episode.topics.includes(t.slug));

  return (
    <section className="py-24 bg-zinc-950">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {t.featured.title}
              </h2>
              <p className="text-zinc-400">{t.featured.subtitle}</p>
            </div>
            <Link href="/episodes" className="hidden md:block">
              <Button variant="ghost">
                {t.featured.allEpisodes}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Featured card */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Video/Thumbnail */}
              <div className="relative aspect-video md:aspect-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-10" />
                <Image
                  src={episode.thumbnail}
                  alt={localize(episode.title)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Play button overlay */}
                <Link
                  href={`/episodes/${episode.slug}`}
                  className="absolute inset-0 z-20 flex items-center justify-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                  </div>
                </Link>
                {/* Duration */}
                <div className="absolute bottom-4 right-4 z-20 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm text-white flex items-center space-x-2">
                  <Clock size={14} />
                  <span>{formatDuration(episode.duration)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {episodeTopics.map((topic) => (
                    <Badge key={topic.id} variant="primary">
                      {localize(topic.name)}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {localize(episode.title)}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-6 line-clamp-3">
                  {localize(episode.description)}
                </p>

                {/* Hosts */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex -space-x-3">
                    {episodeHosts.map((host) => (
                      <div
                        key={host.id}
                        className="w-10 h-10 rounded-full border-2 border-zinc-900 overflow-hidden bg-zinc-800"
                        title={host.name}
                      >
                        <Image
                          src={host.image}
                          alt={host.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="text-zinc-300 font-medium">
                      {episodeHosts.map((h) => h.name).join(', ')}
                    </div>
                    <div className="text-zinc-500">
                      {formatDate(episode.publishedAt, locale)}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link href={`/episodes/${episode.slug}`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    <Play className="w-4 h-4 mr-2" fill="currentColor" />
                    {t.featured.watchEpisode}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile link */}
          <div className="mt-6 md:hidden text-center">
            <Link href="/episodes">
              <Button variant="ghost">
                {t.recent.viewAllEpisodes}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
