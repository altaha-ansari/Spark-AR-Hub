import React from 'react';
import { Paper, Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import IsMobileView from '../../utils/IsMobileView';

const data = [{title: 'Total Impressions', total: 306,  partial: 26, option: 7},
              {title: 'Total Captures', total: 26,  partial: 2, option: 7},
              {title: 'Total Shares', total: 6,  partial: 2, option: 7}];

const CardDisplay = ({ data }) => {
    const { title, total, partial, option} = data;
    return (
        <Grid item xs={12}>
        <Paper elevation={3}>
          <Card>
            <CardHeader
            title={title}
            />
            <CardContent>
               <Typography variant='h3'> {total} </Typography>
               <div style={{display: 'flex', justifyContent: 'flex-start' }}>
               <Typography style={{color: 'green', marginRight: '0.2em'}}> {`+${partial}`} </Typography>
               <Typography>{` in last ${option} days`}</Typography>
               </div>
            </CardContent>
          </Card>         
        </Paper>
      </Grid>
    );
}

function Insights(){
     
    let display;

    if(IsMobileView){
        display = <Grid container spacing={2}>
                     { data.map((x,y)=>  <CardDisplay key={y} data={x}/>  ) }
                  </Grid>
    }
    else 
    {
        display = <div>Comp</div>
    }

    return display;
}

export default Insights;

