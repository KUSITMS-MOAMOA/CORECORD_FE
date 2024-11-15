import * as S from './Textarea.Style';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isTitle?: boolean;
}

export const Textarea = ({ isTitle = false, ...props }: TextareaProps) => {
  return <S.Textarea $isTitle={isTitle} {...props} />;
};
