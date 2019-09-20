import React, { memo } from 'react';
import classnames from 'classnames';

import { propsAreEqual } from 'utils';

const Field = ({ type, end, win, ...props }) => (
  <div className={classnames('field', { end, win })} {...props}>
    {type && <span className={type} />}
  </div>
);

export default memo(Field, propsAreEqual);
