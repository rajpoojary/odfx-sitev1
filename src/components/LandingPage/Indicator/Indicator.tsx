import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Indicator.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 118:6541 */
export const Indicator: FC<Props> = memo(function Indicator(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle204}></div>
      <div className={classes.rectangle205}></div>
      <div className={classes.rectangle206}></div>
    </div>
  );
});
