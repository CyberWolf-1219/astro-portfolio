import React from 'react';
import './style.css';
import type { BlogPostSnippet } from '../../types';

interface Props {
  post: BlogPostSnippet;
  animationDelay: number;
}

function BlogPostSearchResultCard({ post, animationDelay }: Props) {
  return (
    <article
      style={{ animationDelay: `${animationDelay}ms` }}
      className={`BlogPostSearchResultCard aspect-[9/16] w-full h-auto p-[10px] flex flex-col items-center justify-start gap-[10px] bg-pallet-accent/50 border-[2px] border-pallet-accent overflow-hidden delay-[${animationDelay}ms]`}>
      <h1
        className={'w-full h-fit !my-[0px] !text-2xl !font-semibold underline'}>
        {post.title}
      </h1>
      <p className={'w-full h-fit text-left'}>
        <small>{post.postedDate}</small>
      </p>
      <img
        src={post.img}
        alt=''
        className={'shrink-0 aspect-[4/3] w-full h-auto bg-pallet-primary'}
      />
      <p className={'w-full h-fit text-justify line-clamp-[9]'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid
        quos inventore cupiditate sed reiciendis beatae aut atque sapiente ex.
        Voluptatem eaque vel, dolore, maiores harum nulla nisi pariatur ipsum
        minima recusandae, voluptates id nostrum sapiente atque! Provident autem
        fuga ipsum consequatur voluptatibus assumenda ducimus voluptatum ex
        veniam, quam modi aliquid blanditiis nisi fugiat beatae veritatis,
        laboriosam fugit quod reiciendis, temporibus possimus voluptate sit
        distinctio! Ad ea quis iste molestiae quidem ab sit voluptatem mollitia
        neque aperiam eos eveniet perferendis et architecto esse doloremque
        quisquam nesciunt, perspiciatis excepturi. Qui sed beatae corporis
        labore quae quis dolorem mollitia harum omnis ex.
      </p>
      <p className={'w-full h-fit mt-auto text-left'}>
        <a
          href={post.link}
          className={'font-bold'}>
          Read Post &gt;&gt;
        </a>
      </p>
    </article>
  );
}

export default BlogPostSearchResultCard;
