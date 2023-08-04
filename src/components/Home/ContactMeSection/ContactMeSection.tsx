import React, { useEffect, useRef, useState } from 'react';
import type { FocusEvent, KeyboardEvent } from 'react';
import { sleep } from './helpers';

import {
  LOADING_TEXT,
  HELP_TEXT,
  TERMINAL_DEFAULT_PROMPT,
} from './static_data';

function ContactMeSection() {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const [terminalLoaded, setTerminalLoaded] = useState(false);
  const email = useRef('');
  const subject = useRef('');
  const msg = useRef('');

  async function loadTerminal(element: HTMLTextAreaElement) {
    if (!terminalLoaded) {
      for (let i = 0; i <= LOADING_TEXT.length - 1; i++) {
        element.value = LOADING_TEXT[i];
        await sleep(200);
      }
      element.value = HELP_TEXT;
      setTerminalLoaded(true);
    }
  }

  function keydownHandler(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key == 'Enter') {
      //TODO: CHECK IF THE STRING IS EMPTY
      const input = e.currentTarget.value;
      if (input == '') {
        e.currentTarget.value = `${TERMINAL_DEFAULT_PROMPT}`;
      } else {
        //TODO: PREPARE TEXT
        const text = input.split('>')[1].trim();
        console.log(text);
        if (text == '') {
          //TODO: IF TEXT IS EMPTY
          e.currentTarget.value = `${TERMINAL_DEFAULT_PROMPT}`;
        } else {
          //TODO: IF TEXT IS NOT EMPTY
          const property = text.split('=')[0].toLowerCase();
          const value = text.split('=')[1];

          // TODO: TREAT EACH PROPERTY
          if (property == 'set-email') {
            email.current = value;
            e.currentTarget.value = `[i] EMAIL SET TO:${value}\n${TERMINAL_DEFAULT_PROMPT}`;
          } else if (property == 'set-subject') {
            subject.current = value;
            e.currentTarget.value = `[i] SUBJECT SET TO:${value}\n${TERMINAL_DEFAULT_PROMPT}`;
          } else if (property == 'set-msg') {
            msg.current = value;
            e.currentTarget.value = `[i] MESSAGE SET TO:${value}\n${TERMINAL_DEFAULT_PROMPT}`;
          } else if (property == 'send') {
            if (email.current && subject.current && msg.current) {
              window.location.href = `mailto:bl4ckm0nk3yb4n4n4@gmail.com?subject=${subject.current}&body=${msg.current}`;
            } else {
              e.currentTarget.value = `[i] REQUIRED PROPERTIES ARE MISSING\n${TERMINAL_DEFAULT_PROMPT}`;
            }
          } else if (property == 'help') {
            e.currentTarget.value = HELP_TEXT;
          } else if (property == 'clear') {
            e.currentTarget.value = `${TERMINAL_DEFAULT_PROMPT}`;
          } else {
            //TODO: IF TEXT IS INVALID
            e.currentTarget.value = `[-] INVALID PROPERTY\n${TERMINAL_DEFAULT_PROMPT}`;
          }
        }
      }
    }
  }

  function onFocusHandler(e: FocusEvent<HTMLTextAreaElement>) {
    loadTerminal(e.currentTarget);
  }

  return (
    <section>
      <div>
        <h2>@Contact Me Section&gt;_</h2>
        <form
          noValidate={false}
          className={'w-full mx-auto'}>
          <div
            className={
              'w-full h-fit px-[5px] flex flex-row items-center justify-between bg-pallet-accent/70 border-[2px] border-pallet-accent'
            }>
            <p>@root</p>
            <div>X</div>
          </div>
          <textarea
            onKeyDown={keydownHandler}
            onFocus={onFocusHandler}
            spellCheck={false}
            ref={textarea}
            id='email_input'
            className={
              'aspect-[1/1] md:aspect-[16/9] w-full h-auto p-[10px] bg-pallet-accent/70 text-pallet-primary font-semibold md:!text-2xl'
            }></textarea>
        </form>
      </div>
    </section>
  );
}

export default ContactMeSection;
