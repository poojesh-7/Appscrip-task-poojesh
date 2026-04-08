import Image from "next/image"

const Arrow=({inverted=false, isWhite=false})=>{
    return <Image className={inverted?"arrow inverted":"arrow"} src={isWhite?"https://res.cloudinary.com/djae8jgjo/image/upload/v1775653282/white_arrow_rxlpks.png":"https://res.cloudinary.com/djae8jgjo/image/upload/v1775613657/arrow_sobrxv.png"} alt="arrow" width={20} height={20} style={{height:`${isWhite && "10px"}`}} />
}

export default Arrow;   