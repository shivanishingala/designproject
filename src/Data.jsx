
import {Box,styled, Grid, Typography,Container} from '@mui/material';
const array = [
    {
      img: "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a72a4d8b0349_MicrophoneStage.svg",
      detail: "Learn what the best gear is and where to get it",
      defination:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img:"https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a74efc8b034a_UsersThree.svg",
      detail: "How to find guests for your episodes",
      defination:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  et dolore magna aliqua.",
    },
    {
      img: "https://assets.website-files.com/62799e4e6be5a795a08b0306/62799e4e6be5a7ec8d8b0337_Coins.svg",
      detail: "And how to finally make some money",
      defination:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];


const Data = () => {
  
    return (
        <>
          <MainStyle>
          <Container maxWidth="lg">
           <Grid container spacing={3}>
            {array.map((val,id) =>  {
              return  <>
             
              <Grid key={id} item xs={12} sm={6} md={4} lg={4} className='detail_grid'>
               
                <img src={val.img} className='logo'/>
                    <Typography className='detail'>{val.detail}</Typography>
                    <Typography className='dafination'>{val.defination}</Typography>
           
              </Grid>
            
              </>
              })}
              </Grid>
              </Container>
              </MainStyle>
        </>
    )
    
};

const MainStyle = styled(Box)({
   paddingBottom:'30px',
   paddingTop:'40px',
"& .detail":{
    color:'#0f0f0f',
    fontSize:25,
    fontWeight:700,
    margin:12,
},
"& .dafination":{
    color:'#0f0f0f',
    fontSize:18,
    margin:16,
},
"& .logo":{
  marginLeft:10,
},
"& .detail_grid":{
Padding:"96px 0px"
}

})
 
export default Data;