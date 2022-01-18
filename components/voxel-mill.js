import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelMill = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(0, 0, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            0,
            0,
            100
        )
    )   

    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    useEffect(() => {
        const { current: container } = refContainer
        if(container && !renderer)
        {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })

            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            const scale = scH * 0.30
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            ) 

            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.enableRotate = false
            controls.enableZoom = false
            controls.target = target
            setControls(controls)

            loadGLTFModel(scene, '/static/low-poly-mill.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate) 

                frame = frame <= 100 ? frame + 1:frame

                if(frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = 1

                    camera.position.y = 0
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.z * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else
                {
                    controls.update()
                }

                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [])

    return (
        <Box ref={refContainer} className="voxel-mill" m="auto" 
        at={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative">
            {loading && (
                <Spinner 
                    size="xl" 
                    position="absolute"
                    left="50%"
                    top="35%"
                    ml="calc(0px - var(--spinner-size) / 2)"
                    mt="calc(0px - var(--spinner-size))" 
                />
            )}
        </Box>
    )
}

export default VoxelMill

