/**
 * Created by Williams.Rizzi on 9/9/19.
 */
import React from 'react';
import {Card, CardText, CardTitle} from 'react-md/lib/Cards/index';
import SelectField from 'react-md/lib/SelectFields';
import PropTypes from 'prop-types';
import FetchState from './../FetchState';
import {fetchStatePropType, jobPropType, selectLabelProptype} from '../../propTypes';

const PostHocExplanation = (props) => {
    const selectChange = (value, _) => {
    props.splitChange(value);
  };

  return <Card className="md-block-centered">
    <CardTitle title="Post Hoc">
      <SelectField
          id="log-name-select"
          placeholder="No log selected"
          className="md-cell"
          menuItems={props.splitLabels}
          position={SelectField.Positions.BELOW}
          onChange={selectChange}
          value={props.selectedSplitId}
      /></CardTitle>
    <CardText>
      <h4>asdf</h4>
      <FetchState fetchState={props.fetchState}/>
    </CardText>
  </Card>;
};


PostHocExplanation.propTypes = {
  jobs: PropTypes.arrayOf(jobPropType).isRequired,
  splitLabels: selectLabelProptype,
  fetchState: fetchStatePropType,
  methodChange: PropTypes.func.isRequired,
  splitChange: PropTypes.func.isRequired,
  prefixLengths: PropTypes.arrayOf(PropTypes.string).isRequired,
  prefixChange: PropTypes.func.isRequired,
  selectedPrefixes: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedSplitId: PropTypes.number.isRequired,
  filterOptionChange: PropTypes.func.isRequired,
  labelChange: PropTypes.func.isRequired,
  filterOptions: PropTypes.shape({
    encodings: PropTypes.arrayOf(PropTypes.string).isRequired,
    clusterings: PropTypes.arrayOf(PropTypes.string).isRequired,
    classification: PropTypes.arrayOf(PropTypes.string).isRequired,
    regression: PropTypes.arrayOf(PropTypes.string).isRequired,
    timeSeriesPrediction: PropTypes.arrayOf(PropTypes.string).isRequired,
    labelling: PropTypes.any.isRequired,
    attributeNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    thresholds: PropTypes.arrayOf(PropTypes.number).isRequired,
    padding: PropTypes.string.isRequired
  }).isRequired,
  predictionMethod: PropTypes.string.isRequired
};
export default PostHocExplanation;