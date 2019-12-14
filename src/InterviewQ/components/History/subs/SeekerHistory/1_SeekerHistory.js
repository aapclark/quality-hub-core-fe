import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { isPast } from '../../../../../global/utils/isPast';

import SeekerHistoryRow from './2_SeekerHistoryRow';

const GET_SEEKERBOOKINGS = gql`
	query getSeekerHistory($seeker_id: String!) {
		bookingsBySeeker(seeker_id: $seeker_id) {
			id
			year
			month
			day
			hour
			minute
			coach {
				first_name
				last_name
				post {
					price
				}
			}
			uniquecheck
			report {
				strengths
				growthAreas
				suggestions
				additionalComments
			}
			review {
				id
			}
		}
	}
`;

export default function SeekerHistory() {
	const seeker_id = localStorage.getItem('id');

	const { loading, error, data } = useQuery(GET_SEEKERBOOKINGS, {
		variables: { seeker_id },
	});

	error && console.log(error);

	const headings = ['Coach', 'Date', 'Time', 'Price', 'Review', 'Report'];

	const filteredData = data
		? data.bookingsBySeeker.filter(booking =>
				isPast(
					booking.year,
					booking.month,
					booking.day,
					booking.hour,
					booking.minute,
				),
		  )
		: [];

	return (
		<div>
			<h2>Seeker History</h2>
			{data && filteredData.length ? (
				<div className='seeker-history-headings'>
					{headings.map(heading => (
						<h3>{heading}</h3>
					))}
				</div>
			) : (
				<p>You have no previous bookings as a Seeker</p>
			)}
			{loading && <p>Loading...</p>}
			{data &&
				filteredData.map(booking => (
					<SeekerHistoryRow key={booking.id} booking={booking} />
				))}
		</div>
	);
}
