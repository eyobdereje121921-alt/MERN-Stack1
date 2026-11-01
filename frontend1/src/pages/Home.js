import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <div>
      <div  id='demo2' >
      <p id='demo'>
        <h1 id='demo1' className='p'>this is home page</h1>
      <p className='p'>Join Top Training Institute to boost your career with practical,<br/> 
        expert-led training in languages, computers,
         software development,<br/> creative media, 
       business, and engineering software</p>
       <div className='buttons'><button  >Explore courses</button>
       <button >contact</button></div>
      </p>
      <div>
        <h1>Explore Our Courses</h1>
        <p>From language fluency and software engineering to creative media and engineering CAD,<br/> discover practical training tailored to your ambitions.</p>
        <table className='y'>
          <tbody>
          <tr className='t'>
            <td className='t'><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/logo192.png" style={{ width: '100px',
  height: '70px' }}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></td>
            <td className='t'><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/arse.png" style={{ width: '100px',
  height: '70px' }}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></td>
            <td className='t'><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/image.jpg" style={{ width: '100px',
  height: '70px' }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
