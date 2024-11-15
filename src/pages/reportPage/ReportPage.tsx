import { useEffect, useState } from 'react';
import { TabBar } from '@components/layout/tabBar/TabBar';
import { Content } from '@components/report/content/Content';
import { EditBottomSheet } from '@components/common/bottomSheet/EditBottomSheet';
import { BasicModal } from '@components/common/modal/BasicModal';
import { ReportBottomSheet } from '@/components/common/bottomSheet/reportBottomSheet/ReportBottomSheet';
import { AbilityProps, AnalysisProps, SkillProps } from '@/types/Analysis';
import { deleteAnaylsis, getAnalysis, patchAnalysis } from '@/api/Analysis';
import { useNavigate, useParams } from 'react-router-dom';
import { FolderChangeBottomSheet } from '@/components/common/bottomSheet/FolderChangeBottomSheet';

export const ReportPage = () => {
  const { id } = useParams<{ id?: string }>();
  const [data, setData] = useState<SkillProps | null>(null);
  const [newData, setNewData] = useState<AnalysisProps | null>(null);
  const [openBottom, setOpenBottom] = useState(false);
  const [openEditBottom, setOpenEditBottom] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openChangeBottom, setOpenChangeBottom] = useState(false);
  const navigate = useNavigate();

  const analysisId = id ? parseInt(id, 10) : undefined;

  useEffect(() => {
    const fetchSkill = async () => {
      if (analysisId) {
        const skillData = await getAnalysis(analysisId);
        if (skillData) {
          setData(skillData);
          setNewData({
            analysisId,
            title: skillData.recordTitle,
            content: skillData.recordContent,
            abilityMap: skillData.abilityDtoList.reduce(
              (acc: { [key: string]: string }, ability: AbilityProps) => ({
                ...acc,
                [ability.keyword]: ability.content,
              }),
              {},
            ),
          });
        }
      }
    };

    fetchSkill();
  }, [analysisId, openEditBottom]);

  const handleDataChange = (key: keyof AnalysisProps, value: string) => {
    if (newData) {
      setNewData({ ...newData, [key]: value });
    }
  };

  const handleAbilityChange = (index: number, value: string) => {
    if (newData && data) {
      const updatedAbilityMap = { ...newData.abilityMap };
      const abilityKey = data.abilityDtoList[index].keyword;
      if (updatedAbilityMap) {
        updatedAbilityMap[abilityKey] = value;
        setNewData({ ...newData, abilityMap: updatedAbilityMap });
      }
    }
  };

  const handleDeleteUser = async () => {
    if (analysisId === undefined) return;
    const response = await deleteAnaylsis(analysisId);
    if (response.is_success) {
      navigate('/home');
    }
  };

  const handleSubmit = async () => {
    if (analysisId && newData) {
      const { title, content, abilityMap } = newData;
      const response = await patchAnalysis({
        analysisId,
        title,
        content,
        abilityMap,
      });

      if (response.is_success) {
        toggleEditBottomSheet();
      }
    }
  };

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const toggleEditBottomSheet = () => {
    setOpenBottom(false);
    setOpenEditBottom((prev) => !prev);
  };

  const toggleModal = () => {
    setOpenBottom(false);
    setOpenDelete((prev) => !prev);
  };

  const toggleChangeFoler = () => {
    setOpenBottom(false);
    setOpenChangeBottom((prev) => !prev);
  };

  return (
    <>
      <TabBar
        centerText="AI 역량 분석"
        onClick={toggleBottomSheet}
        isEditable={true}
        onClickEditIcon={toggleEditBottomSheet}
      />
      {data && <Content data={data} />}
      {openBottom && (
        <EditBottomSheet
          onClick={toggleBottomSheet}
          onClickDelete={toggleModal}
          onClickChange={toggleChangeFoler}
        />
      )}
      {openEditBottom && data && (
        <ReportBottomSheet
          onClick={toggleEditBottomSheet}
          onClickStore={handleSubmit}
          data={newData}
          onChange={handleDataChange}
          onAbilityChange={handleAbilityChange}
        />
      )}
      {openDelete && (
        <BasicModal
          text="분석한 내용을 삭제하시겠어요?"
          leftButtonText="돌아가기"
          rightButtonText="삭제하기"
          onClickBackground={toggleModal}
          onClickLeft={toggleModal}
          onClickRight={handleDeleteUser}
        />
      )}
      {openChangeBottom && analysisId && (
        <FolderChangeBottomSheet analysisId={analysisId} onClick={toggleChangeFoler} />
      )}
    </>
  );
};
