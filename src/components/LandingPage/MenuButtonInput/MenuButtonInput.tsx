import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './MenuButtonInput.module.css';

interface Props {
  className?: string;
  classes?: {
    buttonPrimary?: string;
    root?: string;
  };
  text?: {
    searchList?: ReactNode;
    button?: ReactNode;
  };
}
/* @figmaId 49:7272 */
export const MenuButtonInput: FC<Props> = memo(function MenuButtonInput(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.frame87}>
        {props.text?.searchList != null ? (
          props.text?.searchList
        ) : (
          <div className={classes.searchList}>Search list</div>
        )}
      </div>
      <div className={`${props.classes?.buttonPrimary || ''} ${classes.buttonPrimary}`}>
        {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
      </div>
    </button>
  );
});
