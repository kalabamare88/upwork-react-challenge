import React from 'react';
import './index.css';
import Card from './components/Card'
import Tours from './assets/img/tours.png'
import House from './assets/img/house.png'
import Renderings from './assets/img/renderings.png'
import Video from './assets/img/video.png'
import Virtual from './assets/img/virtual.png'
import Photography1 from './assets/img/photography1.png'
import Photography2 from './assets/img/photography2.png'

function App() {
    return (
        <div className="p-10 flex flex-col items-center gap-8">
            <h1 className="text-center text-6xl text-[#1B264F] mb-8 font-semibold">We make creative
                media <br/> that <span className={"text-[#506BCA]"}>adds
                value</span></h1>

            <div className="grid gap-7 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
                <Card
                    title="Photography"
                    items={['Drone Photography', 'Interiors', 'Exteriors / Architectural']}
                    description="Every photograph we produce finds the beauty in your property while serving as a profitable asset."
                    imgUrls={[Photography1, Photography2]}
                />
                <Card
                    title="Virtual Staging"
                    description={["Our staging will help you sell the potential of your space.",
                        <br/>, "We can work off of our own photography or photos you provide."]}
                    imgUrls={[Virtual]}
                />
                <Card
                    title="Renderings"
                    items={['Interiors', 'Exteriors']}
                    description={["Renderings are the gold standard in pre-construction marketing."]}
                    imgUrls={[Renderings]}
                />
                <Card
                    title="Interactive Tours"
                    items={['Matterport', 'Video Walkthroughs']}
                    description={["Give your audience the ability to explore your property without requiring in-person travel."]}
                    imgUrls={[House]}
                />
                <Card
                    title="Floor Plans"
                    items={["On-site Measure", "2D Floor Plans", "3D Floor Plans"]}
                    description={["We produce laser-precise floor plans faster than any other service."]}
                    imgUrls={[Tours]}
                />
                <Card
                    title="Video"
                    items={["Drone Cinematography", "Interiors", "Exteriors / Architectural"]}
                    description={["Video content has higher engagement and will help your property stand out online."]}
                    imgUrls={[Video]}
                />
            </div>

            <button
                className="mt-8 bg-[#1B264F] hover:bg-[#1B269F] text-white uppercase font-bold tracking-[4px] py-3 px-16 rounded-xl">Get
                Started
            </button>
        </div>
    );
}


export default App;