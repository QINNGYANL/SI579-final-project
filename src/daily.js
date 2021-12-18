import React, { useState, useEffect } from 'react';
import './index.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Time from "./getcurrentdate";

function getCurrent(){
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return date
}

export default function Daily(){

  const [dailyList, setDailyList] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('daily') || '[]');
    const current = getCurrent();
    if (!list.find(item => item.date === current)) {
      list.push({
        date: current,
        feed: false,
        clean: false
      })
    }
    setDailyList(list)
  }, [])

  const handleChangeClean = (e, idx) => {
    const newList = [...dailyList];
    newList[idx].clean = e.target.checked;
    setDailyList(newList);
    localStorage.setItem('daily', JSON.stringify(newList))
  }

  const handleChangeFeed = (e, idx) => {
    const newList = [...dailyList];
    newList[idx].feed = e.target.checked;
    setDailyList(newList);
    localStorage.setItem('daily', JSON.stringify(newList))
  }

  return (
    <>
      {
        dailyList.map((item, idx) => (
          <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width:400, height:300, border: '1px dashed grey', bgcolor: '#cfe8fc' }}>
              <Time date={item.date}/>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={item.clean} onChange={(e) => handleChangeClean(e, idx)}/>} label="Clean Litter Box" />
                <FormControlLabel control={<Checkbox checked={item.feed} onChange={(e) => handleChangeFeed(e, idx)}/>} label="Feed" />
              </FormGroup>
          </Box>
        ))
      }
    </>
  )
};

