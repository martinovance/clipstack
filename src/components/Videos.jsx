import React from 'react'
import { Grid } from '@mui/material';

import { Loader } from './'
import { VideoCard, ChannelCard } from './index'

const Videos = ({ videos, direction, width }) =>  {
  if (!videos?.length) return <Loader />;

  return (
    // <Stack direction={ direction || 'row' } flexWrap='wrap' justifyContent='flex-start' gap={2}>
    <Grid container direction={ direction || 'row' } width={ width || null } spacing={2}>
      {videos.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
    // </Stack>
  )
}

export default Videos;