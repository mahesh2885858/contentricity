import React from "react"
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';


export const MenuItems = [
    { name: "Dashboard", icon: <HomeOutlinedIcon />, isActive: true, id: "123", type: "main" },
    { name: "Articles", icon: < FilterNoneOutlinedIcon />, isActive: false, id: "1234", type: "main" },
    { name: "File manager", icon: <FolderOutlinedIcon />, isActive: false, id: "1234a", type: "main" },
    { name: "Assignments", icon: <AssignmentOutlinedIcon />, isActive: false, id: "1233e4", type: "main" },
    { name: "Platforms", id: "platform34%45", icon: <DomainAddOutlinedIcon />, isActive: false, type: "admin" },
    { name: "Users", id: "usrs@#$sdf", icon: <PeopleAltOutlinedIcon />, isActive: false, type: "admin" },
    { name: "Roles", id: "roels#!24idsfa", icon: <SupervisedUserCircleOutlinedIcon />, isActive: false, type: "admin" },
    { name: "Activity Log", id: "actiVET#$@0,", icon: <AssessmentOutlinedIcon />, isActive: false, type: "admin" },
    { name: "Content Source", id: "contntSorce@#@#", icon: <AssessmentOutlinedIcon />, isActive: false, type: "admin" },
    { name: "Reports", id: "Rprts#@#$asfasf", icon: <AssessmentOutlinedIcon />, isActive: false, type: "admin" },
    { name: "Settings", id: "admSett@$!@#", icon: <SettingsOutlinedIcon />, isActive: false, type: "admin" },

    { name: "Biling", id: "#!@#$SDFasdf@#4R%$5", icon: <ChatOutlinedIcon />, isActive: false, type: "admin" },
    { name: "General", id: "#qwed%$5", icon: <SettingsOutlinedIcon />, isActive: false, type: "sub" },
    { name: "Workflow", id: "#WERWer%$5", icon: <SettingsOutlinedIcon />, isActive: false, type: "sub" },
    { name: "Platforms", id: "#qoiu#oiasf$5", icon: <DomainAddOutlinedIcon />, isActive: false, type: "sub" },
    { name: "Tags", id: "#qxcvQEW35", icon: <CropOriginalOutlinedIcon />, isActive: false, type: "sub" },
    { name: "Texteditor", id: "#ockem%&dkf%$5", icon: <CropOriginalOutlinedIcon />, isActive: false, type: "sub" },
    { name: "Images", id: "#NH&^%$Gtjld%$5", icon: <CropOriginalOutlinedIcon />, isActive: false, type: "sub" },
    { name: "Files", id: "#ASDFAsdf%$5", icon: <ChatOutlinedIcon />, isActive: false, type: "sub" },
    { name: "Discussions", id: "#!@#$SDFR%$5", icon: <ChatOutlinedIcon />, isActive: false, type: "sub" },

]



