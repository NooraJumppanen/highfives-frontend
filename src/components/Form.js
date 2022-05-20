import React, { Fragment, useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import "../styles/App.css";
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
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.score && values.score !== 0) {
    errors.score = "Please select a score before submitting.";
  }
  return errors;
};

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
  const [language, setLanguage] = useState('FI');
	const commentCharacterLimit = 500;

  const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			score: '',
			comment: '',
			date: {
				yyyy: new Date().getFullYear(),
				mm: new Date().getMonth(),
				dd: new Date().getDate(),
			},
			timestamp: new Date(),
		},
		validate,
		onSubmit: (values, actions) => {
			setTimeout(() => {
				const localStorageKey = 'nps-form';
				const today = new Date();
				const thisYear = today.getFullYear();
				const thisMonth = today.getMonth();
				const thisYearAndMonth = `${thisYear}${thisMonth}`;
				const localStorageYearAndMonth = localStorage.getItem(localStorageKey);

        if (localStorageYearAndMonth !== thisYearAndMonth) {
          localStorage.setItem(localStorageKey, thisYearAndMonth);

					const docRef = collection(db, 'values3');
					addDoc(docRef, values);
					setIsSubmitted(true);
					actions.resetForm();
					actions.setSubmitting(false);
					navigate('/thankyou');
				} else {
					alert(
						'Your answer can not be submitted because you have already answered the survey this month.'
					);
				}
			}, 1000);
		},
	});

  const handleSelection = (event, scoreNum) => {
    formik.setFieldValue("score", scoreNum);
    if (scoreNum || scoreNum === 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const control = {
    id: "score",
    color: "warning",
    exclusive: true,
    value: formik.values.score,
    onChange: handleSelection,
    disabled: isSubmitted,
  };

  const changeHandler = (e) => {
    setLanguage(e.target.value);
  }
  console.log(language);
	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Paper elevation={3} sx={{ minheight: "50vh" }}>
					<div>
						<label htmlFor="response-sort" />
						<select name="language" id="language" onChange={changeHandler}>
							<option value="FI">FI</option>
							<option value="EN">EN</option>
							<option value="SV">SV</option>
						</select>
					</div>
					{language === "FI" ? (
						<Typography variant="h6" marginBottom={3}>
							Kuinka todennäköisesti suosittelisit PHZ Full Stackia työnantajana
							a ystävä vai kollega?
						</Typography>
					) : language === "EN" ? (
						<Typography variant="h6" marginBottom={3}>
							How likely are you to recommend PHZ Full Stack as an employer to a
							friend or colleague?
						</Typography>
					) : language === "SV" ? (
						<Typography variant="h6" marginBottom={3}>
							Hur troligt är det att du rekommenderar PHZ Full Stack som
							arbetsgivare till envän eller kollega?
						</Typography>
					) : (
						""
					)}

					<form>
						<Stack
							sx={{
								alignItems: "center",
							}}
							direction={{
								xs: "column",
								sm: "row",
								md: "row",
								lg: "row",
								xl: "row",
							}}
						>
							<ToggleButtonGroup
								sx={{
									m: {
										xs: "12px",
										sm: "0px",
										md: "0px",
										lg: "0px",
										xl: "0px",
									},
								}}
								{...control}
							>
								<ToggleButton
									value={0}
									aria-label="0"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										borderRadius: 0,
										border: "1px darkgray solid",
									}}
								>
									0
								</ToggleButton>
								<ToggleButton
									value={1}
									aria-label="1"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										border: "1px darkgray solid",
									}}
								>
									1
								</ToggleButton>
								<ToggleButton
									value={2}
									aria-label="2"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										border: "1px darkgray solid",
									}}
								>
									2
								</ToggleButton>
								<ToggleButton
									value={3}
									aria-label="3"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										border: "1px darkgray solid",
									}}
								>
									3
								</ToggleButton>
								<ToggleButton
									value={4}
									aria-label="4"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										borderRadius: 0,
										border: "1px darkgray solid",
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
										width: "45px",
										height: "45px",
										borderRadius: 0,
										ml: "-1px",
										border: "1px darkgray solid",
									}}
								>
									5
								</ToggleButton>

								<ToggleButton
									value={6}
									aria-label="6"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										border: "1px darkgray solid",
									}}
								>
									6
								</ToggleButton>
								<ToggleButton
									value={7}
									aria-label="7"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										border: "1px darkgray solid",
									}}
								>
									7
								</ToggleButton>
								<ToggleButton
									value={8}
									aria-label="8"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										border: "1px darkgray solid",
									}}
								>
									8
								</ToggleButton>
								<ToggleButton
									value={9}
									aria-label="9"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										border: "1px darkgray solid",
									}}
								>
									9
								</ToggleButton>
								<ToggleButton
									value={10}
									aria-label="10"
									name="score"
									sx={{
										width: "45px",
										height: "45px",
										borderRadius: 0,
										border: "1px darkgray solid",
									}}
								>
									10
								</ToggleButton>
							</ToggleButtonGroup>
						</Stack>

						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								mt: "0.5rem",
								mb: "2rem",
							}}
						>
							{language === "FI" ? (
								<div>
									<Typography variant="caption">
										0 = Erittäin epätodennäköistä
									</Typography>
									<Typography variant="caption">
										10 = erittäin todennäköistä
									</Typography>
								</div>
							) : language === "EN" ? (
								<div>
									<Typography variant="caption">
										0 = Extremely unlikely
									</Typography>
									<Typography variant="caption">
										10 = Extremely likely
									</Typography>
								</div>
							) : language === "SV" ? (
								<div>
									<Typography variant="caption">
										0 = Extremt osannolikt
									</Typography>
									<Typography variant="caption">
										10 = Extremt troligt
									</Typography>
								</div>
							) : (
								""
							)}
						</Box>
						{formik.errors.score ? (
							<div className="error">{formik.errors.score}</div>
						) : null}
						<Box>
							{language === "FI" ? (
								<label htmlFor="comment">
									Kommentoi syysi tähän pisteeseen
								</label>
							) : language === "EN" ? (
								<label htmlFor="comment">
									Please comment your reason for this score
								</label>
							) : language === "SV" ? (
								<label htmlFor="comment">
									Vänligen kommentera din anledning till denna poäng
								</label>
							) : (
								""
							)}

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
								inputProps={{ maxLength: commentCharacterLimit }}
								helperText={`${formik.values.comment.length}/${commentCharacterLimit}`}
								FormHelperTextProps={{ style: { textAlign: "right" } }}
							/>
						</Box>

						<Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
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
