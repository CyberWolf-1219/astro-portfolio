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
        serviceTitle: 'HTML & CSS CODING',
        serviceImage: {
          imageLink: '/service_icons/html.png',
          imageCaption: 'html and css debugging service',
        },
      },
    ],
  },
  {
    categoryID: 'js_ts',
    categoryName: 'Javascript | Typescript',
    categoryImage: {
      imageLink: '/js_ts.svg',
      imageCaption: 'javascript and typescript services',
    },
    categoryServices: [
      {
        serviceTitle: 'JS|TS DEBUGGING',
        serviceImage: {
          imageLink: '/service_icons/code.png',
          imageCaption: 'javascript and typescript debugging service',
        },
      },
    ],
  },
  {
    categoryID: 'custom_sites',
    categoryName: 'CUSTOM WEBSITE DEVELOPMENT',
    categoryImage: {
      imageLink: '/custom.svg',
      imageCaption: 'custom websites and appliction development services',
    },
    categoryServices: [
      {
        serviceTitle: 'LANDING PAGE',
        serviceImage: {
          imageLink: '/service_icons/landing_page.png',
          imageCaption: 'html debugging service',
        },
      },
      {
        serviceTitle: 'PORTFOLIO',
        serviceImage: {
          imageLink: '/service_icons/portfolio.png',
          imageCaption: 'css debugging service',
        },
      },
      {
        serviceTitle: 'BLOG',
        serviceImage: {
          imageLink: '/service_icons/blog_platform.png',
          imageCaption: 'css debugging service',
        },
      },
      {
        serviceTitle: 'SOCIAL MEDIA',
        serviceImage: {
          imageLink: '/service_icons/social_media_platform.png',
          imageCaption: 'css debugging service',
        },
      },
      {
        serviceTitle: 'BUSINESS',
        serviceImage: {
          imageLink: '/service_icons/business_website.png',
          imageCaption: 'css debugging service',
        },
      },
      {
        serviceTitle: 'ONLINE SHOP',
        serviceImage: {
          imageLink: '/service_icons/single_product_shop.png',
          imageCaption: 'css debugging service',
        },
      },
      {
        serviceTitle: 'E-COMMERCE',
        serviceImage: {
          imageLink: '/service_icons/online_shop.png',
          imageCaption: 'css debugging service',
        },
      },
    ],
  },
  // {
  //   categoryID: 'wordpress',
  //   categoryName: 'WORDPRESS DEVELOPMENT',
  //   categoryImage: {
  //     imageLink: '/wordpress.png',
  //     imageCaption: 'wordpress development services',
  //   },
  //   categoryServices: [
  //     {
  //       serviceTitle: 'THEMES',
  //       serviceImage: {
  //         imageLink: '/service_icons/wordpress.png',
  //         imageCaption: 'html debugging service',
  //       },
  //     },
  //   ],
  // },
  // {
  //   categoryID: 'webflow',
  //   categoryName: 'WEBFLOW DEVELOPMENT',
  //   categoryImage: {
  //     imageLink: '/webflow.svg',
  //     imageCaption: 'webflow development services',
  //   },
  //   categoryServices: [
  //     {
  //       serviceTitle: 'THEMES',
  //       serviceImage: {
  //         imageLink: '/service_icons/webflow.png',
  //         imageCaption: 'html debugging service',
  //       },
  //     },
  //   ],
  // },
  // {
  //   categoryID: 'shopify',
  //   categoryImage: {
  //     imageLink: '/shopify.svg',
  //     imageCaption: 'shopify development services',
  //   },
  //   categoryName: 'SHOPIFY DEVELOPMENT',
  //   categoryServices: [
  //     {
  //       serviceTitle: 'THEMES',
  //       serviceImage: {
  //         imageLink: '/service_icons/shopify.png',
  //         imageCaption: 'html debugging service',
  //       },
  //     },
  //   ],
  // },
];
