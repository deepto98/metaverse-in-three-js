## Setup

1. `npx create-next-app@latest --typescript`
2. `npm install three @react-three/fiber`
3. `npm i -D @types/three`
4. `npm install next-transpile-modules --save-dev`
5. Ways to resize components:
    ```
    Method 1 :
    //width,height,depth
    <mesh scale = {[0.5,0.5,0.5]}>
        <boxGeometry />
        <meshStandardMaterial />
    </mesh>
    
    Method 2:
    <mesh>
    //width,height,depth
        <boxGeometry args = {[0.5,0.5,0.5]}/>
        <meshStandardMaterial />
    </mesh>
    ```
    If args are changed, entire object has to be reconstructed. For scale, existing obj is changed. So, Method 1 is better for performance
6. Animations done using UseFrame : https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations#useframe 
7. Drei : Library of helpers that can be used in R3F https://github.com/pmndrs/drei