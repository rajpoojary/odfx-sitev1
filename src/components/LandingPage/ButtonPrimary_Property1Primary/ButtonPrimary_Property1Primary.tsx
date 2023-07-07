import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconMenuDashboardOn } from '../IconMenuDashboardOn/IconMenuDashboardOn';
import classes from './ButtonPrimary_Property1Primary.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 14:3029 */
export const ButtonPrimary_Property1Primary: FC<Props> = memo(function ButtonPrimary_Property1Primary(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
    </button>
  );
});
