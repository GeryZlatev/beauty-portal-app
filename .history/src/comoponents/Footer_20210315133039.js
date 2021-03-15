import React, { Fragment, Component } from 'react';
import style from './Foter.module';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <footer>
                    <div className={style.contacts}>
                        <ul className={style.contactsList}>
                            <li></li>
                        </ul>
                        
                    </div>
                </footer>

            </Fragment>
        )
    }
}

export default Footer;