
import { Canvas, useThree } from '@react-three/fiber'
import { NextPage } from 'next'
import AnimatedBox from '../components/AnimatedBox';
import CameraOrbitController from '../components/CameraOrbitController';
import { OrbitControls, Stats,PerspectiveCamera, OrthographicCamera } from '@react-three/drei';
import TestGeometry from '../components/TestGeometry';

const Home: NextPage = () => {
  const testing = true;
  // const testing = false;
  return (
    <div className='container'>

      {/*Cameras can be implemented either by changing the default camera of Canvas, or by using a separate
      component  */}
      {/* Default Camera Camera is a Perspective Camera with 75,0.1,1000 */}
      {/*Change default : <Canvas camera={{fov:75,near:2, far:100}}> */}

      <Canvas >
        {/* To specify the  camera using a Custom Component */}
        
        {/* <perspectiveCamera  args={[50,1,0.1,100]}/> //using R3F component fov,aspect ratio(width/height), near, far */}
        {/* <PerspectiveCamera makeDefault/> // using drei component */}

        {/* <Canvas orthographic camera={{left:-5,right:5,top:5,bottom:-5,zoom:50}}> */} // orthographic camera


        {/* Only show for development */}
        {testing ? <Stats /> : null} //shows frame rate
        {testing ? <axesHelper args={[2]} /> : null}
        {testing ? <gridHelper args={[10, 10]} /> : null} //size,boxes

        {/* <CameraOrbitController/> //our custom OrbitCOntroller */}
        <OrbitControls /> //using drei's OrbitControls instead of our custom one

        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        {/* //Mesh = Material + Geometry */}
        {/* <AnimatedBox isTesting={testing} /> */}
        <TestGeometry />
      </Canvas>
    </div>
  );
};
export default Home;
