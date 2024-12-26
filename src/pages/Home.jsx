import React from 'react';
import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 5
			}}
		>
			<img src="/profile-pic.png" style={{ maxHeight: '50%', maxWidth: '50%' }} alt="Techover" />
			<Button
				size="large"
				variant="contained"
				onClick={() => (window.location.href = 'https://starlit-malasada-a9cd7b.netlify.app/')}
			>
				Kontakta Mig
			</Button>
		</Box>
	);
};

export default Home;