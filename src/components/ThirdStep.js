import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// Destructure props
const ThirdStep = ({ handleNext, handleBack, handleChange, values: { 
    job, company, company_sector, start_date, end_date, job_field, job_role
 }, filedError, isError }) => {
	// Check if all values are not empty
    const isEmpty = job.length > 0 && company.length > 0 && company_sector.length > 0 && start_date.length > 0 && end_date.length > 0 
    && job_field.length > 0 && job_role.length > 0 
	return (
		<Fragment>
			<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Previous Job"
						name="job"
						type='text'
						placeholder="Job Title"
						defaultValue={job}
						onChange={handleChange('job')}
						margin="normal"
						error={filedError.job !== ''}
						helperText={filedError.job !== '' ? `${filedError.job}` : ''}
						required
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
				<TextField
						fullWidth
						label="Company Name"
						name="company"
						type='text'
						placeholder="company"
						defaultValue={company}
						onChange={handleChange('company')}
						margin="normal"
						error={filedError.company !== ''}
						helperText={filedError.company !== '' ? `${filedError.company}` : ''}
						required
					/>
				</Grid>

                <Grid item xs={12} sm={6}>
				<TextField
						fullWidth
						label="Company Sector"
						name="company_sector"
						type='text'
						placeholder="Company Sector"
						defaultValue={company_sector}
						onChange={handleChange('company_sector')}
						margin="normal"
						error={filedError.company_sector !== ''}
						helperText={filedError.company_sector !== '' ? `${filedError.company_sector}` : ''}
						required
					/>
				</Grid>

                <Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						InputLabelProps={{
							shrink: true
						}}
						label="Start Date"
						name="start_date"
						type="date"
						defaultValue={start_date}
						onChange={handleChange('start_date')}
						margin="normal"
						required
					/>
				</Grid>

                <Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						InputLabelProps={{
							shrink: true
						}}
						label="End Date"
						name="end_date"
						type="date"
						defaultValue={end_date}
						onChange={handleChange('end_date')}
						margin="normal"
						required
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						fullWidth
						label="Job Field"
						name="job_field"
						type='text'
						placeholder="Job Field"
						type="job_field"
						defaultValue={job_field}
						onChange={handleChange('job_field')}
						margin="normal"
						error={filedError.job_field !== ''}
						helperText={filedError.job_field !== '' ? `${filedError.job_field}` : ''}
						required
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
				<TextField
						fullWidth
						label="job Role"
						name="job_role"
						placeholder="Job Role"
						defaultValue={job_role}
						onChange={handleChange('job_role')}
						margin="normal"
						error={filedError.job_role !== ''}
						helperText={filedError.job_role !== '' ? `${filedError.job_role}` : ''}
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

export default ThirdStep
