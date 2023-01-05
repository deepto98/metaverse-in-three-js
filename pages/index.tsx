
import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div className='container'>
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
    </div>
  );
};
export default Home;