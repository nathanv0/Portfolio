import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room.jsx";
import HeroLight from "./HeroLight.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({query:"(max-width: 1024px)"});
    const isMobile = useMediaQuery({query:"(max-width: 768px)"});

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45}}>
            /* Move around the box */
            <OrbitControls
            enabledPan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            />

            <HeroLight />

            <group scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            /*Set default rotation for nice view*/
            rotation={[0, -Math.PI / 4, 0]}>
                <Room />
            </group>

        </Canvas>
    )
}
export default HeroExperience
