import React from 'react';

interface Props {
  error: string;
}

function Error({ error }: Props) {
  return (
    <p
      className={
        'w-full h-fit my-[25px] p-[1.5rem] text-xl text-pallet-accent border-[5px] border-pallet-accent'
      }>
      <span>&#58;&#40;&nbsp;ERROR</span>
      <br />
      <span>&lt;{error}/&gt;</span>
    </p>
  );
}

export default Error;
