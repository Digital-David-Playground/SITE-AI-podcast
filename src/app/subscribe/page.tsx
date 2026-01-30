'use client';

import { useState } from 'react';
import { Mail, Check, Youtube, Rss, Bell } from 'lucide-react';
import { Container, Button, Card } from '@/components/ui';
import { useLanguage } from '@/lib/i18n';

export default function SubscribePage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const platforms = [
    {
      name: 'YouTube',
      icon: Youtube,
      description: t.subscribe.platforms.youtube,
      url: '#',
      color: 'text-red-500',
    },
    {
      name: 'Spotify',
      icon: Rss,
      description: t.subscribe.platforms.spotify,
      url: '#',
      color: 'text-green-500',
    },
    {
      name: 'Apple Podcasts',
      icon: Rss,
      description: t.subscribe.platforms.apple,
      url: '#',
      color: 'text-purple-500',
    },
    {
      name: 'RSS Feed',
      icon: Rss,
      description: t.subscribe.platforms.rss,
      url: '#',
      color: 'text-orange-500',
    },
  ];

  const benefits = [
    {
      title: t.subscribe.benefits.newEpisodes,
      description: t.subscribe.benefits.newEpisodesDesc,
    },
    {
      title: t.subscribe.benefits.takeaways,
      description: t.subscribe.benefits.takeawaysDesc,
    },
    {
      title: t.subscribe.benefits.liveEvents,
      description: t.subscribe.benefits.liveEventsDesc,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="pt-20 md:pt-24 pb-24">
      <Container className="max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 mb-6">
            <Bell className="w-8 h-8 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.subscribe.title}
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            {t.subscribe.subtitle}
          </p>
        </div>

        {/* Newsletter signup */}
        <Card className="p-8 mb-12" hover={false}>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">
                {t.subscribe.newsletter}
              </h2>
              <p className="text-zinc-400">
                {t.subscribe.newsletterDesc}
              </p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 mb-4">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t.subscribe.subscribed}
              </h3>
              <p className="text-zinc-400">
                {t.subscribe.subscribedDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={t.subscribe.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <Button type="submit" size="lg" disabled={isLoading}>
                {isLoading ? t.subscribe.subscribing : t.subscribe.subscribeButton}
              </Button>
            </form>
          )}

          <p className="text-xs text-zinc-500 mt-4">
            {t.subscribe.privacyNote}
          </p>
        </Card>

        {/* Podcast platforms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            {t.subscribe.platformsTitle}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="flex items-center gap-4 p-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center ${platform.color}`}
                  >
                    <platform.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{platform.name}</h3>
                    <p className="text-sm text-zinc-500">{platform.description}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* What to expect */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            {t.subscribe.whatYouGet}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold mb-3">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
