import {Card, Row } from 'react-bootstrap'
import ProfileSideBar from './ProfileSideBar'
import * as ROUTES from '../../constants/routes'


function Profile() {
    return (
        <div >
            <br />
            <br />
            <Row>
                <div className='col-md-3'>
                    <ProfileSideBar />
                </div>
                <div className='col-md-3'>
                    <div className='adminCard'>
                        <Card.Body>
                            <Card.Title>Create/View Tasks</Card.Title>
                            <Card.Text>
                                Wanting to view or create a simple To-Do list? 
                                <hr/>
                                <a href={ROUTES.TASKS} className='btn btn-outline-primary'>Click Here</a>
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default Profile