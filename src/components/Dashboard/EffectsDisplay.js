import React from 'react';
import IsMobileView from '../../utils/IsMobileView';
import { Grid } from '@material-ui/core';
import EffectCard from './Card';
import Data from '../../helpers/Data.js'
import Table from './EffectsTable';


function EffectsDisplay(){

    let Display
    
    if(IsMobileView())
      Display = <div style={{flexGrow: 1, overflow: 'hidden', padding: '0.2em', backgroundColor: 'white'}}>
                  <Grid container spacing={2}>
                    { Data.map((x,y) => <EffectCard key={y} data={x} />) }
                  </Grid>
                </div>

    else
      Display = <Table/>

    return Display;
}

export default EffectsDisplay;