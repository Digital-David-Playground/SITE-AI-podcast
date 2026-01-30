'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Container, Button, Badge } from '@/components/ui';
import { EpisodeGrid } from '@/components/episodes';
import { useLanguage, useLocalized } from '@/lib/i18n';
import episodes from '@/data/episodes.json';
import hosts from '@/data/hosts.json';
import topics from '@/data/topics.json';
import type { Episode, Host, Topic } from '@/lib/types';

const typedEpisodes = episodes as Episode[];
const typedHosts = hosts as Host[];
const typedTopics = topics as Topic[];

export default function EpisodesPage() {
  const { t, locale } = useLanguage();
  const localize = useLocalized();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHost, setSelectedHost] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredEpisodes = useMemo(() => {
    return typedEpisodes.filter((episode) => {
      // Search filter - search in both languages for better UX
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitleDE = episode.title.de.toLowerCase().includes(query);
        const matchesTitleEN = episode.title.en.toLowerCase().includes(query);
        const matchesDescDE = episode.description.de.toLowerCase().includes(query);
        const matchesDescEN = episode.description.en.toLowerCase().includes(query);
        if (!matchesTitleDE && !matchesTitleEN && !matchesDescDE && !matchesDescEN) return false;
      }

      // Host filter
      if (selectedHost && !episode.hosts.includes(selectedHost)) {
        return false;
      }

      // Topic filter
      if (selectedTopic && !episode.topics.includes(selectedTopic)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedHost, selectedTopic]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedHost(null);
    setSelectedTopic(null);
  };

  const hasActiveFilters = searchQuery || selectedHost || selectedTopic;

  return (
    <div className="pt-20 md:pt-24 pb-24">
      <Container size="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.episodes.title}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            {t.episodes.subtitle}
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          {/* Search bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder={t.episodes.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <Button
              variant={showFilters ? 'secondary' : 'outline'}
              onClick={() => setShowFilters(!showFilters)}
              className="sm:w-auto"
            >
              <Filter className="w-4 h-4 mr-2" />
              {t.episodes.filters}
              {hasActiveFilters && (
                <span className="ml-2 w-2 h-2 rounded-full bg-indigo-500" />
              )}
            </Button>
          </div>

          {/* Filter panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Host filter */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-3">
                    {t.episodes.filterByHost}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {typedHosts.map((host) => (
                      <button
                        key={host.id}
                        onClick={() =>
                          setSelectedHost(selectedHost === host.id ? null : host.id)
                        }
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                          selectedHost === host.id
                            ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300'
                            : 'bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600'
                        }`}
                      >
                        {host.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topic filter */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-3">
                    {t.episodes.filterByTopic}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {typedTopics.map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() =>
                          setSelectedTopic(
                            selectedTopic === topic.slug ? null : topic.slug
                          )
                        }
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                          selectedTopic === topic.slug
                            ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300'
                            : 'bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600'
                        }`}
                      >
                        {localize(topic.name)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {hasActiveFilters && (
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="w-4 h-4 mr-2" />
                    {t.episodes.clearFilters}
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {/* Active filters display */}
          {hasActiveFilters && !showFilters && (
            <div className="flex items-center flex-wrap gap-2 mb-6">
              <span className="text-sm text-zinc-500">{t.episodes.activeFilters}</span>
              {selectedHost && (
                <Badge variant="primary" className="cursor-pointer" onClick={() => setSelectedHost(null)}>
                  {typedHosts.find((h) => h.id === selectedHost)?.name}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
              {selectedTopic && (
                <Badge variant="primary" className="cursor-pointer" onClick={() => setSelectedTopic(null)}>
                  {(() => {
                    const topic = typedTopics.find((t) => t.slug === selectedTopic);
                    return topic ? localize(topic.name) : '';
                  })()}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-zinc-400 hover:text-white ml-2"
              >
                {t.episodes.clearAll}
              </button>
            </div>
          )}
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-sm text-zinc-500">
            {filteredEpisodes.length} {filteredEpisodes.length !== 1 ? t.episodes.episodesFoundPlural : t.episodes.episodesFound}
          </p>
        </motion.div>

        {/* Episodes grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <EpisodeGrid
            episodes={filteredEpisodes}
            hosts={typedHosts}
            topics={typedTopics}
          />
        </motion.div>
      </Container>
    </div>
  );
}
