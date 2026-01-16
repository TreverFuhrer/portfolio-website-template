import PricingTable from './pricing';
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { pricingSection } from "@/content";

type PricingProps = {
  id?: string;
};

export const Pricing = ({ id = "pricing" }: PricingProps) => {
  return (

    <Section id={id} className="section-block bg-(--ink) text-white bg-linear-to-b from-(--ink) via-[#0b3a3a] to-(--ink) ">

      <Container>
        {/* Pricing headline. */}
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">{pricingSection.title}</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
          {pricingSection.description}
        </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-0 py-18 sm:flex-row sm:px-6 sm:py-24 lg:px-24  ">
          <PricingTable/>
          

        </div>

      </Container>


    </Section>
  )
}
