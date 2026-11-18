import React from "react";
import Card from "./Card";
import { FiArrowRight } from "react-icons/fi"; // Importando o ícone

const CardServices1 = () => {
  return (
    <Card
      variant="teal"
      className="card w-[110vw] md:w-[70vw] h-125 text-brand-light"
    >
      {/* Wrapper principal: h-full e justify-between empurram a parte inferior para a base */}
      <div className="flex flex-col justify-between h-full p-12">
        {/* Seção Superior: Grid com os textos */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-4xl uppercase font-semibold">titulo h3</h3>
            <p className="text-2xl mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              ipsa dolores eveniet mollitia explicabo incidunt unde{" "}
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, repudiandae magni itaque aperiam ipsum illo
              reprehenderit aut, adipisci, nobis blanditiis officiis tenetur
              cumque? Molestias ipsa delectus maiores earum, enim voluptatibus.
            </p>
          </div>
        </div>

        {/* Seção Inferior: Card interno e Seta alinhados nas extremidades */}
        <div className="grid md:grid-cols-2 justify-between items-center mt-6 gap-6">
          <Card className="p-12 w-full">teste</Card>
          <div className="rounded-full flex justify-end p-3 w-fit bg-brand-orange">
            <FiArrowRight size={32} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardServices1;
