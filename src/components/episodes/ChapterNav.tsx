'use client';

import { Clock } from 'lucide-react';
import { formatTimestamp } from '@/lib/utils';

// Accept pre-localized chapter data (string titles, not LocalizedString)
interface LocalizedChapter {
  title: string;
  timestamp: number;
}

interface ChapterNavProps {
  chapters: LocalizedChapter[];
  title?: string;
}

export function ChapterNav({
  chapters,
  title = 'Kapitel',
}: ChapterNavProps) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center space-x-2 p-4 border-b border-zinc-800">
        <Clock className="w-4 h-4 text-indigo-400" />
        <span className="font-medium text-white">{title}</span>
        <span className="text-sm text-zinc-500">({chapters.length})</span>
      </div>

      {/* Chapter List */}
      <div className="divide-y divide-zinc-800/50">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-4 py-3"
          >
            <span className="text-sm font-mono text-indigo-400 min-w-[3.5rem]">
              {formatTimestamp(chapter.timestamp)}
            </span>
            <span className="text-sm text-zinc-300">
              {chapter.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
