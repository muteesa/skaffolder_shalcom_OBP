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

// END IMPORT ACTIONS

/** APIs

* actionsUser.create
*	@description CRUD ACTION create
*
* actionsUser.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsUser.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsAccount.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id Account
*	@returns Account
*
* actionsUser.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsUser.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.create
*	@description CRUD ACTION create
*
* actionsCustomer_account.list
*	@description CRUD ACTION list
*	@returns ARRAY OF customer_account
*

**/


class UserEdit extends Component {
  
  // Init user
  constructor(props) {
    super(props);
    this.state = {
      user: {},
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
        this.props.actionsUser.loadUser(itemId);
      } else {
        this.setState({
          user: {}
        });
      }
      
      this.props.actionsCustomer_account.loadCustomer_accountList();
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      user: {}
    });
    this.props.actionsUser.reset();
  }

  // Insert props user in state
  componentWillReceiveProps(props) {
    this.setState({
      user: props.user
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    
    if (!this.state.user.password || this.state.user.password.trim() === "") {
      errors.password = true;
    }
    
    if (!this.state.user.username || this.state.user.username.trim() === "") {
      errors.username = true;
    }
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.user._id) {
      // Edit
      this.props.actionsUser.saveUser(this.state.user).then(data => {
        this.props.navigation.navigate("UserList");
      });
    } else {
      // Create
      this.props.actionsUser.createUser(this.state.user).then(data => {
        this.props.navigation.navigate("UserList");
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
            <Title>Detail User</Title>
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
                Country
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.user, { country: value }))
                }
                value={this.state.user.country && this.state.user.country.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Mail
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.user, { mail: value }))
                }
                value={this.state.user.mail && this.state.user.mail.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Name
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.user, { name: value }))
                }
                value={this.state.user.name && this.state.user.name.toString()}
              />
            </Item>
          
            
            <Item floatingLabel {...(this.state.errors && this.state.errors.password === true ? { style: styles.validatorItem } : {})}>
              <Label
                {...(this.state.errors && this.state.errors.password === true ? { style: styles.validatorLabel } : {})}>
                Password *
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.user, { password: value }))
                }
                value={this.state.user.password && this.state.user.password.toString()}
              />
            </Item>
            {this.state.errors && this.state.errors.password === true && (
              <Text style={styles.validatorMessage}>Value is required</Text>
            )}
          
            
            <Item floatingLabel>
              <Label>
                Roles
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.user, { roles: value }))
                }
                value={this.state.user.roles && this.state.user.roles.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Surname
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.user, { surname: value }))
                }
                value={this.state.user.surname && this.state.user.surname.toString()}
              />
            </Item>
          
            
            <Item floatingLabel {...(this.state.errors && this.state.errors.username === true ? { style: styles.validatorItem } : {})}>
              <Label
                {...(this.state.errors && this.state.errors.username === true ? { style: styles.validatorLabel } : {})}>
                Username *
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.user, { username: value }))
                }
                value={this.state.user.username && this.state.user.username.toString()}
              />
            </Item>
            {this.state.errors && this.state.errors.username === true && (
              <Text style={styles.validatorMessage}>Value is required</Text>
            )}
          

          {/* RELATIONS */}
          
          {/* Relation 1:m user_accounts with customer_account */}
          
          <Item stackedLabel>
            <Label >
              User_accounts
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.user.user_accounts }
              value={this.state.user.user_accounts }
              onValueChange={value =>
                this.setState(Object.assign(this.state.user, { user_accounts: value }))
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
  };
};

// Validate types
UserEdit.propTypes = { 
  actionsAccount: PropTypes.object.isRequired,
  actionsCustomer_account: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.UserEditReducer.user,
    listCustomer_account: state.UserEditReducer.listCustomer_account
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});
