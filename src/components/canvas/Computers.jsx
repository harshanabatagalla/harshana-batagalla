import React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor='black'/>
      <spotLight
       position={[-20, 50, 10]}
       angle={0.12}
       penumbra={1}
       intensity={10000}
       castShadow
       shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} />
      <primitive 
        object={computer.scene} 
        scale={0.75}
        position={[0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.01]}
      />

    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{preserveDrawingBuffer: true }}
    >
      <Suspense fallback={< CanvasLoader />}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas