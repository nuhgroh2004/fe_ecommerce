import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'framer-motion'

type AnimateDecoration = {
  sxRoot: SxProps<Theme>
  sxImgContainer: SxProps<Theme>
  initial: TargetAndTransition | VariantLabels | boolean
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean
  transition: Transition
  image: {
    imageUrl: string
    width: number
    height: number
  }
}

export const animatedDecorations: Array<AnimateDecoration> = [
  {
    sxRoot: {
      top: -30,
      right: 40,
    },
    sxImgContainer: {
      width: 250,
    },
    initial: { rotate: -20, opacity: 0, scale: 2, x: 200 },
    animate: { rotate: 0, opacity: 1, scale: 1, x: 0 },
    transition: {
      delay: 0.35,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/topi-pantai.png',
      width: 550,
      height: 471,
    },
  },
  {
    sxRoot: {
      top: 0,
      left: 0,
    },
    sxImgContainer: {
      width: 250,
    },
    initial: { rotate: 10, opacity: 0, scale: 1.25, x: -100 },
    animate: { rotate: -25, opacity: 1, scale: 1, x: 0 },
    transition: {
      delay: 0.35,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/topi.png',
      width: 458,
      height: 309,
    },
  },
  {
    sxRoot: {
      left: 234,
      bottom: 272,
      transform: 'rotate(-45deg)',
    },
    sxImgContainer: {
      width: 100,
    },
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: {
      delay: 0.52,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/pita.png',
      width: 100,
      height: 90,
    },
  },
  {
    sxRoot: {
      left: 290,
      bottom: 230,
      transform: 'rotate(13deg)',
    },
    sxImgContainer: {
      width: 100,
    },
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: {
      delay: 0.52,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/pita.png',
      width: 100,
      height: 90,
    },
  },
  {
    sxRoot: {
      left: -70,
      bottom: -160,
    },
    sxImgContainer: {
      width: 400,
    },
    initial: { rotate: 0, opacity: 0, y: 300 },
    animate: { rotate: 30, opacity: 1, y: 0 },
    transition: {
      delay: 0.35,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/kaos.png',
      width: 900,
      height: 1000,
    },
  },
  {
    sxRoot: {
      left: 270,
      bottom: 106,
    },
    sxImgContainer: {
      width: 148,
    },
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: {
      delay: 0.52,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/edding.png',
      width: 217,
      height: 320,
    },
  },
  {
    sxRoot: {
      bottom: 0,
      left: 100,
    },
    sxImgContainer: {
      width: 200,
    },
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: {
      delay: 0.48,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/marker.png',
      width: 200,
      height: 300,
    },
  },
  {
    sxRoot: {
      right: -30,
      bottom: -230,
    },
    sxImgContainer: {
      width: 460,
    },
    initial: { rotate: 0, opacity: 0, scale: 1.1, x: 200 },
    animate: { rotate: -32, opacity: 1, scale: 1, x: 0 },
    transition: {
      delay: 0.35,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/model.png',
      width: 500,
      height: 480,
    },
  },
  {
    sxRoot: {
      bottom: -90,
      right: 350,
    },
    sxImgContainer: {
      width: 180,
    },
    initial: { rotate: 20, opacity: 0, scale: 1.1, x: 200 },
    animate: { rotate: -30, opacity: 1, scale: 1, x: 0 },
    transition: {
      delay: 0.2,
      type: 'spring',
      bounce: 0,
    },
    image: {
      imageUrl: '/images/hero/parfum.png',
      width: 180,
      height: 180,
    },
  },
]
