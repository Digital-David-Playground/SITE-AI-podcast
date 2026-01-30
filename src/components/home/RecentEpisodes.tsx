'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button, Container } from '@/components/ui';
import { EpisodeGrid } from '@/components/episodes';
import { useLanguage } from '@/lib/i18n';
import type { Episode, Host, Topic } from '@/lib/types';

interface RecentEpisodesProps {
  episodes: Episode[];
  hosts: Host[];
  topics: Topic[];
}

export function RecentEpisodes({ episodes, hosts, topics }: RecentEpisodesProps) {
  const { t } = useLanguage();

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
                {t.recent.title}
              </h2>
              <p className="text-zinc-400">{t.recent.subtitle}</p>
            </div>
            <Link href="/episodes" className="hidden md:block">
              <Button variant="ghost">
                {t.recent.viewAll}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Episodes grid */}
          <EpisodeGrid episodes={episodes} hosts={hosts} topics={topics} />

          {/* Mobile link */}
          <div className="mt-10 md:hidden text-center">
            <Link href="/episodes">
              <Button variant="outline">
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
