interface SkillBadgeProps {
    name: string;
}

export default function SkillBadge({name}: SkillBadgeProps) {
    return (
        <div className="flex justify-center px-3 py-2 min-w-[70] text-[#20E9FF] font-bold text-sm md:text-xl bg-[#1b1f3f] rounded-full m-2 text-center">
            {name}
        </div>
    )
}