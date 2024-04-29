import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold">
        NextJS Adventure - All concepts in one place
      </h2>
      <p className="max-w-4xl mx-auto leading-8 text-lg font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ut
        iusto odit soluta eligendi, ex architecto sint expedita sapiente eos
        distinctio sit impedit blanditiis minus rem natus mollitia cupiditate
        molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero, nesciunt voluptatibus! Nemo, ipsa? Voluptates neque cumque
        numquam sapiente corrupti reprehenderit officia a consectetur ut.
        Tempore provident laborum alias perferendis veritatis eaque est
        excepturi.
      </p>
    </main>
  );
}
