
import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'
import { useFrame } from '@react-three/fiber'

const AnimatedBox = () => {
  useFrame(() => {
    console.log("Hi")
  });

  return (
    <mesh scale={[1, 0.5, 0.5]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

const Home: NextPage = () => {


  return (
    <div className='container'>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
};
export default Home;
