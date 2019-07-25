import React, { memo } from 'react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import Types from './spotTypes';

const Spot = ({ type }) => (
  <div className="spot">
    {type === Types.CROSS && <Icon icon="times" size="7x" />}
    {type === Types.CIRCLE && <Icon icon={['far', 'circle']} size="5x" />}
  </div>
);

export default memo(Spot);
