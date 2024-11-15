import * as S from './Button.Style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: string;
  styleType: 'basic' | 'popupRight' | 'popupLeft';
}

export const Button = ({ children, icon, styleType, ...props }: ButtonProps) => {
  return (
    <S.Container $styleType={styleType} {...props}>
      {children}
      {icon && <S.Icon src={icon} alt="icon" />}
    </S.Container>
  );
};
