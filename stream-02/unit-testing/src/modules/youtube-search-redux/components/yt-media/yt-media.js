import React from 'react';
import classnames from 'classnames';

export const YtMedia = (props) => {
  const classNames = classnames(
    'media',
    props.className,
  );

  return (
    <div className={classNames}>
      {props.children}
    </div>
  );
};
