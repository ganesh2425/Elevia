import React from "react";
import { Avatar, Grid } from "@material-ui/core";

const NameCustom = ({name})=>{
    return <Grid container alignItems='center'>
    <Grid item sm={3}>
    <Avatar>{name[0]}</Avatar>
    </Grid>
    <Grid item>
    {name}
    </Grid>
    </Grid>
}
export default NameCustom;