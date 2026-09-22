export const en = {
    navigation: {
      about: "About",
      trainers: "Coaches",
      schedule: "Schedule",
      gallery: "Gallery",
      contact: "Contact",
      join: "Join us",
    },
  
    hero: {
      eyebrow: "Prudnicka Boxing Academy",
      titleLineOne: "Character",
      titleLineTwo: "is forged",
      titleHighlight: "in the ring.",
      description:
        "Train boxing in a place where discipline, technique and determination build real strength.",
      primaryAction: "Join a training",
      secondaryAction: "View schedule",
      scrollLabel: "Scroll",
    },
  
    about: {
      sectionNumber: "01",
      eyebrow: "About us",
      titleLineOne: "Boxing is more",
      titleLineTwo: "than training.",
      lead:
        "Prudnicka Boxing Academy is a place where technique meets character.",
      description:
        "Every training session is an opportunity to work on yourself — your fitness, focus, discipline and confidence. We create a place where athletic development goes hand in hand with consistency and respect for others.",
      foundedLabel: "Founded",
      values: [
        {
          number: "01",
          title: "Technique",
          description:
            "Precision, proper habits and conscious work on every element of boxing.",
        },
        {
          number: "02",
          title: "Character",
          description:
            "Regular training develops consistency, resilience and the ability to overcome your own limits.",
        },
        {
          number: "03",
          title: "Discipline",
          description:
            "Progress is not accidental. We build it one training session at a time.",
        },
      ],
    },
  
    trainers: {
      sectionNumber: "02",
      eyebrow: "Coaches",
      titleLineOne: "People who",
      titleLineTwo: "guide your progress.",
      description:
        "Experience, technique and an individual approach. Meet the people responsible for developing the athletes of Prudnicka Boxing Academy.",
  
      experienceLabel: "Experience",
      achievementsLabel: "Achievements",
      placeholderLabel: "Coach photo",
  
      profiles: {
        trainerOne: {
          name: "Dawid Malski",
          role: "Head Coach",
          experience: "Details to be added",
          achievements: "Information will be added soon.",
        },
  
        trainerTwo: {
          name: "Coach 02",
          role: "Boxing Coach",
          experience: "Details to be added",
          achievements: "Information will be added soon.",
        },
  
        trainerThree: {
          name: "Coach 03",
          role: "Boxing Coach",
          experience: "Details to be added",
          achievements: "Information will be added soon.",
        },
      },
    },
  
    schedule: {
      sectionNumber: "03",
      eyebrow: "Schedule",
      titleLineOne: "Find your",
      titleLineTwo: "time to train.",
      description:
        "Choose a group that matches your level and check the current training days and times.",
  
      columns: {
        day: "Day",
        time: "Time",
        note: "Information",
      },
  
      days: {
        monday: "Monday",
        tuesday: "Tuesday",
        thursday: "Thursday",
      },
  
      notes: {
        sparring: "Sparring",
      },
  
      groups: {
        beginner: {
          name: "Beginner group",
          description:
            "Classes for people starting their boxing training.",
        },
  
        advanced: {
          name: "Advanced group",
          description:
            "Training sessions for experienced and regularly training boxers.",
        },
  
        children: {
          name: "Children's group",
          description:
            "Children's section — the schedule will be added soon.",
        },
      },
  
      emptyState: "No scheduled classes",
    },
  
    gallery: {
      sectionNumber: "04",
      eyebrow: "Gallery",
      titleLineOne: "Feel the atmosphere",
      titleLineTwo: "of our club.",
      description:
        "Training, focus, competition and working together. Take a look inside Prudnicka Boxing Academy.",
  
      items: {
        training: {
          title: "Training",
          alt: "Training at Prudnicka Boxing Academy",
        },
  
        sparring: {
          title: "Sparring",
          alt: "Sparring at Prudnicka Boxing Academy",
        },
  
        club: {
          title: "Our club",
          alt: "Prudnicka Boxing Academy training facility",
        },
  
        community: {
          title: "Team",
          alt: "Prudnicka Boxing Academy community",
        },
  
        technique: {
          title: "Technique",
          alt: "Technical training at Prudnicka Boxing Academy",
        },
  
        ring: {
          title: "Boxing",
          alt: "Boxing at Prudnicka Boxing Academy",
        },
      },
  
      placeholderLabel: "Photo coming soon",
    },
  
    contact: {
      sectionNumber: "05",
      eyebrow: "Contact",
      titleLineOne: "Start your",
      titleLineTwo: "first training.",
      description:
        "Have a question or want to join a training session? Fill in the short form and contact the coach directly.",
  
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
  
        groupLabel: "I'm interested in",
        groupPlaceholder: "Choose a group",
  
        messageLabel: "Message",
        messagePlaceholder:
          "For example: I'd like to attend my first training session...",
  
        submit: "Message us on WhatsApp",
        requiredHint: "Enter your name and choose a group.",
  
        whatsappUnavailable:
          "The WhatsApp number will be added soon.",
      },
  
      whatsappMessage: {
        greeting: "Hello,",
        intro: "I would like to get in touch regarding boxing training.",
        name: "Name",
        group: "Group",
        message: "Message",
      },
  
      qr: {
        eyebrow: "Phone nearby?",
        title: "Scan the QR code",
        description:
          "The code contains your prepared message. Scanning it will open WhatsApp on your phone.",
        waiting:
          "Complete the form to generate a QR code.",
      },
  
      details: {
        eyebrow: "Contact details",
        phone: "Phone",
        email: "E-mail",
        address: "Location",
        socialMedia: "Social media",
        unavailable: "Coming soon",
      },
    },
  
    loader: {
      topWord: "Prudnicka",
      bottomMain: "Akademia",
      bottomSub: "Boksu",
    },
  
    errors: {
      notFound: {
        code: "404",
        eyebrow: "Page not found",
        title: "This page doesn't exist.",
        description:
          "The address may be incorrect or the page may have been moved.",
        action: "Back to homepage",
      },
  
      general: {
        eyebrow: "Something went wrong",
        title: "An unexpected error occurred.",
        description:
          "Try loading this section again. If the problem continues, return to the homepage.",
        retry: "Try again",
        home: "Homepage",
      },
    },
  
    accessibility: {
        openMenu: "Open menu",
        closeMenu: "Close menu",
        homeLink: "Go to homepage",
        clubLogo: "Prudnicka Boxing Academy logo",
        changeLanguage: "Change language",
        polishLanguage: "Polish",
        englishLanguage: "English",
    },
  } as const;