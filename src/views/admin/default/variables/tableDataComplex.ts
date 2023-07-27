type RowObj = {
	transaction: string;
	status: string;
	date: string;
	progress: number;
	amount:string;
	company:string
};

const tableDataComplex: RowObj[] = [
	{
		transaction: 'Horizon UI PRO',
		amount:'100',
		progress: 75.5,
		company:'dunno',
		status: 'Approved',
		date: '12 Jan 2021'
	},
	{
		transaction: 'Horizon UI Free',
		amount:'500',
		company:'boo',
		progress: 25.5,
		status: 'Disable',
		date: '21 Feb 2021'
	},
	{
		transaction: 'Weekly Update',
		amount:'10',
		company:'hello',
		progress: 90,
		status: 'Error',
		date: '13 Mar 2021'
	},
	{
		transaction: 'Marketplace',
		progress: 50.5,
		company:'ogtech',
		amount:'230',
		status: 'Approved',
		date: '24 Oct 2022'
	}
];
export default tableDataComplex;
