'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui';
import { useLocalized } from '@/lib/i18n';
import type { Company } from '@/lib/types';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const localize = useLocalized();

  return (
    <a href={company.url} target="_blank" rel="noopener noreferrer">
      <Card className="group h-full p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center overflow-hidden">
            <Image
              src={company.logo}
              alt={company.name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
        </div>

        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">
          {company.name}
        </h4>
        <p className="text-sm text-indigo-400 mb-3">{localize(company.role)}</p>
        <p className="text-sm text-zinc-400">{localize(company.description)}</p>
      </Card>
    </a>
  );
}
