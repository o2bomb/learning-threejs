import { Canvas } from "@react-three/fiber"
import ReactDOM from "react-dom/client"
import { Experience } from "./Experience"
import "./style.css"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <>
    <Canvas
      // orthographic
      camera={{
        // zoom: 100,
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}>
      <Experience />
    </Canvas>
  </>,
)
