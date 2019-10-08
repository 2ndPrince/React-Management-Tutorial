import React from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    martinTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Hong Gil Dong',
  'birthday': '880405',
  'gender': 'male',
  'job': 'college student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Sejong Daewang',
  'birthday': '890405',
  'gender': 'male',
  'job': 'King'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Sunsin Lee',
  'birthday': '900405',
  'gender': 'female',
  'job': 'General'
}]

class App extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>IMAGE</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>BIRTHDAY</TableCell>
              <TableCell>GENDER</TableCell>
              <TableCell>JOB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customers.map(c=> { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> )}) }
          </TableBody>
        </Table>
      </Paper> 
    );
  } 
}

export default withStyles(styles)(App);
