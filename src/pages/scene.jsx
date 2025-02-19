import { useRef } from "react";
import { CameraControls, Center, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import R1Model from "../models/r1.jsx";

export default function Scene() {
    const cameraControlsRef = useRef();

    // const ACTION = {
    //     NONE: 0,
    //     ROTATE: 1,
    //     TRUCK: 2,
    //     OFFSET: 4,
    //     DOLLY: 8,
    //     ZOOM: 16,
    //     TOUCH_ROTATE: 32,
    //     TOUCH_TRUCK: 64,
    //     TOUCH_OFFSET: 128,
    //     TOUCH_DOLLY: 256,
    //     TOUCH_ZOOM: 512,
    //     TOUCH_DOLLY_TRUCK: 1024,
    //     TOUCH_DOLLY_OFFSET: 2048,
    //     TOUCH_DOLLY_ROTATE: 4096,
    //     TOUCH_ZOOM_TRUCK: 8192,
    //     TOUCH_ZOOM_OFFSET: 16384,
    //     TOUCH_ZOOM_ROTATE: 32768
    // }

    return (
        <group>
            <Center left>
                <R1Model scale={[0.7, 0.7, 0.7]} rotation={[0, 0, 0]} />
            </Center>

            {/* 
            <directionalLight position={[1, 1, 1]} intensity={10} />
            <spotLight position={[1, 1, 1]} intensity={10} /> */}
            {/* Global ambient light */}
            <ambientLight intensity={2} />

            {/* top directional light */}
            <directionalLight
                position={[0, 10, 0]}
                intensity={5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            {/* bottom directional light */}
            <directionalLight
                position={[0, -10, 0]}
                intensity={5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            {/* back directional light */}
            <pointLight
                position={[0, 0, -10]}
                intensity={5}
                color="#fe5605"
            />
            {/* front directional light */}
            {/* <directionalLight
                position={[0, 0, 10]}
                intensity={5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            /> */}

            <CameraControls
                ref={cameraControlsRef}
                minZoom={1}
                maxZoom={100}
                minDistance={5}
                maxDistance={25}
                makeDefault
            />

            <PerspectiveCamera
                ref={cameraControlsRef}
                makeDefault
                fov={60}
                near={1}
                far={100}
                position={[5, 0, 0]}
            />


        </group>
    )
}