import Image from "next/image";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  skills?: string[];
}

export default function ProjectCard({ title, description, imageUrl, link, skills = [] }: ProjectCardProps) {
  return (
    <div className="bg-[#111326] rounded-xl shadow-lg overflow-hidden w-80 p-5 x-2 border-gray-700 m-2">
      <div className="flex justify-center">
          <Image src={imageUrl} alt={title} width={320} height={180} className="rounded-md object-cover w-[320px] h-[180px]" />
      </div>
      <div className="mt-2 text-left">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-gray-300 leading-[1.1] mb-2">{description}</p>
      </div>

      <div className="flex flex-wrap mb-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>

      <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-3 py-1 border border-white text-white rounded transition-colors duration-300 hover:bg-white hover:text-black"
        >
          View Project
      </a>
    </div>
  );
}
