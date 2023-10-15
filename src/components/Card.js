import React from "react";

function Card({title, items, description, imgUrls}) {
    const countImg = () => {
        if (imgUrls.length > 1) {
            return (<div className={'flex flex-col'}>
                {imgUrls.map((imgUrl) => {
                    return <img className="w-[225px] h-1/2" src={imgUrl} alt={title}/>

                })}
            </div>)
        } else {
            return <img className="w-1/2" src={imgUrls[0]} alt={title}/>
        }


    };
    return (
        <div className="rounded shadow-lg overflow-hidden flex h-72 w-[393px]">
            {countImg()}
            <div className="px-4 py-4 w-4/5">
                <h2 className="font-bold text-2xl mb-2">{title}</h2>
                <ul className="list-disc pl-5 font-['Nunito_Sans, sans-serif;'] font-semibold  text-base">
                    {items && items.map(item => <li className={"text-[#D2AD81]"} key={item}><span
                        className={"text-black"}>{item}</span></li>)}
                </ul>
                <p className="text-base mt-4 font-['Nunito_Sans, sans-serif;'] font-medium">{description}</p>
            </div>
        </div>
    );
}

export default Card;