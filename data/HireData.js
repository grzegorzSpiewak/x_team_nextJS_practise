const HireData = {
  /* Hire Android Dev Page */
  android: {
    tech: "Android",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: true,
    },
    Hero: {
      title: "Hire Dedicated<br /> Android Developers",
      caption: "X-Team is a development company of motivated Android programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Android developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Android developers now',
          title: 'Hire Android developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Android",
      hasFed: false,
      devs: [],
      button: {},
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Android",
      posts: [
        {
          title: "The Beginner's Guide to Notifications in Android N",
          link: 'https://x-team.com/blog/beginners-guide-notifications-android-n/',
          text: "Notification API is backwards compatible, but not every new feature is available across all platforms — we'll see how to deal with that using Android's API. In this tutorial we'll create basic notifications and showcase just introduced advanced features in order to make sure your apps are ready for Android N."
        },
        {
          title: 'Android Material Design using Design Support Library',
          link: 'https://x-team.com/blog/android-material-design-using-design-support-library/',
          text: 'The following tutorial contains an overview of Material Design UI components with example code for including and customising them in your application. All of them can be used independently from others, so you can treat every section as a reference guide.'
        },
        {
          title: 'Introduction to ReactiveX on Android',
          link: 'https://x-team.com/blog/introduction-reactivex-android/',
          text: 'ReactiveX, also known as Reactive Extensions or RX, is a library for composing asynchronous and event-based programs by using observable sequences. This is perfect for Android, which is event-driven and user-focused platform.'
        },
        {
          title: 'Android Runtime Permissions',
          link: 'https://x-team.com/blog/android-runtime-permissions/',
          text: "Android operating system is based on Linux. Applications run in their own sandboxes separated from each other, and are strictly controlled by the Operating System. When you tap on an application icon in order to open it (assuming it isn't running in the background already), operating system starts new process, loads the app into memory and then runs it."
        },
        {
          title: 'How To Get Started With Android Programming',
          link: 'https://x-team.com/blog/how-get-started-android-programming/',
          text: "This tutorial will teach you how to setup and run Android project using Android Studio on OS X (Windows and Linux is not much different). It will be a starter project for all other tutorials. Basic concepts of Android and its development process will not be explained in every following tutorial, so please refer to this post as needed."
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'mobile'},
        {skill: 'ios'},
        {skill: 'ionic'}
      ],
    },
    LandingCta: {
      tech: "Android",
      ctaAnchor: "Hire Android Developers",
      ctaTitle: "Hire Android Developers",
    },
  },

  /* Hire Angular Dev Page */
  angular: {
    tech: "Angular",
    TextLanding: {
      hasText: true,
      text: '<h3>What is Angular?</h3><p>Angular is a <a href="/hire-javascript-developers/">Javascript</a> powered web app framework released by Google and a group of independent engineers in 2009.</p><h3>How popular is Angular?</h3><p>According to <a href="http://stackoverflow.com/research/developer-survey-2015">StackOverflow</a>, Angular was the 10th most popular technology of 2015.</p><h3>Who uses Angular?</h3><p>Angular has become very popular since its release and can be seen in use on several high exposure websites including NBA.com, Google, NBC, Sprint and Ford.com.</p><h3>How can I become an Angular contributor?</h3><p>Check out their presence on <a href="https://github.com/angular/angular.js" target="_blank">GitHub</a>, take a look at their <a href="https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md" target="_blank">Guidelines</a> and start coding!</p>',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Angular Developers",
      caption: "X-Team is a development company of motivated Angular programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Angular developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Angular developers now',
          title: 'Hire Angular developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Angular",
      hasFed: true,
      devs: [
        {
          pic: "wojtek.jpg",
          name: "Wojtek Zajac",
          link: "http://wojtekzajac.com/",
          news: [
            {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."},
            {badge: 'react', status: 'completed', label: " ReactJS and Flux&quot; course on udemy.com"},
            {badge: 'react', status: 'attended', label: " ReactRally 2016 in Salt Lake City."}
          ]
        },
        {
          pic: "nadeem.jpg",
          name: "Nadeem Khedr",
          link: "http://nadeemkhedr.com/",
          news: [
            {badge: 'react', status: 'completed', label: " Using Webpack for Production JavaScript Applications; course on Egghead."},
            {badge: 'conference', status: 'published', label: " An emacs tips blog post for getting started with emacs."},
            {badge: 'code', status: 'completed', label: " Getting Started with Redux; Egghead course by Dan Abramov."}
          ]
        },
        {
          pic: "pawel.jpg",
          name: "Pawel Chojnacki",
          news: [
            {badge: 'course', status: 'completed', label: " the official self-paced Docker Training from Docker."},
            {badge: 'code', status: 'submitted a pull request to', label: " Redux Test Recorder open source project."},
            {badge: 'course', status: 'read', label: " Clojure for the Brave and True book AND attended EuroClojure conf."}
          ]
        }
      ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Angular Developers Now',
        title: 'Hire Angular developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Angular",
      posts: [
        {
          title: 'Performant Angular with Redux and Immutable',
          link: 'https://x-team.com/blog/performant-angular-with-redux-and-immutable/',
          text: 'The angular JS framework has become ubiquitous in the front end world. And with good reason. It allows you to abstract concepts such as rendering, it helps you manage dependencies and modules (which, granted, has become almost a drawback in this post ES6 world), and makes it easy to built all but the most involved of components.'
        },
        {
          title: 'Nested controllers, ngInclude & $scope',
          link: 'https://x-team.com/blog/nested-controllers-nginclude-scope/',
          text: 'When working with AngularJS, $scope will have a pivotal role in your work and when starting out you might run into roadbumps unless you have a rough idea about how to work with it. I’ll aim to explain a couple issues about $scope and ngInclude that I’ve run into.'
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'front-end'},
        {skill: 'javascript'},
        {skill: 'react'}
      ],
    },
    LandingCta: {
      tech: "Angular",
      ctaAnchor: "Hire Angular Developers",
      ctaTitle: "Hire Angular Developers",
    },
  },

  /* Hire Backend Dev Page */
  backend: {
    tech: "Back-End",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Back-End Developers",
      caption: "X-Team is a development company of motivated Back-End programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Back-End developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Back-End developers now',
          title: 'Hire Back-End developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Back-End",
      hasFed: true,
      devs: [
        {
          pic: "diego_seghezzo.jpg",
          name: "Diego Seghezzo",
          link: "https://github.com/diegoseghezzo",
          news: [
            {badge: 'course', status: 'completed', label: " Week #5 of MongoDB's University Course."},
            {badge: 'code', status: 'created', label: " A Drupal 8 app at a FOX hackathon in Los Angeles."},
            {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."}
          ]
        },
        {
          pic: "jedrzej.jpg",
          name: "Jedrzej Kurylo",
          link: "https://github.com/jedrzej",
          news: [
            {badge: 'conference', status: 'attended', label: " Dutch PHP Conference in Amsterdam."},
            {badge: 'code', status: 'reached', label: " 14,000 reputation points on StackOverflow."},
            {badge: 'conference', status: 'attended', label: " You Gotta Love Front-end Conference in Tel Aviv."}
          ]
        },
        {
          pic: "ben.jpg",
          name: "Ben Ferreira",
          link: "https://medium.com/@benf86",
          news: [
            {badge: 'code', status: 'created a', label: " Serverless CRUD REST API in AWS Lambda and AWS API Gateway."},
            {badge: 'react', status: 'finished', label: " Building React Applications with Idiomatic Redux&quot; course on Egghead."},
            {badge: 'conference', status: 'attended', label: "X-Outpost: Thailand with 6 other X-Teamers."}
          ]
        }
      ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Back-End Developers Now',
        title: 'Hire Back-End developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Back-End",
      posts: [
        {
          title: "How To Create a Ruby API with Sinatra",
          link: 'https://x-team.com/blog/how-to-create-a-ruby-api-with-sinatra/',
          text: "These days, every company needs some kind of web API. It’s not just for people who want to open their platforms to developers anymore. With the rise of Javascript SPA (Single Page Application) frameworks like AngularJS, Ember.js or React, software companies need to build internal web APIs for themselves too."
        },
        {
          title: 'How JSON-API Can Help Teams Work Together',
          link: 'https://x-team.com/blog/json-api-can-help-teams-work-together/',
          text: 'The following tutorial contains an overview of Material Design UI components with example code for including and customising them in your application. All of them can be used independently from others, so you can treat every section as a reference guide.'
        },
        {
          title: 'How To Become an AWS Certified Solutions Architect',
          link: 'https://x-team.com/blog/become-aws-certified-solutions-architect/',
          text: 'If you are also thinking about becoming certified, this post will help you out. This certificate is intended to be verify someone’s skills and expertise in designing, deploying and operating applications and infrastructure on the AWS platform. Of course, having hands-on experience is the most crucial here, but I will also guide you through other resources that will prepare you for the exam.'
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'java'},
        {skill: 'php'},
        {skill: 'ruby'}
      ],
    },
    LandingCta: {
      tech: "Back-End",
      ctaAnchor: "Hire Back-End Developers",
      ctaTitle: "Hire Back-End Developers",
    },
  },

  /* Hire Django Dev Page */
  django: {
    tech: "Django",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Django Developers",
      caption: "X-Team is a development company of motivated Django programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Django developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Django developers now',
          title: 'Hire Django developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Django",
      hasFed: false,
      devs: [],
      button: {},
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: false,
      tech: "Django",
      posts: [],
    },
    Related: {
      RelSkills: [
        {skill: 'php'},
        {skill: 'ruby'},
        {skill: 'python'}
      ],
    },
    LandingCta: {
      tech: "Django",
      ctaAnchor: "Hire Django Developers",
      ctaTitle: "Hire Django Developers",
    },
  },

  /* Hire Drupal Dev Page */
  drupal: {
    tech: "Drupal",
    TextLanding: {
      hasText: false,
    },
    Hero: {
      title: "Hire Dedicated<br /> Drupal Developers",
      caption: "X-Team is a development company of motivated Drupal programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Drupal developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Drupal developers now',
          title: 'Hire Drupal developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Drupal",
      hasFed: true,
      devs: [
        {
          pic: "sven.jpg",
          name: "Sven Berg Ryen",
          link: "https://github.com/svenbergryen",
          news: [
            {badge: 'conference', status: 'gave a talk called', label: " Staging & Deployment of Content in Drupal 7; at DrupalCamp Oslo."},
            {badge: 'course', status: 'completed', label: " 4,000+ translations from English to Norwegian Bokål for Drupal 8."},
            {badge: 'code', status: 'contributed to (and maintains)', label: " EU Cookie Compliance module for Drupal 7"}
          ]
        },
        {
          pic: "diego_seghezzo.jpg",
          name: "Diego Seghezzo",
          link: "https://github.com/diegoseghezzo",
          news: [
            {badge: 'course', status: 'completed', label: " Week #5 of MongoDB's University Course."},
            {badge: 'code', status: 'created', label: " A Drupal 8 app at a FOX hackathon in Los Angeles."},
            {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."}
          ]
        }
  	  ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Drupal Developers Now',
        title: 'Hire Drupal developers',
        big: true,
        style: 'red'
      }
    },
    DevQuotes: {
      hasQuotes: true,
      quotes: [
        {text: 'Drupal is suitable for building enterprise level web applications that also need a content management system. Support for Drupal is massive: IRC, StackOverflow, Drupal forums, meetups, DrupalCamps, DrupalCon, etc. Drupal is a nice balance between a CMS and a framework and is incredibly scalable. Drupal even has enterprise level security​. With thousands of amazing contributed modules, building a complex web application is simple. Not to mention that Drupal has good support on some of the leading open source performance solutions like Varnish, Memcache, ApacheSolr, CDN, ElasticSearch, MongoDB, and Redis. Having the Views module makes Drupal way more powerful than other content management frameworks.', author: 'GERALD VILLORENTE'},
        {text: 'Drupal is a great CMS in terms of organizing and administrating content. It is a robust platform that provides the necessary tools for non-technical people to maintain a very complex website.', author: 'DIEGO SEGHEZZO'},
        {text: 'Drupal is the most maintained and updated CMS/CMF with massive community. It makes it easy to quickly build a scalable site and flexible enough to handle any requirements.', author: 'PRATOMO ARDIANTO'},
      ],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Drupal",
      posts: [
        {
          title: "Extending Drupal 7 Autocomplete Fields' Output",
          link: 'https://x-team.com/blog/extending-drupal-7-autocomplete-fields-output/',
          text: "Drupal 7 autocomplete field is something most content producers love. It’s an easy and convenient way to reference content by title. The problem is, that’s all you get from an autocomplete field: a title."
        },
        {
          title: 'Drupal 8: Finally Ready for Production',
          link: 'https://x-team.com/blog/drupal-8-finally-ready-production/',
          text: 'It’s been awhile since Drupal 8 was first ready to try out. But even since then, I was checking out news, reading updated docs, working on my Drupal 7 projects… still waiting for something real. And it finally happened – during the keynote at DrupalCon Barcelona, Dries announced the first D8 release candidate and basically confirmed that it’s now ready for production sites!'
        },
        {
          title: 'Drupalwood: Why You Should Attend a DrupalCon',
          link: 'https://x-team.com/blog/drupalwood-attend-drupalcon/',
          text: 'Time flies – it’s already summer, and I hope yours is going well! Seems like just yesterday I was at DrupalCon in Los Angeles, the famous city of movie-making – to make it sound more like a dream… at least my own dream, one that was made true. Because part of our team was invited to LA by an extraordinary company – X-Team.'
        },
        {
          title: 'Deep Dive into the Anatomy of Drupal 8 Theming',
          link: 'https://x-team.com/blog/deep-dive-anatomy-drupal-8-theming/',
          text: "Drupal 8 is the most advanced Drupal ever built and it will surely will be a game changer among other CMSes out there. Part of its strength comes from adopting the principles from other technologies like Symfony, YAML, Twig, and Backbone.js."
        }
      ]
    },
    Related: {
      RelSkills: [
        {skill: 'backend'},
        {skill: 'php'},
        {skill: 'wordpress'}
      ],
    },
  },

  /* Hire Flask Dev Page */
  flask: {
    tech: "Flask",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Flask Developers",
      caption: "X-Team is a development company of motivated Flask programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Flask developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Flask developers now',
          title: 'Hire Flask developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Flask",
      hasFed: false,
      devs: [],
      button: {},
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: false,
      tech: "Flask",
      posts: [],
    },
    Related: {
      RelSkills: [
        {skill: 'django'},
        {skill: 'ruby'},
        {skill: 'python'}
      ],
    },
    LandingCta: {
      tech: "Flask",
      ctaAnchor: "Hire Flask Developers",
      ctaTitle: "Hire Flask Developers",
    },
  },

  /* Hire Front Dev Page */
  front: {
    tech: "Front",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Front Developers",
      caption: "X-Team is a development company of motivated Front programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Front developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Front developers now',
          title: 'Hire Front developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Front",
      hasFed: true,
      devs: [
        {
          pic: "michal_nawrot.jpg",
          name: "Michal Nawrot",
          link: "https://github.com/desiter",
          news: [
            {badge: 'react', status: 'created', label: "A React Native app that helps discover nearby places to go to."},
            {badge: 'course', status: 'completed', label: "&quot;Creating a fault tolerant site&quot; chapter of the AWS Cloud Guru course."},
            {badge: 'react', status: 'attended', label: "ReactEurope in Paris with 10 other X-Teamers."}
          ]
        },
        {
          pic: "andrew.jpg",
          name: "Andrew Stratu",
          link: "https://github.com/avantgardian",
          news: [
            {badge: 'course', status: 'completed', label: "&quot;Advanced SVG Animation&quot; course on FrontEndMasters.com"},
            {badge: 'conference', status: 'attended', label: "SmashingConf in Barcelona with 15 other X-Teamers."},
            {badge: 'course', status: 'read', label: "&quot;SurviveJS - React&quot;, a top resource on mastering React."}
          ]
        },
        {
          pic: "szymon.jpg",
          name: "Szymon Michalak",
          link: "http://www.szymonmichalak.com/",
          news: [
            {badge: 'course', status: 'completed', label: "the Webpack course on Egghead."},
            {badge: 'conference', status: 'attended', label: "SmashingConf in Barcelona with 15 other X-Teamers."},
            {badge: 'course', status: 'read', label: "&quot;SurviveJS - React&quot;, a top resource on mastering React."}
          ]
        },
      ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Front Developers Now',
        title: 'Hire Front developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Front",
      posts: [
        {
          title: "Performant Angular with Redux and Immutable",
          link: 'https://x-team.com/blog/performant-angular-with-redux-and-immutable/',
          text: "The angular JS framework has become ubiquitous in the front end world. And with good reason. It allows you to abstract concepts such as rendering, it helps you manage dependencies and modules (which, granted, has become almost a drawback in this post ES6 world), and makes it easy to built all but the most involved of components. But frequently, as an application grows in size and complexity, we begin running into problems."
        },
        {
          title: "Nested controllers, ngInclude & $scope",
          link: 'https://x-team.com/blog/nested-controllers-nginclude-scope/',
          text: "When working with AngularJS, $scope will have a pivotal role in your work and when starting out you might run into roadbumps unless you have a rough idea about how to work with it. I’ll aim to explain a couple issues about $scope and ngInclude that I’ve run into."
        },
        {
          title: "X-periment: A React, Elm, and WebAssembly Story",
          link: 'https://x-team.com/blog/x-periment-a-react-elm-and-webassembly-story/',
          text: "X-Team recently held a round table discussion on the future of front-end web technologies, and one specific topic really stood out. With React.js being one of the current juggernauts of front-end development, can an up-and-coming technology like Elm hope to dethrone it? And what does WebAssembly have to do with all of this?"
        },
        {
          title: "Best React Tutorials: Curated By X-Team",
          link: 'https://x-team.com/blog/best-react-tutorials-curated-by-x-team/',
          text: "The angular JS framework has become ubiquitous in the front end world. And with good reason. It allows you to abstract concepts such as rendering, it helps you manage dependencies and modules (which, granted, has become almost a drawback in this post ES6 world), and makes it easy to built all but the most involved of components. But frequently, as an application grows in size and complexity, we begin running into problems."
        },
        {
          title: "Java UI Component on React Native",
          link: 'https://x-team.com/blog/java-ui-component-on-react-native/',
          text: "In this article, we will learn how to convert our Android Java View components to React Native. This is especially interesting, if we need to use a Java UI library or implement a custom View component in our React Native app."
        },
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'react'},
        {skill: 'angular'},
        {skill: 'javascript'}
      ],
    },
    LandingCta: {
      tech: "Front",
      ctaAnchor: "Hire Front Developers",
      ctaTitle: "Hire Front Developers",
    },
  },

  /* Hire Go Dev Page */
  go: {
    tech: "Go",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Go Developers",
      caption: "X-Team is a development company of motivated Go programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Go developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Go developers now',
          title: 'Hire Go developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Go",
      hasFed: false,
      devs: [],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Go Developers Now',
        title: 'Hire Go developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: false,
      tech: "Go",
      posts: [],
    },
    Related: {
      RelSkills: [
        {skill: 'django'},
        {skill: 'ruby'},
        {skill: 'python'}
      ],
    },
    LandingCta: {
      tech: "Go",
      ctaAnchor: "Hire Go Developers",
      ctaTitle: "Hire Go Developers",
    },
  },

  /* Hire Ionic Dev Page */
  ionic: {
    tech: "Ionic",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Ionic Developers",
      caption: "X-Team is a development company of motivated Ionic programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Ionic developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Ionic developers now',
          title: 'Hire Ionic developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Ionic",
      hasFed: false,
      devs: [],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Ionic Developers Now',
        title: 'Hire Ionic developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Ionic",
      posts: [
        {
          title: 'A Beginners Guide to Ionic 2 Mobile Applications',
          link: 'https://x-team.com/blog/beginners-guide-ionic-2-mobile-applications/',
          text: 'When it comes to mobile application development, there are many different routes you can choose. You can choose a native solution, using the Android SDK and Java or iOS with Objective-C, but in both these scenarios there is a multiple language requirement.'
        },
        {
          title: 'Jump-start an Ionic Prototype with Ionic Creator',
          link: 'https://x-team.com/blog/jump-start-an-ionic-prototype-with-ionic-creator/',
          text: 'Introduction In recent years, web technologies have gained a lot of terrain in the development community, greatly increasing the number of tools and frameworks available and hence, increasing the number of people interested in web development.'
        },
        {
          title: 'Include JavaScript Libraries in an Ionic 2 TypeScript Project',
          link: 'https://x-team.com/blog/include-javascript-libraries-in-an-ionic-2-typescript-project/',
          text: 'Angular 2 and Ionic 2 are very new developer frameworks. Although not as new, the TypeScript language has been getting a lot of attention as the recommended way to develop with Angular 2 and Ionic 2. TypeScript is a superset to JavaScript that turns it into a typed language.'
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'angular'},
        {skill: 'javascript'},
        {skill: 'react'}
      ],
    },
    LandingCta: {
      tech: "Ionic",
      ctaAnchor: "Hire Ionic Developers",
      ctaTitle: "Hire Ionic Developers",
    },
  },

  /* Hire Ios Dev Page */
  ios: {
    tech: "Ios",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Ios Developers",
      caption: "X-Team is a development company of motivated Ios programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Ios developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Ios developers now',
          title: 'Hire Ios developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Ios",
      hasFed: false,
      devs: [],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Ios Developers Now',
        title: 'Hire Ios developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Ios",
      posts: [
        {
          title: "How To Get Started With iOS Unit Tests in Swift",
          link: 'https://x-team.com/blog/how-to-get-started-with-ios-unit-tests-in-swift/',
          text: "Unit tests are awesome. They not only improve the overall quality of your code, they also make it easier for you to test individual pieces of your app without having to manually run your app. Given Apple's extensive support for unit tests in Xcode and Swift, it's surprising that so few iOS developers write unit tests. It is my hope that after completing this simple tutorial, you will see just how easy it to get started with unit tests in Swift."
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'mobile'},
        {skill: 'ionic'},
        {skill: 'android'}
      ],
    },
    LandingCta: {
      tech: "Ios",
      ctaAnchor: "Hire Ios Developers",
      ctaTitle: "Hire Ios Developers",
    },
  },

  /* Hire Java Dev Page */
  java: {
    tech: "Java",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Java Developers",
      caption: "X-Team is a development company of motivated Java programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Java developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Java developers now',
          title: 'Hire Java developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Java",
      hasFed: false,
      devs: [],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Java Developers Now',
        title: 'Hire Java developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Java",
      posts: [
        {
          title: "Using Optional to Transform Your Java Code",
          link: 'https://x-team.com/blog/using-optional-to-transform-your-java-code/',
          text: "Java doesn’t have pointers. So why does it have the Null Pointer Exception? Because Java really does have pointers: they’re “references.” References give us some of the power that pointers in C and C++ give us, such as passing large objects between modules without having to copy them, but at the same time not allowing some of the more common mistakes, such as using a pointer to an object X as a pointer to object Y."
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'django'},
        {skill: 'python'},
        {skill: 'ruby'}
      ],
    },
    LandingCta: {
      tech: "Java",
      ctaAnchor: "Hire Java Developers",
      ctaTitle: "Hire Java Developers",
    },
  },

  /* Hire Javascipt Dev Page */
  javascript: {
    tech: "Javascript",
    TextLanding: {
      hasText: true,
      text: '<h2></a>About Javascript</h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a> (not to be confused with Java) is a high-level programming language, which is one of the core technologies of the World Wide Web. It has been standardized in the ECMAScript specification, and it is natively supported by all modern web browsers.</p><p>Due to the part it plays in web programming, Javascript is one of the most prolific programming languages of all time. But programming for the web is not all it is used for. Over the years, it has also found a place in</p><ul><li>mobile development with <a href="https://facebook.github.io/react-native/">React Native</a></li><li>browser extension development for Chrome, Opera, Safari…</li><li>Apple Dashboard Widgets, Microsoft Gadgets, Yahoo! Widgets, Google Desktop Gadgets…</li><li>some NoSQL databases like <a href="https://www.mongodb.com/">MongoDB</a></li><li>PDF files with Adobe Acrobat and Adobe Reader</li><li>scripting for the Adobe Creative Suite, OpenOffice, LibreOffice, Unity…</li></ul><p>And this is not even an exhaustive list.</p><p>It is undeniable that Javascript has made a great impact, and it is still on the rise. <a href="http://githut.info/">Github statistics</a> show it to be the language with the most active repositories and total pushes, and with new standards being continuously developed and adopted (ES2015, ES2016, and the currently in-progress ES2017), Javascript is shaping up to be a strong contender for the place of the most versatile language of the future.</p><p>So, is Javascript the right thing for you?</p><h2><a id="The_Stack_19"></a>The Stack</h2><p>As mentioned before, Javascript can satisfy virtually all needs of a modern web application. The most commonly known Javascript stack is <a href="http://mean.io/">MEAN</a> — <a href="https://www.mongodb.com/">MongoDB</a>, <a href="https://expressjs.com/">Express</a>, <a href="https://angular.io/">AngularJS</a>, <a href="https://nodejs.org">Node.js</a> —, but there are, of course, many other options.</p><p>Our developers are highly proficient in several stack configurations, but the one that is most commonly requested by our clients and which has shown to have great potential and flexibility is:</p><h3><a id="Backend_mdash_Nodejs__Express_25"></a>Back-end — Node.js + Express</h3><p>Node.js is a Javasript runtime based on Chrome’s V8 Javascript Engine, which brings Javascript from the browser to the server. It is event-driven and non-blocking. Node.js, does not support threads, but can make use of multiple processors by spawning child processes and with its clustering support.</p><p>It is most commonly used with Express, which is a fast and efficient routing solution with an incredible number of existing middlewares for just about anything you might ever need to include in your application.</p><h3><a id="Frontend_mdash_React__Redux_31"></a>Front-end — React + Redux</h3><p>React is a Javascript library created by Facebook, which is used for building graphical user interfaces for the web. It takes the place of the <em>V</em> — View — in the common Model-View-Controller pattern, and can work very well combined with the Redux state manager, or even coupled with a front-end framework like AngularJS.</p><h3><a id="Mobile_mdash_React_Native_35"></a>Mobile — React Native</h3><p>React Native is a way for building full-fledged mobile apps in Javascript. It works on both Android devices and iPhones, and even offers some benefits over platform-native languages, like absence of constant recompiling of code, instant reloading, and hot reloading which includes new code but preserves the current state in the application. While not perfect for applications that require every last atom of device power for maximum performance, like power-hungry games, it is well-suited for most common uses.</p><h3><a id="Database_mdash_MongoDB_39"></a>Database — MongoDB</h3><p>MongoDB is a NoSQL database system that uses JSON-like documents with schemas. Javascript can be used in its queries, which, together with the document format, means that it plays very well with any Javascript application. MongoDB can run over multiple servers, as it uses sharding for horizontal load balancing, and has built-in replication systems, which provide automatic fall-back to replicas in case of primary source failure.</p><h2><a id="Technology_43"></a>Technology</h2><h3><a id="Main_differences_from_other_languages_45"></a>Main differences from other languages</h3><h4><a id="Prototypal_inheritance_47"></a>Prototypal inheritance</h4><p>While the ES2015 standard brought the <code>class</code> keyword to Javascript, these classes are not an implementation of the classical inheritance, but rather just syntactic sugar for Javascript’s actual inheritance model — prototypal inheritance.</p><p>Simply put, prototypal inheritance differs from classical inheritance in the sense that while classical inheritance uses “blueprints”, i.e. classes, from which objects are instantiated, in prototypal inheritance, such blueprints do not exists. In Javascript, objects inherit directly from other objects, which thus become <em>prototypes</em> of the former.</p><p>This also means that Javascript uses prototype chains instead of extended classes, and that it does not support multiple inheritance at the same hierarchical level of the parent. A very common pattern to achieve most benefits of multiple inheritance while avoiding some pitfalls thereof, however, is concatenative inheritance.</p><h4><a id="Functional_55"></a>Functional</h4><p>Javascript is a multi-paradigm language. It can be used to write both Object-Oriented or Functional code. This is possible because functions are 1st class citizens in Javascript, which means they can be used and passed around as any other value could be. This is aided by the concepts of lexical scope and lexical closures, which enable internal function state preservation even after execution of the outer scope(s) finishes.</p><h4><a id="Asynchronous_59"></a>Asynchronous</h4><p>Where most other mainstream languages rely on multi-threading, Javascript instead relies on the internal Event-Loop and uses web workers and child processes to make use of multiprocessor systems. This allows Javascript to avoid many common problems arising from bad thread handling without major performance sacrifice. The asynchronicity also prevents IO-blocking, which is especially crucial in web browsers, where a blocked UI thread could completely ruin the UX.</p><h4><a id="Variadic_functions_63"></a>Variadic functions</h4><p>Where most languages demand one specify the exact number and often type of function parameters, Javascript allows for passing a smaller or greater number of parameters to functions than explicitly specified. This is highly useful when needing to “pre-load” a function with e.g. just the first two parameters, which binds back to Functional Programming concepts.</p><h2><a id="Conclusion_67"></a>Conclusion</h2><p>Javascript is one of the most widespread programming languages on the planet and will definitely remain so for quite some time. With its domination of the web and rising popularity in mobile development, we would be remiss to not advise you to take it under serious consideration as the language for your project. Our Javascript experts will be happy to talk to you and are certain to alleviate your doubts about it, as they are veterans honed by “Javascripting” at household names like Fox, Twitter, Riot Games etc.</p><p>We are looking forward to helping you bridge the gap between your plans and the future reality, so do not hesitate and let us know, how we can be of assistance!</p><br/><div class="text__item"><h2>Guide to JavaScript Interviewing</h2><p>It’s the 21st century and web users expect full-featured, responsive web applications with intuitive interfaces.</p><p>JavaScript helps you create such web applications.</p><p>But how?</p><p>Generally, great products are made of good code and good code is written by good developers.</p><p>So, one sure way to create a great product is to hire a good developer.</p><p>However, identifying a good developer amongst a pool of job applicants can be taxing.</p><p>Whether you’re looking to hire a front-end designer, a node.js back-end engineer or a full-stack JavaScript generalist, this guide contains interview techniques that can help you do just that.</p><p>Good coding relies on more than just the knowledge of a language syntax. You need someone who can turn your wildest dreams into reality, bring new ideas to the table and create stuff people love.</p><p>How can you tell this about a stranger by spending 20-30 minutes with them in a conference room or on Skype?</p><h3>1. Explore their JavaScript Expertise</h3><p>Rather than testing the applicant’s general coding knowledge, you should focus on their JavaScript chops.</p><p>This helps you judge their abilities.</p><p>Here’s a quick way to explore:</p><p>Ask a simple JavaScript-related question.</p><p>Based on the answer, ask a slightly more detailed one, and continue digging in until you reach the candidate’s limit.</p><p>Nevertheless, if an applicant has good general experience beyond JS, that’s even better.</p><h3>2. Get Them to Critique Something</h3><p>After testing their JavaScript expertise, go a step further to get them to review something—especially a JavaScript-based technology.</p><p>Here, you should look to see if:</p><p>They get the method signature right</p><p>Their algorithm is reasonable</p><p>They can explain its workings</p><p>They can give some pointers for improvement</p><p>They can find common line-break issues and so on.</p><h3>3. Ask Them to Perform a Quick Task</h3><p>But when doing this, be careful. The task shouldn’t necessarily be about solving some puzzles or problems.</p><p>It’s better to judge using functional code as opposed to abstract modular puzzles with no connection to the actual job in question.</p><p>The task should be simple, but practicable in relation to the job.</p><p>Whatever it is, don’t ask the candidate to write a code on paper or whiteboard.</p><p>The traditional whiteboard coding exercise is a poor indicator of actual coding prowess and a terrible strategy for recruiting devs.</p><p>People don’t write code on paper or whiteboard, they do it with computers using macros, context-sensitive help, auto-completion, and indexed API documentation.</p><p>If you think it’ll take time for candidates to create something during the interview, then it might make sense to ask them to do so before the interview and bring the code on a notebook PC.</p><p>But even then, do not rely totally on the code example. Instead, follow point #4 below to boot.</p><h3>4. Ask to See Their Work</h3><p>Most applicants will come prepared for point #3 above—performing a quick task.</p><p>And if you base your final judgment on how awesome they were at that, you might end up hiring an incompetent developer.</p><p>So before or after the interview, take a few moments to look into the candidate’s code portfolio. It could be open-source or hobby projects.</p><p>Review and discuss the design, coding style, and decisions that went into it.</p><p>If you like the projects, ask the specific features and functionalities the applicant created.</p><p>For example, did the person create the product from scratch or started working on existing code?</p><p>Looking at actual code tells you much more than having candidates write rushed-over, contrived five-liners they already crammed.</p><p>It tells if someone is good realistically, and not just at the interview.</p><h3>Wrapping up</h3><p>To wrap up, here are a few hints to help you even more:</p><p>To identify a good JavaScript developer, you have to know JavaScript yourself and know what questions to ask. Otherwise, you won’t understand what applicants present and may end up embarrassing yourself. I recommend getting help from someone who knows JavaScript.</p><p> Developers aren’t all the same. A reasonable question depends on the candidate’s expertness.</p><p>Discourse is important. So, find a way to engage a conversation.</p><p>Finally, the developer’s personality is just as important as their professionalism, because one bad dude can destroy an entire team forever.</p></div>',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Javascipt Developers",
      caption: "X-Team is a development company of motivated Javascipt programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Javascipt developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Javascipt developers now',
          title: 'Hire Javascript developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Javascript",
      hasFed: true,
      devs: [
        {
          pic: "andrew.jpg",
          name: "Andrew Stratu",
          link: "https://github.com/avantgardian",
          news: [
            {badge: 'course', status: 'completed', label: " Advanced SVG Animation course on FrontEndMasters.com"},
            {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."},
            {badge: 'course', status: 'read', label: " SurviveJS - React, a top resource on mastering React."}
          ]
        },
        {
          pic: "gianluca.jpg",
          name: "Gianluca Esposito",
          link: "https://github.com/gesposito",
          news: [
            {badge: 'course', status: 'completed', label: " Building React Applications with Idiomatic Redux; course on Egghead."},
            {badge: 'conference', status: 'attended', label: " ReactEurope in Paris with 10 other X-Teamers."},
            {badge: 'code', status: 'submitted', label: " a pull request to GatsbyJS, a React static site generator."}
          ]
        },
        {
          pic: "szymon.jpg",
          name: "Szymon Michalak",
          link: "http://www.szymonmichalak.com/",
          news: [
            {badge: 'course', status: 'completed', label: " the Webpack course on Egghead."},
            {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."},
            {badge: 'course', status: 'read', label: " SurviveJS - React, a top resource on mastering React."}
          ]
        },
      ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Javascipt Developers Now',
        title: 'Hire Javascipt developers',
        big: true,
        style: 'red'
      }
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Javascipt",
      posts: [
        {
          title: "JavaScript Trends to Watch in 2017",
          link: 'https://x-team.com/blog/javascript-trends-to-watch-in-2017/',
          text: "Redux creator Dan Abramov asked his massive audience of JS devs on Twitter what the most interesting things in the JS world are. I condensed the huge list of responses to the most popular ones here. It's a very interesting look into the future of JS over the next year."
        },
        {
          title: 'Reactive Programming with Cycle.js',
          link: 'https://x-team.com/blog/reactive-programming-cycle-js/',
          text: 'The following tutorial contains an overview of Material Design UI components with example code for including and customising them in your application. All of them can be used independently from others, so you can treat every section as a reference guide.'
        },
        {
          title: 'Introduction to ReactiveX on Android',
          link: 'https://x-team.com/blog/introduction-reactivex-android/',
          text: 'Reactive programming is the new cool kid in JavaScript town. The simple premise of reacting to changing environment is met with beauty of functional programming. Despite its popularity there aren’t many examples on how to apply it in everyday work.'
        },
        {
          title: 'Include JavaScript Libraries in an Ionic 2 TypeScript Project',
          link: 'https://x-team.com/blog/include-javascript-libraries-in-an-ionic-2-typescript-project/',
          text: "Angular 2 and Ionic 2 are very new developer frameworks. Although not as new, the TypeScript language has been getting a lot of attention as the recommended way to develop with Angular 2 and Ionic 2. TypeScript is a superset to JavaScript that turns it into a typed language. Code is written as TypeScript and then compiled into JavaScript."
        },
        {
          title: 'Setting Up JavaScript Testing Tools for ES6',
          link: 'https://x-team.com/blog/setting-up-javascript-testing-tools-for-es6/',
          text: "Using ES6 (and even far future versions like ES7!) is becoming very easy these days – just set up Babel, and you’re off to the races. If you’re only writing code for NodeJS, you might even get away without Babel, as the native ES6 support is getting very good."
        }
      ]
    },
    Related: {
      RelSkills: [
        {skill: 'react'},
        {skill: 'node'},
        {skill: 'angular'}
      ],
    },
    LandingCta: {
      tech: "Javascript",
      ctaAnchor: "Hire Javascript Developers",
      ctaTitle: "Hire Javascript Developers",
    },
  },

  /* Hire Django Laravel Page */
  laravel: {
    tech: "Laravel",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Laravel Developers",
      caption: "X-Team is a development company of motivated Laravel programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Laravel developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Laravel developers now',
          title: 'Hire Laravel developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Laravel",
      hasFed: true,
      devs: [
        {
          pic: "rubens.jpg",
          name: "Rubens Mariuzzo",
          link: "https://github.com/rmariuzzo",
          news: [
            {badge: 'course', status: 'completed', label: "the AWS Certified Solutions Architect course."},
            {badge: 'code', status: 'created', label: "&quot;Laravel JS Localization&quot; package and published it on Github."},
            {badge: 'code', status: 'created', label: "a plugin for Webpack and published it on Github."}
          ]
        },
        {
          pic: "jedrzej.jpg",
          name: "Jedrzej Kurylo",
          link: "https://github.com/jedrzej",
          news: [
            {badge: 'conference', status: 'attended', label: "Dutch PHP Conference in Amsterdam."},
            {badge: 'code', status: 'reached', label: "14,000 reputation points on StackOverflow."},
            {badge: 'conference', status: 'attended', label: "You Gotta Love Front-end Conference in Tel Aviv."}
          ]
        }
      ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Laravel Developers Now',
        title: 'Hire Laravel Developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: true,
      quotes: [
        {text: 'Laravel is a modern and robust framework for web development. It took some of the best features from other frameworks, such as expressiveness, simplicity and readability, and it comes bundled with a set of functionalities that facilitate common tasks like notifications, data migration, jobs and more. Be it as a solo-developer or in a team, Laravel is always a pleasure to work with, as it really helps you focus on the features that will make the app unique.', author: 'RUBENS MARIUZZO'},
      ],
    },
    CurrentPosts: {
      hasPosts: false,
      tech: "Laravel",
      posts: [],
    },
    Related: {
      RelSkills: [
        {skill: 'backend'},
        {skill: 'php'},
        {skill: 'wordpress'}
      ],
    },
    LandingCta: {
      tech: "Laravel",
      ctaAnchor: "Hire Laravel Developers",
      ctaTitle: "Hire Laravel Developers",
    },
  },

  /* Hire Mobile Dev Page */
  mobile: {
    tech: "Mobile",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Mobile Developers",
      caption: "X-Team is a development company of motivated Mobile programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Mobile developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Mobile developers now',
          title: 'Hire Mobile developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Mobile",
      hasFed: false,
      devs: [],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Mobile developers',
        title: 'Hire Mobile developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Mobile",
      posts: [
        {
          title: 'A Beginners Guide to Ionic 2 Mobile Applications',
          link: 'https://x-team.com/blog/beginners-guide-ionic-2-mobile-applications/',
          text: 'When it comes to mobile application development, there are many different routes you can choose. You can choose a native solution, using the Android SDK and Java or iOS with Objective-C, but in both these scenarios there is a multiple language requirement.'
        },
        {
          title: 'Jump-start an Ionic Prototype with Ionic Creator',
          link: 'https://x-team.com/blog/jump-start-an-ionic-prototype-with-ionic-creator/',
          text: 'Introduction In recent years, web technologies have gained a lot of terrain in the development community, greatly increasing the number of tools and frameworks available and hence, increasing the number of people interested in web development.'
        },
        {
          title: "How To Get Started With iOS Unit Tests in Swift",
          link: 'https://x-team.com/blog/how-to-get-started-with-ios-unit-tests-in-swift/',
          text: "Unit tests are awesome. They not only improve the overall quality of your code, they also make it easier for you to test individual pieces of your app without having to manually run your app. Given Apple's extensive support for unit tests in Xcode and Swift, it's surprising that so few iOS developers write unit tests. It is my hope that after completing this simple tutorial, you will see just how easy it to get started with unit tests in Swift."
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'ionic'},
        {skill: 'ios'},
        {skill: 'android'}
      ],
    },
    LandingCta: {
      tech: "Mobile",
      ctaAnchor: "Hire Mobile Developers",
      ctaTitle: "Hire Mobile Developers",
    },
  },

  /* Hire Node Dev Page */
  node: {
    tech: "Node",
    TextLanding: {
      hasText: true,
      text: '<h2></a>About Node.js</h2><p>Node.js is an open-source, cross-platform JavaScript runtime environment for server-side execution of JavaScript code, which uses the Chrome V8 JavaScript engine.</p><p>Put simply, while, in the old days, JavaScript used to be limited to browsers, with Node.js, it can be used to write stand-alone programs that run on the servers as well and use the same JavaScript engine Google uses for Chrome, which supports many of the latest language developments.</p><p>Node.js has been around since 2009 and has since grown into a major player that supports Linux, OSX, and Windows environments, has its own package manager, and which has, through rapid growth, since reached major version 7 (current) or 6 (LTS).</p><p>It would be remiss to not mention the fact that Node.js is used by everyone, from the solo programmer, working on their pet project, to a megacorporation, which is building a system that will serve millions of users.</p><p>Node.js can thus be used in all kinds of projects. Be it a tiny microservice or a giant monolithic server, it can do it all.</p><p>There is no doubt that Node.js is an extremely versatile piece of technology. It has a huge following, a gigantic set of existing libraries, and it is very easy to setup and run in both a “traditional” server environment or with specialized containerized continuous integration systems.</p><p>But that is not all. One of its most important bonuses is that it is just “plain old JavaScript”. This means that if you hire a dedicated node developer and then decide to have them learn front-end work as well, they will only have to learn the front-end library/framework stack, while the programming language stays the same — JavaScript. This alone can save you a significant amount of time and money, and this also means that your dedicated front-end JavaScript engineers can, in a pinch, help out on the back-end as well.</p><h2>Technology</h2><h3>General description</h3><p>Node.js is an asynchronous event driven Javascript runtime. As such, it does not employ the nowadays more common concurrency model with threads. The Node.js approach prevents many development headaches usually caused by threading, however. Node.js processess never block, which makes scalability easier. This, however, does not mean that your multi-core processor is going to have to stay idle, as it is possible to <a href="https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options">spawn child processes</a>, which can communicate through an easy-to-use API. Together with the <a href="https://nodejs.org/api/cluster.html">cluster</a> module, it is well-prepared for load-balancing over several cores.</p><p>Node.js took the concepts of Ruby’s <a href="http://rubyeventmachine.com/">Event Machine</a> and Python’s <a href="http://twistedmatrix.com/">Twisted</a> even further. It relies on an <a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/">event loop</a>, which is entered after input script execution, exited after the last callback has been performed, and which generally behaves like the one in browsers, i.e. it is hidden from the user.</p><p>The whole runtime was built with HTTP efficiency in mind, which makes it a perfect candidate for web libraries and/or frameworks.</p><h3>Versions</h3><p>There are apps that run on several major versions of Node.js currently in production, the latest LTS version at the time of this writing being version 6.10.2, the current version 7.9.0, and v8.0.0 nightlies are available.</p><p>Version 6.10.2 LTS, has 99% support for features of ES2015 and 100% support for features of ES2016, though it lags a bit in ES2017 features, of which it only covers 23%.</p><p>The current version 7.9.0, however, covers 99% of ES2015, 100% of ES2016, and 54% of ES2017 features.</p><p>The version 8.0.0 nightlies raise the stakes even more to 65% of ES2017 features. Due to this being a development branch, it is not yet suited for production use.</p><p>You can check <a href="http://node.green">node.green</a> for latest information on support of the various ES standards.</p><h3>Project and Package Management</h3><p>Node.js has its own package management system — <a href="https://www.npmjs.com/">npm</a> — which is, at this point, the world’s largest software registry, as well as one of the CLI tools for managing javascript packages. An alternative CLI interface to the npm registry is <a href="https://yarnpkg.com/">yarn</a>.</p><p>Npm and yarn use different file management philosophies but are compatible with each other, as both use the Node.js project configuration file <em>package.json</em>, which records project metadata, dependencies, scripts etc.</p><h2>Conclusion</h2><p>All these are reasons why we simply must recommend that you give Node.js some serious consideration. And once you decide it is the right choice for your needs, our Node.js programmers will be more than happy to assist you in fulfilling them in all stages — from planning to final sign-off.</p>',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Node Developers",
      caption: "X-Team is a development company of motivated Node programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Node developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Node developers now',
          title: 'Hire Node developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Node",
      hasFed: true,
      devs: [
        {
          pic: "slawek.jpg",
          name: "Slawek Kolodziej",
          link: "https://github.com/slawekkolodziej",
          news: [
            {badge: 'docker', status: 'completed', label: " the Docker For DevOps course on A Cloud Guru."},
            {badge: 'conference', status: 'gave a talk called', label: " Tools to make your product less exposed to risk; at PHPers Silesia."},
            {badge: 'code', status: 'published on Github', label: " a un ique bundled version of vim called Vimrc."}
          ]
        },
        {
          pic: "michal_nawrot.jpg",
          name: "Michal Nawrot",
          link: "https://github.com/desiter",
          news: [
            {badge: 'react', status: 'created', label: " A React Native app that helps discover nearby places to go to."},
            {badge: 'course', status: 'completed', label: " Creating a fault tolerant site chapter of the AWS Cloud Guru course."},
            {badge: 'react', status: 'attended', label: " ReactEurope in Paris with 10 other X-Teamers."}
          ]
        },
        {
          pic: "kelvin.jpg",
          name: "Kelvin de Moya",
          link: "https://github.com/kdemoya",
          news: [
            {badge: 'react', status: 'submitted a pull request', label: " to the React Native repo on Github."},
            {badge: 'conference', status: 'gave a talk called', label: " Redux and the Modern Web; at a university."},
            {badge: 'course', status: 'completed', label: " Two pair programming sessions with fellow X-Teamers."}
          ]
        }
      ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Node developers',
        title: 'Hire Node developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Node",
      posts: [
        {
          title: 'File System Permissions and Umask in Node.js',
          link: 'https://x-team.com/blog/file-system-permissions-umask-node-js/',
          text: 'Working as a developer sometimes requires more knowledge than just of programming itself. It’s always a good idea to grasp some concepts from other IT fields as well. One of these concepts are file system permissions, proper management of which is a must when it comes to working with files, eg. using node.js fs module.'
        },
        {
          title: 'Xplorers: A deep-dive into mkdirp',
          link: 'https://x-team.com/blog/xplorers-mkdirp/',
          text: 'Greetings adventurer! In today’s expedition we’re going to pick a popular nodejs library and dive into its depths to see what we can find. If this all goes to plan we’ll come away not only understanding the internal workings of a commonly-used module, we’ll also discover some interesting patterns and techniques along the way.'
        },
        {
          title: 'Reflecting on nodeconf 2013',
          link: 'https://x-team.com/blog/reflecting-on-nodeconf-2013/',
          text: 'Ever since I heard about the whole node-at-a-summercamp thing, I dreamed of going. And what a fun few days it was.How to get inspired: hang around a lot of people who are all excited about something.'
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'backend'},
        {skill: 'javascript'},
        {skill: 'php'}
      ],
    },
    LandingCta: {
      tech: "Node",
      ctaAnchor: "Hire Node Developers",
      ctaTitle: "Hire Node Developers",
    },
  },

  /* Hire PHP Dev Page */
  php: {
    tech: "Php",
    TextLanding: {
      hasText: true,
      text: '<h2>About PHP</h2><p><a href="http://php.net">PHP</a> is a general-purpose, server-side scripting language, the relative simplicity and versatility of which, at the time, has arguably been one of the main reasons for the boom of web development as we know it today.</p><p>First appearing in 1994, PHP — recursively short for <em>PHP: Hypertext Preprocessor</em> — now powers innumerable websites, from the smallest blogs to some of the most popular web services in the world.</p><p>While, once upon a time, PHP may have been criticized by some programmers, the current version (stable version 7.1.4) has an incredible improvement over those times, and PHP has grown into a language that can easily compete with others, like Javascript or Ruby, for back-end supremacy. Its frameworks provide good front-end support as well.</p><p>PHP was originally used embedded in HTML, but, nowadays, it is mostly used in the form of (frameworks). It is the <a href="http://githut.info/">4th</a> most active repository programming language on <a href="https://www.github.com">Github</a>, trailing only Javascript, Java, and Python, and, as such, it offers a very wide selection of pre-made libraries you might need for your project. The most important players, however, are PHP Frameworks:</p><h2>Popular frameworks</h2><h3>Wordpress</h3><p>If you have ever read a private blog, there is a good chance it was hosted on the <a href="https://wordpress.org/">Wordpress</a> platform. It is an open-source framework you can use to create a website, blog, or app, with thousands of plugins, themes, extensions, etc. It offers easy installation and configuration and is a great starting point, especially for those that place a higher value on development speed than a solution 100% tailor-made for their use-case.</p><h3>Symfony</h3><p><a href="http://symfony.com">Symfony</a> is a high-performance PHP framework and a set of PHP Components at once. The Symfony philosophy places a high value on best practices, standardization, and interoperability of applications, along with developer satisfaction, which means that building applications with Symfony is a fast and architecturally well-tested process, which offers the best of both worlds — speed <em>and</em> a highly-customized solution for your needs.</p><h3>Laravel</h3><p><a href="https://laravel.com/">Laravel</a> is a “PHP Framework for Web Artisans” and thus places great value on beautiful code. One of its core design points are Bundles, which are a modular packaging system that makes Laravel the best choice for those that want a completely bespoke solution, though at the price of a slightly slower development speed than e.g. Symfony offers.</p><h2>The Stack</h2><p>PHP has historically been found most commonly in the LAMP Stack (Linux, Apache, MySQL, PHP), but, nowadays, it is completely platform-, server-, and database-independent. It can be used to write RESTful servers, which pull data from NoSQL databases and forward them to Javascript-framework-based front-ends, or to write full-stack PHP applications built on top of a PostgreSQL database, using the framework’s own templating engine.</p><h2>Technology</h2><p>PHP is a scripting language that can be used with a stand-alone interpreter or embedded into HTML and served through a web server with the appropriate PHP module — common choices being <a href="https://www.apache.org/">Apache</a> and <a href="https://www.nginx.org/">Nginx</a>.</p><p>When used embedded in HTML, the PHP interpreter will only process the PHP code within the PHP delimiters (most commonly <code>&lt;?php ?&gt;</code>).</p><p>In the last two major versions (5 and 7, 6 was skipped), PHP has added type declaration support to the language for:</p><ul><li>5.0 — classes and interfaces,</li><li>5.1 — arrays,</li><li>5.4 — “callables”,</li><li>7.0 — scalars and function return types.</li></ul><p>PHP is an Object-oriented Programming language (since PHP 3), and with object handling having been completely rewritten in PHP 5, its performance and  feature set have much improved. It uses classical inheritance and, since PHP 5, supports private and protected member variables and methods, abstract classes and methods, final classes and methods, a standard way of declaring constructors and destructors, and interfaces along with multiple interface implementation support.</p><h3>PHP Implementations</h3><p>There are several implementations of PHP. The original implementation, which is also the only complete and most widely used one, is the <a href="http://www.zend.com/en/community/php">Zend Engine</a> interpreter, which compiles PHP code on-the-fly. It is also considered the “reference implementation” of PHP.</p><p>The most popular “competitor” of the Zend Engine is the <a href="http://hhvm.com/">HipHop Virtual Machine</a> — HHVM — created by Facebook, which uses just-in-time compilation to achieve up to 600% performance boosts by compiling PHP into an intermediate bytecode, which is then translated into x64 machine code dynamically at runtime.</p><h2>Conclusion</h2><p>So, is PHP right for you? There can hardly be any doubt. It has been around since the world wide web was still in proverbial diapers and has grown together with it.</p><p>It offers frameworks and even pre-made solutions for just about every situation you could possibly imagine, and while its heavy changes since PHP 5 may cause doubt, whether a PHP developer you are considering is up-to-date with the language development, you can always count on X-Team’s developers to be completely current and well-versed in using everything, including PHP’s latest, most efficient, and most productive features, to ensure your dreams become reality that does not come crashing down with bugs and technical debt.</p><p>And if you are still in doubt whether PHP is right for you, let us know and our experts will be happy to help you reach the final decision.</p>',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> PHP Developers",
      caption: "X-Team is a development company of motivated PHP programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top PHP developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire PHP developers now',
          title: 'Hire PHP developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "PHP",
      hasFed: true,
      devs: [
        {
          pic: "jedrzej.jpg",
          name: "Jedrzej Kurylo",
          link: "https://github.com/jedrzej",
          news: [
            {badge: 'conference', status: 'attended', label: " Dutch PHP Conference in Amsterdam."},
            {badge: 'code', status: 'reached', label: " 14,000 reputation points on StackOverflow."},
            {badge: 'conference', status: 'attended', label: " You Gotta Love Front-end Conference in Tel Aviv."}
          ]
        },
        {
          pic: "sven.jpg",
          name: "Sven Berg Ryen",
          link: "https://github.com/svenbergryen",
          news: [
            {badge: 'conference', status: 'gave a talk called', label: " Staging & Deployment of Content in Drupal; at DrupalCamp Oslo."},
            {badge: 'course', status: 'completed', label: " 4,000+ translations from English to Norwegian Bokål for Drupal 8."},
            {badge: 'code', status: 'contributed to (and maintains)', label: " EU Cookie Compliance module for Drupal 7."}
          ]
        },
        {
          pic: "ben.jpg",
          name: "Ben Ferreira",
          link: "https://medium.com/@benf86",
          news: [
            {badge: 'code', status: 'created a', label: " Serverless CRUD REST API in AWS Lambda and AWS API Gateway."},
            {badge: 'react', status: 'finished', label: " Building React Applications with Idiomatic Redux; course on Egghead."},
            {badge: 'conference', status: 'attended', label: " X-Outpost: Thailand with 6 other X-Teamers."}
          ]
        }
      ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire PHP Developers Now',
        title: 'Hire PHP developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: false,
      tech: "PHP",
      posts: [],
    },
    Related: {
      RelSkills: [
        {skill: 'backend'},
        {skill: 'symfony'},
        {skill: 'laravel'}
      ],
    },
    LandingCta: {
      tech: "PHP",
      ctaAnchor: "Hire PHP Developers",
      ctaTitle: "Hire PHP Developers",
    },
  },

  /* Hire Python Dev Page */
  python: {
    tech: "Python",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Python Developers",
      caption: "X-Team is a development company of motivated Python programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Python developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Python developers now',
          title: 'Hire Python developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Python",
      hasFed: false,
      devs: [],
      button: {
        href: '/hire-developers',
        anchor: 'Hire PHP Developers Now',
        title: 'Hire PHP developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Python",
      posts: [
        {
          title: 'Supercharge Your Development with Vagrant and Ansible',
          link: 'https://x-team.com/blog/supercharge-development-vagrant-ansible/',
          text: 'Vagrant is well known among developers, and Ansible is well known among DevOps. Together these two guys can be a great setup for nearly every situation.'
        },
        {
          title: 'How To Get Started With Ansible Playbooks',
          link: 'https://x-team.com/blog/how-to-get-started-with-ansible-playbooks/',
          text: 'In this guide, we will be learning about how to use Ansible whilst deploying a simple Flask application on a CentOS 7 machine. We will use the provisioning tool Ansible to carry out this task, instead of running commands one by one. While building our deployment script, we will get the chance to explore a wide array of Ansible’s features and also some best practices.'
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'ruby'},
        {skill: 'go'},
        {skill: 'flask'}
      ],
    },
    LandingCta: {
      tech: "Python",
      ctaAnchor: "Hire Python Developers",
      ctaTitle: "Hire Python Developers",
    },
  },

  /* Hire React Dev Page */
  react: {
    tech: "React",
    TextLanding: {
      hasText: true,
      text: '<h2>About React</h2><p><a href="https://facebook.github.io/react/">React</a> is a declarative, component-based, open-source Javascript library for building user interfaces. Being independent of the rest of your stack, it can be used directly in the front-end, rendered in a <a href="https://nodejs.org/en/">Node.js</a> back-end, or used to write mobile applications in its <a href="https://facebook.github.io/react-native/">React Native</a> incarnation.</p><p>React is suitable for both small websites and huge web applications, and it excells at displaying data that changes over time without the user having to refresh the website. It handles only the user interface part of applications, which would classify it as the View part of the standard MVC (Model-View-Controller) architecture. While perfectly able to be stand-alone, it can even be used together with other front-end Javascript libraries and frameworks, such as <a href="https://angularjs.org/">AngularJS</a>.</p><p>The initial open-sourced release of React was in 2013, which makes it a mature technology, currently in use by giants such as Netflix, Imgur, Walmart, and others. React has been in constant development since its very beginning, with React Native, having been open-sourced in early 2015, and the latest improvement, <a href="https://github.com/acdlite/react-fiber-architecture">React Fiber</a> having been announced in April 2017.</p><p>As you can see, React is both stable and time-proven, while also cutting-edge with constant improvements. It has been the main competitor of Google’s AngularJS v1 and v2, and, some would claim, has won the battle for front-end supremacy, while others prefer to join both.</p><p>React code is primarily “plain ol’ Javascript”, though its components are typically written in <a href="https://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a>, a Javascript extension syntax, which allows for the use of HTML tags within Javascript code. However, this is just syntactic sugar, which means that it is not strictly unavoidable, though recommended by many developers.</p><h2>Technology</h2><h3>React</h3><p>React is a front-end library with several notable features, which should be of interest to anyone considering it:</p><ul><li><p>React Architecture</p><p>The React Architecture applies even beyond just HTML rendering. For example, it supports rendering to <code>&lt;canvas&gt;</code> tags, and it is suited for <a href="http://isomorphic.net/">isomorphic architecture</a>, i.e. application logic that runs both on the server and the client. This allows for several optimizations and, though not as widely adopted as one would expect, is certainly worth considering.</p></li><li><p>Virtual DOM</p><p>The programmer no longer has to manually figure out the diffs in HTML code that should be rendered, nor do they have to manually update specific parts of the webpage. React’s <a href="https://cardlife.blog/what-is-virtual-dom-c0ec6d6a925c">Virtual DOM</a> enables the programmer to simply write code as if the webpage were loaded anew with every update, and React will automagically figure out the diff and update the view accordingly.</p></li><li><p>One-way data flow</p><p>To keep things clean, React does not allow component renderers to mutate any values passed to it. Instead, the components can be passed callbacks, which modify values. Essentially, this ensures that the data mutation logic and the rendering stay separate, which provides good reusability. This “data down, actions up” philosophy also perfectly combines with one of many programmers’ favorite state management library for React, the functionally-inspired <a href="http://redux.js.org/">Redux</a>, which works with both React and React Native.</p></li></ul><h3>React Native</h3><p>React has since become a contender for not only web front-ends but also mobile development. It gives you the chance of building cross-platform mobile apps using only Javascript and the same React architecture you already know and love.</p><p>Most importantly, using React Native, you are not building a “mobile web app” or a “hybrid app” but rather a full-fledged mobile app, indistinguishable from one built in the platform’s native language. This is possible because React uses the same fundamental UI building blocks as regular iOS and Android apps.</p><p>Besides making Javascript the lingua franca of both the web and mobile, React Native also provides one major benefit - no more recompiling! Not only can you reload the app instantly, React Native even supports hot reload, which lets you run new code while retaining your application state.</p><p>Sometimes, however, the native language simply must be used, be it for optimization or other purposes. When that time comes, React Native lets you elegantly write parts of the application in native code and even combine Javascript and native code, which is how e.g. the Facebook app works.</p><p>Some might argue that React Native does not perform as well as pure native code, but it is nevertheless used by giants like Facebook, Instagram, AirBnB, and many others, not to even mention innumerable startups and solo-developers. While perhaps not the best choice for mobile games, where every millisecond counts, it is certainly well-suited for most use cases.</p><h2>Conclusion</h2><p>With React for the front-end and React Native for mobile, it is obvious that this is a technology suited for a large variety of needs and requirements. If you still have doubts, however, our React specialists will be more than happy to discuss them with you and to determine whether React and/or React Native are what you are looking for.</p><p>And once a plan is made, they will make sure it is delivered on promptly and accurately, while providing you with advice and counsel on how to best implement it.</p><p>P.S. Considering React and React Native are both Javascript-based, why not check out <a href="https://x-team.com/hire-node-developers/">Node.js</a>, the Javascript back-end solution to complete your stack?</p>',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> React Developers",
      caption: "X-Team is a development company of motivated React programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top React developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire React developers now',
          title: 'Hire React developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "React",
      hasFed: true,
      devs: [
        {
          pic: "gianluca.jpg",
          name: "Gianluca Esposito",
          link: "http://www.esposi.to/",
          news: [
            {badge: 'course', status: 'completed', label: " Building React Applications with Idiomatic Redux course on Egghead."},
            {badge: 'conference', status: 'attended', label: " ReactEurope in Paris with 10 other X-Teamers."},
            {badge: 'code', status: 'submitted', label: " a pull request to, GatsbyJS, a React static site generator."}
          ]
        },
        {
          pic: "szymon.jpg",
          name: "Szymon Michalak",
          link: "http://www.szymonmichalak.com/",
          news: [
            {badge: 'course', status: 'completed', label: " the Webpack course on Egghead."},
            {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."},
            {badge: 'course', status: 'read', label: " SurviveJS - React, a top resource on mastering React."}
          ]
        },
        {
          pic: "michal_kawalec.jpg",
          name: "Michal Kawalec",
          link: "https://github.com/mkawalec",
          news: [
            {badge: 'conference', status: 'hosted', label: " Monadic Warsaw, a functional programming meetup."},
            {badge: 'conference', status: 'attended', label: " Lambda Days 2016 in Krakow."},
            {badge: 'code', status: 'open sourced', label: " IMAP, an IMAP library for Haskell."}
          ]
        }
      ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire React Developers Now',
        title: 'Hire React developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: true,
      quotes: [
        {text: 'React.js is very fast. It has a very big community. We have a lot of ready to use components out there that we can combine together to quickly prototype ideas. React is very simple. Once you understand a few key concepts, like property and state, you’re ready to start building. I also like that React’s architecture guides developers into creating encapsulated software. These smaller pieces of code are easier to maintain, easier to test and are more re-usable.', author: 'DIEGO DURLI'},
        {text: 'I love the way React and Flux compose and create an expressive dataflow over a very functional interface. It has been game changing.', author: 'MICHAL KAWALEC'},
        {text: 'Never felt so productive in my front-end development since I started working with React. I think the reason is that you (mostly) write plain JavaScript code, not framework specific code, and its declarative API makes it easier to reason through the UI app logic.', author: 'GIANLUCA ESPOSITO'},
        {text: 'React is how web apps should be done! It changed the ecosystem so much that the big major frameworks (angular, ember) now are following their lead.', author: 'NADEEM KHEDR'},
        {text: 'React allows me to use small building blocks to achieve exactly what I need in the project.', author: 'PAWEL CHOJNACKI'},
        {text: 'I cannot believe how easy and well-organised it is. I simply love it!', author: 'SZYMON MICHALAK'},
        {text: 'React is the framework that will be on top sites for the next 5-10 years, just like jQuery was years ago.', author: 'IGNACIO SEGURA'}
      ],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "React",
      posts: [
        {
          title: 'Best React Tutorials: Curated By X-Team',
          link: 'https://x-team.com/blog/best-react-tutorials-curated-by-x-team/',
          text: 'There are about 1 million results on Google for "React Tutorial", so needless to say it can be hard to find the right tutorial to spend your time with. And while I can not say these are the best tutorials ever written, they are definitely the ones that we used (or ended up writing ourselves) to become great React developers.'
        },
        {
          title: 'Best React Newsletters: Curated by X-Team',
          link: 'https://x-team.com/blog/best-react-newsletters-curated-by-x-team-2/',
          text: 'One of the best ways to stay on top of a new tech like React is to subscribe to newsletters curated by people actually working with that new tech. Searching for the most important React tutorials, news and tips is time consuming when you should be focusing your time on learning. This is where newsletter come in handy.'
        },
        {
          title: 'React 2017: Conference Guide',
          link: 'https://x-team.com/blog/react-2017-conference-guide/',
          text: 'The React.js community is young, but mighty. Over the past year, contributions have poured into the React project. Tools and frameworks like Flux, Redux, React Native and Relay continue to evolve. And the community has grown to include diverse gatherings across continents. With conferences from the United States to Israel, there is a React event for nearly every place, if not everyone.'
        },
        {
          title: 'React London 2017 - A Summary',
          link: 'https://x-team.com/blog/react-london-2017-a-summary/',
          text: 'If you and your colleagues work 100% remotely from all over the world, no opportunity to meet with them in person should be missed. We try to create these opportunities as often as possible, focusing them mainly around various events, such as conferences. This time around, we picked React London!'
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'front-end'},
        {skill: 'javascript'},
        {skill: 'angular'}
      ],
    },
    LandingCta: {
      tech: "React",
      ctaAnchor: "Hire React Developers",
      ctaTitle: "Hire React Developers",
    },
  },

  /* Hire Redux Dev Page */
  redux: {
    tech: "Redux",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Redux Developers",
      caption: "X-Team is a development company of motivated Redux programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Redux developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Redux developers now',
          title: 'Hire Redux developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Redux",
      hasFed: false,
      devs: [],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Redux Developers Now',
        title: 'Hire Redux developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Redux",
      posts: [
        {
          title: 'Preparing a development talk, from the heart out',
          link: 'https://x-team.com/blog/preparing-development-talk-heart/',
          text: 'It was a normal week day when I decided to apply for a software development talk at my Alma Mater (Pontificia Universidad Católica Madre y Maestra – Santiago, Dominican Republic), not much went through my head at the moment other than that it would be nice to meet the new generation of CS students and serve as a bridge between what they are learning versus real world execution.'
        },
        {
          title: 'Performant Angular with Redux and Immutable',
          link: 'https://x-team.com/blog/performant-angular-with-redux-and-immutable/',
          text: 'The angular JS framework has become ubiquitous in the front end world. And with good reason. It allows you to abstract concepts such as rendering, it helps you manage dependencies and modules (which, granted, has become almost a drawback in this post ES6 world), and makes it easy to built all but the most involved of components.'
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'react'},
        {skill: 'javascript'},
        {skill: 'angular'}
      ],
    },
    LandingCta: {
      tech: "Redux",
      ctaAnchor: "Hire Redux Developers",
      ctaTitle: "Hire Redux Developers",
    },
  },

  /* Hire Ruby Dev Page */
  ruby: {
    tech: "Ruby",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Ruby Developers",
      caption: "X-Team is a development company of motivated Ruby programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Ruby developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Ruby developers now',
          title: 'Hire Ruby developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Ruby",
      hasFed: false,
      devs: [],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Ruby Developers Now',
        title: 'Hire Ruby developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: true,
      tech: "Ruby",
      posts: [
        {
          title: 'How To Create a Ruby API with Sinatra',
          link: 'https://x-team.com/blog/how-to-create-a-ruby-api-with-sinatra/',
          text: 'These days, every company needs some kind of web API. It’s not just for people who want to open their platforms to developers anymore. With the rise of Javascript SPA (Single Page Application) frameworks like AngularJS, Ember.js or React, software companies need to build internal web APIs for themselves too.'
        }
      ],
    },
    Related: {
      RelSkills: [
        {skill: 'java'},
        {skill: 'django'},
        {skill: 'python'}
      ],
    },
    LandingCta: {
      tech: "Ruby",
      ctaAnchor: "Hire Ruby Developers",
      ctaTitle: "Hire Ruby Developers",
    },
  },

  /* Hire Symfony Dev Page */
  symfony: {
    tech: "Symfony",
    TextLanding: {
      hasText: true,
      text: '<div class="text__item"><h2>SYMFONY FAQs.</h2><h3>What is Symfony?</h3><p>Symfony is a free back end <a href="/hire-php-developers/">PHP</a> web app framework released by <a href="http://fabien.potencier.org" target="_blank">Fabien Potencier</a> in 2005.</p><h3>Who manages Symfony?</h3><p>Symfony is currently developed by <a href="http://sensiolabs.com/" target="_blank">SensioLabs</a> with contributions from hundreds of other independent engineers.</p><h3>Who uses Symfony?</h3><p>Symfony has gained notable traction since it’s release and is currently in use on several sections of Yahoo! and TED’s homepage.</p><h3>Is Symfony portable?</h3><p>Many components of Symfony have been tweaked and ported for use in other popular PHP frameworks including <a href="/hire-drupal-developers/">Drupal</a>, <a href="/hire-laravel-developers/">Laravel</a> and Magento.</p></div>',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Symfony Developers",
      caption: "X-Team is a development company of motivated Symfony programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Symfony developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Symfony developers now',
          title: 'Hire Symfony developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Symfony",
      hasFed: true,
      devs: [
        {
          pic: "piotr_pasich.jpg",
          name: "Piotr Pasich",
          link: "https://github.com/piotrpasich",
          news: [
            {badge: 'conference', status: 'gave a talk called', label: " How to write apps using Event Sourcing and CQRS; at PHPers Silesia."},
            {badge: 'conference', status: 'published', label: " an article on SitePoint called &quot;Basic TDD with PHPSpec."},
            {badge: 'conference', status: 'streamed', label: " his 29th Symfony session on LiveCoding.tv."}
          ]
        },
        {
          pic: "jedrzej.jpg",
          name: "Jedrzej Kurylo",
          link: "https://github.com/jedrzej",
          news: [
            {badge: 'conference', status: 'attended', label: " Dutch PHP Conference in Amsterdam."},
            {badge: 'code', status: 'reached', label: " 14,000 reputation points on StackOverflow."},
            {badge: 'conference', status: 'attended', label: " You Gotta Love Front-end Conference in Tel Aviv."}
          ]
        }
      ],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Symfony Developers Now',
        title: 'Hire Symfony developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: true,
      quotes: [
        {text: 'I’m a backend developer and Symfony is great for handling business logic in code. You can easily write clear code with all design patterns. The framework helps a lot with maintaining and developing an application quickly.', author: 'Piotr Pasich'},
        {text: 'Symfony is one of the most flexible frameworks out there. It is also a very stable and well developed framework. There is a lot of good solutions in out there for delivering testable applications.', author: 'Kamil Ronewicz'}
      ],
    },
    CurrentPosts: {
      hasPosts: false,
      tech: "Symfony",
      posts: [],
    },
    Related: {
      RelSkills: [
        {skill: 'backend'},
        {skill: 'php'},
        {skill: 'wordpress'}
      ],
    },
    LandingCta: {
      tech: "Symfony",
      ctaAnchor: "Hire Symfony Developers",
      ctaTitle: "Hire Symfony Developers",
    },
  },

  /* Hire Wordpress Dev Page */
  wordpress: {
    tech: "Wordpress",
    TextLanding: {
      hasText: false,
      text: '',
      style: "tech-text",
      noText: "noText",
    },
    Hero: {
      title: "Hire Dedicated<br /> Wordpress Developers",
      caption: "X-Team is a development company of motivated Wordpress programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Wordpress developers.",
      layout: 'centered',
      style: 'landing',
      buttons: [
        {
          href: '/hire-developers',
          anchor: 'Hire Wordpress developers now',
          title: 'Hire Wordpress developers',
          big: true
        }
      ]
    },
    DevsFed: {
      tech: "Wordpress",
      hasFed: false,
      devs: [],
      button: {
        href: '/hire-developers',
        anchor: 'Hire Wordpress Developers Now',
        title: 'Hire Wordpress developers',
        big: true,
        style: 'red'
      },
    },
    DevQuotes: {
      hasQuotes: false,
      quotes: [],
    },
    CurrentPosts: {
      hasPosts: false,
      tech: "Wordpress",
      posts: [],
    },
    Related: {
      RelSkills: [
        {skill: 'php'},
        {skill: 'drupal'},
        {skill: 'backend'}
      ],
    },
    LandingCta: {
      tech: "Wordpress",
      ctaAnchor: "Hire Wordpress Developers",
      ctaTitle: "Hire Wordpress Developers",
    },
  },
}

export default HireData
