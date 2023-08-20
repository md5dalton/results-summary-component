import Image from "next/image"

export default ({ icon, category, score, color }) => {
    
    const colors = {
        red: "text-red bg-red/5",
        yellow: "text-yellow bg-yellow/5",
        green: "text-green bg-green/5",
        blue: "text-blue bg-blue/5",
    }

    return (
        <div className={`md:text-lg flex items-center h-14 rounded-xl p-4 gap-x-3 ${colors[color]}`}>
            <Image src={icon} width="20" height="20" alt="category icon" />
            <p className="font-medium grow" >{category}</p>
            <p className="font-bold text-dark-navy">{score}<span className="opacity-50"> / 100</span></p>
        </div>
    )
}