import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogList from './components/BlogList';
import Blog from './components/Blog';
import Paginate from './components/Paginate';



 class Routes extends React.Component {
   
    render() {
        return (
            <div>
                 <Router>
                <Switch>
                <Route exact path="/" component={BlogList} />
                <Route path="/listAPI/:slug" component={Blog} />
                </Switch>
            </Router>
            <Paginate />
           
            </div>
        )
    }
}


export default Routes;