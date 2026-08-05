export type Locale = "en" | "ur";

export type ServiceListingCopy = {
  name: string;
  description: string;
};

export type ServiceCategoryCopy = {
  title: string;
  description: string;
  services: Record<string, ServiceListingCopy>;
};

export type Dictionary = {
  brand: {
    name: string;
    location: string;
    handle: string;
  };
  nav: {
    experience: string;
    about: string;
    transformations: string;
    services: string;
    contact: string;
    book: string;
  };
  arrival: {
    headlineBefore: string;
    headlineMid: string;
    headlineEm: string;
    headlineAfter: string;
    cta: string;
  };
  philosophy: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
  };
  gallery: {
    label: string;
    title: string;
    caption: string;
  };
  artist: {
    label: string;
    quote: string;
    body1: string;
    body2: string;
    signature: string;
  };
  journey: {
    label: string;
    title: string;
    steps: {
      label: string;
      title: string;
      body: string;
    }[];
  };
  expertise: {
    services: {
      label: string;
      title: string;
      body: string;
    }[];
  };
  proof: {
    quotes: {
      text: string;
      who: string;
    }[];
  };
  book: {
    label: string;
    titleBefore: string;
    titleMid: string;
    titleEm: string;
    titleAfter: string;
    cta: string;
  };
  servicesPage: {
    hero: {
      headlineBefore: string;
      headlineEm: string;
      headlineAfter: string;
      support: string;
      cta: string;
    };
    catalogue: {
      label: string;
      startingAt: string;
      book: string;
      navAria: string;
    };
    help: {
      label: string;
      titleBefore: string;
      titleEm: string;
      titleAfter: string;
      body: string;
      cta: string;
    };
    categories: Record<string, ServiceCategoryCopy>;
  };
  transformationsPage: {
    hero: {
      headlineLine1: string;
      headlineLine2: string;
      support: string;
    };
    filters: {
      all: string;
      blondes: string;
      brunettes: string;
      extensions: string;
      curly: string;
      aria: string;
    };
    featured: {
      label: string;
      beforeAfter: string;
      viewDetails: string;
      showBefore: string;
      showAfter: string;
    };
    lightbox: {
      close: string;
      previous: string;
      next: string;
      service: string;
      stylist: string;
      cta: string;
    };
    results: {
      label: string;
      lines: string[];
    };
    cta: {
      title: string;
      button: string;
    };
    items: Record<
      string,
      {
        title: string;
        goal: string;
        service: string;
        stylist?: string;
      }
    >;
  };
  contactPage: {
    hero: {
      headlineBefore: string;
      headlineEm: string;
      support: string;
      cta: string;
    };
    visit: {
      label: string;
      title: string;
      addressLabel: string;
      hoursLabel: string;
      phoneLabel: string;
      emailLabel: string;
      mapLabel: string;
      openMap: string;
      hours: {
        weekday: {
          days: string;
          time: string;
        };
        sunday: {
          days: string;
          time: string;
        };
      };
    };
    booking: {
      label: string;
      title: string;
      body: string;
      cta: string;
      formTitle: string;
      formSupport: string;
      fields: {
        name: string;
        email: string;
        phone: string;
        message: string;
      };
      submit: string;
      success: string;
    };
    help: {
      label: string;
      title: string;
      body: string;
      cta: string;
    };
  };
  aboutPage: {
    hero: {
      headlineLine1: string;
      headlineLine2: string;
      support: string;
    };
    philosophy: {
      label: string;
      statements: string[];
      closing: string;
    };
    victoria: {
      label: string;
      name: string;
      role: string;
      quote: string;
      body1: string;
      body2: string;
      body3: string;
      signature: string;
    };
    team: {
      label: string;
      title: string;
      bookCta: string;
      members: Record<
        string,
        {
          name: string;
          role: string;
        }
      >;
    };
    experience: {
      label: string;
      title: string;
      steps: {
        title: string;
        body: string;
      }[];
    };
    values: {
      label: string;
      title: string;
      items: string[];
    };
    cta: {
      line1: string;
      line2: string;
      button: string;
    };
  };
  footer: {
    copyright: string;
  };
};
