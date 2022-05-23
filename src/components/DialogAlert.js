import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Link, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { SecondaryButton } from './styledComponents';
import { COLOR_PRIMARY, FONT_AMARANTH, FONT_RIGHTEOUS } from '../utils/constants';

export default function DialogAlert({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ p: 2, bgcolor: COLOR_PRIMARY, fontFamily: FONT_RIGHTEOUS }}>
        Not Enough Balance
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: grey[900]
          }}
        ><Close /></IconButton>
      </DialogTitle>
      <DialogContent sx={{ bgcolor: COLOR_PRIMARY }}>
        {/* <DialogContentText> */}
        <Typography gutterBottom fontFamily={FONT_AMARANTH} color={grey[900]}>
          In order to play the game you need to hold 1Million KingPac token.<br />
          You wallet doesn’t have 1 million KingPac token so you aren’t eligible to play.<br />
          <b>
            <Link target="_blank" href="https://pancakeswap.finance/" sx={{ color: 'black', textDecoration: 'none' }}>
              Buy token.
            </Link>
          </b>
          &nbsp;And join telegram community&nbsp;
          <b>
            <Link target="_blank" href="https://t.me/KingPacToken" sx={{ color: 'black', textDecoration: 'none' }}>
              here
            </Link>
          </b>.
        </Typography>
        {/* </DialogContentText> */}
      </DialogContent>
      <DialogActions sx={{ bgcolor: COLOR_PRIMARY }}>
        <SecondaryButton sx={{ bgcolor: 'black', color: COLOR_PRIMARY }} onClick={handleClose}>
          Cancel
        </SecondaryButton>
      </DialogActions>
    </Dialog>
  );
}