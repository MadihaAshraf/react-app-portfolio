import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
 // const computer = useGLTF("./model/check.gltf");

  return (
    //mesh = component serves as the root element for the 3D scene.
    <mesh>  
       {/* creates a hemisphere light in the scene with props of intensity that control light/ brightness and groundcolor that sets light of ground level. */}
      <hemisphereLight intensity={0.16} groundColor='black' /> 
      <spotLight
        position={[-20, 50, 10]} //specifying the position of the light in 3D space
        angle={0.12} //determining the angle of the light's cone
        penumbra={1}  //controls the softness of the edges of the light
        intensity={1}  //sets the brightness of the light
        castShadow  //enable light to cast shadow
        shadow-mapSize={1024} //size of shadow map
      />
      {/* //light on screen */}
      <pointLight intensity={1} /> 
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};


//show model

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");  // if we are on mobile device

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    //canvas= react three fiber library that represent canvas element where 3D scene will be rendered
    <Canvas
      frameloop='demand' //rendering(visual representation) loop of 3D model will be controlled manually by app rather than library.
      shadows
      dpr={[1, 2]}  //sets the device pixel ratio (DPR) to a range of 1 to 2, which can improve rendering quality on high-resolution screens.
      camera={{ position: [22, 3, 5], fov: 25 }}
      //object that configures the WebGL renderer
      //reserveDrawingBuffer: true enables the preservation of the drawing buffer, which can be useful for taking screenshots or capturing the rendered scene
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}  //allows to rotate in a spacific angle
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
