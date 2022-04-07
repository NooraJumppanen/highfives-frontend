import React from 'react';
import { Fragment } from 'react';
import { CssBaseline, Container, Paper, Typography } from '@mui/material';

const ThankYou = () => {
	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Paper elevation={3} sx={{ minheight: '50vh' }}>
					<Typography variant="h6" marginBottom={2} align="center">
						Thank you!
					</Typography>
					<Typography paragraph align="center">
						Your answer was submitted.
					</Typography>
					<Typography variant="subtitle2" align="center" marginTop={4}>
						Powered by The Highfives
					</Typography>
				</Paper>
			</Container>
		</Fragment>
	);
};

export default ThankYou;
