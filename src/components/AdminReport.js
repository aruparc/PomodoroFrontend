// import React, { Component } from 'react';
// import '../styles/adminReport.scss';

// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// // import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Input from '@material-ui/core/Input';
// import FormGroup from '@material-ui/core/FormGroup';

// import axios from 'axios';
// class AdminReport extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userData: [],
//             projectData: [],
//             selectedProject: "",
//             selectedUser: ""

//         };
//     }
//     isMobileDevice() {
//         return (navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone"));
//     }
//     componentDidMount() {
//         axios.get(process.env.REACT_APP_API_URL + `/users`)
//             .then(res => {
//                 this.setState({ userData: res.data });
//             })
//             .catch(e => console.log(e));
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.selectedUser !== this.state.selectedUser) {
//             const userID = this.state.selectedUser.split("-")[0];
//             axios.get(process.env.REACT_APP_API_URL + `/users/${userID}/projects`)
//                 .then(res => {
//                     this.setState({ projectData: res.data });
//                 })
//                 .catch(e => console.log(e));
//         }
//     }
//     onUserSelection = (event) => {
//         console.log(event.target.value);
//         this.setState({ selectedUser: event.target.value });
//     };
//     onProjectSelection = (event) => {
//         console.log(event.target.value);
//         this.setState({ selectedProject: event.target.value });
//     };
//     onSubmit = () => {
//         const userID = this.state.selectedUser.split("-")[0];
//         const projID = this.state.selectedProject.split("-")[0];
//         console.log(userID, projID);
//         // axios.get(process.env.REACT_APP_API_URL + `/users/${userID}/projects/${projID}`)
//         //     .then(res => {
//         //         this.setState({ reportData: res.data });
//         //     })
//         //     .catch(e => console.log(e));
//     };
//     render() {
//         return (
//             <div className="report" style={{ marginTop: "5%" }}>
//                 <Typography variant={this.isMobileDevice() ? "h6" : "h5"} style={{ textAlign: "center", marginBottom: "5%" }}>Admin Report Console</Typography>
//                 <FormGroup style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
//                     <h4>Report Form</h4>
//                     {/* <TextField error={this.state.fnError} required name="firstName" value={this.state.firstName} onChange={this.handleChange} variant="outlined" autoFocus margin="dense" label="FirstName" style={{ width: '80%' }} />
//                     <TextField error={this.state.lnError} required name="lastName" value={this.state.lastName} onChange={this.handleChange} variant="outlined" autoFocus margin="dense" label="LastName" style={{ width: '80%' }} /> */}
//                     <FormControl variant="outlined" style={this.isMobileDevice() ? { width: "80%" } : { width: "30%" }}>
//                         <InputLabel id="demo-simple-select-outlined-label">User</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-outlined-label"
//                             id="demo-simple-select-outlined"
//                             value={this.state.selectedUser}
//                             onChange={this.onUserSelection}
//                             label="Project"
//                             input={<Input />}
//                         >
//                             <MenuItem value="None">None</MenuItem>
//                             {
//                                 this.state.userData.map(user => {
//                                     return (
//                                         <MenuItem key={user.id} value={user.id + "-" + user.firstName + " " + user.lastName}>{user.id + "-" + user.firstName + " " + user.lastName}</MenuItem>
//                                     );
//                                 })
//                             }
//                         </Select>
//                     </FormControl>
//                     <FormControl variant="outlined" style={this.isMobileDevice() ? { width: "80%" } : { width: "30%" }}>
//                         <InputLabel id="demo-simple-select-outlined-label">Project</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-outlined-label"
//                             id="demo-simple-select-outlined"
//                             value={this.state.selectedProject}
//                             onChange={this.onProjectSelection}
//                             label="Project"
//                             input={<Input />}
//                         >
//                             <MenuItem value="None">None</MenuItem>
//                             {
//                                 this.state.projectData.map(project => {
//                                     return (
//                                         <MenuItem key={project.id} value={project.id + "-" + project.projectname}>{project.id + "-" + project.projectname}</MenuItem>
//                                     );
//                                 })
//                             }
//                         </Select>
//                     </FormControl>
//                     <div style={{ margin: "5%", }}>
//                         <Button onClick={this.onSubmit} variant="contained" color="secondary">Get Report</Button>
//                     </div>
//                 </FormGroup>

//             </div>
//         );
//     }
// }

// export default AdminReport;

import React, { Component } from 'react';
import '../styles/adminReport.scss';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import axios from 'axios';
class AdminReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            projectData: [],
            selectedProject: "",
            selectedUser: "",
            reportData: {"sessions":[]}
        };
    }
    isMobileDevice() {
        return (navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone"));
    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + `/users`)
            .then(res => {
                this.setState({ userData: res.data });
            })
            .catch(e => console.log(e));
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedUser !== this.state.selectedUser) {
            const userID = this.state.selectedUser.split("-")[0];
            axios.get(process.env.REACT_APP_API_URL + `/users/${userID}/projects`)
                .then(res => {
                    this.setState({ projectData: res.data });
                })
                .catch(e => console.log(e));
        }
    }
    onUserSelection = (event) => {
        console.log(event.target.value);
        this.setState({ selectedUser: event.target.value });
    };
    onProjectSelection = (event) => {
        console.log(event.target.value);
        this.setState({ selectedProject: event.target.value });
    };
    onSubmit = () => {
        const userID = this.state.selectedUser.split("-")[0];
        const projID = this.state.selectedProject.split("-")[0];
        console.log(userID, projID);
        // axios.get(process.env.REACT_APP_API_URL + `/users/${userID}/projects/${projID}/report`)
        axios.get(process.env.REACT_APP_API_URL + `/users/${userID}/projects/${projID}/report?from=2020-04-17T20:00Z&to=2020-04-25T20:00Z&includeCompletedPomodoros=True&includeTotalHoursWorkedOnProject=True`)
            .then(res => {
                // console.log(req)
                console.log(res.data)
                this.setState({ reportData: res.data });
            })
            .catch(e => console.log(e));

    };
    render() {
        return (
            <div className="report" style={{ marginTop: "5%" }}>
                <Typography variant={this.isMobileDevice() ? "h6" : "h5"} style={{ textAlign: "center", marginBottom: "5%" }}>Admin Report Console</Typography>
                <FormGroup style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                    <h4>Report Form</h4>
                    {/* <TextField error={this.state.fnError} required name="firstName" value={this.state.firstName} onChange={this.handleChange} variant="outlined" autoFocus margin="dense" label="FirstName" style={{ width: '80%' }} />
                    <TextField error={this.state.lnError} required name="lastName" value={this.state.lastName} onChange={this.handleChange} variant="outlined" autoFocus margin="dense" label="LastName" style={{ width: '80%' }} /> */}
                    <FormControl variant="outlined" style={this.isMobileDevice() ? { width: "80%" } : { width: "30%" }}>
                        <InputLabel id="demo-simple-select-outlined-label">User</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.state.selectedUser}
                            onChange={this.onUserSelection}
                            label="Project"
                            input={<Input />}
                        >
                            <MenuItem value="None">None</MenuItem>
                            {
                                this.state.userData.map(user => {
                                    return (
                                        <MenuItem key={user.id} value={user.id + "-" + user.firstName + " " + user.lastName}>{user.id + "-" + user.firstName + " " + user.lastName}</MenuItem>
                                    );
                                })
                            }
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" style={this.isMobileDevice() ? { width: "80%" } : { width: "30%" }}>
                        <InputLabel id="demo-simple-select-outlined-label">Project</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.state.selectedProject}
                            onChange={this.onProjectSelection}
                            label="Project"
                            input={<Input />}
                        >
                            <MenuItem value="None">None</MenuItem>
                            {
                                this.state.projectData.map(project => {
                                    return (
                                        <MenuItem key={project.id} value={project.id + "-" + project.projectname}>{project.id + "-" + project.projectname}</MenuItem>
                                    );
                                })
                            }
                        </Select>
                    </FormControl>
                    <div style={{ margin: "5%", }}>
                        <Button onClick={this.onSubmit} variant="contained" color="secondary">Get Report</Button>
                    </div>
                    <h3>
                        Generated Report:
                    </h3>
                    <div>
                        {/* <li>
                            List of all sessions: [ {this.state.reportData.sessions} ]
                        </li> */}
                        <li>
                            {/* Number of completed pomodoros: {this.state.reportData.completedPomodoros} */}
                            Number of completed pomodoros: {this.state.reportData.completedPomodoros}

                        </li>
                        <li>
                            Total Hours Worked on Project: {this.state.reportData.totalHoursWorkedOnProject}
                        </li>

                    </div>


                </FormGroup>
                <div style={this.isMobileDevice() ? { textAlign: "center", justifyContent: "center", marginLeft: "10%", marginRight: "10%" } : { textAlign: "center", justifyContent: "center", marginLeft: "10%", marginRight: "10%", marginBottom: "30%" }}>
                    <TableContainer className="tableContainer">
                         <Table aria-label="table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Starting Time</TableCell>
                                        <TableCell align="center">Ending Time</TableCell>
                                        <TableCell align="center">Hours worked</TableCell>
                                        <TableCell align="center"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.reportData.sessions
                                        .map(row => {
                                            return (
                                                <TableRow hover key={row.id}>
                                                    <TableCell component="th" scope="row" align="center">{row.startingTime}</TableCell>
                                                    <TableCell align="center">{row.endingTime}</TableCell>
                                                    <TableCell align="center">{row.hoursWorked}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                            </TableContainer>
                </div>

            </div>
        );
    }
}

export default AdminReport;