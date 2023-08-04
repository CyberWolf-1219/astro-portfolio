import React from 'react';
import type { Service } from '../../../types';

import css from './style.module.css';
import { CONTACTS } from '../../../data/contacts';

interface Props {
  service: Service;
}

function ServiceCard({ service }: Props) {
  return (
    <div
      className={`${css.card} relative shrink-0 aspect-[4/5] w-full h-auto p-[15px] bg-pallet-primary-light shadow-[0px_0px_10px_2px] shadow-transparent border-[1px] border-pallet-accent hover:shadow-pallet-accent/30 duration-[300ms] overflow-hidden`}>
      <table
        className={
          'w-full h-full text-center flex flex-col items-center justify-between gap-[10px]'
        }>
        <thead className={'text-xl'}>
          <tr>
            <th>{service.serviceTitle}</th>
          </tr>
        </thead>
        <tbody className={''}>
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
