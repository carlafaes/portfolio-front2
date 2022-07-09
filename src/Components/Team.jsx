import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Parallax from 'react-rellax'

export default function Team() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1d2025' : '#1d2025',
        ...theme.typography.body2,
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return(
        <div style={{height:'100vh'}}>
            <Box sx={{ bgcolor: '#1d2025', height: '100vh',flexGrow: 1 }} display="grid" gridTemplateColumns="repeat(1, 2fr)" gap={2}>
            <Grid container 
                        spacing={8} 
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                              <Grid item xs={12} md={4} xl={4}>
                                <Item>
                                    <Parallax speed={-8}>
                                        s
                                    </Parallax>
                                </Item>
                              </Grid>

                              <Grid item xs={12} md={8} xl={8}>
                                <Item>
                                    
                                </Item>
                              </Grid>

                              <Grid item xs={12} md={4} xl={4}>
                                <Item>
                                    <Parallax speed={-8}>
                                        s
                                    </Parallax>
                                </Item>
                              </Grid>

                              <Grid item xs={12} md={8} xl={8}>
                                <Item>
                                    
                                </Item>
                              </Grid>
                        </Grid>
            </Box>
        </div>
    )
}