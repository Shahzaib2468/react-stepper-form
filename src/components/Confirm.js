import React, { Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

// Destructure props
const Confirm = ({ handleNext, handleBack, values: { firstName, lastName, email, gender, date, phone, city, country, 
	degree, education, field, grade, job, company, company_sector, job_field, job_role  } }) => {
	return (
		<Fragment>
			<List disablePadding>
				<ListItem>
					<ListItemText primary="First Name" secondary={firstName} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Last Name" secondary={lastName} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Email Address" secondary={email} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Gender" secondary={gender} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="Date of birth" secondary={date} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="City" secondary={city} />
				</ListItem>

				<Divider />

				<ListItem>
					<ListItemText primary="phone" secondary={phone.length > 0 ? phone : 'Not Provided'} />
				</ListItem>

				<ListItem>
					<ListItemText primary="Country" secondary={country} />
				</ListItem>

				<ListItem>
					<ListItemText primary="Degree" secondary={degree} />
				</ListItem>

				<ListItem>
					<ListItemText primary="Education Institute" secondary={education} />
				</ListItem>

				<ListItem>
					<ListItemText primary="Field of Study" secondary={field} />
				</ListItem>

				<ListItem>
					<ListItemText primary="Grade" secondary={grade} />
				</ListItem>

				<ListItem>
					<ListItemText primary="Previous Job" secondary={job} />
				</ListItem>

				<ListItem>
					<ListItemText primary="Company Name" secondary={company} />
				</ListItem>

				<ListItem>
					<ListItemText primary="Company Sector" secondary={company_sector} />
				</ListItem>

				<ListItem>
					<ListItemText primary="Job Field" secondary={job_field} />
				</ListItem>
			
				<ListItem>
					<ListItemText primary="Job Role" secondary={job_role} />
				</ListItem>
			</List>

			<div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" color="default" onClick={handleBack}>
					Back
				</Button>
				<Button style={{ marginLeft: 20 }} variant="contained" color="secondary" onClick={handleNext}>
					Confirm & Continue
				</Button>
			</div>
		</Fragment>
	)
}

export default Confirm
