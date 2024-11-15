import { useState } from 'react';
import { HomeHeader } from '@components/home/header/Header';
import { Content } from '@components/home/content/Content';
import { RecordBottomSheet } from '@components/common/bottomSheet/RecordBottomSheet';
import { SideBar } from '@/components/common/sideBar/SideBar';
import { FloatingButton } from '@/components/common/button/FloatingButton';

export const HomePage = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const toggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };

  return (
    <>
      <HomeHeader onClickSideBar={toggleSideBar} />
      <Content />
      <FloatingButton onClick={toggleBottomSheet} />
      {openBottom && <RecordBottomSheet onClick={toggleBottomSheet} />}
      {openSideBar && <SideBar onClick={toggleSideBar} />}
    </>
  );
};
