import React from 'react'
import classes from 'src/ui/pages/messages-page/messages-page.module.css'
import DialogsBlockContainer from "src/ui/pages/messages-page/dialogs-list/dialog-list.container";
import MessagesBlockContainer from "src/ui/pages/messages-page/messages-block/messages-block.container"

const MessagesPage = () => {
  return (
    <div className={classes.messages}>
      <DialogsBlockContainer/>
      <MessagesBlockContainer/>
    </div>
  );
};

export default MessagesPage;
