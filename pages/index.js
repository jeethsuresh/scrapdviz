import { connect } from 'react-redux';
import { Layout } from 'antd';
import styled from '@emotion/styled';
import ScrapdGrid from '../components/scrapd-grid';
import ScrapdGenderGraph from '../components/scrapd-gender-graph';
import ScrapdFatalityCounter from '../components/scrapd-fatality-counter';
import ScrapdEthnicityGraph from '../components/scrapd-ethnicity-graph';
import ScrapdAgeGraph from '../components/scrapd-age-graph';

const { Content, Footer, Header } = Layout;

const GraphArea = styled.div({
  display: 'inline-flex',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'space-around'
});

const Index = () => (
  <div>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <img className="logo" src="/static/images/logos/scrapd-logo-128x152.png" alt="RYR logo" />
        ScrAPDviz
      </Header>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
            <h1>Explore the data</h1>
            <ScrapdGrid />
            <GraphArea>
              <ScrapdEthnicityGraph />
              <ScrapdGenderGraph />
              <ScrapdAgeGraph />
              <ScrapdFatalityCounter />
            </GraphArea>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>ScrAPDviz powered by Ant Design</Footer>
    </Layout>
    <style jsx>
      {`
        h1 {
          color: #3d74fc;
          display: inline-block;
          margin-left: 10px;
        }

        .logo {
          display: inline-block;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px;
        }

        .navbar > * {
          vertical-align: middle;
        }
      `}
    </style>
  </div>
);

export default connect()(Index);