"use client"
import { useId, useRef, useState } from "react";
import { PlusIcon, MinusIcon } from "./icons";
import {motion , AnimatePresence} from 'framer-motion';
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { faqSection } from "@/content";

type AccordionItemProps = {
  question: string;
  answer: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  buttonRef?: React.Ref<HTMLButtonElement>;
};

const AccordionItem = ({question, answer, onKeyDown, buttonRef}: AccordionItemProps) => {
  const[isOpen, setIsOpen] = useState(false);
  const buttonId = useId();
  const panelId = `${buttonId}-panel`;

  return(
   
    <div className="border-b border-white/30">
    <button
      type="button"
      className="flex w-full items-center py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={onKeyDown}
      aria-expanded={isOpen}
      aria-controls={panelId}
      id={buttonId}
      ref={buttonRef}
    >
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon aria-hidden="true" /> :<PlusIcon aria-hidden="true" />}
      
      </button>
      <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div 
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          className="pb-7 mt-4 text-white/70"
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

type FAQsProps = {
  id?: string;
};

export const FAQs = ({ id = "faqs" }: FAQsProps) => {
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const total = faqSection.items.length;
    if (total === 0) {
      return;
    }

    const focusButton = (nextIndex: number) => {
      itemRefs.current[nextIndex]?.focus();
    };

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusButton((index + 1) % total);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusButton((index - 1 + total) % total);
        break;
      case "Home":
        event.preventDefault();
        focusButton(0);
        break;
      case "End":
        event.preventDefault();
        focusButton(total - 1);
        break;
      default:
        break;
    }
  };

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block bg-(--ink) text-white bg-linear-to-b from-[#0b3a3a] to-(--ink) ">
      <Container>
        {/* FAQ headline goes here. */}
        <MotionItem>
          <h2 className="text-5xl sm:text-6xl sm:w-162 mx-auto text-center text-white tracking-tighter">
            {faqSection.title}
          </h2>
        </MotionItem>
        <MotionItem className="mt-12 max-w-162 mx-auto">
          {faqSection.items.map(({question, answer}, index) => (
              <AccordionItem
                key={question}
                question={question}
                answer={answer}
                onKeyDown={(event) => handleKeyDown(event, index)}
                buttonRef={(element) => {
                  itemRefs.current[index] = element;
                }}
              />
          ))}
        </MotionItem>
      </Container>
    </MotionSection>
  )
};
