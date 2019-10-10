import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CustomerDelete extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    deleteCustomer(id){
        // /api/customers/7
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }
    
    render(){
        return(
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                    DELETE
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>DELETE CAUTION</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            Selected Customer will be deleted
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>DELETE</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>CANCEL</Button>
                    </DialogActions>
                </Dialog>
            </div>
            /*
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>DELETE</button>
            */
        )
    }
}

export default CustomerDelete;
