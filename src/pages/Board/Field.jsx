import React, { memo } from 'react';

const Field = ({ type, ...props }) => (
  <div
    className="field"
    {...props}
    style={{ cursor: type ? 'not-allowed' : 'pointer' }}
  >
    {type && <span className={type} />}
  </div>
);

export default memo(Field);
