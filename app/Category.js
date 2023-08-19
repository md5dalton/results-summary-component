import Image from "next/image"

export default ({ icon, category, score }) => (
    <div className="flex items-center">
        <Image src={icon} width="20" height="20" />
        <p className="grow">{category}</p>
        <p>{score} / 100</p>
    </div>
)