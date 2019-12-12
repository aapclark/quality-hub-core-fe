import React, { useState } from 'react';
import CoachCard from './CoachCardExpand';

//Styles
import '../../CoachCardModal.scss';
// import Icon from '../../../globalIcons/Icon';
// import { ICONS } from '../../../globalIcons/iconConstants';

const CoachCardModal = ({ post }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className='coach-card-modal-text'>
			{/* <div id='overlay-coachcard-expand' onClick={() => setOpen(!open)}></div> */}
			<button className='coach-card-modal-text' onClick={() => setOpen(!open)}>
				<p className='coach-card-modal-text coachcard-seemore'>See more </p>
			</button>
			{open && <CoachCard setOpen={setOpen} open={open} post={post} />}
		</div>
	);
};

export default CoachCardModal;