//getDerivedStateFromProps, componentDidMount, componentDidUpdate example

//Original
import React, { Component } from 'react';
import _get from '../../../util/_get';
import { getUserInfo } from '../../../services/apiService';
import { Avatar } from '@phoenix/avatar';
import { Cell, Layout, Row } from '@phoenix/layout';
import { A, Text } from '@phoenix/type';
import { MiddleEllipse } from '@phoenix/utilitycomponents';

export class UserInfo extends Component {
  state = {
    name: '',
    primaryRoleName: '',
  };

  getUserInfoCell = ID => {
    return (
      <Cell
        css={`
          margin-left: 14px !important;
        `}
        span={11}
        position={'middle'}
      >
        {!this.state.primaryRoleName ? (
          <A href={`/user/view?ID=${ID}`}>{this.state.name}</A>
        ) : (
          <React.Fragment>
            <Row>
              <Cell span={12} position={'middle'}>
                <A href={`/user/view?ID=${ID}`}>{this.state.name}</A>
              </Cell>
            </Row>
            <Row>
              <Cell span={12} position={'middle'}>
                <Text.Small>
                  <MiddleEllipse text={this.state.primaryRoleName} />
                </Text.Small>
              </Cell>
            </Row>
          </React.Fragment>
        )}
      </Cell>
    );
  };

  render() {
    return (
      <Layout fullBleed={true}>
        <Row>
          <Cell position={'middle'} span={1}>
            <Avatar
              small
              avatarURL={`/internal/user/avatar?ID=${this.state.ID}`}
              label={this.state.name}
            />
          </Cell>
          {this.getUserInfoCell(this.state.ID)}
        </Row>
      </Layout>
    );
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.ID !== this.state.ID) {
      await this.updateUserInfo(this.state.ID);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.ID !== this.state.ID) {
      await this.updateUserInfo(this.state.ID);
    }
  }

  async componentDidMount() {
    if (this.props.ID) {
      await this.updateUserInfo(this.props.ID);
    }
  }

  async updateUserInfo(ID) {
    const user = await getUserInfo(ID);

    if (user) {
      this.setState({
        ID: user.ID,
        name: user.name,
        primaryRoleName: _get(user, ['role', 'name']), //user?.role.name, the optional chaining plugin isn't working
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.ID !== prevState.ID) {
      return {
        ID: nextProps.ID,
      };
    } else return null;
  }
}

//New
import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../../../services/apiService';
import _get from '../../../util/_get';
import { Avatar } from '@phoenix/avatar';
import { Cell, Layout, Row } from '@phoenix/layout';
import { A, Text } from '@phoenix/type';
import { MiddleEllipse } from '@phoenix/utilitycomponents';

export default function UserInfo(props) {
  const [userInfo, setUserInfo] = useState({
    ID: null,
    name: '',
    primaryRoleName: '',
  });

  async function updateUserInfo(ID) {
    const user = await getUserInfo(ID);

    if (user) {
      setUserInfo({
        ID: user.ID,
        name: user.name,
        primaryRoleName: _get(user, ['role', 'name']),
      });
    }
  }

  //componentDidMount
  useEffect(() => {
    console.log('useEffect', props.ID);
    if (props.ID !== userInfo.ID) {
      console.log('actually update');
      updateUserInfo(props.ID);
    }
  }, [props.ID]); //This makes it a componentDidUpdate too

  console.log('UserInfo hook render', props.ID, userInfo);

  return (
    <Layout fullBleed={true}>
      <Row>
        <Cell position={'middle'} span={1}>
          <Avatar
            small
            avatarURL={`/internal/user/avatar?ID=${props.ID}`}
            label={userInfo.name}
          />
        </Cell>
        <Cell
          css={`
            margin-left: 14px !important;
          `}
          span={11}
          position={'middle'}
        >
          {!userInfo.primaryRoleName ? (
            <A href={`/user/view?ID=${props.ID}`}>{userInfo.name}</A>
          ) : (
            <React.Fragment>
              <Row>
                <Cell span={12} position={'middle'}>
                  <A href={`/user/view?ID=${props.ID}`}>{userInfo.name}</A>
                </Cell>
              </Row>
              <Row>
                <Cell span={12} position={'middle'}>
                  <Text.Small>
                    <MiddleEllipse text={userInfo.primaryRoleName} />
                  </Text.Small>
                </Cell>
              </Row>
            </React.Fragment>
          )}
        </Cell>
      </Row>
    </Layout>
  );
}
