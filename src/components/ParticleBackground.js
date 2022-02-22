import Particles from "react-tsparticles"
import particlesConfig from "../particlesjs-config"

const ParticleBackground = () => {
    return <div className="particle">
        <Particles params={particlesConfig}></Particles>
    </div>
};

export default ParticleBackground