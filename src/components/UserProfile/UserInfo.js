import React from 'react';

const UserInfo = (props) => {
    if (!props.username) {
        return (
            <div>
                <h3>Enter a Github username that you want to search for!</h3>
            </div>
        )
    }
    if (props.isError) {
        return (<div>
            <h3>{`Provided username ${props.username} is wrong. Enter a correct username.`}</h3>
        </div>)
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header pv2 ph3">
                                <h5 className="f6 ttu tracked">{props.searchInfo.name}</h5>
                            </div>
                            <div className="card-body" className="row">
                                <div className="col">
                                    <img src={props.searchInfo.avatar_url} className='img-thumbnail' width='250px' height='250px' />
                                    <br />
                                    <br />
                                    <a className="btn btn-primary" target="_blank" href={props.searchInfo.html_url} role="button">View Profile</a>
                                    <br />
                                    <a className="badge badge-primary">{props.searchInfo.followers} followers</a>
                                    <a className="badge badge-secondary">{props.searchInfo.following} following</a>
                                    <a className="badge badge-success">{props.searchInfo.public_repos} Public Repos</a>
                                    <a className="badge badge-info">{props.searchInfo.public_gists} Public Gists</a>
                                </div>
                                <div className="col">
                                    <ul className="list-group">
                                        <li className="list-group-item"><h5>Location:</h5> {props.searchInfo.location}</li>
                                        <li className="list-group-item"><h5>Email:</h5> {props.searchInfo.email}</li>
                                        <li className="list-group-item"><h5>Blog:</h5>
                                            {props.searchInfo.blog}</li>
                                        <li className="list-group-item"><h5>Member Since:</h5>
                                            {props.searchInfo.created_at}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header pv2 ph3">
                                <h5 className="f6 ttu tracked">Repos</h5>
                            </div>
                            <ul className = "list-group">
                            {props.searchRepo.map((repo, i) => {
                        return (
                            <li key={i}>
                            <li className="list-group-item d-flex justify-content-between align-items-center"> 
                            <h5>{repo.name}:</h5><hr/>
                            {repo.description}
                            <span className="badge badge-primary">{ repo.forks_count } Forks</span>
                              <span className="badge badge-success">{repo.watchers_count } Watchers</span>
                            </li>
                            </li>

                        );
                    })}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
export default UserInfo;