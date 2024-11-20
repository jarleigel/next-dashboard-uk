'use client'
import Image from 'next/image'

import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'

const data = [
	{
		name: 'Mandag',
		present: 60,
		absent: 24,
	},
	{
		name: 'Tirsdag',
		present: 70,
		absent: 22,
	},
	{
		name: 'Onsdag',
		present: 50,
		absent: 20,
	},
	{
		name: 'Torsdag',
		present: 80,
		absent: 20,
	},
	{
		name: 'Fredag',
		present: 40,
		absent: 21,
	},
]

const AttendanceChart = () => {
	return (
		<div className='bg-white rounded-xl w-full h-full p-4'>
			{/* TITLE */}
			<div className='flex justify-between items-center'>
				<h1 className='text-lg font-semibold'>Attendance</h1>
				<Image src='/moreDark.png' alt='' width={20} height={20} />
			</div>
			{/* CHART */}
			<ResponsiveContainer width='100%' height='90%'>
				<BarChart width={500} height={300} data={data} barSize={20}>
					<CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />
					<XAxis
						dataKey='name'
						axisLine={false}
						tick={{ fill: '#d1d5db' }}
						tickLine={false}
					/>
					<YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
					<Tooltip
						contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
					/>
					<Legend
						align='left'
						verticalAlign='top'
						wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
					/>
					<Bar
						dataKey='present'
						fill='#FAE27C'
						legendType='circle'
						radius={[10, 10, 0, 0]}
					/>
					<Bar
						dataKey='absent'
						fill='#C3EBFA'
						legendType='circle'
						radius={[10, 10, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default AttendanceChart