'use client'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, extend, useLoader } from '@react-three/fiber'
import { Mesh } from 'three'
import { Environment, OrbitControls, OrthographicCamera, PerspectiveCamera, Preload, Stars } from '@react-three/drei'
import { GLTFLoader } from 'three-stdlib'




function Box(props: any) {
    const meshRef = useRef<Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)


    useFrame((state, delta) => meshRef.current.rotation.x += delta)

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={event => setActive(!active)}
            onPointerOver={event => setHover(true)}
            onPointerOut={event => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}



function Rocket(){
    const ref=useRef<any>(null!)
    
    const gltf=useLoader(GLTFLoader,'./scene.gltf')
    useFrame((state,delta)=>ref.current.rotation.y+=0.04)
    return <primitive ref={ref} scale={[0.17,0.17,0.17]}  object={gltf.scene} />
}


export default function Render() {
   
    return (
        <Canvas >
            <Suspense>
                {/* <color attach='background' args={['rebeccapurple']} /> */}
                <pointLight color="#f6f3ea" position={[10, 5, 10]} intensity={2} />
                <ambientLight color='0x404040' />
                <directionalLight color='blue' position={[0,0,5]} />
                <perspectiveCamera/>
                <OrbitControls/>
                {/* <Stars /> */}
                <Rocket/>
            </Suspense>
        </Canvas>
      
    

    )
}