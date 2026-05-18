'use client'

import React from 'react'

// hooks
import { useTheme } from '@mui/material'

// components
import Box from '@mui/material/Box'
import HomeHeroContent from './home-hero/home-hero-content'

const HomeHero = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='home-hero'
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: palette.mode === 'dark' ? '#1b2b3c' : '#e8f3ff',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        component='video'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        src='/images/hero/hero-video.mp4'
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            palette.mode === 'dark'
              ? 'linear-gradient(180deg, rgba(6, 10, 16, 0.65) 0%, rgba(6, 10, 16, 0.35) 55%, rgba(6, 10, 16, 0.6) 100%)'
              : 'transparent',
          zIndex: 1,
        }}
      />
      <Box
        sx={(theme) => ({
          position: 'relative',
          zIndex: 2,
          color: theme.palette.mode === 'dark' ? theme.palette.common.white : 'inherit',
          textShadow:
            theme.palette.mode === 'dark'
              ? '0 12px 30px rgba(0, 0, 0, 0.5)'
              : 'none',
        })}
      >
        <HomeHeroContent />
      </Box>
    </Box>
  )
}

export default HomeHero
