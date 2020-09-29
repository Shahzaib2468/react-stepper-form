import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// Destructure props
const SecondStep = ({ handleNext, handleBack, handleChange, values: { degree, education, field, grade }, filedError, isError }) => {
	// Check if all values are not empty
	const isEmpty = degree.length > 0 && education.length > 0 && field.length > 0 
	return (
		<Fragment>
			<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Degree"
						name="degree"
						type='text'
						placeholder="Degree"
						defaultValue={degree}
						onChange={handleChange('degree')}
						margin="normal"
						error={filedError.degree !== ''}
						helperText={filedError.degree !== '' ? `${filedError.degree}` : ''}
						required
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
				<TextField
						fullWidth
						label="Education Institute"
						name="education"
						type='text'
						placeholder="education"
						defaultValue={education}
						onChange={handleChange('education')}
						margin="normal"
						error={filedError.education !== ''}
						helperText={filedError.education !== '' ? `${filedError.education}` : ''}
						required
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Field of Study"
						name="field"
						type='text'
						placeholder="Your field field"
						type="field"
						defaultValue={field}
						onChange={handleChange('field')}
						margin="normal"
						error={filedError.field !== ''}
						helperText={filedError.field !== '' ? `${filedError.field}` : ''}
						required
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
				<TextField
						fullWidth
						label="Grade"
						name="grade"
						placeholder="Grade"
						defaultValue={grade}
						onChange={handleChange('grade')}
						margin="normal"
						error={filedError.grade !== ''}
						helperText={filedError.grade !== '' ? `${filedError.grade}` : ''}
						required
					/>
				</Grid>
			</Grid>
			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 20 }}>
					Back
				</Button>
				<Button variant="contained" disabled={!isEmpty || isError} color="primary" onClick={handleNext}>
					Next
				</Button>
			</div>
		</Fragment>
	)
}

export default SecondStep
