# 42. First R3F Application

## What I learned

- Learnt about r3f setup (`npm install three@0.148 @react-three/fiber@8.9`)
- r3f uses a declarative approach to creating three.js objects. Nested objects will automatically be assigned to certain properties on the parent object, given that it ends with "Material", "Geometry"

```jsx
;<mesh position={[1, 2, 3]} roation-x={0.5}>
  <boxGeometry />
  <meshBasicMaterial color="red" />
</mesh>

// equivalent to
const mesh = new THREE.Mesh()
mesh.position.set(1, 2, 3)
mesh.rotation.x = 0.5
mesh.geometry = new THREE.BoxGeometry(1, 1, 1)
mesh.material = new THREE.MeshBasicMaterial({ color: "red" })
```

- The `attach` prop tells r3f which property to attach the component's object to. As mentioned in the last point, r3f will scan the component's name, and will automatically assign component objects based on their names

```jsx
;<mesh>
  <boxGeometry attach="geometry" />
  <meshBasicMaterial attach="material" color="red" />
</mesh>

// equivalent to
const mesh = new THREE.Mesh()
mesh.geometry = new THREE.BoxGeometry(1, 1, 1)
mesh.material = new THREE.MeshBasicMaterial({ color: "red" })
```

- A Canvas is used to initialise the 3d world. This also initialises the camera, with defaults that can be overriden via the `camera` prop. r3f automatically handles the responsiveness of the canvas, by adjusting the aspect ratio and the size of the canvas when the viewport is resized
- r3f also applies sensible defaults to make the scene look better. By default, it specifies THREE.ACESFilmicToneMapping for the tone map, turns on antialiasing, and sets output encoding to sRGBEncoding
- By default the initialised canvas is also transparent, and has a pixel ratio configured for good performance
- How to animate objects using the `useFrame()` hook and React refs
- A group element is used to group meshes. It can also be animated
- THREE.OrbitControls can be used declaratively by using `extend()` to allow usage of the orbitControls element in JSX. The `useThree()` hook provides access to the scene's camera and DOM element

```jsx
import { extend, useThree } from "@react-three/fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

extend({ OrbitControls })

export const Experience = () => {
  const { camera, gl } = useThree()

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      ...
    </>
  )
}
```

- directionalLight and ambientLight elements can be included to light up the scene. By default, the directional light will be placed directly above 0,0. Any objects directly underneath this light will appear black because of this
- A custom geometry can be created using classic three.js techniques (using Float32Array, assigning vertex positions via a buffer attribute attached to a buffer geometry via the `attach` prop). The `useMemo()` hook is used to store the vertices positions in between component rerenders
- A custom object's geometry may not have the correct normals by default, resulting in a no-colour object. `computeVertexNormals()` can be called once in a `useEffect()` hook on the object's geometry in order to calculate the correct normals for the geometry, thus fixing the colour of the object
- on a material, THREE.DoubleSide can be passed to the `side` prop to enable double-sided faces
