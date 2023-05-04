import U from './certificates/U.svg';
export function convertBBFCRating(certificate: string) {
	switch (certificate) {
		case 'U':
			return U;
		case 'PG':
			return 'PG';
		case '12':
			return '12';
		case '12A':
			return '12A';
		case '15':
			return '15';
		case '18':
			return '18';
		case 'R18':
			return 'R18';
		default:
			return '';
	}
}
