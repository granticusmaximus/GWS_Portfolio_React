import { Card, Row } from 'react-bootstrap'
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
                            <Card.Title>View Tasks</Card.Title>
                            <Card.Text>
                                Click below to view tasks
                                <hr />
                                <a className='btn btn-outline-success' href={ROUTES.TASK_LIST}>Click Here</a>
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default Profile