import React from "react";
import "./Sidebar.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import NoteIcon from "@material-ui/icons/Note";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ScheduleSendIcon from "@material-ui/icons/ScheduleSend";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AccessTimeFilledIcon from "@material-ui/icons/AccessTimeFilled";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="button__compose">
        <Button
          startIcon={<AddIcon fontSize="large" />}
          onClick={() => dispatch(openSendMessage())}
        >
          作成
        </Button>
      </div>
      <SidebarOption
        Icon={InboxIcon}
        title="受信トレイ"
        number="18"
        selected="true"
      />
      <SidebarOption Icon={StarIcon} title="スター付き" number="6" />
      <SidebarOption Icon={SendIcon} title="送信済み" number="8" />
      <SidebarOption Icon={NoteIcon} title="下書き" number="8" />
      <SidebarOption Icon={AccessTimeFilledIcon} title="スヌーズ中" />
      <SidebarOption Icon={LabelImportantIcon} title="重要" number="2" />
      <SidebarOption Icon={ScheduleSendIcon} title="予定" />
      <SidebarOption Icon={DeleteIcon} title="ゴミ箱" />
      <SidebarOption Icon={ExpandMoreOutlinedIcon} title="もっと見る" />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
