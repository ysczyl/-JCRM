import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'JCRM 首页',
          title: 'JCRM 首页',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: '#',
          blankTarget: true,
        },
        {
          key: 'JCRM',
          title: 'JCRM',
          href: '#',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2018 蚂蚁金服pro改编
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
