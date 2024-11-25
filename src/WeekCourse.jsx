import React from 'react';
import weekData from './WeekCourceData';
import { Container, Grid, Typography, styled,Box } from '@mui/material';
const staticImg = 'https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a7feae8b035e_Light%20Blue%20Box.svg'

const WeekCourse = () => {
  return (
   <>
<MainStyle>
    <Container maxWidth='lg'>
        <Typography className='heading'>
        By the end of the 4-week course...
        </Typography>
        <Grid container spacing={5}>
    {weekData.map((item) => (
    <Grid item lg={3} md={4} sm={6} xs={12}  key={item.id}>
        <img src={item.url} alt="icon" className='icons'/>
        <Typography className='details'>{item.detail}</Typography>
    </Grid>
    ))}
        </Grid>
    </Container>
    <img src={staticImg} className='staticImg' alt="staticImg" />
</MainStyle>
   </>
  )
};
const MainStyle = styled(Box)({
position:'relative',
padding:'96px 0',
"& .staticImg":{
    position:'absolute',
    top:0,
    right:100,
},
"& .heading":{
    color:'#0f0f0f',
    fontSize:38,
    fontWeight:700,
    marginBottom:36,
},
"& .icons":{
height:40,
width:40,
marginBottom:12,
},
"& .details":{
color:'#0f0f0f',
fontSize:16,
marginBottom:16,
},
})

export default WeekCourse;