
import { Canvas, useThree } from '@react-three/fiber'
import { NextPage } from 'next'
import AnimatedBox from '../components/AnimatedBox';
import CameraOrbitController from '../components/CameraOrbitController';
import { OrbitControls, Stats } from '@react-three/drei';

const Home: NextPage = () => {
  const testing = false;
  return (
    <div className='container'>
      <Canvas>

        //Only show for development
        {testing ? <Stats /> : null} //shows frame rate
        {testing ? <axesHelper args={[2]} /> : null}

        {/* <CameraOrbitController/> //our custom OrbitCOntroller */}
        <OrbitControls /> //using drei's OrbitControls instead of our custom one

        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
 
        <AnimatedBox isTesting={testing}/>
      </Canvas>
    </div>
  );
};
export default Home;
