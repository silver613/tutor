import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { UserProps } from '../types';
import { toggleMessagesPane } from '../utils';

type MessagesPaneHeaderProps = {
  sender: UserProps;
};

export default function MessagesPaneHeader({ sender }: MessagesPaneHeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
      py={{ xs: 2, md: 2 }}
      px={{ xs: 1, md: 2 }}
    >
      <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{
            display: { xs: 'inline-flex', sm: 'none' },
          }}
          onClick={() => toggleMessagesPane()}
        >
          <i data-feather="chevron-left" />
        </IconButton>
        <Avatar size="lg" src={sender.avatar} />

        <div>
          <Typography
            fontWeight="lg"
            fontSize="lg"
            noWrap
            endDecorator={
              sender.online ? (
                <Chip
                  variant="outlined"
                  size="sm"
                  color="neutral"
                  sx={{
                    '--Chip-radius': '6px',
                  }}
                  startDecorator={
                    <CircleIcon sx={{ fontSize: 8 }} color="success" />
                  }
                  slotProps={{ root: { component: 'span' } }}
                >
                  Online
                </Chip>
              ) : undefined
            }
          >
            {sender.name}
          </Typography>

          <Typography level="body2">{sender.username}</Typography>
        </div>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button
          className='bg-primary-600 hover:bg-primary-400 text-white'
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          View profile
        </Button>
      </Stack>
    </Stack>
  );
}
