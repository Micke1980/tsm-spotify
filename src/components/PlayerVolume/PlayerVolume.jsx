import { Stack, Slider, Grid } from "@mui/material";
import { VolumeDown, VolumeUp, VolumeOff } from "@mui/icons-material";
import { useState } from "react";

const PlayerVolume = ({ player }) => {
	const defaultVolume = 50;
	const [volume, setVolume] = useState(defaultVolume);

	const handleVolumeChange = async (v) => {
		try {
			await player.setVolume(v / 100);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Grid
			item
			xs={3}
			sx={{
				display: { xs: 'none', md: 'flex' },
				alignItems: 'center',
				justifyContent: 'flex-end'
			}}
		>
			<Stack spacing={2} direction="row" alignItems="center" sx={{ width: 150, color: 'text.secondary' }}>
				{volume === 0 ? <VolumeOff /> : volume < 50 ? <VolumeDown /> : <VolumeUp />}
				<Slider
					min={0}
					max={100}
					step={1}
					value={volume}
					onChange={(e, v) => setVolume(v)}
					onChangeCommitted={async (_, value) => handleVolumeChange(value)}
				/>
			</Stack>
		</Grid>
	);
};

export default PlayerVolume;