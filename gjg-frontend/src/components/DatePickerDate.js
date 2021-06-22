import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/datePicker.css';

export default function DatePickerDate() {
	const [dateFilter, setDateFilter] = useState(new Date());

	return (
		<div>
			<DatePicker
				className="date-picker"
				dateFormat="yyyy-MM-dd"
				placeholderText="Select a date"
				selected={dateFilter}
				onChange={(date) => {
					setDateFilter(date);
					console.log('selected ' + date);
				}}
				filterDate={(date) => {
					return new Date() > date;
				}}
				isClearable
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
				//withPortal
			/>
		</div>
	);
}