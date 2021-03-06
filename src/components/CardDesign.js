import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './CardDesign.css'

const CardDesign = () => {
  return (
      <div className=''>
          <div className='mb-10'>
            <h1 className='text-4xl font-bold'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
            <span className='font-semibold text-lg text-gray-400'>Multi-Day Course &#9432;</span>
          </div>
          <div className="grid md:grid-cols-2">
              <div className="md:flex md:flex-row-reverse items-center justify-center grid grid-cols-1">
                <div className="w-10 rounded-full grid grid-rows-3 grid-flow-col gap-2 ml-10" style={{marginRight: '-50px'}}>
                      <div className='row-span-3'>
                        <img src="https://placeimg.com/260/406/arch" className="rounded-md shadow-2xl max-w-md" />
                      </div>
                      <div className='col-span-2'>
                        <img src="https://placeimg.com/260/200/arch" className="rounded-md shadow-2xl max-w-md" />
                      </div>
                      <div className='row-span-2 col-span-2'>
                        <img src="https://placeimg.com/260/200/arch" className="rounded-md shadow-2xl max-w-md" />
                      </div>
                </div>
                <div className='' style={{marginTop: '-180px'}}>
                  <p className="">In this 5 day className we will explore artists Monet, Martisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work</p>
                  <div className="avatar my-4">
                    <div class="w-12 rounded-full">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                    <span className='flex justify-center items-center font-bold mx-4' style={{color: '#3838b1e7'}}>Kimberly R Moseler</span>
                  </div> <br />
                  <div className="rating my-4">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                  <span className='ml-3'>467 total reviews for this teacher</span> 
                  <br />
                  <div className="rating mb-4">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  </div> 
                  <span className='ml-3'>5 reviews for this className</span>
                  <br />
                  <span className=''>Completed by 21 learners</span>
                  <div className='flex items-center'>
                    <button className='mt-8'>
                      <span className='text-white font-bold'>See Class Schedule</span>
                      <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="37" cy="37" r="35.5" stroke="white" stroke-width="3"></circle>
                          <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="white"></path>
                      </svg>
                    </button>
                    <div className='flex items-center mt-9'>
                      <p className='px-7 flex font-bold font-2xl' style={{color: '#3838b1e7'}}><AiFillHeart /> <Link to='https://www.kaholas.com/' className='px-2 mt-.5'>Save</Link></p>
                      <p className='flex font-bold font-2xl' style={{color: '#3838b1e7'}}><FaShare /> <Link to='https://www.kaholas.com/' className='px-2 mt-.5'>Share</Link></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default CardDesign;