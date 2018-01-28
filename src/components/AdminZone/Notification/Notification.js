import React from 'react';
import { Card, CardTitle, CardHeader, CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';

const styles = {
    card: { borderLeft: 'solid 4px #ff9800', width: '200px', marginLeft: '30px' },
    icon: { float: 'right', width: 64, height: 64, padding: 16, color: '#ff9800' },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [];
    }
  }

  componentDidMount = async () => {
    let response = await axios.get(`${dataSources.models}`);
    this.setState({
      models: response.data
    });
  };

  render() {
    const { models } = this.state;
    let modelsToOrder = models.filter(model => {
      return model.amount === 0
    });
    console.log(modelsToOrder);
    if (modelsToOrder.length) {
      return(
        <Card style={styles.card}>
          <ShoppingCartIcon style={styles.icon} />
          <CardHeader title="Some models are out of stock" />
          <List>
            modelsToOrder.map(model => {
              return <ListItem>{model.title}</ListItem>
            })
          </List>
          <CardActions>
            <FlatButton label="Create order" />
          </CardActions>
        </Card>
      )}
  }
}

export default Notification;
