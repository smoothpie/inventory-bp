import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Welcome extends React.Component {

  render(){
    return(
      <div>
        <Card className='desk-card'>
          <CardHeader
            title="Welcome to your desk"
            subtitle="Here's some info for you"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            This is info
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Welcome;
