import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/7653310/pexels-photo-7653310.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      CAREWELL – Your Trusted Partner in Health & Healing
                      </h2>
                      <p className="mt-6 text-gray-600">
                      At CAREWELL, we are dedicated to providing unparalleled healthcare services with compassion, integrity, and excellence. Our team of skilled medical professionals combines cutting-edge technology with personalized care to ensure every patient receives the best treatment possible.
                      </p>
                      <p className="mt-4 text-gray-600">
                      From advanced diagnostics to comprehensive treatment plans, we are committed to delivering exceptional care with a patient-centered approach. Our state-of-the-art facilities and compassionate staff work tirelessly to promote well-being, recovery, and hope.

At CAREWELL, your health is our priority, and your trust is our greatest achievement.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
