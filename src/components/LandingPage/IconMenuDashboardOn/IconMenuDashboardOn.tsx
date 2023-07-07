import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconMenuDashboardOn.module.css';
import { UnionIcon } from './UnionIcon';

interface Props {
  className?: string;
}
/* @figmaId 11:2769 */
export const IconMenuDashboardOn: FC<Props> = memo(function IconMenuDashboardOn(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.union}>
        <UnionIcon className={classes.icon} />
      </div>
    </div>
  );
});
