'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mic, Users, Lightbulb, Target } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { useLanguage, useLocalized } from '@/lib/i18n';
import hosts from '@/data/hosts.json';
import type { Host } from '@/lib/types';

const typedHosts = hosts as Host[];

export default function AboutPage() {
  const { t } = useLanguage();
  const localize = useLocalized();

  const features = [
    { icon: Mic, label: t.about.features.honest, desc: t.about.features.honestDesc },
    { icon: Users, label: t.about.features.expertise, desc: t.about.features.expertiseDesc },
    { icon: Lightbulb, label: t.about.features.practical, desc: t.about.features.practicalDesc },
    { icon: Target, label: t.about.features.results, desc: t.about.features.resultsDesc },
  ];

  return (
    <div className="pt-20 md:pt-24 pb-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.about.heroTitle}{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {t.about.heroTitleHighlight}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400">
              {t.about.heroSubtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{t.about.missionTitle}</h2>
              <p className="text-zinc-400 mb-4">
                {t.about.missionP1}
              </p>
              <p className="text-zinc-400 mb-4">
                {t.about.missionP2}
              </p>
              <p className="text-zinc-400">
                {t.about.missionP3}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
                >
                  <item.icon className="w-8 h-8 text-indigo-400 mb-3" />
                  <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Hosts preview */}
      <section className="py-16 bg-zinc-900/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.about.hostsTitle}</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {t.about.hostsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {typedHosts.map((host) => (
              <Link key={host.id} href={`/hosts/${host.slug}`}>
                <div className="group text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-zinc-800">
                    <Image
                      src={host.image}
                      alt={host.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {host.name}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2">
                    {localize(host.title)}, {host.companies[0].name}
                  </p>
                  <p className="text-zinc-500 text-sm line-clamp-2">
                    {localize(host.shortBio)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/hosts">
              <Button variant="outline">
                {t.hostsPreview.viewProfiles}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Topics we cover */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.about.topicsTitle}</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {t.about.topicsSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.about.topics.map((topic) => (
              <div
                key={topic}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-center hover:border-indigo-500/50 transition-colors"
              >
                <span className="text-zinc-300">{topic}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-zinc-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.about.ctaTitle}
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8">
              {t.about.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/episodes">
                <Button size="lg">{t.about.watchEpisodes}</Button>
              </Link>
              <Link href="/subscribe">
                <Button variant="outline" size="lg">
                  {t.about.subscribeNow}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
