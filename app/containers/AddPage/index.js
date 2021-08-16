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
import { useInjectSaga } from 'utils/injectSaga';
import { changeString, submitString } from './actions';
import { makeSelectString, makeSubmitString, makeError } from './selectors';

import Section from './Section';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Button from './Button';
import Input from './Input';
import reducer from './reducer';
import saga from './saga';

const key = 'AddPage';

export function AddPage({
  string,
  submit,
  error,
  onChangeString,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Section>
      <CenteredSection>
        <Form onSubmit={onSubmitForm}>
          <h2>New String Form</h2>
          {error ? <h4>Something went wrong, please try again later</h4> : null}
          {error === false && submit ? <h3>Added!</h3> : null}
          <label>
            New String:
            <Input
              name="string"
              type="text"
              id="string"
              onChange={onChangeString}
              value={string}
            />
          </label>
          <Button disabled={string === ''} color="teal" type="submit">
            Add
          </Button>
          <a href="/">
            <Button color="black" type="button">
              Back
            </Button>
          </a>
        </Form>
      </CenteredSection>
    </Section>
  );
}

AddPage.propTypes = {
  onSubmitForm: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  string: PropTypes.string,
  submit: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChangeString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
  submit: makeSubmitString(),
  error: makeError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitString(evt.target.string.value));
      dispatch(changeString(''));
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
