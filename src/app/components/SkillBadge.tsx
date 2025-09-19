interface SkillBadgeProps {
    name: string;
}

export default function SkillBadge({name}: SkillBadgeProps) {
    return (
        <div className="inline-block px-2 text-white bg-[#004f3b]/70 rounded m-1">
            {name}
        </div>
    )
}