import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function AdminPigeon() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '3rem' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant="h1">Add New Pigeon</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="contained">Save</Button>
          </Box>
        </Box>
        <Box component="form" noValidate autoComplete="off" sx={{ marginTop: '1.5rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Ring" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Name" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Year" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Pedigree" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Father Ring" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Mother Ring" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Gender" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Color" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Race" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField id="outlined-basic" label="Upload Image" margin="dense" variant="outlined" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={8}>
            <TextField
              sx={{ width: '100%' }}
              id="outlined-multiline-basic"
              label="Description"
              multiline
              rows={4}
              margin="dense" variant="outlined"
              defaultValue="Comment"
            />
            </Grid>
            <Box sx={{ margin: '2.5rem 0 1rem 1rem', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Competitions</Typography>
              <Icon sx={{ marginLeft: '.5rem' }}>add_circle</Icon>
            </Box>
            <Paper sx={{ p: 2, width: '100%', margin: '0 0 0 1rem' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Loose" margin="dense" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="outlined-basic" label="Competition" margin="dense" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="outlined-basic" label="Modality" margin="dense" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="outlined-basic" label="Distance" margin="dense" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="outlined-basic" label="Clasification" margin="dense" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
              </Grid>
            </Paper>
            <Box sx={{ margin: '2.5rem 0 1rem 1rem', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Pairing</Typography>
              <Icon sx={{ marginLeft: '.5rem' }}>add_circle</Icon>
            </Box>
            <Paper sx={{ p: 2, width: '100%', margin: '0 0 0 1rem' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField id="outlined-basic" label="Year" margin="dense" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="outlined-basic" label="Couple" margin="dense" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Comments" margin="dense" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained">Save</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AdminPigeon;