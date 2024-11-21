import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import colors from '../../styles/colors';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: colors.white,
  marginLeft: 0,
  marginTop: '35px',
  width: '100%',
  border: `1px solid ${colors.darkBlue}`,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  //pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.darkBlue,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: colors.darkBlue,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

export default function SearchAppBar({ searchText, setSearchText, onSearch}) {
  
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        onSearch();
    }
  };
  
  //If click is needed, just call the function
  const handleSearchClick = () => {
    onSearch();
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }}
              type="text"
              value={searchText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </Search>
        </Toolbar>
      
    </Box>
  );
}
