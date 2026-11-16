import React from "react";
import Card from "./Card";

const CardServices1 = () => {
  return (
    <Card variant="teal" className="card w-[110vw] md:w-[70vw] h-125">
      <div className="grid grid-cols-2 p-6">
        <div>
          <h3 className="text-3xl uppercase font-semibold">titulo h3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            ipsa dolores eveniet mollitia explicabo incidunt unde{" "}
          </p>
        </div>
        <div>
          <Card className="aspect-square w-30"> card </Card>
        </div>
      </div>
    </Card>
  );
};

export default CardServices1;
