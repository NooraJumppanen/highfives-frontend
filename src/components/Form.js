import React, { Fragment, useState } from 'react';
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
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
} from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validate = (values) => {
	const errors = {};
	if (!values.score && values.score !== 0) {
		errors.score = 'Please select a score before submitting.';
	}
	return errors;
};

const Form = () => {
	const [open, setOpen] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	const navigate = useNavigate();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const formik = useFormik({
		initialValues: {
			score: '',
			comment: '',
		},
		validate,
		onSubmit: (values, actions) => {
			setTimeout(() => {
				console.log(values);
				setIsSubmitted(true);
				actions.resetForm();
				actions.setSubmitting(false);
				navigate('/thankyou');
			}, 1000);
		},
	});

	const handleSelection = (event, scoreNum) => {
		formik.setFieldValue('score', scoreNum);
		if (scoreNum || scoreNum === 0) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
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

					<form>
						<ToggleButtonGroup
							id="score"
							size="medium"
							color="warning"
							exclusive
							value={formik.values.score}
							onChange={handleSelection}
							fullWidth
							disabled={isSubmitted}
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
								disabled={isSubmitted}
							/>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
							<Button
								onClick={handleClickOpen}
								variant="contained"
								color="warning"
								disabled={isDisabled}
							>
								Send
							</Button>
						</Box>

						<Dialog open={open} onClose={handleClose}>
							<DialogTitle>
								Are you sure you want to submit your answer?
							</DialogTitle>
							<DialogContent></DialogContent>
							<DialogActions>
								<Button
									onClick={formik.handleSubmit}
									variant="contained"
									color="primary"
									autoFocus
								>
									Yes
								</Button>
								<Button onClick={handleClose}>Cancel</Button>
							</DialogActions>
						</Dialog>
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
