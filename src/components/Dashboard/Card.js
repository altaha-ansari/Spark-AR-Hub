import React from 'react';
import { Paper, Grid, Card, CardHeader, CardContent, Avatar } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkIcon from '@material-ui/icons/Link';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ArchiveIcon from '@material-ui/icons/Archive';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';


function EffectCard({ data }){

    const { title, date, active, platform, thumbnail } = data;
    return <Grid item xs={12}>
             <Paper elevation={3}>
               <Card>
                 <CardHeader
                 avatar={<Avatar style={active ? {border: '3px solid #64dd17'} : {border: '3px solid red'}} src={thumbnail}> </Avatar>}
                 title={title}
                 subheader={date}
                 />
                 <CardContent style={{display: 'flex', justifyContent: 'space-between'}}>
                     { platform === 'instagram' ? <InstagramIcon/> : <FacebookIcon/>}
                     <MobileScreenShareIcon/>
                     <LinkIcon/>
                     <AssessmentIcon/>
                     <FileCopyIcon/>
                     <ArchiveIcon/>
                 </CardContent>
               </Card>         
             </Paper>
           </Grid>
}

export default EffectCard;