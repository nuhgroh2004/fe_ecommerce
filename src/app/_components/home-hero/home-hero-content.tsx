'use client'

import React, { memo, useEffect, useState } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link } from 'react-scroll'

// assets
import Logo from '@/assets/logo.svg'

// motion
import { motion, AnimatePresence } from 'framer-motion'

// configs
// import { AppConfig } from '@/configs'

const MotionTypography = motion.create(Typography)

const HomeHeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const SERVICES_TEXTS = [
    'Koleksi Pria & Wanita',
    'Kualitas Premium Lokal',
    'Tren Fashion Terkini',
    'Pengiriman Seluruh Indonesia',
    'Pakaian Custom & Eksklusif',
    'Aksesori & Produk Lifestyle',
    'Katalog Produk Terbaru',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES_TEXTS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [SERVICES_TEXTS.length])

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.5,
      }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.15,
        type: 'spring',
        bounce: 0.15,
      }}
    >
      <Stack
        direction='column'
        sx={{
          position: 'relative',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack
          direction='row'
          sx={(theme) => ({
            mb: 2,
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.complex,
            }),
            div: {
              transition: theme.transitions.create(['all'], {
                duration: theme.transitions.duration.complex,
              }),
            },
          })}
        >
          <Box
            sx={() => ({
              width: 24,
              height: 'auto',
              mr: 1.5,
              mt: '2px',
            })}
          >
            <Box component={Logo} />
          </Box>
          <Box>
            <AnimatePresence mode='wait'>
              <MotionTypography
                key={currentIndex}
                variants={{
                  initial: { y: 20 },
                  animate: { y: 0 },
                  exit: { opacity: 0, y: -20 },
                }}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                }}
                sx={(theme) => ({
                  fontSize: {
                    xs: 17,
                    md: 18,
                  },
                  fontWeight: '600',
                  color: theme.palette.primary.main,
                })}
              >
                {SERVICES_TEXTS[currentIndex]}
              </MotionTypography>
            </AnimatePresence>
          </Box>
        </Stack>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            component='h2'
            sx={{
              mb: 4,
              fontSize: { xs: 32, md: 40, lg: 52 },
              color: 'text.hero',
              lineHeight: 1.5,
              fontWeight: '800',
            }}
          >
            Destinasi Utama Fashion
            <br />
            Lokal & Modern
          </Typography>
          <Typography
            sx={{
              mb: 4,
              color: 'text.hero',
              fontWeight: 500,
              lineHeight: 2,
              fontSize: {
                xs: 14,
                md: 17,
              },
            }}
          >
            Brand fashion masa kini yang menghadirkan koleksi 
            <strong> pakaian eksklusif</strong> <br/> untuk menyempurnakan 
            <strong>penampilan Anda</strong> di setiap momen 
            <br />
            dengan <strong>gaya yang berkelas</strong>.
          </Typography>
        </Box>
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: 'spring',
            bounce: 0,
          }}
        >
          <Box
            sx={() => ({
              mt: '120px',
              mb: '-120px',
              textAlign: 'center',
            })}
          >
            <Link
              to='home-about'
              offset={0}
              spy={true}
              smooth={true}
              duration={400}
              style={{ display: 'block' }}
            >
            </Link>
          </Box>
        </motion.div>
      </Stack>
    </motion.div>
  )
}

export default memo(HomeHeroContent)
