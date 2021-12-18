import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicSelect(props) {
  const [month, setMonth] = React.useState('');
  const [weight, setWeight] = React.useState(0);

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const handleSubmit = () => {
    props.update(month, weight)
  }

  return (
    <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography component="h1" variant="h5">
            Record Your Cat's Weight
        </Typography>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
     
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Month"
          onChange={handleChange}
        >
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
        <TextField
              margin="normal"
              required
              fullWidth
              name="Weight"
              type="number"
              label="Weight (lbs)"
              id="weight"
              onChange={(e) => setWeight(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
      </FormControl>
    </Box>
  );
}