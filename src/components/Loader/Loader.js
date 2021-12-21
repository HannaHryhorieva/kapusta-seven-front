import { useState } from 'react';
import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';
import BaseView from '../../views/BaseView';

const override = css`
  display: block;
  margin: 0 auto;
  width: auto;
`;

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#FF751D');

  return (
    <BaseView>
      <div className="sweet-loading">
        <BarLoader color={color} loading={loading} css={override} size={7000} />
      </div>
    </BaseView>
  );
}

export default Loader;
