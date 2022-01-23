import React from 'react';
import { AppBar, Toolbar, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '1000px',
  backgroundColor: alpha(theme.palette.common.white, 0.45),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '40rem',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15rem',
    },
  },
}));

type Props = {
  searchFilterFunction: (name: string) => void;
};

const Navbar = ({ searchFilterFunction }: Props) => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: { sm: 'none', md: 'flex' },
          flexGrow: 1,
          justifyContent: 'space-around',
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Filter Through Name"
            color="primary"
            inputComponent="input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              let str = e.target.value;
              str = str.charAt(0).toUpperCase() + str.slice(1);
              searchFilterFunction(str);
            }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
