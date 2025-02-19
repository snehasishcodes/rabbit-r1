import { Html, useProgress } from "@react-three/drei";

export default function Loading() {
    const { progress } = useProgress();

    return (
        <Html>
            <div className="flex flex-col justify-center items-center gap-6 font-medium text-2xl">
                Loading {progress}%
            </div>
        </Html>
    )
}