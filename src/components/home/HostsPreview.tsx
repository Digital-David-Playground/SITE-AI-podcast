'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Globe } from 'lucide-react';
import { Button, Container, Card } from '@/components/ui';
import { useLanguage, useLocalized } from '@/lib/i18n';
import type { Host } from '@/lib/types';

interface HostsPreviewProps {
  hosts: Host[];
}

export function HostsPreview({ hosts }: HostsPreviewProps) {
  const { t } = useLanguage();
  const localize = useLocalized();

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.hostsPreview.title}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {t.hostsPreview.subtitle}
            </p>
          </div>

          {/* Hosts grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {hosts.map((host, index) => (
              <motion.div
                key={host.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/hosts/${host.slug}`}>
                  <Card className="group h-full overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 z-10" />
                      <Image
                        src={host.image}
                        alt={host.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                    </div>

                    {/* Content */}
                    <div className="p-6 -mt-20 relative z-20">
                      {/* Company logos */}
                      <div className="flex items-center space-x-2 mb-4">
                        {host.companies.map((company) => (
                          <div
                            key={company.name}
                            className="w-10 h-10 rounded-xl bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center overflow-hidden"
                            title={company.name}
                          >
                            <Image
                              src={company.logo}
                              alt={company.name}
                              width={28}
                              height={28}
                              className="w-7 h-7 object-contain"
                            />
                          </div>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                        {host.name}
                      </h3>
                      <p className="text-sm text-zinc-500 mb-3">
                        {localize(host.title)}, {host.companies[0].name}
                        {host.companies.length > 1 && ` +${host.companies.length - 1}`}
                      </p>
                      <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                        {localize(host.shortBio)}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {host.social.linkedin && (
                            <a
                              href={host.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-500 hover:text-white transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin size={18} />
                            </a>
                          )}
                          {host.social.website && (
                            <a
                              href={host.social.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-500 hover:text-white transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Globe size={18} />
                            </a>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/hosts">
              <Button variant="outline" size="lg">
                {t.hostsPreview.viewProfiles}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
