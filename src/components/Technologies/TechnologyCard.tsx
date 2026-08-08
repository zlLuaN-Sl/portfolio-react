import { Tecnologia } from "./Cards";

type Props = {
    cardList: Tecnologia;
}

export const TechnologyCard = ({cardList}: Props) => {
    const Icon = cardList.icon; 

    return(
        <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg bg-[#111a24] border border-white/10 transition-all duration-300 hover:border-[#7652df]/50 hover:-translate-y-1">
            <Icon 
                className="w-12 h-12 mb-2"
                style={{color: cardList.color}}
            /> 
            <h3 className="text-sm font-semibold text-white">
                {cardList.name}</h3>
            <p className="text-xs leading-tight text-gray-400">
                {cardList.description}</p>
        </div>
    )
};