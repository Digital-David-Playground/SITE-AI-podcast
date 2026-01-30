'use client';

import { Container } from '@/components/ui';
import { HostCard } from '@/components/hosts';
import { useLanguage, useLocalized } from '@/lib/i18n';
import hosts from '@/data/hosts.json';
import type { Host } from '@/lib/types';

const typedHosts = hosts as Host[];

export default function HostsPage() {
  const { t } = useLanguage();
  const localize = useLocalized();

  return (
    <div className="pt-20 md:pt-24 pb-24">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.hosts.title}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {t.hosts.subtitle}
          </p>
        </div>

        {/* Hosts grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {typedHosts.map((host) => (
            <HostCard key={host.id} host={host} />
          ))}
        </div>

        {/* Companies section */}
        <div className="mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            {t.hosts.companiesTitle}
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            {t.hosts.companiesSubtitle}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {typedHosts.flatMap((host) =>
              host.companies.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-white">
                      {company.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-sm text-zinc-500 line-clamp-2">
                    {localize(company.description)}
                  </p>
                </a>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
