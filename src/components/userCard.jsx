import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const UserCard = ({ user }) => {

    let randomColor = () => {
        return "#" + ((1 << 24) * Math.random() | 0).toString(16);
    }

    return (
        // <h1>{user.name.first}</h1>
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="userCard bg-light shadow rounded-3 overflow-hidden p-4 position-relative">
                <div className="cardBG position-absolute" style={{ backgroundColor: randomColor() }}></div>
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="d-block mx-auto my-4 rounded-circle shadow" loading="lazy" />
                <h6 className="nameWrapper d-flex justify-content-between gap-3">
                    <span className="name text-truncate" title={`${user.name.title} ${user.name.first} ${user.name.last}`}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</span>
                    <span className="age">{user.dob.age}</span>
                </h6>
                <div className="email d-flex gap-2 align-items-center">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <a href={`mailto:${user.email}`} className="text-truncate">{user.email}</a>
                </div>
                <div className="cell d-flex gap-2 align-items-center">
                    <span>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>
                    <a href={`tel:${user.cell}`} className="text-truncate">{user.cell}</a>
                </div>
            </div>

        </div>
    );
}

export default UserCard;
