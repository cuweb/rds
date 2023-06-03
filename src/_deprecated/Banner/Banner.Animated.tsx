import { useRef } from 'react'
// import { useEffect, useRef } from 'react'
// import { Animation } from './Animation/Animation.js'

export const BannerAnimated = () => {
  //   const gradient = new Animation()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const divStyle = {
    '--gradient-color-1': '#c3e4ff',
    '--gradient-color-2': '#6ec3f4',
    '--gradient-color-3': '#eae2ff',
    '--gradient-color-4': '#b9beff',
  }

  //   useEffect(() => {
  //     if (canvasRef.current) {
  //       gradient.initGradient(canvasRef.current)
  //     }
  //   }, [canvasRef, gradient])

  return (
    <canvas
      //   ref={canvasRef}
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 'auto',
        left: '0',
        bottom: '0',
        overflow: 'hidden',
        opacity: 0.5,
        ...divStyle,
      }}
      data-transition-in
    />
  )
}
