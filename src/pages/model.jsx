import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loading from "./loading";
import Scene from "./scene";

export default function Model() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div id="branding" className="hidden lg:flex absolute -top-2 bg-[url('/assets/notch4.svg')] w-[18%] aspect-[11/4] h-auto bg-center bg-contain bg-no-repeat flex-row justify-center items-center">
                <h2 className="text-3xl tracking-wide r1fontsemibold">rabbit</h2>
            </div>

            <div className="hidden lg:flex absolute w-full bottom-10 flex-col justify-center items-center gap-0 leading-none r1font">
                <h2 className="text-main text-[6rem] r1fontbold">AI in Action</h2>
            </div>

            <div className="hidden lg:flex absolute w-[20%] top-[10%] left-[5%] flex-col justify-center items-center gap-10 tracking-wider leading-none">
                <div className="flex flex-col">
                    <h2 className="text-lg text-main r1fontmedium">speak & ask</h2>
                    <p className="r1fontnormal">ask unlimited questions, get unlimited answers</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg text-main r1fontmedium">identify objects</h2>
                    <p className="r1fontnormal">identify and get more information about anything you see with the camera</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg text-main r1fontmedium">bidirectional translation</h2>
                    <p className="r1fontnormal">instantly translate between more than 100 languages and understand any language with the camera</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg text-main r1fontmedium">generative UI</h2>
                    <p className="r1fontnormal">change the look of the r1 interface to any style you want</p>
                </div>
            </div>

            <div className="hidden lg:flex absolute w-[20%] top-[10%] right-[5%] flex-col justify-center items-center gap-10 tracking-wider leading-none">
                <div className="flex flex-col">
                    <h2 className="text-lg text-main r1fontmedium">memory recall</h2>
                    <p className="r1fontnormal">recall your past conversations, notes, voice recordings, images, search results and more</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg text-main r1fontmedium">teach mode</h2>
                    <p className="r1fontnormal">record yourself performing a specific task on any website so your personal agent can do similar tasks for you in the future</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg text-main r1fontmedium">LAM playground</h2>
                    <p className="r1fontnormal">ask your personal agent to navigate websites, check information, and take actions on any digital interface on your behalf</p>
                </div>
            </div>

            <Canvas className="w-full h-full flex flex-row justify-center items-center bg-transparent">
                <Suspense fallback={<Loading />}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    )
}