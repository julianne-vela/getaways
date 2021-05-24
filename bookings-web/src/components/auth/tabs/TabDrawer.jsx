// import React from 'react';
// import {
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Divider,
//   IconButton,
//   makeStyles,
//   Typography,
// } from '@material-ui/core';
// import {
//   ChevronLeftRounded,
//   HomeRounded,
//   ExitToAppRounded,
//   PersonAddRounded,
//   AccountCircleRounded,
// } from '@material-ui/icons';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function TabDrawer({ handleDrawerClose, open }) {
//   const renderSwitch = (option) => {
//     switch (option) {
//       case 'Home':
//         return <HomeRounded />;
//       case 'Login':
//         return <AccountCircleRounded />;
//       case 'Register':
//         return <PersonAddRounded />;
//       case 'Logout':
//         return <ExitToAppRounded />;
//     }
//   };
//   return (
//     <>
//       <Drawer variant="persistent" anchor="left" open={open}>
//         <Typography>Menu</Typography>
//         <IconButton onClick={handleDrawerClose}>
//           <ChevronLeftRounded />
//         </IconButton>
//         <Divider />
//         <List>
//           {['Home', 'Login', 'Register', 'Logout'].map((text, _) => {
//             <ListItem button key={text}>
//               <ListItemIcon>{renderSwitch(text)}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>;
//           })}
//         </List>
//       </Drawer>
//     </>
//   );
// }
