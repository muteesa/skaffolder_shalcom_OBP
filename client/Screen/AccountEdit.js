import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Header,
  Title,
  Container,
  Content,
  Body,
  Button,
  Text,
  Icon,
  Right,
  Left,
  Form,
  ListItem,
  Item,
  Label,
  Input,
  Picker,
  DatePicker,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import AccountActions from "../redux/actions/AccountActions";
import Customer_accountActions from "../redux/actions/Customer_accountActions";
import TxActions from "../redux/actions/TxActions";

// END IMPORT ACTIONS

/** APIs

* actionsAccount.create
*	@description CRUD ACTION create
*	@param Account obj - Object to insert
*
* actionsCustomer_account.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id customer_account
*	@returns customer_account
*
* actionsAccount.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Account
*
* actionsCustomer_account.list
*	@description CRUD ACTION list
*	@returns ARRAY OF customer_account
*
* actionsAccount.create
*	@description CRUD ACTION create
*	@param Account obj - Object to insert
*
* actionsAccount.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id Account
*	@returns Account
*
* actionsAccount.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id Account
*	@returns Account
*
* actionsTx.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Tx
*

**/


class AccountEdit extends Component {
  
  // Init account
  constructor(props) {
    super(props);
    this.state = {
      account: {},
      authorized: false
    };
  }

  // Load data on start
  componentWillMount() {

    this.props.navigation.addListener("willFocus", async () => { 
      // Check security
      if (await SecurityService.isAuth([  ])) {
        this.setState({ authorized: true });
      } else {
        this.props.navigation.navigate("Login", {
          showError: "Not authorized"
        });
        return;
      }


      // Load data
      const itemId = this.props.navigation.getParam("id", "new");
      if (itemId !== "new") {
        this.props.actionsAccount.loadAccount(itemId);
      } else {
        this.setState({
          account: {}
        });
      }
      
      this.props.actionsCustomer_account.loadCustomer_accountList();
      this.props.actionsTx.loadTxList();
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      account: {}
    });
    this.props.actionsAccount.reset();
  }

  // Insert props account in state
  componentWillReceiveProps(props) {
    this.setState({
      account: props.account
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.account._id) {
      // Edit
      this.props.actionsAccount.saveAccount(this.state.account).then(data => {
        this.props.navigation.navigate("AccountList");
      });
    } else {
      // Create
      this.props.actionsAccount.createAccount(this.state.account).then(data => {
        this.props.navigation.navigate("AccountList");
      });
    }
  }

  // Show content
  render() { 

    // Check security
    if (!this.state.authorized) {
      return null;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail Account</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.save()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            
            <Item floatingLabel>
              <Label>
                Balance
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.account, { balance: value }))
                }
                value={this.state.account.balance && this.state.account.balance.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Begin_balance
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.account, { begin_balance: value }))
                }
                value={this.state.account.begin_balance && this.state.account.begin_balance.toString()}
              />
            </Item>
          
            <Item stackedLabel>
              <Label>
                Begin_balance_time_stamp
              </Label>
              <DatePicker
                placeHolderText="Select a date"
                defaultDate={this.state.account.begin_balance_time_stamp }
                onDateChange={value => 
                  this.setState(Object.assign(this.state.account, { begin_balance_time_stamp: value }))
                }
              />
            </Item>
            
            
            <Item floatingLabel>
              <Label>
                Credit_balance
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.account, { credit_balance: value }))
                }
                value={this.state.account.credit_balance && this.state.account.credit_balance.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Description
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.account, { description: value }))
                }
                value={this.state.account.description && this.state.account.description.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Type
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.account, { type: value }))
                }
                value={this.state.account.type && this.state.account.type.toString()}
              />
            </Item>
          

          {/* RELATIONS */}
          
          {/* Relation 1:m account_user with customer_account */}
          
          <Item stackedLabel>
            <Label >
              Account_user
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.account.account_user }
              value={this.state.account.account_user }
              onValueChange={value =>
                this.setState(Object.assign(this.state.account, { account_user: value }))
              }
            >
              {this.props.listCustomer_account &&
                this.props.listCustomer_account.map(row => (
                  <Picker.Item label={row._id} value={row._id} key={row._id}>
                    {row._id}
                  </Picker.Item>
                ))}
            </Picker>
          </Item>
          
          
          {/* Relation 1:m transactions with Tx */}
          
          <Item stackedLabel>
            <Label >
              Transactions
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.account.transactions }
              value={this.state.account.transactions }
              onValueChange={value =>
                this.setState(Object.assign(this.state.account, { transactions: value }))
              }
            >
              {this.props.listTx &&
                this.props.listTx.map(row => (
                  <Picker.Item label={row._id} value={row._id} key={row._id}>
                    {row._id}
                  </Picker.Item>
                ))}
            </Picker>
          </Item>
          
          

          </Form>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsAccount: bindActionCreators(AccountActions, dispatch),
    actionsCustomer_account: bindActionCreators(Customer_accountActions, dispatch),
    actionsTx: bindActionCreators(TxActions, dispatch),
  };
};

// Validate types
AccountEdit.propTypes = { 
  actionsAccount: PropTypes.object.isRequired,
  actionsCustomer_account: PropTypes.object.isRequired,
  actionsTx: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    account: state.AccountEditReducer.account,
    listCustomer_account: state.AccountEditReducer.listCustomer_account,
    listTx: state.AccountEditReducer.listTx
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});
