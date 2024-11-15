import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/homePage/HomePage';
import { MemoPage } from './pages/memoPage/MemoPage';
import { MyPage } from './pages/myPage/MyPage';
import { EditProfilePage } from './pages/editProfile/EditProfilePage';
import { OauthPage } from './pages/oauthPage/OauthPage';
import { SignUpPage } from './pages/registerPage/SignUpPage';
import { LoginSuccessPage } from './pages/loginSuccessPage/LoginSuccessPage';
import { SigningIn } from './pages/loginPage/SigningIn';
import { ListPage } from './pages/listPage/ListPage';
import { FolderPage } from './pages/folderPage/FolderPage';
import { KeywordPage } from './pages/keywordPage/KeywordPage';
import { ReportPage } from './pages/reportPage/ReportPage';
import { ChatPage } from './pages/chatPage/ChatPage';
import { RecordCompletePage } from './pages/recordCompletePage/RecordCompletePage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'memo',
        element: <MemoPage />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
      {
        path: 'editProfile',
        element: <EditProfilePage />,
      },
      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'oauth',
        element: <OauthPage />,
      },
      {
        path: 'login',
        element: <SigningIn />,
      },
      {
        path: 'register',
        element: <SignUpPage />,
      },
      {
        path: 'login-success',
        element: <LoginSuccessPage />,
      },
      {
        path: 'folder',
        element: <FolderPage />,
      },
      {
        path: 'keyword',
        element: <KeywordPage />,
      },
      {
        path: 'report/:id',
        element: <ReportPage />,
      },
      {
        path: 'chat',
        element: <ChatPage />,
      },
      {
        path: 'record-complete',
        element: <RecordCompletePage />,
      },
    ],
  },
]);
