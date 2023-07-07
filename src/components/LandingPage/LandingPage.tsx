import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _1Icon } from './_1Icon';
import { _1Icon2 } from './_1Icon2';
import { _1Icon3 } from './_1Icon3';
import { _1Icon4 } from './_1Icon4';
import { _1Icon5 } from './_1Icon5';
import { ButtonPrimary_Property1Primary } from './ButtonPrimary_Property1Primary/ButtonPrimary_Property1Primary';
import { Group92Icon } from './Group92Icon';
import { Group96Icon } from './Group96Icon';
import { Group110Icon } from './Group110Icon';
import { IconFacebook } from './IconFacebook/IconFacebook';
import { IconLinkedin } from './IconLinkedin/IconLinkedin';
import { IconsTwitter } from './IconsTwitter/IconsTwitter';
import { Indicator } from './Indicator/Indicator';
import { IntersectIcon } from './IntersectIcon';
import classes from './LandingPage.module.css';
import { MenuButtonInput } from './MenuButtonInput/MenuButtonInput';
import { Rectangle248Icon } from './Rectangle248Icon';
import { StartTestIcon } from './StartTestIcon';
import { SubtractIcon } from './SubtractIcon';
import { SubtractIcon2 } from './SubtractIcon2';
import { SubtractIcon3 } from './SubtractIcon3';
import { Test1Icon } from './Test1Icon';
import { Test2Icon } from './Test2Icon';
import { Test3Icon } from './Test3Icon';
import { Test4Icon } from './Test4Icon';
import { Test5Icon } from './Test5Icon';
import { Trendblock } from './Trendblock/Trendblock';
import { UnionIcon } from './UnionIcon';
import { UnionIcon2 } from './UnionIcon2';
import { Vector76Icon } from './Vector76Icon';
import { Vector77Icon } from './Vector77Icon';
import { Vector78Icon } from './Vector78Icon';
import { Vector79Icon } from './Vector79Icon';
import { Vector80Icon } from './Vector80Icon';
import { Vector81Icon } from './Vector81Icon';
import { Vector83Icon } from './Vector83Icon';
import { Vector84Icon } from './Vector84Icon';
import { Vector85Icon } from './Vector85Icon';
import { Vector86Icon } from './Vector86Icon';
import { Vector87Icon } from './Vector87Icon';
import { Vector88Icon } from './Vector88Icon';
import { Vector89Icon } from './Vector89Icon';
import { Vector89Icon2 } from './Vector89Icon2';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { Verified_user_fill0_wght400_gr } from './Verified_user_fill0_wght400_gr';

interface Props {
  className?: string;
  hide?: {
    rectangle158?: boolean;
    rectangle1582?: boolean;
    rectangle1583?: boolean;
    rectangle1584?: boolean;
    rectangle1585?: boolean;
    rectangle1586?: boolean;
  };
}
/* @figmaId 735:19659 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector88}>
        <Vector88Icon className={classes.icon4} />
      </div>
      <div className={classes.vector89}>
        <Vector89Icon className={classes.icon5} />
      </div>
      <div className={classes.frame8}>
        <div className={classes.frame5}>
          <div className={classes.group92}>
            <Group92Icon className={classes.icon6} />
          </div>
          <div className={classes.frame61}>
            <ButtonPrimary_Property1Primary
              className={classes.buttonPrimary}
              text={{
                button: <div className={classes.button}>Log in</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.frame4}>
          <div className={classes.frame133}>
            <div className={classes.bigtitle}>
              <div className={classes.effortlessTestingElevatedQuali}>
                <div className={classes.textBlock}>Effortless Testing,</div>
                <div className={classes.textBlock2}>Elevated Quality</div>
              </div>
              <div className={classes.weGetYouCompleteCoverageInJust}>
                We get you complete coverage in just 4 months and keep you there with 24-hour maintenance and on-demand
                test creation. You get unlimited, parallel test runs on our infrastructure, and we guarantee zero
                flakes.{' '}
              </div>
            </div>
            <div className={classes.bigtitle2}>
              <div className={classes.effortlessTestingElevatedQuali2}>
                <div className={classes.textBlock3}>Effortless Testing,</div>
                <div className={classes.textBlock4}>Elevated Quality</div>
              </div>
              <div className={classes.weGetYouCompleteCoverageInJust2}>
                We get you complete coverage in just 4 months and keep you there with 24-hour maintenance and on-demand
                test creation. You get unlimited, parallel test runs on our infrastructure, and we guarantee zero
                flakes.{' '}
              </div>
            </div>
            <div className={classes.bigtitle3}>
              <div className={classes.experienceEffortlessReliableQA}>Experience Effortless, Reliable QA with 0DFx</div>
              <div className={classes.achieveCompleteAutomatedTestCo}>
                Achieve Complete Automated Test Coverage in 4 Months and Beyond.
              </div>
              <div className={classes.effortless}>Effortless </div>
              <div className={classes.reliable}>Reliable</div>
            </div>
            <MenuButtonInput
              className={classes.menuButtonInput}
              classes={{ buttonPrimary: classes.buttonPrimary2 }}
              text={{
                searchList: <div className={classes.searchList}>Your work e-mail here</div>,
                button: <div className={classes.button2}>Get Started</div>,
              }}
            />
          </div>
          <Indicator className={classes.indicator} />
        </div>
      </div>
      <div className={classes.frame149}>
        <div className={classes.image100}></div>
        <div className={classes.image98}></div>
        <div className={classes.image99}></div>
        <div className={classes.image97}></div>
        <div className={classes.image96}></div>
      </div>
      <div className={classes.unlockEffortlessQAToday}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Unlock </span>
          <span className={classes.label2}>Effortless QA</span>
          <span className={classes.label3}> Today</span>
        </p>
      </div>
      <MenuButtonInput
        className={classes.menuButtonInput2}
        classes={{ buttonPrimary: classes.buttonPrimary3 }}
        text={{
          searchList: <div className={classes.searchList2}>Your work e-mail here</div>,
          button: <div className={classes.button3}>Get Started</div>,
        }}
      />
      <div className={classes.frame141}>
        <IconsTwitter
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
        <IconLinkedin
          swap={{
            vector: <VectorIcon2 className={classes.icon2} />,
          }}
        />
        <IconFacebook
          swap={{
            subtract: <SubtractIcon className={classes.icon3} />,
          }}
        />
      </div>
      <div className={classes.testingMadeSimpleResultsMagnif}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label4}>Testing Made </span>
          <span className={classes.label5}>Simple</span>
          <span className={classes.label6}>, Results </span>
          <span className={classes.label7}>Magnified</span>
        </p>
      </div>
      <div className={classes.focusOnGrowthWeLlHandleTheTest}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label8}>Focus on </span>
          <span className={classes.label9}>Growth</span>
          <span className={classes.label10}>, </span>
        </p>
        <div className={classes.textBlock5}>We&#39;ll Handle the Testing</div>
      </div>
      <div className={classes.aModernTestingSolution}>A Modern Testing Solution</div>
      <div className={classes.ourPhilosophy}>Our Philosophy</div>
      <div className={classes.inTheEverEvolvingWorldOfCloudS}>
        In the ever-evolving world of cloud software integrations, traditional testing approaches fall short. At 0Dfx,
        we understand the shifting landscape and the need for a comprehensive solution. Introducing 0Dfx&#39;s
        as-a-Service, a groundbreaking platform that relieves software teams from the burden of quality assurance. Our
        all-encompassing offering allows teams to prioritize core development tasks while we expertly manage the entire
        QA process.
      </div>
      <div className={classes.withDFxYouRemainInControlOfYou}>
        With 0DFx, you remain in control of your tests. Our automation process is powered by vanilla, open-source
        Microsoft Playwright, ensuring that you own every test and there is no vendor lock-in. Embrace the freedom to
        customize and enhance your test suite, all while benefiting from our cutting-edge automation capabilities.
      </div>
      <div className={classes.yearsOfTestingExperienceHaveLe}>
        Years of testing experience have led us to a clear realization: prioritizing software quality is paramount in
        the modern landscape. At 0Dfx, we deeply understand evolving team needs and the importance of delivering
        exceptional software rapidly. With our expertise, we embrace the Zero Defects principle, ensuring rigorous
        testing for unparalleled excellence. Join us in revolutionizing modern testing and setting new standards for
        quality software.
      </div>
      <div className={classes.leaveTheComplexitiesOfTestingT}>
        Leave the complexities of testing to us while you dedicate your time and energy to strategic initiatives,
        innovation, and achieving your goals. Testing shouldn&#39;t be a burden that weighs you down. At 0DFx, we
        understand the importance of a seamless and hassle-free QA experience. 
      </div>
      <div className={classes.frame147}>
        <div className={classes.frame144}>
          <div className={classes._1}>
            <_1Icon className={classes.icon7} />
          </div>
          <div className={classes.lowCodeAutomationThatEmpowersY}>Low-Code Automation That Empowers You</div>
        </div>
        <div className={classes.frame145}>
          <div className={classes._12}>
            <_1Icon2 className={classes.icon8} />
          </div>
          <div className={classes.unlimitedParallelTestRunsNoExt}>Unlimited Parallel Test Runs, No Extra Charge</div>
        </div>
        <div className={classes.frame146}>
          <div className={classes._13}>
            <_1Icon3 className={classes.icon9} />
          </div>
          <div className={classes.seamlessIntegrationStrongColla}>Seamless Integration, Strong Collaboration</div>
        </div>
      </div>
      <div className={classes.frame148}>
        <div className={classes.frame1442}>
          <div className={classes._14}>
            <div className={classes._15}>
              <_1Icon4 className={classes.icon10} />
            </div>
          </div>
          <div className={classes.testInfrastructure}>Test Infrastructure</div>
        </div>
        <div className={classes.frame1452}>
          <div className={classes._16}>
            <_1Icon5 className={classes.icon11} />
          </div>
          <div className={classes.comprehensiveCoverageNoExcepti}>Comprehensive Coverage, No Exceptions</div>
        </div>
        <div className={classes.frame1462}>
          <div className={classes._17}>
            <div className={classes.verified_user_FILL0_wght400_GR}>
              <Verified_user_fill0_wght400_gr className={classes.icon12} />
            </div>
          </div>
          <div className={classes.reliableMaintenance}>Reliable Maintenance</div>
        </div>
      </div>
      <div className={classes.copright2023DFxTecnologiesInc}>Copright ©️ 2023 0DFx Tecnologies Inc</div>
      <div className={classes.privacyPolicy}>Privacy Policy</div>
      <div className={classes.termOfUse}>Term of Use</div>
      <div className={classes.newTest1}></div>
      <div className={classes.rectangle259}></div>
      <div className={classes.vector81}>
        <Vector81Icon className={classes.icon13} />
      </div>
      <div className={classes.rectangle244}></div>
      <div className={classes.group110}>
        <Group110Icon className={classes.icon14} />
      </div>
      <div className={classes.vector79}>
        <Vector79Icon className={classes.icon15} />
      </div>
      <div className={classes.vector80}>
        <Vector80Icon className={classes.icon16} />
      </div>
      <div className={classes.rectangle230}></div>
      <div className={classes.vector892}>
        <Vector89Icon2 className={classes.icon17} />
      </div>
      <div className={classes.subtract}>
        <SubtractIcon2 className={classes.icon18} />
      </div>
      <div className={classes.intersect}>
        <IntersectIcon className={classes.icon19} />
      </div>
      <div className={classes.union}>
        <UnionIcon className={classes.icon20} />
      </div>
      <div className={classes.rectangle229}></div>
      <div className={classes.rectangle248}>
        <Rectangle248Icon className={classes.icon21} />
      </div>
      <div className={classes.subtract2}>
        <SubtractIcon3 className={classes.icon22} />
      </div>
      <div className={classes.rectangle243}></div>
      <div className={classes.rectangle251}></div>
      <div className={classes.rectangle252}></div>
      <div className={classes.rectangle253}></div>
      <div className={classes.rectangle255}></div>
      <div className={classes.rectangle254}></div>
      <div className={classes.rectangle260}></div>
      <div className={classes.rectangle261}></div>
      <div className={classes.rectangle262}></div>
      <div className={classes.rectangle250}></div>
      <div className={classes.vector78}>
        <Vector78Icon className={classes.icon23} />
      </div>
      <div className={classes.rectangle234}></div>
      <div className={classes.rectangle239}></div>
      <div className={classes.rectangle240}></div>
      <div className={classes.rectangle241}></div>
      <div className={classes.rectangle242}></div>
      <div className={classes.rectangle237}></div>
      <div className={classes.rectangle238}></div>
      <div className={classes.vector76}>
        <Vector76Icon className={classes.icon24} />
      </div>
      <div className={classes.vector77}>
        <Vector77Icon className={classes.icon25} />
      </div>
      <div className={classes.rectangle245}></div>
      <div className={classes.group96}>
        <Group96Icon className={classes.icon26} />
      </div>
      <Trendblock
        className={classes.trendblock}
        classes={{
          rectangle167: classes.rectangle167,
          rectangle166: classes.rectangle166,
          rectangle165: classes.rectangle165,
          rectangle164: classes.rectangle164,
          rectangle163: classes.rectangle163,
          rectangle162: classes.rectangle162,
          rectangle161: classes.rectangle161,
          rectangle160: classes.rectangle160,
          rectangle159: classes.rectangle159,
        }}
        hide={{
          rectangle158: true,
        }}
      />
      <Trendblock
        className={classes.trendblock2}
        classes={{
          rectangle167: classes.rectangle1672,
          rectangle166: classes.rectangle1662,
          rectangle165: classes.rectangle1652,
          rectangle164: classes.rectangle1642,
          rectangle163: classes.rectangle1632,
          rectangle162: classes.rectangle1622,
          rectangle161: classes.rectangle1612,
          rectangle160: classes.rectangle1602,
          rectangle159: classes.rectangle1592,
        }}
        hide={{
          rectangle158: true,
        }}
      />
      <Trendblock
        className={classes.trendblock3}
        classes={{
          rectangle167: classes.rectangle1673,
          rectangle166: classes.rectangle1663,
          rectangle165: classes.rectangle1653,
          rectangle164: classes.rectangle1643,
          rectangle163: classes.rectangle1633,
          rectangle162: classes.rectangle1623,
          rectangle161: classes.rectangle1613,
          rectangle160: classes.rectangle1603,
          rectangle159: classes.rectangle1593,
        }}
        hide={{
          rectangle158: true,
        }}
      />
      <Trendblock
        className={classes.trendblock4}
        classes={{
          rectangle167: classes.rectangle1674,
          rectangle166: classes.rectangle1664,
          rectangle165: classes.rectangle1654,
          rectangle164: classes.rectangle1644,
          rectangle163: classes.rectangle1634,
          rectangle162: classes.rectangle1624,
          rectangle161: classes.rectangle1614,
          rectangle160: classes.rectangle1604,
          rectangle159: classes.rectangle1594,
        }}
        hide={{
          rectangle158: true,
        }}
      />
      <Trendblock
        className={classes.trendblock5}
        classes={{
          rectangle167: classes.rectangle1675,
          rectangle166: classes.rectangle1665,
          rectangle165: classes.rectangle1655,
          rectangle164: classes.rectangle1645,
          rectangle163: classes.rectangle1635,
          rectangle162: classes.rectangle1625,
          rectangle161: classes.rectangle1615,
          rectangle160: classes.rectangle1605,
          rectangle159: classes.rectangle1595,
        }}
        hide={{
          rectangle158: true,
        }}
      />
      <Trendblock
        className={classes.trendblock6}
        classes={{
          rectangle167: classes.rectangle1676,
          rectangle166: classes.rectangle1666,
          rectangle165: classes.rectangle1656,
          rectangle164: classes.rectangle1646,
          rectangle163: classes.rectangle1636,
          rectangle162: classes.rectangle1626,
          rectangle161: classes.rectangle1616,
          rectangle160: classes.rectangle1606,
          rectangle159: classes.rectangle1596,
        }}
        hide={{
          rectangle158: true,
        }}
      />
      <div className={classes.startTest}>
        <StartTestIcon className={classes.icon27} />
      </div>
      <div className={classes.vector83}>
        <Vector83Icon className={classes.icon28} />
      </div>
      <div className={classes.vector84}>
        <Vector84Icon className={classes.icon29} />
      </div>
      <div className={classes.vector85}>
        <Vector85Icon className={classes.icon30} />
      </div>
      <div className={classes.vector87}>
        <Vector87Icon className={classes.icon31} />
      </div>
      <div className={classes.vector86}>
        <Vector86Icon className={classes.icon32} />
      </div>
      <div className={classes.test1}>
        <Test1Icon className={classes.icon33} />
      </div>
      <div className={classes.test2}>
        <Test2Icon className={classes.icon34} />
      </div>
      <div className={classes.test3}>
        <Test3Icon className={classes.icon35} />
      </div>
      <div className={classes.test4}>
        <Test4Icon className={classes.icon36} />
      </div>
      <div className={classes.test5}>
        <Test5Icon className={classes.icon37} />
      </div>
      <div className={classes.union2}>
        <UnionIcon2 className={classes.icon38} />
      </div>
    </div>
  );
});
