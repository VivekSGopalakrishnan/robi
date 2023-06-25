import { Suspense, } from 'react'
import { Canvas, } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, } from '@react-three/drei'
import theme from '../styles/Theme'
import Robi from "../../Robi"
import Robid from "../../Robi-dark"

const Landing = ({isDarkMode}) => {

  return (
    <div className='fb'>
      <div className='room-background' >
        <Canvas
          style={{ width: `100vw`, height: `100vh`, position: `relative` }}
          shadows>

          <OrbitControls

          />
          <OrthographicCamera
            name="1"
            makeDefault={true}
            zoom={0.30}
            far={100000}
            near={-100000}
            position={[700, 624.2, 500]}
            rotation={[-0.39, 0.6, 0.23]}
            scale={1}
          />

          {/* <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" /> */}


          {/* <ambientLight intensity={0.01} /> */}
          {/* <directionalLight color="purple" intensity={0.1} position={[15,15,200]}     /> */}

          <Suspense fallback={null}>
            {/* <spotLight color = 'red' position={[0,500,600]} intensity={0.5}/> */}
            {/* <directionalLight color="green" intensity={0.1} position={[0,10,0]}     /> */}
            {isDarkMode?<Robid/>:<Robi/>}



          </Suspense>

        </Canvas>
      </div>
    </div>

  )
}



export default Landing