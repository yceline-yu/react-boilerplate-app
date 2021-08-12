/*
 * AddPage
 *
 * This is the page to add a new string
 *
 */

import React, { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
import { changeString } from './action';
import { makeSelectString } from './selectors';
// import { loadStrings } from '../HomePage/actions';
import Section from '../HomePage/Section';
import CenteredSection from '../HomePage/CenteredSection';
import reducer from './reducer';
// import saga from './saga';

const key = 'AddPage';

export function AddPage({ string, onChangeString, onSubmitForm }) {
  console.log('AddPage');
  useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });

  return (
    <Section>
      <CenteredSection>
        <form onSubmit={onSubmitForm}>
          <label>
            String:
            <input
              name="string"
              type="text"
              id="string"
              onChange={onChangeString}
              value={string}
            />
          </label>
          <button type="submit">Add</button>
        </form>
        <a href="/">
          <button type="button">Back</button>
        </a>
      </CenteredSection>
    </Section>
  );
}

AddPage.propTypes = {
  onSubmitForm: PropTypes.func,
  string: PropTypes.string,
  onChangeString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(loadStrings());
      evt.preventDefault();
      console.log('submitted');
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
)(AddPage);
