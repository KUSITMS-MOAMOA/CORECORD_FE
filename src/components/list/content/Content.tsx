import { useNavigate } from 'react-router-dom';
import { List } from '../../common/list/List';
import { Empty } from '@/components/common/empty/Empty';
import { ListProps } from '@/types/Folder';

interface ContentProps {
  listData: ListProps[];
}

export const Content = ({ listData }: ContentProps) => {
  const navigate = useNavigate();

  return (
    <>
      {listData.length > 0 ? (
        listData.map((item) => (
          <List
            key={item.analysisId}
            title={item.title}
            chips={item.keywordList}
            date={item.createdAt}
            onClick={() => {
              navigate(`/report/${item.analysisId}`);
            }}
          />
        ))
      ) : (
        <Empty />
      )}
    </>
  );
};
