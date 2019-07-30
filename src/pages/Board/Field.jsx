import React, { memo } from 'react';

const Field = ({ type }) => (
  <div className="field">
    <span className={type} />
  </div>
);

export default memo(Field);
