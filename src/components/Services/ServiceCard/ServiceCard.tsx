import React from 'react';
import type { Service } from '../../../types';

import css from './style.module.css';

interface Props {
  service: Service;
}

function ServiceCard({ service }: Props) {
  return (
    <div
      className={`${css.card} shrink-0 w-full h-fit px-[20px] py-[30px] bg-pallet-primary-light shadow-[0px_0px_10px_2px] shadow-transparent border-[1px] border-pallet-accent hover:shadow-pallet-accent/30 duration-[300ms]`}>
      <table className={'w-full h-fit  text-center'}>
        <thead className={'text-xl'}>
          <tr>
            <th>{service.serviceTitle}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={service.serviceImage.imageLink}
                alt={service.serviceImage.imageCaption}
                className={'aspect-[1/1] w-full max-w-[150px] h-auto mx-auto'}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <a
                href='mailto:bl4ckm0nk3yb4n4n4@gmail.com'
                className={
                  'w-full h-fit px-[0.75em] py-[0.5em] bg-pallet-accent'
                }>
                EMAIL ME
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ServiceCard;
