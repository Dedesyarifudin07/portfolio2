import React from 'react'
import postpic1 from '../img/postpic1.jpg';
import postpic2 from '../img/postpic2.jpg';

const Project = () => {
  return (
    <div className='Project '
    >       
        <h1 className='text-center mb-5 mt-5 '> my rpoject</h1>
        <div className='container '>
                <div className='row d-flex '>
                    <div className='col-md-4 '>
                        <div class="card  " >
                            <img src={postpic1}class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card  " >
                            <img src={postpic1}class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        
                 
                    </div>

                    <div className='col-md-4'>
                        <div class="card  " >
                            <img src={postpic1}class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        
                 
                    </div>

                    <div className='col-md-4'>
                        <div class="card  " >
                            <img src={postpic1}class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                        <div class="card  " >
                            <img src={postpic1}class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        
                 
                    </div>
                 
                    </div>

                    
                </div>  

               
                   
               
        </div>
        
        
    </div>
  )
}

export default Project;
