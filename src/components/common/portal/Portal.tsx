import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const el = document.getElementById('portal-root') as HTMLElement;
  return ReactDOM.createPortal(children, el);
};
