import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db, auth } from "../../../services/fb_commands";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Row, Col, Container, Card } from "reactstrap";
import { useAuthState } from "react-firebase-hooks/auth";

const Bloglist = () => {
	const [user, loading] = useAuthState(auth);
	const [posts, setPosts] = useState([]);

	const fetchPost = async () => {
		const querySnapshot = await getDocs(collection(db, 'blogs'));
		const newData = querySnapshot.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));
		setPosts(newData);
	};

	const DeleteBlog = async (id) => {
		const reference = doc(db, 'blogs', id);
		await deleteDoc(reference);
		setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
	};

	useEffect(() => {
		fetchPost();
	}, []);

	if (loading) {
		return <div>Loading...</div>; // Or use a spinner or any loading UI
	}

	return (
		<>
			<Container>
				<div>
					<Row>
						<Col>
							<h1
								className='text-5xl flex justify-center cursive'
								style={{
									color: '#bd5500',
									fontFamily: 'Brush Script MT',
								}}
							>
								GWS Articles
							</h1>
							<h3
								className='text-lg text-gray-600 flex justify-center mb-12'
								style={{
									fontFamily: 'Brush Script MT',
								}}
							>
								Welcome to my articles!
							</h3>
							<div className='dashboard__container'>
								<Row>
									{posts.map((blog) => (
										<div
											className='col-md-4'
											key={blog.id}
										>
											<div>
												<div className='blogCard'>
													<div className='blogCard-header'>
														<p>{blog.title}</p>
													</div>
													&nbsp;&nbsp;&nbsp;
													<center>
														{user ? (
															<>
																<Link
																	to={'/article/' + blog.id}
																	className='btn btn-primary'
																>
																	View
																</Link>
																&nbsp;
																<Link
																	to={'/edit-artice/' + blog.id}
																	className='btn btn-warning'
																>
																	Edit
																</Link>
																&nbsp;
																<button
																	className='btn btn-danger'
																	onClick={() => {
																		DeleteBlog(blog.id);
																	}}
																>
																	Delete
																</button>
															</>
														) : (
															<Link
																to={'/article/' + blog.id}
																className='btn btn-primary'
															>
																View
															</Link>
														)}
													</center>
													<br />
												</div>
											</div>
										</div>
									))}
								</Row>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default Bloglist;
