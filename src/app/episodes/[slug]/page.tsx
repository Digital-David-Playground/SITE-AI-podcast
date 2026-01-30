import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { EpisodeDetailClient } from './EpisodeDetailClient';
import episodes from '@/data/episodes.json';
import hosts from '@/data/hosts.json';
import topics from '@/data/topics.json';
import type { Episode, Host, Topic } from '@/lib/types';

const typedEpisodes = episodes as Episode[];
const typedHosts = hosts as Host[];
const typedTopics = topics as Topic[];

interface EpisodePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return typedEpisodes.map((episode) => ({
    slug: episode.slug,
  }));
}

export async function generateMetadata({ params }: EpisodePageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = typedEpisodes.find((ep) => ep.slug === slug);

  if (!episode) {
    return {
      title: 'Episode Not Found',
    };
  }

  // Use German as default for SEO metadata (primary language of the site)
  const title = episode.title.de;
  const description = episode.description.de;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'video.episode',
      images: [episode.thumbnail],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [episode.thumbnail],
    },
  };
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { slug } = await params;
  const episode = typedEpisodes.find((ep) => ep.slug === slug);

  if (!episode) {
    notFound();
  }

  const episodeHosts = typedHosts.filter((h) => episode.hosts.includes(h.id));
  const episodeTopics = typedTopics.filter((t) => episode.topics.includes(t.slug));

  const relatedEpisodes = typedEpisodes
    .filter((ep) => ep.id !== episode.id)
    .filter((ep) => ep.topics.some((t) => episode.topics.includes(t)))
    .slice(0, 3);

  return (
    <EpisodeDetailClient
      episode={episode}
      episodeHosts={episodeHosts}
      episodeTopics={episodeTopics}
      relatedEpisodes={relatedEpisodes}
      allHosts={typedHosts}
      allTopics={typedTopics}
    />
  );
}
