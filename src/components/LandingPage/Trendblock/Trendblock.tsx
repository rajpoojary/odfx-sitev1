import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Trendblock.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle167?: string;
    rectangle166?: string;
    rectangle165?: string;
    rectangle164?: string;
    rectangle163?: string;
    rectangle162?: string;
    rectangle161?: string;
    rectangle160?: string;
    rectangle159?: string;
    root?: string;
  };
  hide?: {
    rectangle158?: boolean;
  };
}
/* @figmaId 686:19615 */
export const Trendblock: FC<Props> = memo(function Trendblock(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle167 || ''} ${classes.rectangle167}`}></div>
      <div className={`${props.classes?.rectangle166 || ''} ${classes.rectangle166}`}></div>
      <div className={`${props.classes?.rectangle165 || ''} ${classes.rectangle165}`}></div>
      <div className={`${props.classes?.rectangle164 || ''} ${classes.rectangle164}`}></div>
      <div className={`${props.classes?.rectangle163 || ''} ${classes.rectangle163}`}></div>
      <div className={`${props.classes?.rectangle162 || ''} ${classes.rectangle162}`}></div>
      <div className={`${props.classes?.rectangle161 || ''} ${classes.rectangle161}`}></div>
      <div className={`${props.classes?.rectangle160 || ''} ${classes.rectangle160}`}></div>
      <div className={`${props.classes?.rectangle159 || ''} ${classes.rectangle159}`}></div>
      {!props.hide?.rectangle158 && <div className={classes.rectangle158}></div>}
    </div>
  );
});
