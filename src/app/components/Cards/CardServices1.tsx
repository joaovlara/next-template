import React from "react";
import Card from "./Card";
import { FiArrowRight } from "react-icons/fi";

const CardServices1 = () => {
  return (
    <Card
      variant="dark"
      className="card w-[120vw] md:w-[70vw] md:min-h-125 text-brand-light"
    >
      {/* Wrapper principal: h-full e justify-between empurram a parte inferior para a base */}
      <div className="flex flex-col justify-between h-full p-6 md:p-12">
        {/* Seção Superior: Grid com os textos */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-3xl md:text-5xl uppercase font-bold font-bakbak">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h3>
          </div>
          <div className="pt-9">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, repudiandae magni itaque aperiam ipsum illo
              reprehenderit aut, adipisci, nobis blanditiis officiis tenetur
              cumque? Molestias ipsa delectus maiores earum, enim voluptatibus.
            </p>
          </div>
        </div>

        {/* Seção Inferior: Card interno e Seta alinhados nas extremidades */}
        <div className="grid grid-cols-2 items-center md:mt-6 gap-6">
          <Card variant="teal" className="p-12 min-h-75">teste</Card>

          {/* Mobile: justify-self-start (início). Desktop: md:justify-self-end (final) */}
          <div className="rounded-full p-3 w-fit bg-brand-orange justify-self-start md:justify-self-end">
            <FiArrowRight size={32} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardServices1;
