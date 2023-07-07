import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconFacebook.module.css';
import { SubtractIcon } from './SubtractIcon';

interface Props {
  className?: string;
  swap?: {
    subtract?: ReactNode;
  };
}
/* @figmaId 686:19611 */
export const IconFacebook: FC<Props> = memo(function IconFacebook(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.subtract}>{props.swap?.subtract || <SubtractIcon className={classes.icon} />}</div>
    </div>
  );
});
