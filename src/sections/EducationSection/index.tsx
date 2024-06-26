import { CardEducation } from '../../components/CardEducation';
import { CardExperiencie } from '../../components/CardExperiencie';
import { Title } from '../../components/Title';

export const EducationSection = () => {
  return (
    <section className="bg-zinc-800 flex flex-col py-14 text-white font-montserrat">
      <Title>Experiências</Title>
      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 items-center mt-10">
        <CardExperiencie />
        <CardEducation />
      </div>
    </section>
  );
};
