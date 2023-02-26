import { useEffect, useMemo, useRef } from "react"
import { DoubleSide } from "three"

export const CustomObject = () => {
  const geometryRef = useRef()

  const verticesCount = 10 * 3 // 10 triangles, 3 vertices each
  const positions = useMemo(() => {
    const p = new Float32Array(verticesCount * 3) // each vertex will have an x,y,z coordinate
    for (let i = 0; i < verticesCount * 3; i++) {
      p[i] = (Math.random() - 0.5) * 3
    }
    return p
  }, [])

  useEffect(() => {
    geometryRef.current.computeVertexNormals()
  }, [])

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute attach={"attributes-position"} count={verticesCount} itemSize={3} array={positions} />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={DoubleSide} />
    </mesh>
  )
}
