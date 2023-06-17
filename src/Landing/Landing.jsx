import { Suspense, } from 'react'
import { Canvas, } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, } from '@react-three/drei'

import Robi from "../../Robi"

const Landing = () => {
 
  return (
    <div className='fb'>
      <div className='room-background' >
        <Canvas
        size={[`200px`,`300px`]}
        style={{width: `100vw`, height: `100vh`, position: `relative` }}
          shadows>
          <OrbitControls/>
          <OrthographicCamera
     
            makeDefault
            zoom={40}
            near={0.0001}
            far={200}
            position={[0, 2, 7]}
          />
         

          <ambientLight intensity={0.01} />
          {/* <directionalLight color="purple" intensity={0.1} position={[15,15,20]}     /> */}
          <Suspense fallback={null}>
          {/* <directionalLight color="green" intensity={0.1} position={[0,10,0]}     /> */}

            <Robi/>

          </Suspense>

        </Canvas>
      </div>
    </div>

  )
}



export default Landing