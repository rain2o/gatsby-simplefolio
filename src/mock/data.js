import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  domain: 'https://joel.rainwater.io',
  ogImage: {
    source: 'kristy-joel-coast.jpg',
    alt: 'Me with my wife overlooking the Cote Azure in South France.',
  },
  title: 'Joel Rainwater | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    "Jack-of-all-codes: I'm a diverse developer, trying to learn something new every day.", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello there, I am',
  name: 'Joel Rainwater',
  subtitle: 'This is the developer you are looking for',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'kristy-joel-coast.jpg',
  paragraphOne:
    'I have been dabbling in web development for 20 years now, and working in it professionally in some fashion for over 10 years. Throughout my years of experience I have worked in multiple areas - frontend, backend, and everywhere in between. While I tend to favor the backend, I have been growing more interested in frontend with the advancements in the JavaScript world.',
  paragraphTwo:
    "I love experiencing new places with my wife, playing D&D, consuming comic book media (comics, movies, series), and building digital things. Yes, for fun I truly do enjoy coding; it's just so satisfying.",
  paragraphThree:
    'Resumes are short, see my LinkedIn for a more detailed view of my experience; or keep scrolling for an overview of some of my favorite projects.',
  resume: 'https://static.rainwater.io/resume',
  linkedin: 'https://www.linkedin.com/in/joelrainwater/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'netatmo.png',
    title: 'Netatmo Shop',
    info:
      'Complete rebuild of their old Magento 1 shop in Magento 2. For improved performance, security, and developer experience we use Magento 2 as a headless CMS and eCommerce platform. The frontend was built as a PWA in Vue Storefront, allowing us to use Vue, Express (as a middleware API of sorts), and ElasticSearch for the data storage.',
    info2: '',
    role: 'Lead developer & architect',
    stack: [
      { name: 'Vue Storefront', url: 'https://www.vuestorefront.io/' },
      { name: 'ElasticSearch', url: 'https://www.elastic.co/' },
      { name: 'Kibana', url: 'https://www.elastic.co/kibana' },
      { name: 'Bulma', url: 'https://bulma.io/' },
      { name: 'Typescript', url: 'https://www.typescriptlang.org/' },
      { name: 'Redis', url: 'https://redis.io/' },
      { name: 'Magento 2', url: 'https://devdocs.magento.com/' },
      { name: 'MySQL', url: 'https://www.mysql.com/' },
    ],
    url: 'https://shop.netatmo.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tpltt.png',
    title: 'Tout Pour Le TouTou',
    info:
      'I joined mid-project to take over the technical project management, and eventually taking over all technical responsibilities for this startup. It is a new website and web app build for connecting pet owners with pet service providers.',
    info2: 'The web app is still in progress, to be launched soon...',
    role: 'CTO (contract)',
    stack: [
      { name: 'Laravel', url: 'https://laravel.com/' },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
      { name: 'MySQL', url: 'https://www.mysql.com/' },
    ],
    url: 'https://toutpourletoutou.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'This Portfolio',
    info:
      "This was a learning experience for me, to build a static site using React and Netlify. I did start with a theme, because I am not strong in design, and didn't want to waste hours trying to come up with a design for my portfolio.",
    info2: '',
    role: 'Developer',
    stack: [
      { name: 'Gatsby', url: 'https://www.gatsbyjs.com/' },
      {
        name: 'gatsby-simplefolio',
        url: 'https://www.gatsbyjs.com/starters/cobidev/gatsby-simplefolio',
      },
      { name: 'React', url: 'https://reactjs.org/' },
      { name: 'Netlify', url: 'https://www.netlify.com/' },
    ],
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hdywtdt.png',
    title: 'How Do You Want To Do This?',
    info:
      'This is a fun project idea I had, to randomly watch a "How do you want to do this?" moment from the internet show Critical Role. It was also a way for me to spend some more time learning React.',
    info2: '',
    role: 'Developer',
    stack: [
      { name: 'React', url: 'https://reactjs.org/' },
      { name: 'Netlify', url: 'https://www.netlify.com/' },
    ],
    url: 'https://hdywtdt.netlify.app/',
    repo: 'https://github.com/rain2o/how-do-you-want-to-do-this', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fots.png',
    title: 'Friends of the Smokies',
    info:
      'The site was built in WordPress and Foundation, and uses WooCommerce for the Donations. It allows subscription donations or one-time donations as well as a dynamic pricing model allowing users to choose the amount or enter their own custom amount. As part of this project I developed a custom WordPress plugin for Pyxl that consumes Instagram’s API and provides it to theme developers in a clean, developer-friendly way. It was inspired by the oAuth Twitter Feed for Developers plugin.',
    info2: '',
    role: 'Lead Developer',
    stack: [
      { name: 'WordPress', url: 'https://wordpress.org/' },
      { name: 'WooCommerce', url: 'https://woocommerce.com/' },
      { name: 'Foundation', url: 'https://get.foundation/' },
    ],
    url: 'https://friendsofthesmokies.org/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rcc.jpg',
    title: 'Regal Crown Club',
    info:
      'In 2016 I took over as the technical lead for all Regal Entertainment work for which Pyxl was responsible. I was the project architect and lead developer in the RCC rebuild, leading a team of 3 developers. It was built using the Enterprise Edition of Magento 1. The primary challenge was to provide a seamless user experience from Regal’s primary domain RegMovies to the RCC Store. Behind the scenes we integrated with Regal’s proprietary API for user and credits management. A number of custom 3rd party integrations were built as well for features such as fulfillment and content creation. Some of the features built include the Movie entity complete with product and category relations and content creation via API integrations, a number of custom product types with different user experiences, a digital, single page checkout process for certain products, and split payment methods for Credits vs Dollars.',
    info2: '',
    role: 'Architect & Lead Developer',
    stack: [
      { name: 'Magento 1 Enterprise', url: 'https://magento.com/' },
      { name: 'Foundation', url: 'https://get.foundation/' },
    ],
    url: 'http://regalcrownclub.regmovies.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'momsource.png',
    title: 'MomSource Network',
    info:
      'The application serves as a platform for moms who have left the workforce and are having difficulty jumping back in, providing access to job listings from companies interested in working with them as well as dedicated recruiters to help find the right job. The application was designed and developed by Pyxl on the Laravel framework. I was brought on to the project as a technical lead towards the end as some events led to an unfortunate situation in the project. Once brought on I helped bring the project back on track, provided some final development and bug fixes, participated in a 20 hour live QA session with a team of developers, and worked with the client’s CTO to bring both teams back to the same page for the final project launch.',
    info2: '',
    role: 'Technical Lead, Developer & QA',
    stack: [
      { name: 'Laravel', url: 'https://laravel.com/' },
      { name: 'Foundation', url: 'https://get.foundation/' },
    ],
    url: 'https://app.momsourcenetwork.com/landing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'patnash.jpg',
    title: 'Patricia Nash Designs',
    info:
      'I had the opportunity to build a new site for Patricia Nash Designs twice while at Pyxl. In 2015 we acquired them as a client and rebuilt their store in Magento 1 integrated with WordPress. Then in 2017 we had the opportunity to migrate them to Magento 2, building a new theme with all new features in the process. I was the sole developer on the Magento 1 build, building the theme as well as all feature modules. Some features included Lookbooks, Collections with a Pinterest style experience, Ajax product quick views, a custom integration with HubSpot’s API, and more. For the Magento 2 migration/rebuild I was the project architect and lead developer working with a team of developers. I primarily built custom feature modules and implemented the data migration while also coaching the other developers on how to build Magento 2 themes and modules. Some of the features I built included the new Lookbooks feature with image hotspot tagging, a mega menu builder, an improved quick view feature, the notification bar feature, a custom Gift Card CSV importer for Amasty’s Gift Card extension, and many more. Throughout the process I was able to provide a number of bug fixes and improvements to various 3rd party extensions we used through either support tickets or GitHub PR’s. In both projects we integrated with WordPress to provide a more feature-rich CMS experience. Using and extending FishPig’s integration module I completed the WP<>Magento integrations.',
    info2:
      'NOTE - I appears their website has since been migrated to Shopify after my departure from Pyxl.',
    role: 'Architect & Lead Developer',
    stack: [
      { name: 'Magento 2', url: 'https://devdocs.magento.com/' },
      { name: 'WordPress', url: 'https://wordpress.org/' },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
    ],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'yln.png',
    title: 'Your Labels Now',
    info:
      'We moved the client into WordPress and Magento 2 for their CMS and eCommerce platforms and out of their antiquated custom system. The focal point of this project is the quoting tool which drives all sales. I built this tool using the core Checkout experience as a reference, creating each step and element as a custom KnockoutJS component. The quoting tool ultimately creates a product using the values entered and adds it to the user’s cart. We rebuilt the client’s proprietary pricing algorithm from the original .NET code into the Magento module, replacing all hard-coded values with values that can be managed in Magento. We integrated Magento 2 with WordPress to provide more CMS flexibility for the marketing pages within the site.',
    info2: '',
    role: 'Technical Lead & Magento Developer',
    stack: [
      { name: 'Magento 2', url: 'https://devdocs.magento.com/' },
      { name: 'WordPress', url: 'https://wordpress.org/' },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
    ],
    url: 'https://yourlabelsnow.com/quoter',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'teamhealth.png',
    title: 'TeamHealth',
    info:
      'I provided ongoing support and new feature development. The site was built (not by me) using Sitecore as the CMS and React as a separated front-end layer. Ongoing support involved updating existing features and building new features in both React and Sitecore.',
    info2: '',
    role: 'Lead Developer',
    stack: [
      { name: 'Sitecore', url: 'https://www.sitecore.com/' },
      { name: 'React', url: 'https://reactjs.org/' },
    ],
    url: 'https://www.teamhealth.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ecu.png',
    title: 'Eastman Credit Union',
    info:
      'We rebuilt their site from Drupal to Kentico 10. In addition to giving their online property a complete makeover with responsive designs, moving to Kentico provided a more robust experience for the content managers and it allowed us to utilize Smart Content, serving custom content to users based on their browsing behaviors. Working with a more experienced Kentico developer I was able to learn from him through the project as a developer while also leading the technical planning and training with the client. I mostly built or improved on features on the backend (.NET) side, but also provided some updates to the theme built in the Foundation framework. Building out the custom CMS widgets and the smart content system with persona-based content was a great learning experience.',
    info2: '',
    role: 'Lead Developer',
    stack: [
      { name: 'Kentico', url: 'https://www.kentico.com/' },
      { name: 'Foundation', url: 'https://get.foundation/' },
    ],
    url: 'https://www.ecu.org/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'joel.rain2o+porfolio@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Joel_Rain2o',
    },
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/3489599/rain2o?tab=profile',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joelrainwater/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rain2o',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
