import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { Sidebar, Videos } from  './index'

import { fetchFromAPI } from '../utils/fetchFromApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}` )
    .then((data) => setVideos(data.items) )
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box sx={{ minHeight: {xs: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: {xs: 0, md: 2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflow:'auto', minHeight: '90vh', flex: 2  }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#f31503'}}>
            Videos
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed