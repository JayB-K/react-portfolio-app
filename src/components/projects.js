import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "../css/projects.css";

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    } 

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return ( 
                <div className="projects-grid">
                    {/* Project #1 */}
                    <Card className="projects-card" shadow={5}>
                        <CardTitle className="projects-card-title-react">Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions className="projects-card-actions" border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu className="projects-card-menu">
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> 

                    {/* Project #2 */}
                    <Card className="projects-card" shadow={5}>
                        <CardTitle className="projects-card-title-react">Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions className="projects-card-actions" border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu className="projects-card-menu">
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> 

                    {/* Project #3 */}
                    <Card className="projects-card" shadow={5}>
                        <CardTitle className="projects-card-title-react">Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions className="projects-card-actions" border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu className="projects-card-menu">
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> 
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project #1 */}
                    <Card className="projects-card" shadow={5}>
                        <CardTitle className="projects-card-title-angular">Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions className="projects-card-actions" border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu className="projects-card-menu">
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> 

                    {/* Project #2 */}
                    <Card className="projects-card" shadow={5}>
                        <CardTitle className="projects-card-title-angular">Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions className="projects-card-actions" border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu className="projects-card-menu">
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> 

                    {/* Project #3 */}
                    <Card className="projects-card" shadow={5}>
                        <CardTitle className="projects-card-title-angular">Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions className="projects-card-actions" border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu className="projects-card-menu">
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> 
                </div>
            )
        } else {
            return (
                <div className="projects-grid">
                    {/* Project #1 */}
                    <Card className="projects-card" shadow={5}>
                        <CardTitle className="projects-card-title-golang">Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions className="projects-card-actions" border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu className="projects-card-menu">
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> 

                    {/* Project #2 */}
                    <Card className="projects-card" shadow={5}>
                        < CardTitle className="projects-card-title-golang" > Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions className="projects-card-actions" border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu className="projects-card-menu">
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> 

                    {/* Project #3 */}
                    <Card className="projects-card" shadow={5}>
                        <CardTitle className="projects-card-title-golang"> Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions className="projects-card-actions" border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu className="projects-card-menu">
                            <IconButton name="share" />
                        </CardMenu>
                    </Card> 
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Golang</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default Projects;
