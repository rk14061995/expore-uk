export default function sitemap() {
    return [
      {
        url: 'https://www.exploreuk.online/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.exploreuk.online/about-us',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.exploreuk.online/contact-us',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.exploreuk.online/privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    //   {
    //     url: 'https://acme.com/blog',
    //     lastModified: new Date(),
    //     changeFrequency: 'weekly',
    //     priority: 0.5,
    //   },
    ]
  }