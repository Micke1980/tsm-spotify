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
			<img src="/profile-pic.png" alt="Mikael Tuvesson" style={{ maxHeight: '50%', maxWidth: '50%' }} />
			<Button
				size="large"
				variant="contained"
				onClick={() => (window.location.href="mailto:tm_mike@hotmail.com")}
			>
				Kontakta Mig
			</Button>
		</Box>
	);
};

export default Home;