import React, { useMemo } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

const Particles = () => {
  const { scene } = useThree()
  const particleCount = 10000
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 100
    }
    return pos
  }, [])

  useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3),
    )

    const material = new THREE.PointsMaterial({ size: 0.1, color: 0xffffff })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
  }, [scene, positions])

  return null
}

export default function HeroComponent() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Particles />
    </Canvas>
  )
}
