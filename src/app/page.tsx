import { Hero, FeaturedEpisode, HostsPreview, RecentEpisodes } from '@/components/home';
import episodes from '@/data/episodes.json';
import hosts from '@/data/hosts.json';
import topics from '@/data/topics.json';
import type { Episode, Host, Topic } from '@/lib/types';

export default function HomePage() {
  const typedEpisodes = episodes as Episode[];
  const typedHosts = hosts as Host[];
  const typedTopics = topics as Topic[];

  const featuredEpisode = typedEpisodes.find((ep) => ep.featured) || typedEpisodes[0];
  const recentEpisodes = typedEpisodes
    .filter((ep) => ep.id !== featuredEpisode?.id)
    .slice(0, 3);

  return (
    <>
      <Hero />
      {featuredEpisode && (
        <FeaturedEpisode
          episode={featuredEpisode}
          hosts={typedHosts}
          topics={typedTopics}
        />
      )}
      <HostsPreview hosts={typedHosts} />
      {recentEpisodes.length > 0 && (
        <RecentEpisodes
          episodes={recentEpisodes}
          hosts={typedHosts}
          topics={typedTopics}
        />
      )}
    </>
  );
}
