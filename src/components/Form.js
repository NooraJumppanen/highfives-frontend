import React, { Fragment, useState } from 'react';
import {
	Box,
	Container,
	Paper,
	Button,
	ToggleButtonGroup,
	ToggleButton,
	Typography,
	TextField,
	CssBaseline,
} from '@mui/material';
import '../styles/App.css';

const Form = () => {
	const [selection, setSelection] = useState();

	const handleSelection = (event, newSelection) => {
		setSelection(newSelection);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('hello');
	};

	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Paper elevation={3} sx={{ minheight: '50vh' }}>
					<form onSubmit={handleSubmit}>
						<Typography variant="h6" marginBottom={2}>
							How likely are you to recommend PHZ Full Stack as an employer to a
							friend or colleague?
						</Typography>

						<ToggleButtonGroup
							size="medium"
							color="warning"
							exclusive
							value={selection}
							onChange={handleSelection}
							fullWidth
						>
							<ToggleButton value={0} aria-label="0" name="score">
								0
							</ToggleButton>
							<ToggleButton value={1} aria-label="1" name="score">
								1
							</ToggleButton>
							<ToggleButton value={2} aria-label="2" name="score">
								2
							</ToggleButton>
							<ToggleButton value={3} aria-label="3" name="score">
								3
							</ToggleButton>
							<ToggleButton value={4} aria-label="4" name="score">
								4
							</ToggleButton>
							<ToggleButton value={5} aria-label="5" name="score">
								5
							</ToggleButton>

							<ToggleButton value={6} aria-label="6" name="score">
								6
							</ToggleButton>
							<ToggleButton value={7} aria-label="7" name="score">
								7
							</ToggleButton>
							<ToggleButton value={8} aria-label="8" name="score">
								8
							</ToggleButton>
							<ToggleButton value={9} aria-label="9" name="score">
								9
							</ToggleButton>
							<ToggleButton value={10} aria-label="10" name="score">
								10
							</ToggleButton>
						</ToggleButtonGroup>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								mt: '0.5rem',
								mb: '2rem',
							}}
						>
							<Typography variant="subtitle2">
								0 = Extremely unlikely
							</Typography>
							<Typography variant="subtitle2">10 = Extremely likely</Typography>
						</Box>
						<Box>
							<label htmlFor="commentarea">
								Please comment what is your reason for this score.
							</label>

							<TextField
								name="comments"
								id="commentarea"
								aria-label="comments area"
								multiline
								minRows={4}
								maxRows={4}
								fullWidth
								color="warning"
								// onChange={handleChange}
							/>
						</Box>
						<Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
							<Button type="submit" variant="contained" color="warning">
								Send
							</Button>
						</Box>
						<Typography variant="subtitle2" align="center">
							Powered by The Highfives
						</Typography>
					</form>
				</Paper>
			</Container>
		</Fragment>
	);
};

export default Form;
