export type Locale = 'de' | 'en';

export const translations = {
  de: {
    // Navigation
    nav: {
      episodes: 'Episoden',
      hosts: 'Moderatoren',
      about: 'Über uns',
      liveEvents: 'Live Events',
      subscribe: 'Abonnieren',
    },

    // Hero
    hero: {
      badge: 'Jede Woche eine neue Episode',
      title1: 'Drei CEOs.',
      title2: 'Ein Gespräch.',
      title3: 'Unendliche Einblicke.',
      subtitle:
        'Ungefilterte Gespräche von drei Tech-Unternehmern über digitale Transformation, KI und die Zukunft der Beratung.',
      watchLatest: 'Neueste Episode ansehen',
      meetHosts: 'Die Moderatoren',
      stats: {
        ceos: 'Tech CEOs',
        experience: 'Jahre Erfahrung',
        companies: 'Unternehmen',
      },
    },

    // Featured Episode
    featured: {
      title: 'Aktuelle Episode',
      subtitle: 'Verpassen Sie nicht unser neuestes Gespräch',
      allEpisodes: 'Alle Episoden',
      watchEpisode: 'Episode ansehen',
    },

    // Hosts Preview
    hostsPreview: {
      title: 'Die Moderatoren',
      subtitle:
        'Drei Tech-CEOs mit jahrzehntelanger Erfahrung in digitaler Transformation, Beratung und Unternehmertum.',
      viewProfiles: 'Vollständige Profile ansehen',
    },

    // Recent Episodes
    recent: {
      title: 'Aktuelle Episoden',
      subtitle: 'Die neuesten Gespräche entdecken',
      viewAll: 'Alle ansehen',
      viewAllEpisodes: 'Alle Episoden ansehen',
    },

    // Episodes Page
    episodes: {
      title: 'Alle Episoden',
      subtitle:
        'Tauchen Sie ein in unser Archiv von Gesprächen über digitale Transformation, KI, Führung und Unternehmertum.',
      search: 'Episoden suchen...',
      filters: 'Filter',
      filterByHost: 'Nach Moderator filtern',
      filterByTopic: 'Nach Thema filtern',
      clearFilters: 'Alle Filter löschen',
      activeFilters: 'Aktive Filter:',
      clearAll: 'Alle löschen',
      episodesFound: 'Episode gefunden',
      episodesFoundPlural: 'Episoden gefunden',
      noEpisodes: 'Keine Episoden gefunden.',
    },

    // Episode Detail
    episode: {
      backToEpisodes: 'Zurück zu Episoden',
      featuring: 'Mit dabei',
      shareEpisode: 'Diese Episode teilen',
      copyLink: 'Link kopieren',
      copied: 'Kopiert!',
      chapters: 'Kapitel',
      relatedEpisodes: 'Ähnliche Episoden',
    },

    // Hosts Page
    hosts: {
      title: 'Die Moderatoren',
      subtitle:
        'Drei Tech-CEOs mit jahrzehntelanger gemeinsamer Erfahrung teilen ihre Einblicke in digitale Transformation, KI und den Aufbau erfolgreicher Tech-Unternehmen.',
      companiesTitle: 'Die Unternehmen hinter den Gesprächen',
      companiesSubtitle:
        'Unsere Moderatoren führen einige der innovativsten Unternehmen in der Tech-Beratung und digitalen Transformation.',
      viewProfile: 'Profil ansehen',
    },

    // Host Detail
    host: {
      allHosts: 'Alle Moderatoren',
      companies: 'Unternehmen',
      episodesFeaturing: 'Episoden mit',
      episodes: 'Episoden',
      otherHosts: 'Andere Moderatoren',
    },

    // About Page
    about: {
      heroTitle: 'Echte Gespräche von',
      heroTitleHighlight: 'echten Führungskräften',
      heroSubtitle:
        'Tech Leaders Unplugged bringt drei CEOs aus der Tech- und Beratungswelt für ungefilterte Gespräche über die Herausforderungen und Chancen beim Aufbau von Unternehmen im digitalen Zeitalter zusammen.',
      missionTitle: 'Unsere Mission',
      missionP1:
        'In einer Welt voller polierter Keynotes und kuratierter Social-Media-Posts wollten wir etwas anderes schaffen. Tech Leaders Unplugged ist der Ort, an dem drei Unternehmer die Unternehmensfassade fallen lassen und echte Gespräche darüber führen, was es wirklich bedeutet, in der Tech-Branche zu führen.',
      missionP2:
        'Von den Herausforderungen der digitalen Transformation bis zu den Realitäten beim Aufbau und Skalieren von Teams teilen wir unsere Erfahrungen, Debatten und gelegentlichen Meinungsverschiedenheiten offen.',
      missionP3:
        'Unser Ziel ist einfach: Umsetzbare Erkenntnisse liefern, die anderen Führungskräften helfen, die Komplexität der modernen Tech-Landschaft zu meistern.',
      features: {
        honest: 'Ehrliche Gespräche',
        honestDesc: 'Keine Skripte, kein PR-Sprech',
        expertise: 'Gebündelte Expertise',
        expertiseDesc: '50+ Jahre Erfahrung',
        practical: 'Praktische Einblicke',
        practicalDesc: 'Lektionen zum Anwenden',
        results: 'Echte Ergebnisse',
        resultsDesc: 'Von Führungskräften, die es getan haben',
      },
      hostsTitle: 'Die Moderatoren',
      hostsSubtitle:
        'Drei Unternehmer mit komplementärer Expertise und einer gemeinsamen Leidenschaft für ehrlichen Dialog über Technologie und Business.',
      topicsTitle: 'Unsere Themen',
      topicsSubtitle:
        'Unsere Gespräche decken das gesamte Spektrum der Herausforderungen ab, mit denen Tech-Führungskräfte heute konfrontiert sind.',
      topics: [
        'Digitale Transformation',
        'Künstliche Intelligenz',
        'Führung & Management',
        'Unternehmertum',
        'IT-Beratung',
        'Workforce & Talent',
        'Business-Strategie',
        'Zukunft der Arbeit',
      ],
      ctaTitle: 'Bereit für das Gespräch?',
      ctaSubtitle:
        'Abonnieren Sie, um über neue Episoden, exklusive Inhalte und kommende Live-Events informiert zu werden.',
      watchEpisodes: 'Episoden ansehen',
      subscribeNow: 'Jetzt abonnieren',
    },

    // Subscribe Page
    subscribe: {
      title: 'Bleiben Sie informiert',
      subtitle:
        'Verpassen Sie keine Episode. Abonnieren Sie, um über neue Gespräche, exklusive Inhalte und kommende Live-Events informiert zu werden.',
      newsletter: 'E-Mail-Newsletter',
      newsletterDesc:
        'Erhalten Sie Episodenzusammenfassungen, wichtige Erkenntnisse und exklusive Updates direkt in Ihren Posteingang.',
      emailPlaceholder: 'E-Mail-Adresse eingeben',
      subscribeButton: 'Abonnieren',
      subscribing: 'Wird abonniert...',
      subscribed: 'Sie sind abonniert!',
      subscribedDesc:
        'Vielen Dank für Ihr Abonnement. Prüfen Sie Ihren Posteingang für eine Bestätigungs-E-Mail.',
      privacyNote: 'Wir respektieren Ihre Privatsphäre. Jederzeit abbestellbar.',
      platformsTitle: 'Überall hören & sehen',
      platforms: {
        youtube: 'Vollständige Episoden und Clips ansehen',
        spotify: 'Unterwegs hören',
        apple: 'Auf iOS abonnieren',
        rss: 'Zu Ihrer Podcast-App hinzufügen',
      },
      whatYouGet: 'Was Sie erhalten',
      benefits: {
        newEpisodes: 'Neue Episoden',
        newEpisodesDesc: 'Erfahren Sie als Erster, wenn ein neues Gespräch erscheint',
        takeaways: 'Wichtige Erkenntnisse',
        takeawaysDesc: 'Episodenzusammenfassungen mit umsetzbaren Insights',
        liveEvents: 'Live Events',
        liveEventsDesc: 'Frühzeitiger Zugang zu Live-Q&A-Sessions und Events',
      },
    },

    // Live Events Page
    live: {
      badge: 'Live Events',
      title: 'Live dabei sein',
      subtitle:
        'Nehmen Sie an Live-Q&A-Sessions, Diskussionen und exklusiven Events mit Christian, Hubert und Stefan teil.',
      upcoming: 'Kommende Events',
      noEvents: 'Keine kommenden Events',
      noEventsDesc:
        'Wir planen unser nächstes Live-Event. Abonnieren Sie, um benachrichtigt zu werden, wenn wir neue Termine ankündigen.',
      getNotified: 'Benachrichtigt werden',
      registerNow: 'Jetzt registrieren',
      onlineEvent: 'Online-Event',
      whatToExpect: 'Was Sie erwartet',
      expectations: {
        qa: 'Live Q&A',
        qaDesc:
          'Stellen Sie Ihre Fragen und erhalten Sie direkte Antworten von unseren Moderatoren zu Themen, die Sie interessieren.',
        discussions: 'Interaktive Diskussionen',
        discussionsDesc:
          'Nehmen Sie an Echtzeit-Umfragen, Debatten und Gesprächen mit der Community teil.',
        insights: 'Exklusive Einblicke',
        insightsDesc:
          'Erhalten Sie Hintergrund-Perspektiven und Bonusinhalte, die in regulären Episoden nicht verfügbar sind.',
      },
      pastEvents: 'Vergangene Events',
      watchRecording: 'Aufzeichnung ansehen',
      dontMissOut: 'Nicht verpassen',
      dontMissOutDesc:
        'Abonnieren Sie, um über kommende Live-Events informiert zu werden und als Erster dabei zu sein.',
      subscribeForUpdates: 'Für Updates abonnieren',
    },

    // Common
    common: {
      featured: 'Empfohlen',
      viewProfile: 'Profil ansehen',
      learnMore: 'Mehr erfahren',
      readMore: 'Mehr lesen',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      website: 'Website',
      at: 'bei',
      and: 'und',
      more: 'mehr',
    },

    // Footer
    footer: {
      tagline:
        'Ungefilterte Gespräche von drei Tech-CEOs, die die digitale Zukunft gestalten.',
      podcast: 'Podcast',
      allEpisodes: 'Alle Episoden',
      latestEpisode: 'Neueste Episode',
      topics: 'Themen',
      hosts: 'Moderatoren',
      meetHosts: 'Die Moderatoren',
      more: 'Mehr',
      about: 'Über uns',
      liveEvents: 'Live Events',
      subscribe: 'Abonnieren',
      copyright: 'Alle Rechte vorbehalten.',
    },
  },

  en: {
    // Navigation
    nav: {
      episodes: 'Episodes',
      hosts: 'Hosts',
      about: 'About',
      liveEvents: 'Live Events',
      subscribe: 'Subscribe',
    },

    // Hero
    hero: {
      badge: 'New Episode Every Week',
      title1: 'Three CEOs.',
      title2: 'One Conversation.',
      title3: 'Infinite Insights.',
      subtitle:
        'Unfiltered conversations from three tech entrepreneurs navigating digital transformation, AI, and the future of consulting.',
      watchLatest: 'Watch Latest Episode',
      meetHosts: 'Meet the Hosts',
      stats: {
        ceos: 'Tech CEOs',
        experience: 'Years Experience',
        companies: 'Companies',
      },
    },

    // Featured Episode
    featured: {
      title: 'Featured Episode',
      subtitle: "Don't miss our latest conversation",
      allEpisodes: 'All Episodes',
      watchEpisode: 'Watch Episode',
    },

    // Hosts Preview
    hostsPreview: {
      title: 'Meet the Hosts',
      subtitle:
        'Three tech CEOs with decades of combined experience in digital transformation, consulting, and entrepreneurship.',
      viewProfiles: 'View Full Profiles',
    },

    // Recent Episodes
    recent: {
      title: 'Recent Episodes',
      subtitle: 'Catch up on the latest conversations',
      viewAll: 'View All',
      viewAllEpisodes: 'View All Episodes',
    },

    // Episodes Page
    episodes: {
      title: 'All Episodes',
      subtitle:
        'Dive into our archive of conversations covering digital transformation, AI, leadership, and entrepreneurship.',
      search: 'Search episodes...',
      filters: 'Filters',
      filterByHost: 'Filter by Host',
      filterByTopic: 'Filter by Topic',
      clearFilters: 'Clear all filters',
      activeFilters: 'Active filters:',
      clearAll: 'Clear all',
      episodesFound: 'episode found',
      episodesFoundPlural: 'episodes found',
      noEpisodes: 'No episodes found.',
    },

    // Episode Detail
    episode: {
      backToEpisodes: 'Back to Episodes',
      featuring: 'Featuring',
      shareEpisode: 'Share this episode',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      chapters: 'Chapters',
      relatedEpisodes: 'Related Episodes',
    },

    // Hosts Page
    hosts: {
      title: 'Meet the Hosts',
      subtitle:
        'Three tech CEOs with decades of combined experience share their insights on digital transformation, AI, and building successful tech businesses.',
      companiesTitle: 'The Companies Behind the Conversations',
      companiesSubtitle:
        'Our hosts lead some of the most innovative companies in tech consulting and digital transformation.',
      viewProfile: 'View Profile',
    },

    // Host Detail
    host: {
      allHosts: 'All Hosts',
      companies: 'Companies',
      episodesFeaturing: 'Episodes featuring',
      episodes: 'episodes',
      otherHosts: 'Other Hosts',
    },

    // About Page
    about: {
      heroTitle: 'Real Conversations from',
      heroTitleHighlight: 'Real Leaders',
      heroSubtitle:
        'Tech Leaders Unplugged brings together three CEOs from the tech and consulting world for unfiltered conversations about the challenges and opportunities of building businesses in the digital age.',
      missionTitle: 'Our Mission',
      missionP1:
        'In a world filled with polished keynotes and curated social media posts, we wanted to create something different. Tech Leaders Unplugged is where three entrepreneurs drop the corporate facade and have real conversations about what it actually takes to lead in tech.',
      missionP2:
        'From the challenges of digital transformation to the realities of building and scaling teams, we share our experiences, debates, and occasional disagreements openly.',
      missionP3:
        'Our goal is simple: provide actionable insights that help other leaders navigate the complexities of the modern tech landscape.',
      features: {
        honest: 'Honest Conversations',
        honestDesc: 'No scripts, no PR speak',
        expertise: 'Combined Expertise',
        expertiseDesc: '50+ years of experience',
        practical: 'Practical Insights',
        practicalDesc: 'Lessons you can apply',
        results: 'Real Results',
        resultsDesc: "From leaders who've done it",
      },
      hostsTitle: 'The Hosts',
      hostsSubtitle:
        'Three entrepreneurs with complementary expertise and a shared passion for honest dialogue about technology and business.',
      topicsTitle: 'Topics We Cover',
      topicsSubtitle:
        'Our conversations span the full spectrum of challenges facing tech leaders today.',
      topics: [
        'Digital Transformation',
        'Artificial Intelligence',
        'Leadership & Management',
        'Entrepreneurship',
        'IT Consulting',
        'Workforce & Talent',
        'Business Strategy',
        'Future of Work',
      ],
      ctaTitle: 'Ready to Join the Conversation?',
      ctaSubtitle:
        'Subscribe to get notified about new episodes, exclusive content, and upcoming live events.',
      watchEpisodes: 'Watch Episodes',
      subscribeNow: 'Subscribe Now',
    },

    // Subscribe Page
    subscribe: {
      title: 'Stay in the Loop',
      subtitle:
        'Never miss an episode. Subscribe to get notified about new conversations, exclusive content, and upcoming live events.',
      newsletter: 'Email Newsletter',
      newsletterDesc:
        'Get episode summaries, key insights, and exclusive updates delivered to your inbox.',
      emailPlaceholder: 'Enter your email',
      subscribeButton: 'Subscribe',
      subscribing: 'Subscribing...',
      subscribed: "You're subscribed!",
      subscribedDesc:
        'Thanks for subscribing. Check your inbox for a confirmation email.',
      privacyNote: 'We respect your privacy. Unsubscribe at any time.',
      platformsTitle: 'Listen & Watch Everywhere',
      platforms: {
        youtube: 'Watch full episodes and clips',
        spotify: 'Listen on the go',
        apple: 'Subscribe on iOS',
        rss: 'Add to your podcast app',
      },
      whatYouGet: "What You'll Get",
      benefits: {
        newEpisodes: 'New Episodes',
        newEpisodesDesc: 'Be the first to know when a new conversation drops',
        takeaways: 'Key Takeaways',
        takeawaysDesc: 'Episode summaries with actionable insights',
        liveEvents: 'Live Events',
        liveEventsDesc: 'Early access to live Q&A sessions and events',
      },
    },

    // Live Events Page
    live: {
      badge: 'Live Events',
      title: 'Join Us Live',
      subtitle:
        'Participate in live Q&A sessions, discussions, and exclusive events with Christian, Hubert, and Stefan.',
      upcoming: 'Upcoming Events',
      noEvents: 'No Upcoming Events',
      noEventsDesc:
        "We're planning our next live event. Subscribe to be notified when we announce new dates.",
      getNotified: 'Get Notified',
      registerNow: 'Register Now',
      onlineEvent: 'Online Event',
      whatToExpect: 'What to Expect',
      expectations: {
        qa: 'Live Q&A',
        qaDesc:
          'Submit your questions and get direct answers from our hosts on topics that matter to you.',
        discussions: 'Interactive Discussions',
        discussionsDesc:
          'Participate in real-time polls, debates, and conversations with the community.',
        insights: 'Exclusive Insights',
        insightsDesc:
          'Get behind-the-scenes perspectives and bonus content not available in regular episodes.',
      },
      pastEvents: 'Past Events',
      watchRecording: 'Watch Recording',
      dontMissOut: "Don't Miss Out",
      dontMissOutDesc:
        'Subscribe to get notified about upcoming live events and be the first to register.',
      subscribeForUpdates: 'Subscribe for Updates',
    },

    // Common
    common: {
      featured: 'Featured',
      viewProfile: 'View Profile',
      learnMore: 'Learn More',
      readMore: 'Read More',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      website: 'Website',
      at: 'at',
      and: 'and',
      more: 'more',
    },

    // Footer
    footer: {
      tagline:
        'Unfiltered conversations from three tech CEOs navigating the digital frontier.',
      podcast: 'Podcast',
      allEpisodes: 'All Episodes',
      latestEpisode: 'Latest Episode',
      topics: 'Topics',
      hosts: 'Hosts',
      meetHosts: 'Meet the Hosts',
      more: 'More',
      about: 'About',
      liveEvents: 'Live Events',
      subscribe: 'Subscribe',
      copyright: 'All rights reserved.',
    },
  },
};

// Create a type that represents the structure without literal string types
type DeepStringify<T> = T extends readonly (infer U)[]
  ? readonly string[]
  : T extends object
  ? { readonly [K in keyof T]: DeepStringify<T[K]> }
  : string;

export type TranslationKeys = DeepStringify<typeof translations.de>;
