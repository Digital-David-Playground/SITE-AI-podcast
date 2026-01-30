import { EpisodeCard } from './EpisodeCard';
import type { Episode, Host, Topic } from '@/lib/types';

interface EpisodeGridProps {
  episodes: Episode[];
  hosts: Host[];
  topics: Topic[];
}

export function EpisodeGrid({ episodes, hosts, topics }: EpisodeGridProps) {
  if (episodes.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-zinc-400">No episodes found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {episodes.map((episode) => (
        <EpisodeCard
          key={episode.id}
          episode={episode}
          hosts={hosts}
          topics={topics}
        />
      ))}
    </div>
  );
}
