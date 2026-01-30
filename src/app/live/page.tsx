'use client';

import Link from 'next/link';
import { Calendar, Clock, Bell, ArrowRight, Video } from 'lucide-react';
import { Container, Button, Card, Badge } from '@/components/ui';
import { useLanguage, useLocalized } from '@/lib/i18n';
import events from '@/data/events.json';
import type { LiveEvent } from '@/lib/types';

const typedEvents = events as LiveEvent[];

export default function LivePage() {
  const { t, locale } = useLanguage();
  const localize = useLocalized();

  const upcomingEvents = typedEvents.filter((e) => e.status === 'upcoming');
  const pastEvents = typedEvents.filter((e) => e.status === 'past');

  const expectations = [
    {
      title: t.live.expectations.qa,
      description: t.live.expectations.qaDesc,
    },
    {
      title: t.live.expectations.discussions,
      description: t.live.expectations.discussionsDesc,
    },
    {
      title: t.live.expectations.insights,
      description: t.live.expectations.insightsDesc,
    },
  ];

  const formatEventDate = (dateString: string, format: 'short' | 'long' | 'weekday') => {
    const date = new Date(dateString);
    const localeStr = locale === 'de' ? 'de-DE' : 'en-US';

    if (format === 'short') {
      return date.toLocaleDateString(localeStr, { month: 'short' });
    } else if (format === 'weekday') {
      return date.toLocaleDateString(localeStr, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } else {
      return date.toLocaleDateString(localeStr, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  };

  return (
    <div className="pt-20 md:pt-24 pb-24">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-red-400">{t.live.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.live.title}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {t.live.subtitle}
          </p>
        </div>

        {/* Upcoming events */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t.live.upcoming}</h2>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="p-6 md:p-8" hover={false}>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Date box */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-indigo-500/20 border border-indigo-500/30 rounded-xl flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-indigo-400">
                          {new Date(event.date).getDate()}
                        </span>
                        <span className="text-xs text-indigo-300 uppercase">
                          {formatEventDate(event.date, 'short')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="primary">{t.live.upcoming}</Badge>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {localize(event.title)}
                      </h3>
                      <p className="text-zinc-400 mb-4">{localize(event.description)}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatEventDate(event.date, 'weekday')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time} {event.timezone}
                        </div>
                        <div className="flex items-center">
                          <Video className="w-4 h-4 mr-2" />
                          {t.live.onlineEvent}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0">
                      {event.registrationUrl && (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button>
                            <Bell className="w-4 h-4 mr-2" />
                            {t.live.registerNow}
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center" hover={false}>
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-zinc-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t.live.noEvents}
              </h3>
              <p className="text-zinc-400 mb-6">
                {t.live.noEventsDesc}
              </p>
              <Link href="/subscribe">
                <Button>
                  {t.live.getNotified}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          )}
        </section>

        {/* What to expect */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t.live.whatToExpect}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {expectations.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-indigo-400">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Past events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">{t.live.pastEvents}</h2>
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <Card key={event.id} className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{localize(event.title)}</h3>
                      <p className="text-sm text-zinc-500">
                        {formatEventDate(event.date, 'long')}
                      </p>
                    </div>
                    {event.recordingWistiaId && (
                      <Link href={`/episodes/${event.slug}`}>
                        <Button variant="outline" size="sm">
                          {t.live.watchRecording}
                        </Button>
                      </Link>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-zinc-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.live.dontMissOut}
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-6">
              {t.live.dontMissOutDesc}
            </p>
            <Link href="/subscribe">
              <Button size="lg">
                <Bell className="w-4 h-4 mr-2" />
                {t.live.subscribeForUpdates}
              </Button>
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
