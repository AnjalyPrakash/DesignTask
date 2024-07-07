import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Component() {
    return (
        <>
            <div className='d-flex justify-content-end'>
                <i class="fa-solid fa-xmark fa-3x m-2"></i>
            </div>
            <div className='container mt-4 d-flex justify-content-center align-items-center flex-column text-center'>
                <h3 className='mb-5'>Epic Games : An American Video Game and Software Developer <br /> And Publisher Based in Cary, North Carolina</h3>
                <img src="https://wallpapers.com/images/featured/fortnite-pictures-b5kfcchwazwiz3cs.jpg" alt="no image" style={{ height: '400px', width: '100%' }} />
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione, sed nihil assumenda accusamus ducimus suscipit aliquid dolor perferendis! Fugiat earum enim nulla deserunt labore aliquid amet tempore consequatur cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam reprehenderit dolores blanditiis voluptas, consequatur repellendus placeat qui fuga quasi enim est iste soluta ducimus aperiam? Odit maiores asperiores nemo eius!</p>
                <button className='custom-btn btn btn-light w-50 mb-5'>Visit Website</button>

                <Row className='mt-5 mb-5'>
                    <Col md={4}>
                        <img src="https://cdn2.unrealengine.com/fortnite-battle-royale-wrecked-thumbnail-576x576-8b8f1fc99087.jpg" alt="no image" style={{ height: '300px', width: '100%' }} />
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ullam tenetur amet veniam placeat dolorem sed!</p>
                    </Col>
                    <Col md={4}>
                        <img src="https://image.api.playstation.com/vulcan/ap/rnd/202311/2801/803e41fee0edf8f8ed1de518e6eac60ddf30ac485b9a16a2.png" alt="no image" style={{ height: '300px', width: '100%' }} />
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ullam tenetur amet veniam placeat dolorem sed! </p>
                    </Col>
                    <Col md={4}>
                        <img src="https://img.redbull.com/images/c_crop,x_301,y_0,h_798,w_638/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/01/23/123820ee-354e-4af9-bd03-b29047d40292/fortnite-battle-royale-characters" alt="no image" style={{ height: '300px', width: '100%' }} />
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ullam tenetur amet veniam placeat dolorem sed!</p>
                    </Col>
                </Row>

                <h3>Our Contribution</h3>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nesciunt magni veniam natus, maxime eum optio nihil debitis dolores assumenda, veritatis repellendus exercitationem laborum voluptatem! Eligendi eum molestiae illum quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, velit enim provident nam aliquid porro repellendus quia. Magni dolor, omnis neque accusamus mollitia enim ab, molestiae tenetur dolorem, et consequuntur?</p>
                <Row className='mt-5 mb-5'>
                    <Col md={4}>
                        <h4>5M</h4>
                        <p>Daily User Engagements</p>
                    </Col>
                    <Col md={4}>
                        <h4>$500K</h4>
                        <p>Revenue Surgue for an Platform</p>
                    </Col>
                    <Col md={4}>
                        <h4>10X</h4>
                        <p>Roax on all our marketing campaigns</p>
                    </Col>
                </Row>

                <h3 className='mt-5 mb-5'>Interested in Delving Deeper into the Project?</h3>
                <p className='mt-2 mb-5'>If you'd like to explore further details about our initiatives or any of our <br /> affiliated brands,don't hesitate to connect.You can reach out to us via <br /> email at <a href='mailto:hello@abc.com' className='text-decoration-none text-light fw-bold'>hello@abc.com</a> or give us a call at <a href='tel:91 480 20802730' className='text-decoration-none text-light fw-bold'>+91 480 20802730</a></p>
                <div className='d-flex mb-5'>
                    <button className='custom-btn1 btn w-50'>Ring us on Skype</button>
                    <button className='custom-btn ms-2 btn btn-light w-50'>Contact Us</button>
                </div>
            </div>

            <p className='text-center mt-5'>&copy; 2019-2020 abcTechnology Solutions Pvt.Ltd.All Rights Reserved</p>
        </>
    )
}

export default Component