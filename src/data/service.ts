import type { ServiceCategory } from '../types';

export const SERVICES: ServiceCategory[] = [
  {
    categoryID: 'html_css',
    categoryName: 'HTML & CSS',
    categoryImage: {
      imageLink: '/html_css.svg',
      imageCaption: 'html and css services',
    },
    categoryServices: [
      {
        serviceTitle: 'HTML & CSS DEBUGGING',
        serviceImage: {
          imageLink: '/html_css.svg',
          imageCaption: 'html and css debugging service',
        },
      },
    ],
  },
  {
    categoryID: 'js_ts',
    categoryName: 'Javascript | Typescript',
    categoryImage: {
      imageLink: '/javascript.svg',
      imageCaption: 'javascript and typescript services',
    },
    categoryServices: [
      {
        serviceTitle: 'JS|TS DEBUGGING',
        serviceImage: {
          imageLink: '/javascript.svg',
          imageCaption: 'javascript and typescript debugging service',
        },
      },
    ],
  },
  {
    categoryID: 'custom_sites',
    categoryName: 'CUSTOM WEBSITE DEVELOPMENT',
    categoryImage: {
      imageLink: '/website.svg',
      imageCaption: 'custom websites and appliction development services',
    },
    categoryServices: [
      {
        serviceTitle: 'LANDING PAGES',
        serviceImage: { imageLink: '', imageCaption: 'html debugging service' },
      },
      {
        serviceTitle: 'PORTFOLIO SITES',
        serviceImage: { imageLink: '', imageCaption: 'css debugging service' },
      },
      {
        serviceTitle: 'BLOGGING PLATFORMS',
        serviceImage: { imageLink: '', imageCaption: 'css debugging service' },
      },
      {
        serviceTitle: 'SIMPLE SOCIAL MEDIA PLATFORMS',
        serviceImage: { imageLink: '', imageCaption: 'css debugging service' },
      },
      {
        serviceTitle: 'BUSINESS WEBSITES',
        serviceImage: { imageLink: '', imageCaption: 'css debugging service' },
      },
      {
        serviceTitle: 'SINGLE PRODUCT E-COMMERCE PLATFORMS',
        serviceImage: { imageLink: '', imageCaption: 'css debugging service' },
      },
      {
        serviceTitle: 'MULTI PRODUCT E-COMMERCE PLATFORMS',
        serviceImage: { imageLink: '', imageCaption: 'css debugging service' },
      },
    ],
  },
  {
    categoryID: 'wordpress',
    categoryName: 'WORDPRESS DEVELOPMENT',
    categoryImage: {
      imageLink: '/wordpress.svg',
      imageCaption: 'wordpress development services',
    },
    categoryServices: [
      {
        serviceTitle: 'THEMES',
        serviceImage: { imageLink: '', imageCaption: 'html debugging service' },
      },
    ],
  },
  {
    categoryID: 'webflow',
    categoryName: 'WEBFLOW DEVELOPMENT',
    categoryImage: {
      imageLink: '/webflow.svg',
      imageCaption: 'webflow development services',
    },
    categoryServices: [
      {
        serviceTitle: 'THEMES',
        serviceImage: { imageLink: '', imageCaption: 'html debugging service' },
      },
    ],
  },
  {
    categoryID: 'shopify',
    categoryImage: {
      imageLink: '/shopify.svg',
      imageCaption: 'shopify development services',
    },
    categoryName: 'SHOPIFY DEVELOPMENT',
    categoryServices: [
      {
        serviceTitle: 'THEMES',
        serviceImage: { imageLink: '', imageCaption: 'html debugging service' },
      },
    ],
  },
];
