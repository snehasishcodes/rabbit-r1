/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
// import r1 from "../assets/rabbit.glb";

export default function R1Model({ controlRef, setRotationState, ...props }) {
    const ref = useRef();
    const { nodes, materials } = useGLTF("/models/rr1.glb");

    return (
        <group ref={ref} {...props}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials['Material.010']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials['Material.007']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials['Material.009']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials['Material.006']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials['Material.005']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials['Material.008']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials['Material.004']}
                />
            </group>
        </group>
    )
}
