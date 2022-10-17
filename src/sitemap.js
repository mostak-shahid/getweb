// sitemap.js

import Generator from 'react-router-sitemap-generator';
import Router from './component/Router'; //import your react router component

const generator = new Generator(
  'http://localhost:3000/',
  Router(),
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: 0.8,
  }
);
generator.save('public/test/sitemap.xml');