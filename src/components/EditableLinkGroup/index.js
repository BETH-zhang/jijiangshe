import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './index.less';

// TODO: 添加逻辑

class EditableLinkGroup extends PureComponent {
  static propTypes = {
    links: PropTypes.array,
    onAdd: PropTypes.func,
    linkElement: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    links: [],
    onAdd: () => {},
    linkElement: 'a',
  };

  render() {
    const { links, linkElement, onAdd } = this.props;
    return (
      <div className={styles.linkGroup}>
        {Object.keys(links).map(key =>
          createElement(
            linkElement,
            {
              key: `tag-item-${key || links[key][0].name}`,
              title: links[key][0].type,
            },
            links[key][0].name
          )
        )}
        {
          <Button size="small" type="primary" ghost onClick={onAdd} icon="plus">
            添加
          </Button>
        }
      </div>
    );
  }
}

export default EditableLinkGroup;
