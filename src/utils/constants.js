import React from 'react';
import {
  Home as HomeIcon,
  Code as CodeIcon,
  MusicNote as MusicNoteIcon,
  School as SchoolIcon,
  GraphicEq as GraphicEqIcon,
  OndemandVideo as OndemandVideoIcon,
  SportsEsports as SportsEsportsIcon,
  LiveTv as LiveTvIcon,
  FitnessCenter as FitnessCenterIcon,
  Checkroom as CheckroomIcon,
  FaceRetouchingNatural as FaceRetouchingNaturalIcon,
  TheaterComedy as TheaterComedyIcon,
  DeveloperMode as DeveloperModeIcon,
  Javascript as JavascriptIcon,
  Construction as ConstructionIcon,
  SkipNext as SkipNextIcon
} from '@mui/icons-material';

// Component to render icons with medium size
const MediumIcon = ({ icon: Icon }) => <Icon sx={{ fontSize: '40px' }} />;

// Array of categories with their respective icons
export const categories = [
  // New
  { name: 'New', icon: <MediumIcon icon={HomeIcon} />, },
  // JS Mastery
  { name: 'JS Mastery', icon: <MediumIcon icon={JavascriptIcon} />, },
  // Coding, ReactJS, NextJS
  { name: 'Coding', icon: <MediumIcon icon={CodeIcon} />, },
  { name: 'ReactJS', icon: <MediumIcon icon={ConstructionIcon} />, },
  { name: 'NextJS', icon: <MediumIcon icon={SkipNextIcon} />, },
  // Music, Education, Podcast, Movie, Gaming, Live, Sport, Fashion, Beauty, Comedy, Gym, Crypto
  { name: 'Music', icon: <MediumIcon icon={MusicNoteIcon} /> },
  { name: 'Education', icon: <MediumIcon icon={SchoolIcon} />, },
  { name: 'Podcast', icon: <MediumIcon icon={GraphicEqIcon} />, },
  { name: 'Movie', icon: <MediumIcon icon={OndemandVideoIcon} />, },
  { name: 'Gaming', icon: <MediumIcon icon={SportsEsportsIcon} />, },
  { name: 'Live', icon: <MediumIcon icon={LiveTvIcon} />, },
  { name: 'Sport', icon: <MediumIcon icon={FitnessCenterIcon} />, },
  { name: 'Fashion', icon: <MediumIcon icon={CheckroomIcon} />, },
  { name: 'Beauty', icon: <MediumIcon icon={FaceRetouchingNaturalIcon} />, },
  { name: 'Comedy', icon: <MediumIcon icon={TheaterComedyIcon} />, },
  { name: 'Gym', icon: <MediumIcon icon={FitnessCenterIcon} />, },
  { name: 'Crypto', icon: <MediumIcon icon={DeveloperModeIcon} />, },
];

// Constants
export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';
export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
