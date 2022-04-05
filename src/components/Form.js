import React, { Fragment } from 'react';
import '../styles/App.css';
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
import { useFormik } from 'formik';

const validate = (values) => {
	const errors = {};
	if (!values.score && values.score !== 0) {
		errors.score = 'You have not selected a score';
	}
	return errors;
};

const Form = () => {
	const formik = useFormik({
		initialValues: {
			score: '',
			comment: '',
		},
		validate,
		onSubmit: (values, actions) => {
			setTimeout(() => {
				console.log(values);
				actions.setSubmitting(false);
			}, 1000);
		},
	});

	const handleSelection = (event, scoreNum) => {
		formik.setFieldValue('score', scoreNum);
	};

	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Paper elevation={3} sx={{ minheight: '50vh' }}>
					<Typography variant="h6" marginBottom={2}>
						How likely are you to recommend company X as an employer to a friend
						or colleague?
					</Typography>

					<form onSubmit={formik.handleSubmit}>
						<ToggleButtonGroup
							id="score"
							size="medium"
							color="warning"
							exclusive
							value={formik.values.score}
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
						{formik.errors.score ? (
							<div className="error">{formik.errors.score}</div>
						) : null}
						<Box>
							<label htmlFor="comment">
								Please comment what is your reason for this score.
							</label>

							<TextField
								name="comment"
								id="comment"
								aria-label="comments area"
								multiline
								minRows={4}
								maxRows={4}
								fullWidth
								color="warning"
								value={formik.values.comment}
								onChange={formik.handleChange}
							/>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
							<Button type="submit" variant="contained" color="warning">
								Send
							</Button>
						</Box>
					</form>

					<Typography variant="subtitle2" align="center">
						Powered by The Highfives
					</Typography>
				</Paper>
			</Container>
		</Fragment>
	);
};

export default Form;
