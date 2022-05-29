import { Box, Typography } from '@mui/material'

import React from 'react'
import Link from './Link'

const Footer = () => {
  return (
    <Box
      sx={{ bottom: 0, position: 'fixed', width: '100%', py: 1 }}
      component="footer"
    >
      <Typography textAlign="center" variant="subtitle1">
        Created by <Link href="https://brain.tkaczyk.dev/">Adam Tkaczyk</Link>
      </Typography>
    </Box>
  )
}

export default Footer
