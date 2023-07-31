import type { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    postID: 1,
    createdDate: '2023-07-25',
    author: 'Lahiru A. Rajakaruna',
    sections: [
      {
        type: 'hero',
        heading: 'This is a dummy blog post',
        image: {
          link: '',
          caption:
            'this is an image caption that I had to put in here to test this.',
        },
        text: [
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ureprehenderit at, doloremque nostrum esse eius suscipit? Ipsa quos absoluta temporibus hic doloremque aperiam a nulla dolorum nemo nam quaeeius voluptatem, nobis fuga deserunt quibusdam quam nihil consectetur distinctio debitis cumque, fugiat recusandae. Cumque provident voluptatibus dolor nam ipsum tenetur veniam. Natus animi iste voluptas aperiam ratione aliquam officiis rem sunt odio earum explicabo perspiciatis nihil facilis nemo quam labore quo, ipsum doloribus nam, corrupti unde expedita ea illum. Corporis, ipsam nulla quas vero perferendis minus illo repudiandae pariatur eligendi alias tempora voluptas! Eius non magnam esse ipsa modi illum perferendis, aut asperiores eligendi tenetur officiis omnis eum. Illo nam sit veritatis sed placeat, quidem libero possimus illum beatae, cum necessitatibus magnam non harum? Tempore reiciendis commodi odit inventore dolorem voluptate nulla corrupti natus esse ipsa, veniam, modi temporibus, ea quos harum suscipit hic placeat odio est magnam. Animi!',
        ],
      },
      {
        type: 'sub',
        heading: 'This section represents a subsection of the main blog post',
        image: {
          link: '',
          caption:
            'this is an image caption that I had to put in here to test this.',
        },
        text: [
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ureprehenderit at, doloremque nostrum esse eius suscipit? Ipsa quos absoluta temporibus hic doloremque aperiam a nulla dolorum nemo nam quaeeius voluptatem, nobis fuga deserunt quibusdam quam nihil consectetur distinctio debitis cumque, fugiat recusandae. Cumque provident voluptatibus dolor nam ipsum tenetur veniam. Natus animi iste voluptas aperiam ratione aliquam officiis rem sunt odio earum explicabo perspiciatis nihil facilis nemo quam labore quo, ipsum doloribus nam, corrupti unde expedita ea illum. Corporis, ipsam nulla quas vero perferendis minus illo repudiandae pariatur eligendi alias tempora voluptas! Eius non magnam esse ipsa modi illum perferendis, aut asperiores eligendi tenetur officiis omnis eum. Illo nam sit veritatis sed placeat, quidem libero possimus illum beatae, cum necessitatibus magnam non harum? Tempore reiciendis commodi odit inventore dolorem voluptate nulla corrupti natus esse ipsa, veniam, modi temporibus, ea quos harum suscipit hic placeat odio est magnam. Animi!',
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ureprehenderit at, doloremque nostrum esse eius suscipit? Ipsa quos absoluta temporibus hic doloremque aperiam a nulla dolorum nemo nam quaeeius voluptatem, nobis fuga deserunt quibusdam quam nihil consectetur distinctio debitis cumque, fugiat recusandae. Cumque provident voluptatibus dolor nam ipsum tenetur veniam. Natus animi iste voluptas aperiam ratione aliquam officiis rem sunt odio earum explicabo perspiciatis nihil facilis nemo quam labore quo, ipsum doloribus nam, corrupti unde expedita ea illum. Corporis, ipsam nulla quas vero perferendis minus illo repudiandae pariatur eligendi alias tempora voluptas! Eius non magnam esse ipsa modi illum perferendis, aut asperiores eligendi tenetur officiis omnis eum. Illo nam sit veritatis sed placeat, quidem libero possimus illum beatae, cum necessitatibus magnam non harum? Tempore reiciendis commodi odit inventore dolorem voluptate nulla corrupti natus esse ipsa, veniam, modi temporibus, ea quos harum suscipit hic placeat odio est magnam. Animi!',
        ],
        links: [
          { caption: 'LearnReact', link: 'https://www.somerandomsite.net/' },
          { caption: 'LearnAstro', link: 'https://www.somerandomsite.net/' },
          { caption: 'LearnTailwind', link: 'https://www.somerandomsite.net/' },
        ],
      },
    ],
  },
];
