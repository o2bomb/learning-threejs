# 43. Drei

## What I learned

- Learnt about [drei](https://github.com/pmndrs/drei), a collection of useful helpers for r3f
- drei's OrbitControls, which comes with movement easing by default
- TransformControls, allowing users to translate, scale, and rotate objects depending on the set `mode` prop
- PivotControls, similar to TransformControls, but it looks like it doesn't support object scaling. By default, its size scales with the perspective of the camera, which can be changed by specifying the `fixed` prop
- Html allows html elements to be attached to objects in the scene. By attaching a css class to the element via the `wrapperClass` prop, it can be styled
- Text allows certain fonts to be rendered within the 3d world. It is performant and supports line-breaks. It can also be transformed within the 3d world
- The Float component can be wrapped around an object to make it "hover" like a hoverboard
- Planar objects can easily be made reflective by specifying its material as MeshReflectorMaterial. This material can be made more mirror-like by specifiying a value between 0-1 for the `mirror` prop. The `color` prop changes the colour of the mirror, however the colour produced is not guaranteed to be accurate

![image](https://user-images.githubusercontent.com/41817193/221412136-be2d18b4-50a5-4c29-9d99-de22739d5422.png)
