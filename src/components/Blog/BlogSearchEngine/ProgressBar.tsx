import React from 'react';

const ProgressBar = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={'absolute inset-0 z-[1] p-[5px] overflow-hidden'}>
      <div
        ref={ref}
        className={
          'w-[100%] h-full bg-pallet-accent origin-left scale-x-[0%] transition-transform duration-[100ms] ease-linear'
        }></div>
    </div>
  );
});

export default ProgressBar;
