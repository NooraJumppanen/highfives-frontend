import React, { Fragment, useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Cookies from 'universal-cookie';

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
	Stack,
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
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	const cookies = new Cookies();

	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			score: '',
			comment: '',
			timestamp: serverTimestamp(),
			date: {
				yyyy: new Date().getFullYear(),
				mm: new Date().getMonth(),
				dd: new Date().getDate(),
			},
		},
		validate,
		onSubmit: (values, actions) => {
			setTimeout(() => {
				let canSubmit = false;
				if (cookies.get('date-cookie')) {
					let getLastSubmittedDate = cookies.get('date-cookie');
					let currentDate = Date.now;
					if (
						currentDate.getTime - getLastSubmittedDate.getTime >
						30 * 24 * 60 * 60 * 1000
					) {
						canSubmit = true;
					} else {
						canSubmit = false;
					}
				} else {
					cookies.set('date-cookie', Date.now);
					canSubmit = true;
				}

				if (canSubmit) {
					const docRef = collection(db, 'values2');
					addDoc(docRef, values);

					setIsSubmitted(true);
					actions.resetForm();
					actions.setSubmitting(false);
					navigate('/thankyou');
				} else {
					alert('You have already submitted.');
				}
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

	const control = {
		id: 'score',
		color: 'warning',
		exclusive: true,
		value: formik.values.score,
		onChange: handleSelection,
		disabled: isSubmitted,
	};

	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Paper elevation={3} sx={{ minheight: '50vh' }}>
					<Typography variant="h6" marginBottom={2}>
						How likely are you to recommend PHZ Full Stack as an employer to a
						friend or colleague?
					</Typography>

					<form>
						<Stack
							sx={{
								alignItems: 'center',
							}}
							direction={{
								xs: 'column',
								sm: 'row',
								md: 'row',
								lg: 'row',
								xl: 'row',
							}}
						>
							<ToggleButtonGroup
								sx={{
									m: {
										xs: '12px',
										sm: '0px',
										md: '0px',
										lg: '0px',
										xl: '0px',
									},
								}}
								{...control}
							>
								<ToggleButton
									value={0}
									aria-label="0"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										borderRadius: 0,
										border: '1px darkgray solid',
									}}
								>
									0
								</ToggleButton>
								<ToggleButton
									value={1}
									aria-label="1"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										border: '1px darkgray solid',
									}}
								>
									1
								</ToggleButton>
								<ToggleButton
									value={2}
									aria-label="2"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										border: '1px darkgray solid',
									}}
								>
									2
								</ToggleButton>
								<ToggleButton
									value={3}
									aria-label="3"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										border: '1px darkgray solid',
									}}
								>
									3
								</ToggleButton>
								<ToggleButton
									value={4}
									aria-label="4"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										borderRadius: 0,
										border: '1px darkgray solid',
									}}
								>
									4
								</ToggleButton>
							</ToggleButtonGroup>
							<ToggleButtonGroup {...control}>
								<ToggleButton
									value={5}
									aria-label="5"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										borderRadius: 0,
										ml: '-1px',
										border: '1px darkgray solid',
									}}
								>
									5
								</ToggleButton>

								<ToggleButton
									value={6}
									aria-label="6"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										border: '1px darkgray solid',
									}}
								>
									6
								</ToggleButton>
								<ToggleButton
									value={7}
									aria-label="7"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										border: '1px darkgray solid',
									}}
								>
									7
								</ToggleButton>
								<ToggleButton
									value={8}
									aria-label="8"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										border: '1px darkgray solid',
									}}
								>
									8
								</ToggleButton>
								<ToggleButton
									value={9}
									aria-label="9"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										border: '1px darkgray solid',
									}}
								>
									9
								</ToggleButton>
								<ToggleButton
									value={10}
									aria-label="10"
									name="score"
									sx={{
										width: '45px',
										height: '45px',
										borderRadius: 0,
										border: '1px darkgray solid',
									}}
								>
									10
								</ToggleButton>
							</ToggleButtonGroup>
						</Stack>

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
								onClick={formik.handleSubmit}
								variant="contained"
								color="warning"
								disabled={isDisabled}
							>
								Send
							</Button>
						</Box>
					</form>

					<Typography variant="subtitle2" align="center">
						Powered by The High Fives
					</Typography>
				</Paper>
			</Container>
		</Fragment>
	);
};

export default Form;
