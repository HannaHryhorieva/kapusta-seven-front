import BaseView from '../../views/BaseView';
import Img from '../../images/notFound.png';
import React from 'react';
import s from './NotFound.module.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <BaseView>
        <ul className={s.notfoundContainer}>
          <li>
            <img className={s.notfoundImg} src={Img} alt="Not Found"></img>
          </li>
          <li>
            <h4>Sorry but the page you are looking for does not exist.</h4>
          </li>
          <li>
            <Link to="/">
              <Button color="primary" variant="contained" onClick="">
                Home page
              </Button>
            </Link>
          </li>
        </ul>
      </BaseView>
    </div>
  );
}

export default NotFound;
