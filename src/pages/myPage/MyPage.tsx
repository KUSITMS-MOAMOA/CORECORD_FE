import { useEffect, useState } from 'react';
import { Profile } from '@components/my/profile/Profile';
import { Settings } from '@components/my/settings/Settings';
import { BasicModal } from '@components/common/modal/BasicModal';
import { DetailModal } from '@components/common/modal/DetailModal';
import { ConfirmModal } from '@components/common/modal/ConfirmModal';
import * as S from './MyPage.Style';
import { postLogout } from '@/api/My';
import { Header } from '@/components/layout/header/Header';
import { SideBar } from '@/components/common/sideBar/SideBar';
import { useLocation, useNavigate } from 'react-router-dom';
import ToastMessage from '@/components/chat/ToastMessage';

export const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [logout, setLogout] = useState(false);
  const [deleteId, setDeleteId] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    if (location.state?.alertMessage) {
      setEditProfile(true);
      navigate('/my', { replace: true });
    }
  }, [location, navigate]);

  const toggleLogout = () => {
    setLogout((prev) => !prev);
  };

  const toggleDeleteId = () => {
    setDeleteId((prev) => !prev);
  };

  const toggleConfirmDelete = () => {
    setConfirmDelete((prev) => !prev);
  };

  const toggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };

  const checkDelete = () => {
    setConfirmDelete(true);
    setDeleteId(false);
  };

  const handleLogout = async () => {
    const response = await postLogout();
    if (response.is_success) {
      localStorage.removeItem('nickname');
      navigate('/oauth');
    }
  };

  return (
    <>
      <S.Header>
        <Header onClick={toggleSideBar} title="마이페이지" />
      </S.Header>
      <S.Content>
        <Profile />
        <Settings onClickLogout={toggleLogout} onClickDeleteId={toggleDeleteId} />
        {editProfile && (
          <ToastMessage text="변경 내용이 저장되었어요!" onClose={() => setEditProfile(false)} />
        )}
      </S.Content>
      {logout && (
        <BasicModal
          text="로그아웃 하시겠어요?"
          leftButtonText="로그아웃"
          rightButtonText="돌아가기"
          onClickBackground={toggleLogout}
          onClickLeft={handleLogout}
          onClickRight={toggleLogout}
        />
      )}
      {deleteId && (
        <DetailModal
          text="정말 모아모아를 탈퇴하시겠어요?"
          description="탈퇴 시, 모든 기록이 사라지며 복구할 수 없어요"
          leftButtonText="탈퇴하기"
          rightButtonText="돌아가기"
          onClickBackground={toggleDeleteId}
          onClickLeft={checkDelete}
          onClickRight={toggleDeleteId}
        />
      )}
      {confirmDelete && <ConfirmModal onClick={toggleConfirmDelete} />}
      {openSideBar && <SideBar onClick={toggleSideBar} />}
    </>
  );
};
