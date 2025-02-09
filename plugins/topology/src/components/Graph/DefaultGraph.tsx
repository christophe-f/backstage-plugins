import * as React from 'react';
import {
  GraphElement,
  Graph,
  observer,
  WithPanZoomProps,
  GraphComponent,
  isGraph,
} from '@patternfly/react-topology';

type ElementProps = {
  element: GraphElement;
};

type DefaultGraphProps = ElementProps & WithPanZoomProps;

const DefaultGraph: React.FunctionComponent<DefaultGraphProps> = ({
  element,
  panZoomRef,
}) => {
  if (!isGraph) {
    return null;
  }
  return (
    <GraphComponent
      element={element as Graph}
      panZoomRef={panZoomRef}
      dndDropRef={() => {}}
      selected={false}
      onSelect={() => {}}
      onContextMenu={() => {}}
      contextMenuOpen={false}
    />
  );
};

export default observer(DefaultGraph);
