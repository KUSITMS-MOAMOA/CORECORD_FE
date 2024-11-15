import styled from 'styled-components';

export const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.25rem;
  margin-top: 12.5rem;
  position: relative;
`;

export const Label = styled.text`
  font-size: 1rem;
  font-weight: 400;
  fill: ${({ theme }) => theme.colors.gray900};
  text-anchor: middle;
  dominant-baseline: middle;
`;

export const CHART_STYLES = {
  width: 350,
  height: 350,
  innerRadius: 70,
  outerRadius: 100,
  paddingAngle: 5,
  pieProps: {
    cx: "50%",
    cy: "50%",
    fill: "#8884d8",
    dataKey: "value"
  }
};