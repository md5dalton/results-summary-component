import Image from "next/image"

export default ({ icon, name, score }) => (
    <div>
        <Image src={icon} width="20" height="20" />
        <p>{name}</p>
        <p>{score} / 100</p>
    </div>
)