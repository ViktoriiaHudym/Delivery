import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import JumbotronButtonsBlock from './../../components/index/JumbotronButtonBlock';

class Jumbotron extends Component {
    static mapStateToProps(store) {
        return { user: store.user };
    }

    render() {
        const { user } = this.props;
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-4 my-auto text-center d-none d-xl-block d-lg-block">
                        <img className="img-fluid w-100 logo-img" src="/images/logo.png" alt="Rapid Delivery logo" width="192"/>
                    </div>
                    <div className="col">
                        <h1 className="display-4">Delivery</h1>
                        <h3>Логістична компанія</h3>
                        <p className="lead">
                            На сайті ви маєте змогу дізнаватися дату доставки, реєструвати нові накладні, розраховувати вартість вашої доставки та <i>інше.</i>
                        </p>
                        <hr className="my-4"/>
                        <JumbotronButtonsBlock user={user} />                    
                    </div>
                </div>
            </div>
        );
    }
}

Jumbotron.propTypes = {
    user: PropTypes.object.isRequired,
};

export default withRouter(connect(Jumbotron.mapStateToProps)(Jumbotron));