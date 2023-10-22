/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas, ThreeEvent } from "@react-three/fiber"
import { useRef } from 'react'
import { BoxGeometry, MeshBasicMaterial } from "three"
import { OrbitControls as ThreeOrbitControls } from 'three-stdlib';

const geometryRef = new BoxGeometry(1.0, 1.0, 1.0)
const materialRef = new MeshBasicMaterial({ color: 'red'})

const Cube = () => {
	const controls = useRef<ThreeOrbitControls>(null);

	const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {

			if(controls.current){
				console.log('disable')
				controls.current.enableRotate = false
				setTimeout(() => {
					if(controls.current){
						console.log('enable')
						controls.current.enableRotate = true
					} 
				}, 500)
			}
	}

	const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    if(controls.current?.enableRotate){
      console.log('handlePointerUpg')
    }
	}

	return (
		<>
			<OrbitControls ref={controls}/>
			<mesh
				geometry={geometryRef}
				material={materialRef}
				onPointerUp={handlePointerUp}
				onPointerDown={handlePointerDown}
			/>
		</>
	)
}

const Cubes = () => { 
	const canvas = useRef<HTMLCanvasElement>(null)
	return (
		<div style={{width: '500px', height: '500px'}}>
			<Canvas ref={canvas} >
				<Cube />
			</Canvas>
		</div>
	)
};

export default Cubes