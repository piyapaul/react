import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const data=useLoaderData()
    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/alyviabiswas')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    // })
    // },[])

    return (
            <section className="bg-white py-12 px-6 md:px-20" id="services">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
                  Our Services (What We Offer)
                </h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                  Comprehensive Healthcare Services at <span className="font-bold">CAREWELL</span>
                </p>
                <p className="text-gray-600 text-center mb-10">
                  We offer a wide range of medical services designed to ensure the best possible care for every patient. Our services include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-xl text-blue-700">General Medicine & Surgery</h3>
                    <p>Expert diagnosis and treatment with utmost care.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-xl text-blue-700">Pediatrics</h3>
                    <p>Specialized care for infants, children, and adolescents.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-xl text-blue-700">Cardiology</h3>
                    <p>Advanced heart care with cutting-edge technology.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-xl text-blue-700">Orthopedics</h3>
                    <p>Comprehensive bone and joint care for all ages.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-xl text-blue-700">Maternity & Neonatal Care</h3>
                    <p>Safe and comfortable childbirth experiences.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-xl text-blue-700">Emergency & Trauma Care</h3>
                    <p>Round-the-clock services for urgent medical needs.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-xl text-blue-700">Diagnostic Services</h3>
                    <p>Modern labs and imaging for accurate results.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-xl text-blue-700">Physiotherapy & Rehabilitation</h3>
                    <p>Personalized recovery plans to restore health.</p>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-12">
                  At <span className="font-bold">CAREWELL</span>, we are equipped to meet your healthcare needs with dedication and expertise.
                </p>
              </div>
            </section>
          );
        };
        

export default GitHub

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/piyapaul')
    return response.json()
}