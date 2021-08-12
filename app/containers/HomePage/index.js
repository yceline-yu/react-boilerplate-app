/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import messages from './messages';
import Section from './Section';
import CenteredSection from './CenteredSection';
import StringsList from '../../components/StringsList';
import reducer from '../App/reducer';
import saga from './saga';

import { loadStrings } from '../App/actions';

const key = 'HomePage';

export function HomePage({ loading, error, strings, onSubmitForm }) {
  console.log('homepage, strings', strings);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // load strings
    console.log('useeffect', strings);
    if (strings === false) {
      console.log('useffect if', strings);
      onSubmitForm();
    }
  }, []);

  const stringsListProps = {
    loading,
    error,
    strings,
  };

  return (
    <Section>
      <CenteredSection>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <h2>Strings = {`'${strings}'`}</h2>
        <StringsList {...stringsListProps} />
        <a href="/add">
          <button type="button">Add New String</button>
        </a>
      </CenteredSection>
    </Section>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: () => {
      console.log(loadStrings);
      dispatch(loadStrings());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
