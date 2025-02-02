import Proptypes from 'prop-types';
import ScrapdGenericBarChart from '../scrapd-generic-bar-chart/component';
import moment from 'moment';

const ScrapdWeekdayGraph = props => {
  let datamap = new Object();
  datamap['Monday'] = 0;
  datamap['Tuesday'] = 0;
  datamap['Wednesday'] = 0;
  datamap['Thursday'] = 0;
  datamap['Friday'] = 0;
  datamap['Saturday'] = 0;
  datamap['Sunday'] = 0;

  for (var i = 0; i < props.fatalities.length; i++) {
    const date = props.fatalities[i]['Date'];
    const dow = moment(date, ['MM/DD/YYYY']).isoWeekday();
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayOfWeek = daysOfWeek[dow - 1];
    datamap[dayOfWeek] = datamap[dayOfWeek] + 1;
  }

  return <ScrapdGenericBarChart groupedItems={datamap} itemCount={props.fatalities.length} attribute="Weekday" />;
};

ScrapdWeekdayGraph.propTypes = {
  fatalities: Proptypes.array,
  attribute: Proptypes.string
};

export default ScrapdWeekdayGraph;
