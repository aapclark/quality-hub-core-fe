import React from 'react';
import Icon from '../../../../global/icons/Icon';
import { ICONS } from '../../../../global/icons/iconConstants';
import { checkcircle } from '../../../../global/icons/checkcircle';
import { HashLink as Link } from 'react-router-hash-link';

const DoneModal = ({ closeWindow }) => {
	return (
		<div className='RQdone-modal'>
			<button className='RQclose-listing-form-button' onClick={() => closeWindow()}>
				<Icon
					icon={ICONS.CLOSE}
					width={24}
					height={24}
					color='rgba(0, 0, 0, 0.54)'
				/>
			</button>
			<div className='RQdone-modal-content'>
			<img className = 'RQdone-modal-img' src='/images/confirmed.svg' />
				<div className='RQdone-modal-all-text'>
					<p className='RQdone-modal-text-1'>Your listing is live!</p>
					<p className='RQdone-modal-text-2'>
						You can edit your listing and set your availability in your
						dashboard.
					</p>
				</div>
				<div className='RQdone-modal-buttons'>
					<button onClick={() => closeWindow()}>Skip for now</button>
					<Link
						scroll={el => {
							el.scrollIntoView(true);
							window.scrollBy(0, -70);
						}}
						smooth
						to='/interviewq/settings#interviewq-availability-header'
						className='RQadd-listing-set-availability-link'>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DoneModal;
