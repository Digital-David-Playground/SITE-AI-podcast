import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { HostDetailClient } from './HostDetailClient';
import hosts from '@/data/hosts.json';
import episodes from '@/data/episodes.json';
import topics from '@/data/topics.json';
import type { Host, Episode, Topic } from '@/lib/types';

const typedHosts = hosts as Host[];
const typedEpisodes = episodes as Episode[];
const typedTopics = topics as Topic[];

interface HostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return typedHosts.map((host) => ({
    slug: host.slug,
  }));
}

export async function generateMetadata({ params }: HostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const host = typedHosts.find((h) => h.slug === slug);

  if (!host) {
    return {
      title: 'Host Not Found',
    };
  }

  // Use German as default for SEO metadata (primary language of the site)
  const shortBio = host.shortBio.de;

  return {
    title: host.name,
    description: shortBio,
    openGraph: {
      title: host.name,
      description: shortBio,
      type: 'profile',
      images: [host.image],
    },
  };
}

export default async function HostPage({ params }: HostPageProps) {
  const { slug } = await params;
  const host = typedHosts.find((h) => h.slug === slug);

  if (!host) {
    notFound();
  }

  const hostEpisodes = typedEpisodes.filter((ep) => ep.hosts.includes(host.id));
  const otherHosts = typedHosts.filter((h) => h.id !== host.id);

  return (
    <HostDetailClient
      host={host}
      hostEpisodes={hostEpisodes}
      otherHosts={otherHosts}
      allHosts={typedHosts}
      allTopics={typedTopics}
    />
  );
}
