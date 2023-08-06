import React from 'react';
import type { Service } from '../../../types';

import css from './style.module.css';
import { CONTACTS } from '../../../data/contacts';

interface Props {
  service: Service;
  cardIndex: number;
}

function ServiceCard({ service, cardIndex }: Props) {
  return (
    <div
      className={`${css.card} relative shrink-0 aspect-[4/5] w-full md:w-[150px] lg:w-[200px] h-auto p-[15px] bg-pallet-primary-light shadow-[0px_0px_10px_2px] shadow-transparent border-[2px] border-pallet-secondary hover:shadow-pallet-accent/30 duration-[300ms] overflow-hidden`}
      style={{ animationDelay: `${cardIndex * 150}ms` }}>
      <table
        className={
          'w-full h-full text-center flex flex-col items-center justify-between gap-[10px]'
        }>
        <thead className={'text-xl md:!text-sm lg:!text-lg'}>
          <tr>
            <th className={'w-full px-[1em] text-center truncate'}>
              {service.serviceTitle}
            </th>
          </tr>
        </thead>
        <tbody className={''}>
          <tr>
            <td>
              <img
                src={service.serviceImage.imageLink}
                alt={service.serviceImage.imageCaption}
                className={
                  'aspect-[1/1] w-full max-w-[150px] md:max-w-[50px] xl:max-w-[100px] h-auto mx-auto'
                }
              />
            </td>
          </tr>
        </tbody>
        <tfoot className={''}>
          <tr>
            <td>
              <ul
                className={
                  'w-full h-fit py-[15px] flex flex-row items-center justify-center gap-[15px]'
                }>
                {CONTACTS.map((contact) => {
                  return (
                    <li key={`contact_${Math.random()}`}>
                      <a
                        href={contact.contact}
                        className={
                          'w-full h-fit px-[0.75em] py-[0.5em] bg-pallet-accent'
                        }>
                        {contact.type}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ServiceCard;
