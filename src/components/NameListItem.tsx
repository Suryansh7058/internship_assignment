import React from 'react';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { UserType } from '../App';
import { styled, alpha } from '@mui/material/styles';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.dark, 0.45),
  padding: '1rem',
  marginBottom: '2rem',
  borderRadius: '1000px',
}));

const NameListItem = (props: UserType) => {
  return (
    <StyledListItem>
      <ListItemText
        primary={
          <span>
            <strong> Name: </strong>
            {props.name}
          </span>
        }
      />
      <ListItemText
        primary={
          <span>
            <strong> Company: </strong>
            {props.company}
          </span>
        }
      />
    </StyledListItem>
  );
};

export default NameListItem;
