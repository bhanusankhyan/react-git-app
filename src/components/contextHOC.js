import React, { Component } from 'react';

const WithLocaleHOC = (WrappedComponent) =>{
    return class WithLocalHOC extends Component{
        static contextTypes = {
            locale : PropTypes.object
        }
        render(){
            return <WrappedComponent {...this.props} locale={locale} />
        }
    }
}

export default WithLocaleHOC;